# Micro.blog Integration Guide

This guide explains how to integrate Micro.blog with your site.

## Overview

Your site has been restructured to use a microblog format:
- **Microblog** (formerly "Finds"): Short posts, links, and quick thoughts
- **Essays** (formerly "Blog Posts"): Longer-form articles

## The Workflow

**Micro.blog is your posting interface** → Posts sync to your site → Cross-post to Bluesky

1. **You post** to Micro.blog (easy mobile/web interface)
2. **Micro.blog** cross-posts to Bluesky automatically
3. **Your site** syncs posts from Micro.blog's feed
4. **Git commit** the new posts and deploy

This gives you:
- ✅ Easy mobile posting (Micro.blog app)
- ✅ Auto cross-posting to Bluesky
- ✅ Your own site as source of truth
- ✅ IndieWeb principles

## Initial Setup

### 1. Sign Up for Micro.blog

1. Sign up at https://micro.blog
2. Optionally set up a custom domain
3. Configure cross-posting to Bluesky:
   - Go to Account → Edit Apps
   - Connect your Bluesky account

### 2. Get Your API Token (for initial upload)

1. Go to https://micro.blog/account/apps
2. Create a new app token (name it "YakBrother Initial Upload")
3. Copy the token

```bash
export MICROBLOG_TOKEN="your-token-here"
```

## Step 1: Initial Upload (One-Time)

Upload your existing local posts to Micro.blog:

### Dry Run First

```bash
node scripts/initial-upload-to-microblog.js --dry-run
```

### Real Upload

```bash
node scripts/initial-upload-to-microblog.js
```

This uploads your 16 existing posts to Micro.blog with their original dates.

## Step 2: Set Up Syncing

After the initial upload, you'll post to Micro.blog and sync back to your site.

### Set Your Username

```bash
export MICROBLOG_USERNAME="yakbrother"
# Or whatever your Micro.blog username is
```

### Pull New Posts

Whenever you want to sync new posts from Micro.blog:

```bash
node scripts/sync-from-microblog.js
```

This:
- Fetches posts from your Micro.blog JSON feed
- Creates markdown files in `src/content/microblog/`
- Skips posts already synced (uses `microblog_id`)
- Shows what was created/skipped

## Daily Workflow

1. **Post on Micro.blog** (mobile app or web)
   - Share links, thoughts, etc.
   - Micro.blog auto-posts to Bluesky

2. **Sync to your site** (locally)
   ```bash
   node scripts/sync-from-microblog.js
   git add src/content/microblog/
   git commit -m "Sync new microblog posts"
   git push
   ```

3. **Deploy** (your site rebuilds automatically)

## Automation Options

### GitHub Action (Recommended)

Create `.github/workflows/sync-microblog.yml`:

```yaml
name: Sync Micro.blog

on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
  workflow_dispatch:  # Manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: node scripts/sync-from-microblog.js
        env:
          MICROBLOG_USERNAME: yakbrother
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "Sync microblog posts"
```

Now your site auto-syncs every 6 hours!

### Manual Sync

Or just run the script periodically:

```bash
node scripts/sync-from-microblog.js && git add . && git commit -m "Sync" && git push
```

## Troubleshooting

### "MICROBLOG_TOKEN is required"
Only needed for initial upload. Make sure you've exported it.

### "Error fetching feed"
Check your Micro.blog username and make sure your blog is public.

### Posts Not Syncing
The sync script tracks `microblog_id` in frontmatter. If a post already exists with the same ID, it's skipped.

## Notes

- Initial upload preserves original publication dates
- Micro.blog becomes your posting interface
- Your site remains the canonical source (in git)
- The sync is one-way: Micro.blog → Your site
- Cross-posting to Bluesky happens automatically in Micro.blog

## Why This Workflow?

- ✅ **Mobile-first**: Micro.blog has great apps
- ✅ **IndieWeb**: Your site is still the source of truth
- ✅ **Auto cross-post**: Micro.blog → Bluesky integration
- ✅ **Community**: Access to Micro.blog's timeline and discovery
- ✅ **Backup**: Everything syncs to your git repo
