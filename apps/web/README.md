# Beepa's Country Goods - Development Guide

## Quick Start

The project is now set up and ready to run! Follow these steps:

### 1. Install Dependencies

```bash
cd /repos/beepas
pnpm install
```

### 2. Start Development Server

```bash
pnpm dev
```

The app will be available at: **http://localhost:5173/**

## What's Been Fixed

✅ **Favicon Issue**: Added an emoji favicon (🍯) to prevent 404 errors  
✅ **Blank Page**: All routes are properly configured  
✅ **Dependencies**: Updated to use specific versions instead of "latest"  
✅ **Placeholder Images**: Using placeholder.com for development images  
✅ **TypeScript Configuration**: Proper paths and types configured  
✅ **React Router v7**: Configured in SPA mode (SSR disabled)  

## Project Structure

```
apps/web/
├── app/
│   ├── routes/          # Page routes
│   │   ├── _index.tsx   # Home page (/)
│   │   ├── products.tsx # Products page (/products)
│   │   ├── contact.tsx  # Contact page (/contact)
│   │   ├── gallery.images.tsx # Gallery images (/gallery/images)
│   │   └── gallery.videos.tsx # Gallery videos (/gallery/videos)
│   ├── components/      # Reusable components
│   │   ├── layout/      # Header, Footer, MobileMenu
│   │   └── ui/          # Button, Card
│   ├── content/         # Static content data
│   ├── styles/          # Vanilla Extract CSS
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── public/              # Static assets
└── vite.config.ts       # Vite configuration
```

## Available Routes

- **/** - Home page with hero section
- **/products** - Product catalog
- **/contact** - Contact information
- **/gallery/images** - Image gallery
- **/gallery/videos** - Video gallery

## Tech Stack

- **React 18** - UI framework
- **React Router v7** - Routing (SPA mode)
- **Vanilla Extract** - Type-safe CSS-in-JS
- **Vite** - Build tool
- **TypeScript** - Type safety
- **pnpm** - Package manager
- **Turbo** - Monorepo tool

## Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Format code
pnpm format

# Run all checks
pnpm check
```

## Next Steps

1. **Add Real Images**: Replace placeholder.com URLs in:
   - `app/content/products.ts`
   - `app/content/gallery-images.ts`
   - `app/content/gallery-videos.ts`

2. **Customize Styling**: Edit theme in `app/styles/theme.css.ts`

3. **Add More Content**: Extend content files in `app/content/`

4. **Add Features**:
   - Shopping cart functionality
   - Contact form submission
   - Video player for gallery
   - Image lightbox

## Troubleshooting

### Build Scripts Warning

If you see a warning about ignored build scripts for `esbuild` and `lefthook`, you can safely ignore it or run:

```bash
pnpm approve-builds
```

### Port Already in Use

If port 5173 is already in use, the dev server will automatically try the next available port.

### Missing Dependencies

If you encounter missing dependencies, run:

```bash
pnpm install
```

## Browser Compatibility

The app is optimized for modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

**Enjoy building with Beepa's Country Goods! 🍯**
