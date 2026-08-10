#!/usr/bin/env node

/**
 * Sync script to fetch posts from Micro.blog and create local markdown files
 * 
 * This allows you to post from Micro.blog (easy mobile posting) and have
 * those posts automatically sync to your static site.
 * 
 * Usage:
 *   1. Set your Micro.blog username: export MICROBLOG_USERNAME="your-username"
 *   2. Run: node scripts/sync-from-microblog.js
 * 
 * This script fetches from your Micro.blog JSON feed and creates/updates
 * markdown files in src/content/microblog/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MICROBLOG_USERNAME = process.env.MICROBLOG_USERNAME || 'yakbrother';
const MICROBLOG_FEED_URL = `https://${MICROBLOG_USERNAME}.micro.blog/feed.json`;
const MICROBLOG_DIR = path.join(__dirname, '../src/content/microblog');
const DRY_RUN = process.argv.includes('--dry-run');

// Ensure microblog directory exists
if (!fs.existsSync(MICROBLOG_DIR)) {
  fs.mkdirSync(MICROBLOG_DIR, { recursive: true });
}

/**
 * Turn arbitrary feed-supplied text into a filesystem-safe slug.
 *
 * Feed data is untrusted: without this, a URL segment such as
 * `..%2F..%2Fetc%2Fpasswd` would be joined straight onto MICROBLOG_DIR.
 */
function sanitizeSlug(rawSlug) {
  if (typeof rawSlug !== 'string') {
    return `post-${Date.now()}`;
  }

  let value = rawSlug;

  try {
    value = decodeURIComponent(value);
  } catch {
    // Malformed percent-escapes throw URIError; fall through with the raw value.
  }

  const slug = value
    .replace(/[/\\]+/g, '')
    .replace(/\.+/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 200)
    .replace(/^-+|-+$/g, '');

  return slug || `post-${Date.now()}`;
}

/**
 * Fetch posts from Micro.blog JSON feed
 */
async function fetchMicroblogPosts() {
  console.log('📡 Fetching posts from Micro.blog feed...');

  try {
    const response = await fetch(MICROBLOG_FEED_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    if (!Array.isArray(data.items)) {
      throw new Error('Invalid feed format: items array not found');
    }

    console.log(`✅ Found ${data.items.length} posts\n`);
    return data.items;
  } catch (error) {
    console.error(`❌ Error fetching feed: ${error.message}`);
    console.error('Make sure your Micro.blog username is correct and your blog is public.');
    process.exit(1);
  }
}

/**
 * Convert Micro.blog post to frontmatter structure
 */
function postToFrontmatter(item) {
  // Generate slug from URL or title, then sanitize the whole fallback chain
  const urlParts = item.url?.split('/').filter(Boolean);
  const slug = sanitizeSlug(
    urlParts?.[urlParts.length - 1] ||
    item.title ||
    item.id ||
    `post-${Date.now()}`
  );

  // Determine post type based on content
  let type = 'article';
  if (item._microblog?.is_bookmark || item.external_url) {
    type = 'article'; // Default for bookmarks
  }
  
  // Extract just the link if this is a bookmark post
  const link = item.external_url || item.url;
  
  // Spread the string so surrogate pairs survive the truncation
  const snippet = item.content_text ? [...item.content_text].slice(0, 50).join('').trimEnd() : '';

  const frontmatter = {
    title: item.title || (snippet ? `${snippet}…` : 'Untitled'),
    link: link,
    description: item.content_text || item.summary || '',
    type: type,
    publicationDate: new Date(item.date_published).toISOString().split('T')[0],
    public: true,
    microblog_id: item.id, // Track original ID to avoid duplicates
  };
  
  return { slug, frontmatter };
}

/**
 * Create or update a markdown file for a post
 */
function createMarkdownFile(slug, frontmatter) {
  const filename = path.join(MICROBLOG_DIR, `${slug}.md`);

  // Defense in depth: never write outside the microblog directory
  if (!path.resolve(filename).startsWith(path.resolve(MICROBLOG_DIR) + path.sep)) {
    throw new Error(`Refusing to write outside ${MICROBLOG_DIR}: ${filename}`);
  }

  // Check if file already exists
  if (fs.existsSync(filename)) {
    const existing = fs.readFileSync(filename, 'utf-8');
    const { data } = matter(existing);
    
    // If microblog_id matches, skip (already synced)
    if (data.microblog_id === frontmatter.microblog_id) {
      return { created: false, updated: false, filename };
    }
  }
  
  const content = matter.stringify('', frontmatter);
  
  if (DRY_RUN) {
    console.log(`📝 Would create/update: ${filename}`);
    return { created: true, updated: false, filename, dryRun: true };
  }
  
  fs.writeFileSync(filename, content);
  return { created: true, updated: false, filename };
}

/**
 * Main sync function
 */
async function sync() {
  console.log('🚀 Starting Micro.blog sync...\n');
  
  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No files will be created\n');
  }
  
  const posts = await fetchMicroblogPosts();
  
  const results = {
    created: 0,
    skipped: 0,
    errors: [],
  };
  
  for (const item of posts) {
    try {
      const { slug, frontmatter } = postToFrontmatter(item);
      const result = createMarkdownFile(slug, frontmatter);
      
      if (result.created) {
        results.created++;
        const icon = result.dryRun ? '📝' : '✅';
        const suffix = result.dryRun ? ' (dry run)' : '';
        console.log(`${icon} Created: ${path.basename(result.filename)}${suffix}`);
      } else {
        results.skipped++;
        console.log(`⏭️  Skipped: ${path.basename(result.filename)} (already exists)`);
      }
    } catch (error) {
      results.errors.push({ 
        post: item.title || item.id, 
        error: error.message 
      });
      console.log(`❌ Error: ${error.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 Sync Results:');
  console.log(`   ✅ Created: ${results.created}`);
  console.log(`   ⏭️  Skipped: ${results.skipped}`);
  console.log(`   ❌ Errors: ${results.errors.length}`);
  
  if (results.errors.length > 0) {
    console.log('\n❌ Errors:');
    results.errors.forEach(({ post, error }) => {
      console.log(`   - ${post}: ${error}`);
    });
  }
  
  console.log('='.repeat(50));
  
  if (DRY_RUN) {
    console.log('\n💡 This was a dry run. Remove --dry-run to actually create files.');
  } else if (results.created > 0) {
    console.log('\n💡 Tip: Run "git status" to see the new files, then commit them.');
  }
}

sync().catch(console.error);
