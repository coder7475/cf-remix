## Why

The portfolio site currently only supports a dark theme. Users viewing in bright environments or preferring light interfaces have no option to switch. Adding a dark/white theme toggle improves accessibility and user experience across different viewing conditions.

## What Changes

- Add light theme CSS variables alongside existing dark theme tokens
- Create a theme toggle button component in the navbar
- Implement theme persistence using localStorage
- Handle SSR hydration to prevent flash of wrong theme

## Capabilities

### New Capabilities
- `theme-switching`: Core toggle logic, CSS variable swapping, localStorage persistence, and SSR-safe hydration

### Modified Capabilities
- `black-theme-tokens`: Extend with light theme variant (requires delta spec)

## Impact

- `app/tailwind.css`: Add `.dark` class-scoped light theme variables
- `app/components/Navbar.tsx`: Add theme toggle button
- New file: `app/components/ThemeToggle.tsx`
- New file: `app/hooks/use-theme.ts`
- `app/root.tsx`: Add inline script for SSR theme initialization
