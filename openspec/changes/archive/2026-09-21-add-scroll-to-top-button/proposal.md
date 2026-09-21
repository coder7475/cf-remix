## Why

Long pages (homepage sections, project listings) require excessive scrolling to return to the top navigation. A scroll-to-top button provides a quick, accessible way to navigate back to the top, improving usability on both desktop and mobile.

## What Changes

- Add a fixed-position scroll-to-top button that appears after scrolling 300px
- Button uses smooth scroll behavior to return to page top
- Responsive sizing (smaller on mobile)
- Gold background (#c9a84c) with hover state transitioning to dark (#1f1a12)
- Accessible with aria-label and proper SVG icon

## Capabilities

### New Capabilities
- `scroll-to-top`: Fixed-position button that appears on scroll, smooth-scrolls to top, responsive sizing, accessible markup

### Modified Capabilities

## Impact

- New component: `app/components/ScrollToTop.tsx`
- Root layout: `app/root.tsx` (add component to page wrapper)
- No new dependencies
- No API changes
