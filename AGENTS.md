# AGENTS.md

Repository instructions for AI coding agents working in `beepas`.

## Project Overview

**Beepa's** (`beepas-monorepo`) is the marketing and product showcase web application for Beepa's Country Goods ("Made Local. Made Right." — Wisconsin jarred & canned goods).

- **Monorepo**: `pnpm@10.28.1` workspaces (`apps/*`) orchestrated by `turbo` (`^2.11.10`)
- **Runtime**: Node.js `>=22.0.0` locally (`24` in CI and Vercel via `.nvmrc`)
- **App (`apps/web`)**: React 18 + React Router v7 (`^7.18.5`) in **SSR mode** (`ssr: true` in `apps/web/react-router.config.ts`)
- **Bundler**: Vite 6 (`apps/web/vite.config.ts`)
- **Styling**: Vanilla Extract (`@vanilla-extract/css`, `@vanilla-extract/recipes`) with co-located `*.css.ts` modules
- **UI Primitives**: Unified `radix-ui` package (`Dialog`, `Tabs`, etc.)
- **Deployment & CI**: GitHub Actions (`.github/workflows/ci.yml`) and Vercel (`rose-budz/beepas`, auto-deployed from `master`)

## Essential Commands

Run commands from the repository root (`c:/repos/beepas`) unless targeting `apps/web` specifically with `pnpm --filter web <script>`:

```bash
pnpm dev           # Start local SSR dev server at http://localhost:5173
pnpm build         # Build production client & SSR bundles (outputs to apps/web/build/)
pnpm check         # Run all quality gates: typecheck, lint, spell, knip, and format:check
pnpm fix           # Auto-fix ESLint, Knip, and Prettier issues across the repo
pnpm typecheck     # TypeScript strict check (tsc --noEmit)
pnpm lint          # ESLint (TypeScript, React Hooks, jsx-a11y, CSpell)
pnpm spell         # CSpell dictionary check across apps/web/app/**/*.{ts,tsx}
pnpm knip          # Detect unused files, dependencies, and exports
pnpm format:check  # Check repo-wide Prettier formatting
```

**Verification rule**: Before finishing any code or documentation task, run `pnpm check` and `pnpm build` and confirm both exit with `0` errors and `0` warnings.

## Architecture & Key Paths

- `apps/web/app/routes.ts` — **Explicit route configuration** (`index`, `/products`, `/contact`, `/gallery`). React Router v7 does **not** auto-discover new route files unless registered here.
- `apps/web/app/root.tsx` — Document `<Layout>` shell (`<html lang="en">`, Google `Montserrat` font links, `lightTheme` body class, `<Header />`, `<Footer />`).
- `apps/web/app/entry.server.tsx` — Node `renderToPipeableStream` SSR handler and `SECURITY_HEADERS` applied to all HTML responses.
- `apps/web/app/entry.client.tsx` — Client `hydrateRoot` entry.
- `apps/web/app/routes/` — Page route components and route-scoped `*.css.ts` styles (`_index.tsx`, `products.tsx`, `gallery.tsx`, `contact.tsx`).
- `apps/web/app/components/layout/` — `Header`, `Footer`, and `MobileMenu` (Radix `Dialog`).
- `apps/web/app/components/ui/` — Reusable UI primitives (`Button`, `GalleryCard`, `ImageDialog`, `VideoDialog`).
- `apps/web/app/content/` — Typed static content modules (`home.ts`, `products.ts`, `gallery-images.ts`, `gallery-videos.ts`, `contact.ts`, `site.ts`).
- `apps/web/app/types/content.ts` — Shared TypeScript interfaces (`Product`, `GalleryImage`, `GalleryVideo`, `SiteInfo`).
- `apps/web/app/styles/` — Design system:
  - `theme.css.ts` — `vars` theme contract and `lightTheme` token values
  - `global.css.ts` — CSS reset, body defaults, and `@font-face` (`"Seagull Bold"` served from `/fonts/Seagull-Bold.woff2` and `/fonts/Seagull-Bold.woff`)
  - `utils.css.ts` — Layout helpers (`container`, `section`, `sectionCard`, `grid`, `gridTwo`, `pageTitle`, `visuallyHidden`)
  - `recipes.css.ts` — Multi-variant component recipes (`button`)
