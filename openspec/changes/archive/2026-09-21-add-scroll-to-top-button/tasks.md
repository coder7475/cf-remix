## 1. Component Creation

- [x] 1.1 Create `app/components/ScrollToTop.tsx` with button markup, SVG icon, and aria-label
- [x] 1.2 Add CSS styles for button positioning, sizing, transitions, and responsive breakpoints
- [x] 1.3 Implement scroll detection logic with 300px threshold and `{ passive: true }` listener
- [x] 1.4 Implement smooth scroll-to-top on click (window, documentElement, and pageWrapper)
- [x] 1.5 Add hover state with `@media (hover: hover)` media query

## 2. Integration

- [x] 2.1 Import and render `ScrollToTop` in `app/root.tsx` inside the page wrapper
- [x] 2.2 Verify button does not render duplicate instances on navigation

## 3. Verification

- [x] 3.1 Run `pnpm run typecheck` to confirm no type errors
- [x] 3.2 Run `pnpm run lint` to confirm no lint errors
