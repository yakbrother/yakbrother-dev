#!/usr/bin/env node

/**
 * ONE-TIME migration script to upload existing local microblog posts to Micro.blog
 * 
 * After this initial upload, you'll post directly to Micro.blog (mobile/web)
 * and use sync-from-microblog.js to pull new posts back to your site.
 * 
 * Usage:
 *   1. Get your Micro.blog API token from https://micro.blog/account/apps
 *   2. Set it as an environment variable: export MICROBLOG_TOKEN="your-token-here"
 *   3. Run: node scripts/initial-upload-to-microblog.js
 * 
 * This script uses the Micropub API standard (https://www.w3.org/TR/micropub/)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MICROBLOG_TOKEN = process.env.MICROBLOG_TOKEN;
const MICROBLOG_URL = 'https://micro.blog/micropub';
const DRY_RUN = process.argv.includes('--dry-run');

if (!MICROBLOG_TOKEN && !DRY_RUN) {
  console.error('❌ Error: MICROBLOG_TOKEN environment variable is required');
  console.error('Get your token from: https://micro.blog/account/apps');
  console.error('Then run: export MICROBLOG_TOKEN="your-token-here"');
  console.error('\nOr use --dry-run to test without actually posting');
  process.exit(1);
}

async function readLocalPosts() {
  const microblogDir = path.join(__dirname, '../src/content/microblog');
  const files = fs.readdirSync(microblogDir).filter(f => f.endsWith('.md'));
  
  return files.map(filename => {
    const content = fs.readFileSync(path.join(microblogDir, filename), 'utf-8');
    const { data } = matter(content);
    return { filename, ...data };
  }).sort((a, b) => 
    new Date(a.publicationDate) - new Date(b.publicationDate)
  );
}

async function postToMicroblog(post) {
  // Build the Micropub request for a bookmark
  const micropubData = {
    type: ['h-entry'],
    properties: {
      name: [post.title],
      'bookmark-of': [post.link],
      published: [new Date(post.publicationDate).toISOString()],
    }
  };

  // Add description/content if it exists
  if (post.description) {
    micropubData.properties.content = [post.description];
  }

  // Add category based on type
  if (post.type) {
    micropubData.properties.category = [post.type];
  }

  if (DRY_RUN) {
    console.log('📝 Would post:', JSON.stringify(micropubData, null, 2));
    return { success: true, dryRun: true };
  }

  try {
    const response = await fetch(MICROBLOG_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MICROBLOG_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(micropubData),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    const location = response.headers.get('Location');
    return { success: true, location };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function migrate() {
  console.log('🚀 Starting ONE-TIME upload to Micro.blog...\n');
  console.log('⚠️  This uploads your existing local posts to Micro.blog.');
  console.log('⚠️  After this, post directly to Micro.blog and sync down.\n');
  
  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No posts will be created\n');
  }

  const posts = await readLocalPosts();
  console.log(`📚 Found ${posts.length} local posts to upload\n`);

  const results = {
    success: 0,
    failed: 0,
    errors: [],
  };

  for (const post of posts) {
    const date = new Date(post.publicationDate).toLocaleDateString();
    process.stdout.write(`📤 Uploading: "${post.title}" (${date})... `);

    const result = await postToMicroblog(post);
    
    if (result.success) {
      results.success++;
      if (result.dryRun) {
        console.log('✅ (dry run)');
      } else {
        console.log(`✅ ${result.location}`);
      }
      
      // Rate limiting: wait 2 seconds between posts
      if (!DRY_RUN) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } else {
      results.failed++;
      results.errors.push({ post: post.title, error: result.error });
      console.log(`❌ ${result.error}`);
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 Upload Results:');
  console.log(`   ✅ Success: ${results.success}`);
  console.log(`   ❌ Failed: ${results.failed}`);
  
  if (results.errors.length > 0) {
    console.log('\n❌ Errors:');
    results.errors.forEach(({ post, error }) => {
      console.log(`   - ${post}: ${error}`);
    });
  }
  
  console.log('='.repeat(50));

  if (DRY_RUN) {
    console.log('\n💡 This was a dry run. Remove --dry-run to actually post.');
  } else if (results.success > 0) {
    console.log('\n✅ Upload complete! Next steps:');
    console.log('   1. Verify posts at https://micro.blog');
    console.log('   2. Future posts: Create them in Micro.blog (mobile/web)');
    console.log('   3. Sync back: Run "node scripts/sync-from-microblog.js"');
  }
}

migrate().catch(console.error);
