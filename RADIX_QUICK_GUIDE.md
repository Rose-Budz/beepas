# Quick Radix UI Upgrade Checklist

## 🎯 Top 4 Immediate Wins

### ✅ 1. MobileMenu → Radix Dialog
**Current:** Manual overlay + keyboard handling  
**Upgrade:** Same Dialog pattern as ImageDialog  
**Time:** 1-2 hours  
**Impact:** Better mobile UX, less code

### ✅ 2. Video Gallery → Radix Dialog  
**Current:** Non-functional play buttons  
**Upgrade:** Click to play video in overlay  
**Time:** 2-3 hours  
**Impact:** Actually functional video gallery!

### ✅ 3. Gallery Tabs → Radix Tabs
**Current:** Links that reload page  
**Upgrade:** Instant switching, keyboard nav  
**Time:** 3-4 hours  
**Impact:** No page reloads, better UX

### ✅ 4. Product Cards → Radix HoverCard
**Current:** Simple cards  
**Upgrade:** Rich hover previews  
**Time:** 4-6 hours  
**Impact:** More product info without clicks

---

## 📦 What's in radix-ui Package?

You have access to **20+ primitives**:

### Interactive Overlays
- ✅ **Dialog** - Modals (already using!)
- **HoverCard** - Rich hover previews
- **Popover** - Floating menus
- **Tooltip** - Helpful hints
- **ContextMenu** - Right-click menus
- **DropdownMenu** - Action menus

### Navigation
- **Tabs** - Tab interfaces
- **NavigationMenu** - Mega menus
- **Accordion** - Collapsible sections

### Forms
- **Select** - Custom dropdowns
- **Checkbox** - Styled checkboxes
- **RadioGroup** - Radio buttons
- **Switch** - Toggle switches
- **Slider** - Range inputs

### Content
- **Collapsible** - Show/hide content
- **ScrollArea** - Custom scrollbars
- **Separator** - Visual dividers
- **AspectRatio** - Image containers

### Feedback
- **Toast** - Notifications
- **Progress** - Progress bars
- **AlertDialog** - Confirmations

---

## 🚀 Quick Start Examples

### Dialog (you're already using this!)
```tsx
import { Dialog } from 'radix-ui';

<Dialog.Root>
  <Dialog.Trigger asChild>
    <button>Open</button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      {/* Your content */}
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### Tabs (for Gallery)
```tsx
import { Tabs } from 'radix-ui';

<Tabs.Root defaultValue="images">
  <Tabs.List>
    <Tabs.Trigger value="images">Images</Tabs.Trigger>
    <Tabs.Trigger value="videos">Videos</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="images">{/* images */}</Tabs.Content>
  <Tabs.Content value="videos">{/* videos */}</Tabs.Content>
</Tabs.Root>
```

### HoverCard (for Products)
```tsx
import { HoverCard } from 'radix-ui';

<HoverCard.Root>
  <HoverCard.Trigger asChild>
    <Card>{/* product card */}</Card>
  </HoverCard.Trigger>
  <HoverCard.Portal>
    <HoverCard.Content>
      {/* Rich product details */}
    </HoverCard.Content>
  </HoverCard.Portal>
</HoverCard.Root>
```

### Tooltip (for Contact)
```tsx
import { Tooltip } from 'radix-ui';

<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <button>📞 {phone}</button>
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content>
      Click to copy
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>
```

---

## 💰 ROI Summary

| Upgrade | Time | Lines Removed | Accessibility Boost | UX Improvement |
|---------|------|---------------|---------------------|----------------|
| MobileMenu | 1-2h | ~40 lines | ⭐⭐⭐ | ⭐⭐⭐ |
| Video Player | 2-3h | ~20 lines | ⭐⭐⭐ | ⭐⭐⭐ |
| Gallery Tabs | 3-4h | ~30 lines | ⭐⭐⭐ | ⭐⭐⭐ |
| Product HoverCard | 4-6h | ~15 lines | ⭐⭐ | ⭐⭐ |

**Total savings:** ~105 lines of custom code  
**Total accessibility improvements:** Massive  
**Total time investment:** 10-15 hours

---

## 🎨 Styling Pattern (same as ImageDialog)

All Radix primitives are **unstyled** - you style them with Vanilla Extract:

```tsx
// Component.tsx
import { Dialog } from 'radix-ui';
import { overlay, content } from './Component.css';

<Dialog.Overlay className={overlay} />
<Dialog.Content className={content} />
```

```ts
// Component.css.ts
import { style } from '@vanilla-extract/css';

export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  // ...your styles
});
```

---

## ✨ Key Benefits of Radix

1. **Accessibility** - ARIA, keyboard nav, focus management built-in
2. **Unstyled** - Complete design control (works with Vanilla Extract!)
3. **Composable** - Build exactly what you need
4. **Battle-tested** - Used by Vercel, GitHub, Linear, etc.
5. **Tree-shakeable** - Only import what you use
6. **No dependencies** - Just React peer dependency

---

## 📖 Learn More

- **Docs:** https://www.radix-ui.com/primitives
- **Each primitive has:** Live examples, API reference, accessibility notes
- **Pattern:** All primitives follow similar API (Root, Trigger, Content, Portal)

---

*See RADIX_UI_OPPORTUNITIES.md for detailed analysis*
