# Radix UI Migration Plan - Step by Step

## Phase 1: MobileMenu → Dialog (Week 1)

### Current Issues
- Manual keyboard handling for ESC key
- Custom focus trap logic
- Manual overlay click handling
- Missing proper ARIA attributes

### Migration Steps

#### Step 1: Create new MobileMenuDialog component

```tsx
// app/components/layout/MobileMenuDialog.tsx
import { Dialog } from 'radix-ui';
import { Link } from 'react-router';
import { overlay, content, closeButton, menuLinks, menuLink } from './MobileMenuDialog.css';

interface MobileMenuDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  links: Array<{ to: string; label: string }>;
}

export function MobileMenuDialog({ isOpen, onOpenChange, links }: MobileMenuDialogProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay} />
        <Dialog.Content className={content}>
          <Dialog.Close asChild>
            <button className={closeButton} aria-label="Close menu">
              ✕
            </button>
          </Dialog.Close>
          <ul className={menuLinks}>
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={menuLink} onClick={() => onOpenChange(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

#### Step 2: Update Header.tsx

```tsx
// Before
import { MobileMenu } from './MobileMenu';

// After
import { MobileMenuDialog } from './MobileMenuDialog';

// In component:
<MobileMenuDialog 
  isOpen={mobileMenuOpen} 
  onOpenChange={setMobileMenuOpen}  // Changed from onClose
  links={links} 
/>
```

#### Step 3: Update CSS (reuse existing styles)
```ts
// MobileMenuDialog.css.ts - mostly copy from MobileMenu.css.ts
// But remove data-open attributes - Radix handles open/close states
```

#### Benefits Gained
- ✅ Automatic ESC key handling
- ✅ Automatic focus trap
- ✅ Focus returns to trigger button on close
- ✅ Proper ARIA attributes
- ✅ ~40 lines of code removed

---

## Phase 2: Video Player Dialog (Week 1-2)

### Current State
- Video cards show thumbnails but aren't clickable
- Play button is decorative only
- No way to play videos

### Migration Steps

#### Step 1: Create VideoDialog component

```tsx
// app/components/ui/VideoDialog.tsx
import { useState } from 'react';
import { Dialog } from 'radix-ui';
import { overlay, content, closeButton, video } from './VideoDialog.css';

interface VideoDialogProps {
  thumbnail: string;
  title: string;
  description?: string;
  videoUrl: string;
  children: React.ReactNode;
}

export function VideoDialog({ thumbnail, title, description, videoUrl, children }: VideoDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay} />
        <Dialog.Content className={content}>
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          {description && (
            <Dialog.Description className="sr-only">{description}</Dialog.Description>
          )}
          <video src={videoUrl} controls autoPlay className={video}>
            <track kind="captions" />
          </video>
          <Dialog.Close asChild>
            <button className={closeButton} aria-label="Close">
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

#### Step 2: Update gallery.videos.tsx

```tsx
import { VideoDialog } from '@/components/ui/VideoDialog';

<div className={grid}>
  {videos.map((video) => (
    <VideoDialog 
      key={video.id} 
      thumbnail={video.thumbnail}
      title={video.title}
      description={video.description}
      videoUrl={video.url}  // Need to add this to content
    >
      <div className={videoCard}>
        <img src={video.thumbnail} alt={video.title} className={thumbnail} />
        <div className={playButton}>▶</div>
        <div className={videoInfo}>
          <h3 className={videoTitle}>{video.title}</h3>
          {video.description && <p className={videoDescription}>{video.description}</p>}
        </div>
      </div>
    </VideoDialog>
  ))}
</div>
```

#### Step 3: Create VideoDialog.css.ts

```ts
import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Similar to ImageDialog.css.ts

export const video = style({
  maxWidth: '100%',
  maxHeight: 'calc(90vh - 4rem)',
  width: 'auto',
  height: 'auto',
  borderRadius: vars.radius.md,
});
```

#### Step 4: Update gallery-videos.ts content file

```ts
// Add url property to each video
export const galleryVideos = [
  {
    id: '1',
    title: 'Video Title',
    description: 'Video description',
    thumbnail: '/videos/thumbnail-1.jpg',
    url: '/videos/video-1.mp4',  // Add this
  },
  // ...
];
```

