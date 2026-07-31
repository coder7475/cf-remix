## 1. Design System Foundation

- [x] 1.1 Add Space Grotesk font import to `root.tsx` and `tailwind.css` (Google Fonts link + @font-face or @import)
- [x] 1.2 Update `tailwind.config.ts` to add `font-display` family mapping to Space Grotesk (keep Manrope as fallback initially)
- [x] 1.3 Update CSS custom properties in `tailwind.css` — change `--primary` from cyan (180 95% 50%) to blue (217 91% 60%), add amber accent variable, update `--background` to #09090B, `--card` to #18181B, `--border` to #27272A, `--muted-foreground` to zinc-400 equivalent
- [x] 1.4 Update `.page-shell` background color and gradient overlays in `tailwind.css` to match new palette
- [x] 1.5 Update `.text-gradient` and `.glass-morphism` utility classes to work with the refined palette

## 2. Hero Section Redesign

- [x] 2.1 Restructure `Banner.tsx` from centered layout to two-column asymmetric (60/40) using Tailwind grid/flex
- [x] 2.2 Update hero typography: name in Space Grotesk bold text-5xl/text-7xl, role in JetBrains Mono uppercase tracking-widest blue-500
- [x] 2.3 Add code-adjacent visual element on the right column (animated ASCII server topology or minimal system diagram using CSS)
- [x] 2.4 Implement staggered page-load entrance animation (role → name → tagline → visual element with 100-200ms delays)
- [x] 2.5 Add `prefers-reduced-motion` media query to disable hero animations
- [x] 2.6 Ensure hero stacks to single column on mobile (viewport <= 768px)

## 3. About Section Polish

- [x] 3.1 Restructure `AboutMe.tsx` — left-aligned heading with vertical blue accent line, asymmetric text/image columns
- [x] 3.2 Update heading to use Space Grotesk (text-3xl/text-4xl tracking-tight)
- [x] 3.3 Ensure mobile responsive stacking

## 4. Skills Section Polish

- [x] 4.1 Restructure `Skills.tsx` — replace uniform 3-column grid with segmented/category layout (tabs, segmented sections, or accordion groups)
- [x] 4.2 Update skill category headings to Space Grotesk
- [x] 4.3 Ensure mobile responsive layout (categories stack vertically)

## 5. Experience Section Polish

- [x] 5.1 Restructure `Experience.tsx` — replace centered alternating timeline with left-rail timeline (vertical line on left, cards extending right)
- [x] 5.2 Update experience entry card styling and typography to use new type scale
- [x] 5.3 Ensure mobile responsive layout

## 6. Projects Section Polish

- [x] 6.1 Restructure `Projects.tsx` — replace uniform 2-column grid with staggered/masonry-style layout
- [x] 6.2 Add hover-reveal interaction for project details (tech stack, links emphasize on hover)
- [x] 6.3 Update project card styling to use new type scale and color palette
- [x] 6.4 Ensure mobile responsive layout

## 7. Contact Section Polish

- [x] 7.1 Restructure `GetInTouch.tsx` — full-width form with compact sidebar/inline contact info
- [x] 7.2 Update form input styling to use new color palette (zinc-900 surfaces, blue-500 focus rings)
- [x] 7.3 Ensure mobile responsive layout

## 8. Blog Page Polish

- [x] 8.1 Restructure `Blog.tsx` — featured article as full-width card, remaining articles in 2-column grid
- [x] 8.2 Update article title typography to Space Grotesk semibold/bold
- [x] 8.3 Update metadata (date, reading time) to JetBrains Mono uppercase tracking-widest
- [x] 8.4 Apply new color palette (zinc-900 card surfaces, blue-500 interactive elements)
- [x] 8.5 Add generous vertical spacing between cards (min 2rem featured-to-grid, 1.5rem grid gaps)
- [x] 8.6 Implement staggered card entrance animation with prefers-reduced-motion support
- [x] 8.7 Update "View all articles" link styling (Space Grotesk, blue-500, ArrowRight icon, hover transition)

## 9. Cross-Cutting: Reduced Motion & Polish

- [x] 9.1 Add global `prefers-reduced-motion` media query in `tailwind.css` that disables all scroll-triggered animations
- [x] 9.2 Audit all section reveal animations (Intersection Observer) to ensure they respect reduced motion
- [x] 9.3 Verify WCAG AA contrast for blue-500 on #09090B background and amber on dark backgrounds
- [x] 9.4 Test responsive behavior at 375px, 768px, and 1280px breakpoints
- [x] 9.5 Remove any unused CSS classes or animation keyframes from old design
