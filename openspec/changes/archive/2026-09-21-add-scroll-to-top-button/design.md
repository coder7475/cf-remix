## Context

The portfolio site is a single-page Remix app with multiple sections (hero, about, projects, blog, contact). Users scrolling through long content have no quick way to return to the top navigation. The button uses vanilla JS with IntersectionObserver-free scroll detection, CSS transitions for visibility, and fixed positioning.

## Goals / Non-Goals

**Goals:**
- Provide a non-intrusive scroll-to-top affordance
- Keep the component self-contained (no external dependencies)
- Follow existing design tokens (gold accent, dark mode default)
- Accessible via keyboard and screen readers

**Non-Goals:**
- Animation library integration
- Scroll position persistence across navigation
- Custom scroll progress indicator

## Decisions

**Vanilla JS over React state for scroll detection**
Scroll events fire at high frequency. Using direct DOM class toggling (`classList.toggle`) avoids React re-render overhead. The button is a static UI element that doesn't need component state.

**CSS transitions over JS animation**
Opacity and transform transitions are GPU-accelerated and simpler to maintain. No animation library needed for a single visibility toggle.

**Fixed positioning over sticky**
Fixed ensures the button stays in the viewport regardless of scroll container. Sticky would require positioning relative to a scroll container, adding complexity.

**Gold (#c9a84c) background**
Matches the existing accent color used throughout the site. Hover state uses dark (#1f1a12) for contrast.

## Risks / Trade-offs

- [Performance] Scroll listener could impact scroll performance on low-end devices → Mitigated by using `{ passive: true }` and checking scroll position threshold (300px) rather than tracking every pixel
- [Z-index conflicts] Fixed positioning at z-index 99999 could overlap modals or menus → Acceptable since scroll-to-top is a utility action; can adjust if conflicts arise
- [No SSR scroll detection] Button visibility is client-only; initial render shows hidden button → Acceptable since button is invisible by default (opacity: 0)
