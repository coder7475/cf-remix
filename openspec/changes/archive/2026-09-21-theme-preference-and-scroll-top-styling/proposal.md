## Why

The scroll-to-top button uses hardcoded colors (#c9a84c, #1f1a12) that don't adapt to the current theme, breaking visual consistency. The theme system only supports binary light/dark toggle with no system preference detection, forcing users to manually switch and defaulting to dark regardless of OS setting.

## What Changes

- ScrollToTop button uses CSS custom properties for background, hover, and border colors that respond to theme
- Theme preference expands from "light" | "dark" to "light" | "dark" | "system"
- Default preference changes to "system" — respects `prefers-color-scheme` media query
- ThemeToggle component updates to cycle through three states (system → dark → light)
- SSR inline script in root.tsx handles system preference detection before hydration

## Capabilities

### New Capabilities
- `scroll-to-top`: Theme-aware styling using CSS custom properties for background, hover, and border

### Modified Capabilities
- `theme-switching`: Add "system" as third preference option, default to system, detect `prefers-color-scheme`

## Impact

- `app/components/ScrollToTop.tsx` — replace hardcoded colors with CSS variables
- `app/hooks/use-theme.ts` — add "system" type, `prefers-color-scheme` listener, resolve actual theme
- `app/components/ThemeToggle.tsx` — cycle through system/dark/light states
- `app/root.tsx` — update inline script to handle system preference on initial load
- `app/tailwind.css` — add CSS custom properties for scroll-to-top colors
