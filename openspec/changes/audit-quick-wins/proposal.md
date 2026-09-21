## Why

The frontend audit identified 7 quick-win accessibility and performance improvements that are low-effort, high-impact. These fix layout shift, screen reader gaps, form usability, and keyboard navigation across the site.

## What Changes

- Add explicit `width`/`height` to profile image to prevent CLS
- Add `aria-describedby` to form inputs linked to error messages
- Add `autocomplete` attributes to form fields for better UX
- Add `role="button"` and `tabIndex={0}` to clickable non-interactive elements
- Add `aria-current="page"` to active navigation links
- Ensure all images have consistent `alt` attributes

## Capabilities

### New Capabilities

### Modified Capabilities

## Impact

- `app/components/AboutMe.tsx` — profile image width/height
- `app/components/GetInTouch.tsx` — form accessibility (aria-describedby, autocomplete)
- `app/components/Navbar.tsx` — aria-current on active links
- `app/components/Blog.tsx` — image alt consistency
