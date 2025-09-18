# Zen Rules

## Project

- **Framework**: Astro 5.x with MDX, Sitemap, Expressive Code
- **Site**: https://www.yakbrother.dev
- **Content Collections**: `posts`, `finds` (see schemas)
- **Languages**: TypeScript (Astro strict tsconfig), CSS
- **Aliases** (tsconfig): `@content/*`, `@layouts/*`, `@components/*`, `@scripts/*`, `@styles/*`

## Scripts

- **dev**: `astro dev`
- **start**: `astro dev`
- **build**: `astro build`
- **preview**: `astro preview`
- **subset-fonts**: `python3 scripts/subset-fonts.py`

## Code Style

- **TypeScript**: Use explicit return types for exported functions; respect path aliases; keep imports relative to `src/` when alias fits.
- **Astro**: Prefer `.astro` components for UI. Keep components pure and presentational when possible.
- **Errors**: Fail fast; avoid silent catches; narrow types.
- **Commits**: Conventional Commits (feat, fix, docs, refactor, chore, perf, test).

## CSS & Design

- **Design tokens**: Use CSS variables defined in `src/styles/global.css` under `:root` and `[data-theme]` for colors, spacing, and type scale.
- **Theme**: Support both `data-theme="light"` and `data-theme="dark"`. Never hard-code colors—use tokens like `var(--color-primary)`.
- **Selectors**: Keep selectors small; avoid deep descendants; prefer utility classes and component-level styles.
- **Accessibility**: Maintain minimum 4.5:1 contrast for body text; ensure focus rings are visible (`--focus-ring`).

## Content Model

- **posts**: `{ title: string; description: string; publicationDate: date; category: 'dev'|'musings'|'life'; public?: boolean = true; editDate?: date; author?: string = CONFIG.author; externalUrl?: string }`
- **finds**: `{ title: string; link: string; description: string; type: 'video'|'article'|'book'|'website'; publicationDate: date; public?: boolean = true }`
- **Conventions**: Publish dates are UTC; filenames kebab-case; set `public: false` to draft.

## Pages & Routing

- Use constants from `src/config.ts` (`PATHS`) when referencing internal routes.
- Generate RSS via `src/pages/rss.xml.js`; keep metadata accurate (author, site).

## Assets & Performance

- Prefer `.webp` for images; keep JPEGs optimized. Store static assets under `public/`.
- Use `.woff2` for web fonts (already included). When adding fonts, run `npm run subset-fonts` to keep payload small.

## Accessibility & Quality

- Run quick checks in dev:
  - `npx pa11y http://localhost:4321` (or dev port)
  - `npx axe http://localhost:4321` (via @axe-core/cli)
- Provide `alt` text and `aria-label`s where appropriate; ensure interactive targets are ≥44px.

## Testing (lightweight)

- No unit-test framework configured. For now, rely on accessibility checks and manual verification. If adding tests later, prefer Vitest and Playwright.

## Constraints

- Do not break public component APIs under `src/components/*` without updating consumers.
- Keep page content within readable width (tokens already constrain `--measure`).
- Avoid introducing global side effects in components.

## CI/CD (guidance)

- Build with `npm run build`; artifact is `dist/`. Ensure no warnings from Astro integrations.
