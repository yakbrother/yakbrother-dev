# Repository Snapshot — yakbrother-dev

Generated for Zencoder agents to understand this project’s structure, tech stack, and conventions.

## Project Overview

- **Name**: smilodon (yakbrother.dev personal website theme)
- **Purpose**: Personal website/blog with posts and micro “finds” content
- **Framework**: Astro 5.x
- **Runtime**: Node.js (Astro toolchain)
- **Languages**: TypeScript, Astro, CSS
- **Site**: https://www.yakbrother.dev

## Dependencies

- **Runtime**:
  - astro ^5.13.0
  - @astrojs/mdx ^4.3.3
  - @astrojs/rss ^4.0.12
  - @astrojs/sitemap ^3.5.0
  - astro-expressive-code ^0.41.3
  - astro-embed ^0.9.0
  - astro-og-canvas ^0.7.0
- **Dev**:
  - @axe-core/cli ^4.10.2
  - pa11y ^9.0.0

## NPM Scripts (package.json)

- **dev**: `astro dev`
- **start**: `astro dev`
- **build**: `astro build`
- **preview**: `astro preview`
- **subset-fonts**: `python3 scripts/subset-fonts.py`

## Key Configuration Files

- `astro.config.mjs`

  - `site`: https://www.yakbrother.dev/
  - `author`: "Tim Eaton"
  - Integrations: `sitemap()`, `expressiveCode()`, `mdx()`
  - Markdown: Shiki theme `material-theme-darker`
  - Content collections mapped to `src/content/config.ts#posts` and `#finds`

- `tsconfig.json`

  - Extends `astro/tsconfigs/strict`
  - `baseUrl`: `src`
  - Aliases: `@content/*`, `@layouts/*`, `@components/*`, `@scripts/*`, `@styles/*`
  - `jsx`: `preserve`

- `src/config.ts`
  - `PATHS`: route constants (`/`, `/about`, `/resume`, `/posts`, `/finds`, `/404`)
  - `CONFIG`: site metadata (title, site_url, author, email, description)

## Content Model (src/content/config.ts)

- `posts` (type: content)
  - `title: string`
  - `description: string`
  - `publicationDate: date`
  - `category: 'dev' | 'musings' | 'life'`
  - `public: boolean = true`
  - `editDate?: date`
  - `author: string = CONFIG.author`
  - `externalUrl?: string`
- `finds` (type: content)
  - `title: string`
  - `link: string`
  - `description: string`
  - `type: 'video' | 'article' | 'book' | 'website'`
  - `publicationDate: date`
  - `public: boolean = true`

## Pages & Layouts

- `src/pages/`
  - `index.astro`, `now.astro`, `uses.astro`, `resume.astro`, `robots.txt.ts`, `rss.xml.js`
  - Content-driven routes under `posts/` and `finds/`
  - `404.md`, `about.md`
- `src/layouts/`
  - `Layout.astro`, `PageLayout.astro`

## Components

- `src/components/`
  - `Breadcrumbs.astro`, `Footer.astro`, `HeadContent.astro`, `Header.astro`, `LinkCard.astro`, `Pagination.astro`, `PostCard.astro`, `ThemeToggle.astro`, plus icons

## Styles & Theming

- Global tokens, spacing, and type scale in `src/styles/global.css`
  - Color variables set on `:root` with dark mode overrides on `:root[data-theme="dark"]` and explicit light on `:root[data-theme="light"]`
  - Key tokens: `--color-*`, `--text-size-*`, Utopia spacing `--space-*`, type scale `--size-step-*`
  - Accessibility-focused link and focus styles, header/footer link treatments
- Additional font definitions: `src/styles/fonts.css`

## Assets

- Public assets in `public/` (icons, fonts, images)
- Page-specific or generated assets under `dist/` after build
- Font subsetting script: `scripts/subset-fonts.py`

## Build Output

- `dist/` contains compiled site: `index.html`, collection pages, sitemap(s), RSS, and copied assets

## Accessibility Tooling

- `pa11y` and `@axe-core/cli` are available for local checks against the running site

## Directory Overview (selected)

- `.astro/` — Astro build cache and metadata
- `.github/` — instructions/docs for repo automation
- `src/` — application code
  - `assets/` images
  - `components/` UI components
  - `content/` content collections and schemas
  - `layouts/` shared layouts
  - `pages/` route files
  - `styles/` global and font CSS
  - `utils/` helpers (e.g., `date.ts`)
- `public/` — static assets served as-is
- `dist/` — production build output

## Conventions & Notes

- Use `CONFIG` and `PATHS` for consistent site metadata and routing
- Use CSS variables from `global.css`; avoid hard-coded colors
- Keep content file names kebab-case; drafts with `public: false`
- Respect TypeScript strictness and path aliases

## How to Run

1. Install deps: `npm install`
2. Dev server: `npm run dev`
3. Build: `npm run build`
4. Preview: `npm run preview`

## Potential Agent Tasks

- UI tweaks and accessibility improvements using theme tokens
- Content ingestion for `posts` and `finds` with proper frontmatter
- Performance: image optimization and font subsetting (`subset-fonts`)
- Add tests later (Vitest/Playwright) if desired
