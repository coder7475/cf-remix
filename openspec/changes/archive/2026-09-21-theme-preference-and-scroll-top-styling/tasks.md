## 1. Theme System Updates

- [x] 1.1 Update `use-theme.ts`: expand Theme type to `"light" | "dark" | "system"`, default to `"system"`
- [x] 1.2 Add `prefers-color-scheme` listener in `useTheme` to resolve system preference to light/dark
- [x] 1.3 Add `resolvedTheme` return value (always "light" or "dark") separate from preference
- [x] 1.4 Update `applyTheme` to use resolvedTheme instead of raw preference
- [x] 1.5 Update root.tsx inline script to detect system preference via matchMedia for SSR-safe initial render

## 2. ThemeToggle Component

- [x] 2.1 Update ThemeToggle to cycle through system → dark → light states
- [x] 2.2 Add Monitor icon (lucide) for system state alongside Sun/Moon
- [x] 2.3 Update aria-label to reflect the next action in the cycle

## 3. ScrollToTop Theme Styling

- [x] 3.1 Add CSS custom properties for scroll-to-top colors in tailwind.css (background, hover, border)
- [x] 3.2 Update ScrollToTop inline styles to use CSS custom properties instead of hardcoded hex values
- [x] 3.3 Add light-mode overrides for scroll-to-top border color

## 4. Verification

- [x] 4.1 Run `pnpm run typecheck` to confirm no type errors
- [x] 4.2 Run `pnpm run lint` to confirm no lint errors