- `apps/web/public/` — Static assets served from `/` (`fonts/`, `images/`, `logo/`, favicons, `manifest.json`).
- `apps/web/vercel.json` — Static asset HTTP security headers (kept in sync with `SECURITY_HEADERS` in `apps/web/app/entry.server.tsx`).

## Coding & Styling Conventions

1. **Path Aliases**: Use `@/*` to import from `apps/web/app/*` (configured in both `apps/web/tsconfig.json` and `apps/web/vite.config.ts`). Use relative `./Component.css` imports for co-located style files.
2. **Vanilla Extract (`*.css.ts`)**:
   - Co-locate styles beside components/routes (`Component.tsx` + `Component.css.ts`).
   - Prefer `vars` tokens from `@/styles/theme.css` (`vars.color.*`, `vars.space.*`, `vars.fontSize.*`, `vars.radius.*`, `vars.shadow.*`) over hardcoded values.
   - Reuse layout primitives (`container`, `section`, `sectionCard`, `grid`, `gridTwo`, `pageTitle`, `visuallyHidden`) from `@/styles/utils.css`.
   - `*.css.ts` files evaluate at build time in Node — never reference `window`, `document`, or runtime React state inside `*.css.ts`.
   - Reference static assets inside `*.css.ts` with root-relative URLs (e.g., `url("/fonts/...")`, `url("/images/...")`) so Vite resolves them cleanly during SSR builds.
3. **Radix UI (`radix-ui`)**:
   - Import primitives from the unified `radix-ui` package (`import { Dialog, Tabs } from 'radix-ui'`), **not** scoped `@radix-ui/react-*` packages.
   - Keep `ssr: { noExternal: ['radix-ui'] }` in `apps/web/vite.config.ts` so Radix ESM modules bundle cleanly for Node SSR.
   - Accessibility requirement: every `<Dialog.Content>` must render a `<Dialog.Title>` (apply `className={visuallyHidden}` if hidden visually) and pass `aria-describedby={undefined}` when `<Dialog.Description>` is omitted.
4. **Content Separation**: Keep marketing copy, product catalogs, and gallery items in `apps/web/app/content/*.ts` rather than hardcoding long copy inside JSX route files.
5. **Formatting**: Enforced via `.prettierrc` (`singleQuote: true`, `semi: true`, `trailingComma: 'es5'`, `printWidth: 100`, `tabWidth: 2`).

## Guardrails & Common AI Pitfalls

- **Spell Checker (`apps/web/cspell.json`)**: Both `pnpm spell` and `@cspell/eslint-plugin` check identifiers, comments, template literals, and JSX text across `apps/web/app/**/*.{ts,tsx}` (excluding `*.css.ts`). `pnpm spell` fails with exit code `1` on unknown words. When adding legitimate proper nouns, brand names, or technical identifiers not in the English dictionary, add them to `words` in `apps/web/cspell.json`.
- **Dead-Code Detection (`apps/web/knip.json`)**: `pnpm knip` fails if any file, dependency, or exported symbol in `apps/web/app/**/*.{ts,tsx}` is unused (`ignoreExportsUsedInFile: true`). Do not run `pnpm fix` (`knip --fix`) mid-refactor before wiring up newly exported symbols, or Knip will strip the `export` keyword.
- **Unused Variables (`apps/web/eslint.config.js`)**: Prefix intentionally unused function parameters or destructured variables with `_` (`argsIgnorePattern: '^_'`, `varsIgnorePattern: '^_'`).
- **Package Manager & Node Compatibility**:
  - Do **not** alter `"packageManager": "pnpm@10.28.1"` in root `package.json` unless explicitly asked.
  - Keep dev tooling compatible with Node `>=22.0.0` (e.g., `cspell@^9.8.0` supports Node 22.14+, whereas `cspell@10` requires `>=22.18.0`).
  - Write cross-platform scripts in `package.json` (use Node `fs.rmSync` or `child_process` one-liners instead of Unix-only `rm -rf` or `|| true` bashisms so Windows PowerShell and Linux CI both succeed).
- **Vercel Deployment Configuration**:
  - Do **not** create a root `vercel.json` or install `@vercel/react-router`; Vercel natively detects the Turborepo workspace and React Router v7 SSR preset.
  - When modifying CSP or HTTP security headers, update both `apps/web/app/entry.server.tsx` (SSR document responses) and `apps/web/vercel.json` (static asset responses).
