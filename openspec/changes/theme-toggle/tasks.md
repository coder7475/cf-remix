## 1. CSS Theme Variables

- [x] 1.1 Add light theme CSS variables under `.light` selector in `app/tailwind.css`
- [x] 1.2 Update `.glass-morphism` utility for light theme support under `.light`
- [x] 1.3 Update `.page-shell` gradient for light theme under `.light`

## 2. Theme Hook

- [x] 2.1 Create `app/hooks/use-theme.ts` with theme state management
- [x] 2.2 Implement localStorage read/write for theme persistence
- [x] 2.3 Add `useEffect` to toggle `.light` class on `<html>` element

## 3. Theme Toggle Component

- [x] 3.1 Create `app/components/ThemeToggle.tsx` with sun/moon icons
- [x] 3.2 Implement toggle click handler to switch theme
- [x] 3.3 Add aria-label that reflects current state
- [x] 3.4 Style toggle button to match navbar design

## 4. Navbar Integration

- [x] 4.1 Add ThemeToggle to desktop navbar
- [x] 4.2 Add ThemeToggle to mobile menu
- [x] 4.3 Verify toggle is accessible and keyboard navigable

## 5. SSR Hydration

- [x] 5.1 Add inline script in `app/root.tsx` `<head>` to read localStorage
- [x] 5.2 Apply `.light` class before React hydration if preference is light
- [ ] 5.3 Test SSR behavior with light theme preference saved

## 6. Testing

- [ ] 6.1 Verify theme toggle works on desktop viewport
- [ ] 6.2 Verify theme toggle works on mobile viewport
- [ ] 6.3 Verify theme persists across page reloads
- [ ] 6.4 Verify no flash of wrong theme on initial load
- [ ] 6.5 Verify all components render correctly in both themes
