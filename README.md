# Beepa's

Marketing and product showcase web application for **Beepa's Country Goods** (_"Made Local. Made Right."_ — Wisconsin jarred & canned goods), built as a TypeScript monorepo with Turborepo, React Router v7 (SSR), Vanilla Extract CSS, and Radix UI.

## Tech Stack

- **Monorepo & Package Manager**: [Turborepo](https://turbo.build/) + [pnpm](https://pnpm.io/) (`pnpm@10.28.1`)
- **Framework**: [React 18](https://react.dev/) + [React Router v7](https://reactrouter.com/) (Server-Side Rendering)
- **Bundler**: [Vite 6](https://vite.dev/)
- **Styling**: [Vanilla Extract](https://vanilla-extract.style/) (`@vanilla-extract/css` & `@vanilla-extract/recipes`)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/primitives) (`radix-ui`)
- **Quality & Security**: TypeScript 5.9, ESLint 9 (`jsx-a11y`, `react-hooks`, `@cspell/eslint-plugin`), Prettier, CSpell, Knip, Lefthook, GitHub Actions CI, Dependabot
- **Hosting**: [Vercel](https://vercel.com/) (`https://beepas.vercel.app`)

## Prerequisites

- **Node.js**: `>= 22.0.0` (Node `24` LTS recommended — see [`.nvmrc`](.nvmrc))
- **pnpm**: `10.28.1` (enable via `corepack enable` or standalone pnpm)

## Quick Start

```bash
# Install workspace dependencies (also installs Lefthook git hooks locally)
pnpm install

# Start the development server at http://localhost:5173
pnpm dev

# Build client + SSR production bundles
pnpm build

# Preview the production SSR build locally
pnpm --filter web start
```

## Scripts

Run from the repository root:

| Command             | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| `pnpm dev`          | Start the Vite + React Router SSR dev server (`http://localhost:5173`)         |
| `pnpm build`        | Build production client and server bundles (`apps/web/build/`)                 |
| `pnpm check`        | Run all checks: `typecheck`, `lint`, `spell`, `knip`, and `format:check`       |
| `pnpm fix`          | Auto-fix lint issues, remove unused exports (`knip --fix`), and format files   |
| `pnpm typecheck`    | Run strict TypeScript type checking (`tsc --noEmit`)                           |
| `pnpm lint`         | Run ESLint across TypeScript/React files                                       |
| `pnpm lint:fix`     | Auto-fix ESLint issues                                                         |
| `pnpm format`       | Format all `.ts`, `.tsx`, `.js`, `.json`, `.md`, `.yml`, and `.css` files      |
| `pnpm format:check` | Check Prettier formatting across the repository                                |
| `pnpm spell`        | Run CSpell dictionary checks on `apps/web/app/**/*.{ts,tsx}`                   |
| `pnpm knip`         | Detect unused files, dependencies, and exports                                 |
| `pnpm knip:fix`     | Auto-remove unused exports and dependencies                                    |
| `pnpm pre-commit`   | Manually run Lefthook pre-commit checks                                        |
| `pnpm clean`        | Remove build outputs, `.turbo`/`.react-router` caches, and root `node_modules` |

## Repository Structure

```text
beepas/
├── .github/workflows/
│   └── ci.yml                 # GitHub Actions CI (audit, check, build)
├── apps/
│   └── web/                   # React Router v7 SSR web application
│       ├── app/
│       │   ├── components/    # Layout (Header, Footer, MobileMenu) & UI (Button, Dialogs, Cards)
│       │   ├── content/       # Typed static content (home, products, gallery, contact, site)
│       │   ├── routes/        # Route modules (_index, products, gallery, contact)
│       │   ├── styles/        # Vanilla Extract theme contract, recipes, utilities, global styles
│       │   ├── types/         # Shared content TypeScript interfaces
│       │   ├── entry.client.tsx
│       │   ├── entry.server.tsx
│       │   ├── root.tsx
│       │   └── routes.ts      # Explicit route table
│       ├── public/            # Static assets (fonts, product/gallery images, logos, icons)
│       └── vercel.json        # Static asset HTTP security headers
├── AGENTS.md                  # Instructions & conventions for AI coding agents
├── CLAUDE.md                  # Pointer to AGENTS.md for Claude Code
├── lefthook.yml               # Pre-commit hook configuration
├── package.json               # Workspace root scripts & tooling
├── pnpm-workspace.yaml        # Workspace packages & security overrides
└── turbo.json                 # Turborepo task pipeline
```

See [`apps/web/README.md`](apps/web/README.md) for detailed documentation on routes, content editing, Vanilla Extract theming, and Radix UI components.

## Git Hooks & CI/CD

- **Pre-commit Hooks ([`lefthook.yml`](lefthook.yml))**: Automatically installed on `pnpm install` (outside CI/Vercel). Runs ESLint (`--fix`), Prettier (`--write`), TypeScript type checking, CSpell, and Knip in parallel on staged changes.
- **Continuous Integration ([`.github/workflows/ci.yml`](.github/workflows/ci.yml))**: Runs on pushes to `master` and pull requests on Node 24 — enforces `pnpm audit --audit-level=low`, `pnpm check`, and `pnpm build`.
- **Deployment**: Pushes to `master` automatically build and deploy to Vercel with matching HTTP security headers in `apps/web/app/entry.server.tsx` and `apps/web/vercel.json`.

## Working with AI Coding Tools

This repository includes first-class context for AI coding assistants (Antigravity, Claude Code, Cursor, GitHub Copilot, Codex):

- [`AGENTS.md`](AGENTS.md) documents workspace commands, route registration, Vanilla Extract & Radix UI patterns, CSpell/Knip guardrails, and deployment constraints.
- [`CLAUDE.md`](CLAUDE.md) imports `@AGENTS.md` automatically.
