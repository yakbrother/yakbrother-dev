# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Smilodon is a clean, modern personal website theme built with Astro. It features Tim Eaton's personal website with responsive design, fluid typography, dark/light mode support, and content collections for blog posts and curated finds.

**Key Technologies:**
- Astro 5.13.0 with TypeScript
- Content Collections (MDX support)
- Responsive design with fluid typography
- Static site generation

## Development Commands

### Core Development
```bash
# Start development server (hot reload enabled)
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview

# Install dependencies
npm install
```

### Content Management
Content is managed through Astro's Content Collections system:
- Blog posts: `src/content/posts/*.md`
- Curated finds: `src/content/finds/*.md`

## Architecture

### Directory Structure
- `src/config.ts` - Site-wide configuration and constants
- `src/content.config.ts` - Content collection schemas and types
- `src/layouts/` - Page layouts (Layout.astro, PageLayout.astro)
- `src/components/` - Reusable Astro components
- `src/pages/` - File-based routing pages
- `src/content/` - Content collections (posts, finds)

### Content Collections
Two main content types:
1. **Posts** - Blog posts with categories (dev, design, musings, life)
2. **Finds** - Curated links with types (video, article, book, tool, website)

Both collections use frontmatter schemas defined in `content.config.ts` with required fields for title, dates, and publication status.

### Path Aliases
TypeScript path mapping configured in `tsconfig.json`:
- `@content/*` → `src/content/*`
- `@layouts/*` → `src/layouts/*`
- `@components/*` → `src/components/*`
- `@scripts/*` → `src/scripts/*`
- `@styles/*` → `src/styles/*`

### Page Generation
- Static pages in `src/pages/`
- Dynamic routing for blog posts: `[slug].astro`
- Pagination for collections: `[page].astro`
- Home page aggregates recent posts and finds

### Styling Approach
- Component-scoped styles in `.astro` files
- CSS custom properties for theming (light/dark mode)
- Fluid typography and responsive grid layouts
- Focus on accessibility and sustainable web design principles

## Content Creation

### Adding Blog Posts
Create new `.md` files in `src/content/posts/` with required frontmatter:
```yaml
---
title: "Post Title"
slug: "post-slug"
description: "Post description"
category: dev # dev, design, musings, life
publicationDate: 2024-01-01
public: true
---
```

### Adding Finds
Create new `.md` files in `src/content/finds/` with required frontmatter:
```yaml
---
title: "Link Title"
link: "https://example.com"
description: "Optional description"
type: article # video, article, book, tool, website
publicationDate: 2024-01-01
public: true
---
```

## Configuration

### Site Settings
Edit `src/config.ts` for:
- Site metadata (title, URL, author, email)
- Navigation paths
- Global constants

### Astro Configuration
Key settings in `astro.config.mjs`:
- Site URL: https://www.timeaton.dev/
- Integrations: sitemap, expressiveCode, mdx
- Content collections schema references

## Build and Deploy

The project generates a static site in the `dist/` directory. The build includes:
- Optimized HTML, CSS, and JavaScript
- Processed images (WebP conversion for avatars)
- RSS feed and sitemap generation
- SEO meta tags and structured data

Production files are ready for deployment to any static hosting service.