#### Benefits Gained
- ✅ Functional video player
- ✅ Full-screen playback
- ✅ Accessible controls
- ✅ Consistent with image gallery

---

## Phase 3: Gallery Tabs (Week 2)

### Current Issues
- Using `<a>` tags causes full page reload
- No keyboard navigation
- Manual active state management

### Migration Steps

#### Step 1: Restructure gallery pages

Currently: Two separate route files  
After: Single route with tabs

Create new `app/routes/gallery.tsx`:

```tsx
import { Tabs } from 'radix-ui';
import { galleryImages } from '@/content/gallery-images';
import { galleryVideos } from '@/content/gallery-videos';
import { container, section, grid } from '@/styles/utils.css';
import { ImageDialog } from '@/components/ui/ImageDialog';
import { VideoDialog } from '@/components/ui/VideoDialog';
import {
  pageTitle,
  tabsList,
  tabsTrigger,
  tabsContent,
  // ... import other styles
} from './gallery.css';

export default function Gallery() {
  return (
    <div className={section}>
      <div className={container}>
        <h1 className={pageTitle}>Gallery</h1>

        <Tabs.Root defaultValue="images">
          <Tabs.List className={tabsList}>
            <Tabs.Trigger value="images" className={tabsTrigger}>
              Images
            </Tabs.Trigger>
            <Tabs.Trigger value="videos" className={tabsTrigger}>
              Videos
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="images" className={tabsContent}>
            <div className={grid}>
              {galleryImages.map((img) => (
                <ImageDialog key={img.id} src={img.src} alt={img.alt}>
                  <div className={imageCard}>
                    <img src={img.src} alt={img.alt} className={image} />
                    {img.caption && (
                      <div className={imageCaption}>
                        <p className={imageCaptionText}>{img.caption}</p>
                      </div>
                    )}
                  </div>
                </ImageDialog>
              ))}
            </div>
          </Tabs.Content>

          <Tabs.Content value="videos" className={tabsContent}>
            <div className={grid}>
              {galleryVideos.map((video) => (
                <VideoDialog
                  key={video.id}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  description={video.description}
                  videoUrl={video.url}
                >
                  <div className={videoCard}>
                    <img src={video.thumbnail} alt={video.title} className={thumbnail} />
                    <div className={playButton}>▶</div>
                    <div className={videoInfo}>
                      <h3 className={videoTitle}>{video.title}</h3>
                      {video.description && <p className={videoDescription}>{video.description}</p>}
                    </div>
                  </div>
                </VideoDialog>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
```

#### Step 2: Update gallery.css.ts

```ts
// Replace tabNav and tabLink styles with:

export const tabsList = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.md,
  marginBottom: vars.space.xl,
  borderBottom: `2px solid ${vars.color.border.light}`,
});

export const tabsTrigger = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: 'transparent',
  color: vars.color.text.primary,
  border: 'none',
  borderRadius: `${vars.radius.md} ${vars.radius.md} 0 0`,
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  position: 'relative',
  marginBottom: '-2px',
  
  ':hover': {
    backgroundColor: vars.color.background.tertiary,
  },
  
  // Active state (Radix adds data-state="active")
  'selectors': {
    '&[data-state="active"]': {
      color: vars.color.brand.primary,
      borderBottom: `2px solid ${vars.color.brand.primary}`,
    },
  },
});

export const tabsContent = style({
  // Add any content-specific styles
});
```

#### Step 3: Update routes

Delete: `app/routes/gallery.images.tsx`, `app/routes/gallery.videos.tsx`  
Keep: `app/routes/gallery.tsx`

Update `app/routes.ts`:
```ts
// Remove:
// route("/gallery/images", "./routes/gallery.images.tsx"),
// route("/gallery/videos", "./routes/gallery.videos.tsx"),

// Add:
route("/gallery", "./routes/gallery.tsx"),
```

#### Step 4: Update Header links

```tsx
// Change from:
{ to: '/gallery/images', label: 'Gallery' }

// To:
{ to: '/gallery', label: 'Gallery' }
```

#### Benefits Gained
- ✅ No page reloads - instant tab switching
- ✅ Keyboard navigation (arrow keys)
- ✅ Proper ARIA attributes
- ✅ Single route instead of two
- ✅ Better SEO (single gallery page)

---

## Phase 4: Product HoverCards (Future)

### Enhancement Opportunity
Add rich product previews on hover

