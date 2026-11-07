# Beepa's Web Application (`apps/web`)

Frontend and SSR server package (`web`) for **Beepa's Country Goods**, built with React 18, React Router v7, Vanilla Extract CSS, and Radix UI.

## Development

Run from the monorepo root (or prefix with `pnpm --filter web` for package-only execution):

```bash
pnpm dev                 # Start SSR dev server at http://localhost:5173
pnpm build               # Build client (build/client) and server (build/server) bundles
pnpm --filter web start  # Serve production SSR build locally via react-router-serve
pnpm check               # Run typecheck, lint, spell, knip, and format:check
```

## Routes

Routes are explicitly registered in [`app/routes.ts`](app/routes.ts):

| URL Path    | Route Module                                         | Description                                                                       |
| ----------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| `/`         | [`app/routes/_index.tsx`](app/routes/_index.tsx)     | Home page — brand story, principles, awards, and featured callouts                |
| `/products` | [`app/routes/products.tsx`](app/routes/products.tsx) | Product catalog (starters & sauces) with lightbox previews                        |
| `/gallery`  | [`app/routes/gallery.tsx`](app/routes/gallery.tsx)   | Tabbed photo & video gallery using Radix `Tabs`, `ImageDialog`, and `VideoDialog` |
| `/contact`  | [`app/routes/contact.tsx`](app/routes/contact.tsx)   | Contact details, email/phone links, and social channels                           |

> **Adding a route**: Create the component in `app/routes/` (with an optional co-located `*.css.ts` file) and add a `route(...)` entry in [`app/routes.ts`](app/routes.ts).

## Content Editing

Site copy and catalog data are stored as strongly typed TypeScript modules in [`app/content/`](app/content/) using interfaces from [`app/types/content.ts`](app/types/content.ts):

- [`app/content/site.ts`](app/content/site.ts) — Brand name, tagline, contact metadata, and social URLs (`SiteInfo`)
- [`app/content/home.ts`](app/content/home.ts) — Hero copy, story sections, principles, and awards
- [`app/content/products.ts`](app/content/products.ts) — Product cards and images (`Product[]`)
- [`app/content/gallery-images.ts`](app/content/gallery-images.ts) — Photo gallery entries (`GalleryImage[]`)
- [`app/content/gallery-videos.ts`](app/content/gallery-videos.ts) — Video gallery entries (`GalleryVideo[]`)
- [`app/content/contact.ts`](app/content/contact.ts) — Contact page copy and outreach details

Static assets (product photos, gallery media, logos, favicons, and `"Seagull Bold"` font files) live in [`public/`](public/) and are referenced using root-relative paths (e.g., `/images/products/chili-starter.jpg`).

> **Spellcheck note**: Both `pnpm spell` and ESLint validate words in `app/**/*.{ts,tsx}` against [`cspell.json`](cspell.json). Add new proper nouns or brand terms to `words` in `cspell.json`.

## Styling System (Vanilla Extract)

Styles are compiled at build time with zero runtime overhead:

- **Design Tokens ([`app/styles/theme.css.ts`](app/styles/theme.css.ts))**: Exports `vars` (theme contract) and `lightTheme` (applied to `<body>` in `app/root.tsx`). Use `vars.color`, `vars.space`, `vars.fontSize`, `vars.fontFamily`, `vars.radius`, and `vars.shadow` in `*.css.ts` files.
- **Layout Utilities ([`app/styles/utils.css.ts`](app/styles/utils.css.ts))**: Shared `container`, `section`, `sectionCard`, `grid`, `gridTwo`, `pageTitle`, and `visuallyHidden` classes.
- **Component Recipes ([`app/styles/recipes.css.ts`](app/styles/recipes.css.ts))**: Variant-driven `button` recipe (`primary`, `secondary`, `outline`; `sm`, `md`, `lg`).
- **Global Styles ([`app/styles/global.css.ts`](app/styles/global.css.ts))**: Reset rules, wood-textured page backdrop, and `@font-face` declaration for `"Seagull Bold"` (paired with Google Fonts `Montserrat` loaded in `app/root.tsx`).

## Accessible UI Primitives (Radix UI)

Interactive overlays and tabs use the unified `radix-ui` package styled with Vanilla Extract:

- [`app/components/layout/MobileMenu.tsx`](app/components/layout/MobileMenu.tsx) — Accessible slide-over navigation drawer built on `Dialog`
- [`app/components/ui/ImageDialog.tsx`](app/components/ui/ImageDialog.tsx) — Fullscreen image lightbox built on `Dialog`
- [`app/components/ui/VideoDialog.tsx`](app/components/ui/VideoDialog.tsx) — Modal video player built on `Dialog`
- [`app/routes/gallery.tsx`](app/routes/gallery.tsx) — Keyboard-navigable `Tabs` switching between photo and video grids

Note: [`vite.config.ts`](vite.config.ts) sets `ssr: { noExternal: ['radix-ui'] }` so Radix ESM primitives bundle cleanly for Node SSR.

## Server-Side Rendering & Security Headers

- **SSR Mode**: Enabled via `ssr: true` in [`react-router.config.ts`](react-router.config.ts).
- **Streaming & Headers**: [`app/entry.server.tsx`](app/entry.server.tsx) streams HTML via `renderToPipeableStream` and attaches `SECURITY_HEADERS` (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and `Content-Security-Policy`).
- **Static Assets**: [`vercel.json`](vercel.json) mirrors those security headers for static files served by Vercel's CDN.
