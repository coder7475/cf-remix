## Context

The portfolio site has a binary light/dark theme toggle that defaults to dark, ignoring OS preference. The scroll-to-top button (recently added) uses hardcoded gold (#c9a84c) and dark (#1f1a12) colors that don't adapt when the theme changes. The inline script in root.tsx only checks localStorage, not `prefers-color-scheme`.

## Goals / Non-Goals

**Goals:**
- ScrollToTop button colors respond to theme via CSS custom properties
- Three-state theme preference: system / dark / light
- Default to system preference on first visit
- SSR-safe: no flash of wrong theme on initial load
- ThemeToggle cycles through system → dark → light

**Non-Goals:**
- Changing the visual design of existing theme tokens
- Adding a theme preference UI beyond the toggle button
- Persisting system preference changes mid-session (system always reflects OS)

## Decisions

**CSS custom properties over inline styles for ScrollToTop**
The button's inline `<style>` tag can reference CSS variables defined in `tailwind.css`. This keeps colors theme-aware without adding React state or re-renders to a component that uses direct DOM manipulation. Alternatives: (a) pass theme via data attribute + CSS selectors — more coupling; (b) use useTheme() in ScrollToTop — forces re-render on every scroll tick.

**"system" as literal localStorage value**
Storing `"system"` in localStorage (instead of resolving to "light"/"dark") preserves the user's intent. The resolved theme is computed at runtime via `matchMedia`. On first visit or when value is missing, default to `"system"`.

**matchMedia listener for system preference changes**
Listen to `prefers-color-scheme` changes via `matchMedia("(prefers-color-scheme: light)")`. When preference is "system", update the DOM class live as the OS toggles. No need for polling or interval checks.

**ThemeToggle cycles: system → dark → light**
Three-state cycle with visual indicators: Sun icon for light, Moon for dark, Monitor icon for system. The aria-label reflects the next state (e.g., "Switch to dark mode" when currently system). This keeps a single button without adding a dropdown.

## Risks / Trade-offs

- [localStorage value change] Existing users with "light"/"dark" in localStorage will keep their preference — no migration needed. Only new users or cleared storage get "system" default.
- [matchMedia support] matchMedia is supported in all modern browsers; graceful fallback to "dark" for older browsers.
- [ScrollToTop border color] The 1px solid #fff border should adapt to theme — use a CSS variable. In light mode, white border on white background is invisible → change to a subtle dark border in light mode.