#### Step 1: Create ProductHoverCard component

```tsx
// app/components/ui/ProductHoverCard.tsx
import { HoverCard } from 'radix-ui';
import { trigger, content, title, description, features, price } from './ProductHoverCard.css';

interface ProductHoverCardProps {
  product: {
    name: string;
    image: string;
    description: string;
    fullDescription?: string;
    features?: string[];
    price?: string;
  };
  children: React.ReactNode;
}

export function ProductHoverCard({ product, children }: ProductHoverCardProps) {
  return (
    <HoverCard.Root openDelay={300} closeDelay={100}>
      <HoverCard.Trigger asChild className={trigger}>
        {children}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className={content} sideOffset={5}>
          <h3 className={title}>{product.name}</h3>
          <p className={description}>
            {product.fullDescription || product.description}
          </p>
          {product.features && product.features.length > 0 && (
            <ul className={features}>
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
          {product.price && <span className={price}>{product.price}</span>}
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
```

#### Step 2: Update products content

```ts
// app/content/products.ts
export const products = [
  {
    id: '1',
    name: 'Product Name',
    image: '/images/product-1.jpg',
    description: 'Short description',
    category: 'Category',
    // Add these:
    fullDescription: 'Longer, detailed description...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    price: '$19.99',
  },
  // ...
];
```

#### Step 3: Update products.tsx

```tsx
import { ProductHoverCard } from '@/components/ui/ProductHoverCard';

<div className={grid}>
  {products.map((product) => (
    <ProductHoverCard key={product.id} product={product}>
      <Card elevation="raised">
        <ImageDialog src={product.image} alt={product.name}>
          <img src={product.image} alt={product.name} className={productImage} />
        </ImageDialog>
        <h2 className={productName}>{product.name}</h2>
        <p className={productDescription}>{product.description}</p>
      </Card>
    </ProductHoverCard>
  ))}
</div>
```

#### Benefits Gained
- ✅ Rich product previews without clicking
- ✅ Better mobile experience (tap works too)
- ✅ Delayed hover prevents accidental triggers
- ✅ Auto-positioning (adjusts to viewport)

---

## Testing Checklist

After each phase, test:

### Keyboard Navigation
- [ ] Tab navigation works
- [ ] Enter/Space activates triggers
- [ ] ESC closes overlays
- [ ] Arrow keys work (for tabs)
- [ ] Focus trap works in dialogs
- [ ] Focus returns correctly on close

### Screen Readers
- [ ] Proper ARIA labels announced
- [ ] Role announcements correct
- [ ] State changes announced
- [ ] Content accessible

### Mobile
- [ ] Touch interactions work
- [ ] Overlays cover full screen
- [ ] Close buttons easily tappable
- [ ] No scroll issues

### Visual
- [ ] Animations smooth
- [ ] Styles match design
- [ ] Dark mode works (if applicable)
- [ ] Responsive layouts

---

## Rollback Plan

Each phase is independent. If issues arise:

1. **Keep old files** - rename to `.backup` instead of deleting
2. **Git branches** - one branch per phase
3. **Feature flags** - if deploying incrementally

Example:
```tsx
const USE_NEW_MOBILE_MENU = true;

{USE_NEW_MOBILE_MENU ? (
  <MobileMenuDialog {...props} />
) : (
  <MobileMenu {...props} />
)}
```

---

## Success Metrics

Track before/after:

| Metric | Before | Target |
|--------|--------|--------|
| Lighthouse Accessibility Score | ? | 100 |
| Keyboard Nav Support | Partial | Full |
| Lines of Custom Code | ~145 | ~40 |
| Mobile Menu Issues (reported) | ? | 0 |
| Video Engagement | 0% | 20%+ |
| Gallery Tab Switches | Requires reload | Instant |

---

## Timeline Summary

| Phase | Duration | Complexity | Dependencies |
|-------|----------|------------|--------------|
| 1. MobileMenu | 1-2 hours | Low | None |
| 2. VideoDialog | 2-3 hours | Low | Content updates |
| 3. Gallery Tabs | 3-4 hours | Medium | Phases 1-2 complete |
| 4. HoverCards | 4-6 hours | Medium | Content updates |

**Total: 10-15 hours** spread over 2-3 weeks

---

*Ready to start? Begin with Phase 1: MobileMenu!*
