# Micro.blog Migration Guide

This guide explains how to migrate your existing microblog posts to Micro.blog.

## Overview

Your site has been restructured to use a microblog format:
- **Microblog** (formerly "Finds"): Short posts, links, and quick thoughts
- **Essays** (formerly "Blog Posts"): Longer-form articles

The microblog content can be synced to Micro.blog using the Micropub API.

## Setup

### 1. Get Your Micro.blog API Token

1. Sign up for a Micro.blog account at https://micro.blog
2. Go to https://micro.blog/account/apps
3. Create a new app token (you can name it "YakBrother Migration")
4. Copy the token

### 2. Set Up Environment

```bash
export MICROBLOG_TOKEN="your-token-here"
```

Or add it to your `.zshrc` / `.bashrc`:
```bash
echo 'export MICROBLOG_TOKEN="your-token-here"' >> ~/.zshrc
source ~/.zshrc
```

## Running the Migration

### Dry Run (Recommended First)

Test the migration without actually posting:

```bash
node scripts/migrate-to-microblog.js --dry-run
```

This will show you what would be posted without actually creating anything.

### Real Migration

Once you're satisfied with the dry run:

```bash
node scripts/migrate-to-microblog.js
```

The script will:
- Read all posts from `src/content/microblog/`
- Post them to Micro.blog in chronological order
- Wait 2 seconds between posts (rate limiting)
- Show progress and results

## What Gets Posted

Each microblog post is converted to a Micropub "bookmark" post:
- **Title**: The post title
- **Link**: The external URL you're sharing
- **Content**: The description (if provided)
- **Category**: The post type (video, article, book, tool, website)
- **Published Date**: The original publication date

## After Migration

Once your posts are on Micro.blog, you can:

1. **Set up cross-posting**: Micro.blog can cross-post to Mastodon, Bluesky, etc.
2. **Customize your Micro.blog theme**: Match your site's design
3. **Use Micro.blog's iOS app**: Post from your phone
4. **Embed your Micro.blog timeline**: Show it on your main site

## Future Posts

For new microblog posts, you can either:

1. **Manual**: Post to Micro.blog first, then add to your site
2. **Automated**: Create a GitHub Action to auto-post when you commit new `.md` files
3. **Hybrid**: Keep your site as the source of truth and periodically sync

## Troubleshooting

### "MICROBLOG_TOKEN is required"
Make sure you've exported the token in your current shell session.

### Rate Limiting Errors
The script includes 2-second delays between posts. If you still hit limits, you can edit the script to increase the delay.

### Authentication Errors
Double-check your token from https://micro.blog/account/apps and make sure it hasn't expired.

## Notes

- The migration preserves original publication dates
- Posts are uploaded chronologically (oldest first)
- The script is idempotent-ish (Micro.blog will accept duplicate posts)
- You can test individual posts by temporarily moving other `.md` files out of the directory
