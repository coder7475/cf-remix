## Context

The portfolio site is a Remix application using Tailwind CSS with CSS custom properties for theming. Currently, only a dark theme is defined in `:root`. The tailwind config already has `darkMode: ["class"]` enabled. The `black-theme-tokens` spec defines the current dark theme tokens. Components use CSS variable-based classes (`text-foreground`, `bg-background`) rather than Tailwind `dark:` prefixed utilities, which simplifies theme switching.

## Goals / Non-Goals

**Goals:**
- Keep dark theme as the default (current state)
- Add light theme CSS variables that activate via a `.light` class
- Create a toggle button in the navbar to switch between themes
- Persist user preference in localStorage
- Prevent flash of unstyled/wrong content on page load (SSR-safe)

**Non-Goals:**
- System preference detection (future enhancement)
- Theme transition animations
- Per-page theme overrides
- Dark/light mode for email templates or static exports

## Decisions

### 1. Use `.light` class on `<html>` for light mode
**Decision**: Apply the `light` class to `<html>` element to activate light theme. Dark theme is the default (no class needed).

**Rationale**: 
- Dark theme is already the default in `:root` - no CSS changes needed for dark
- Components use CSS variable-based classes, not Tailwind `dark:` utilities, so no Tailwind config changes needed
- Matches the existing site behavior - dark works out of the box
- Light theme activates only when `.light` class is present

**Alternatives considered**:
- Use `.dark` class for dark mode, flip CSS variables: Rejected because it would require changing all existing dark tokens and break the current working state
- Use `data-theme` attribute: Rejected because it adds complexity without benefit for this use case

### 2. Keep dark tokens in `:root`, add `.light` for light overrides
**Decision**: Keep existing dark theme values in `:root`. Add light theme values under `.light` selector.

**Rationale**:
- Zero risk to existing dark theme - it stays exactly as-is
- Light theme is purely additive
- No flash on first visit for returning users (dark is immediate)
- New users get dark by default, can switch to light if preferred

**Alternatives considered**:
- Move dark to `.dark` selector: Rejected because it would require reworking all existing tokens and risk breaking the current site

### 3. SSR-safe hydration with inline script
**Decision**: Add an inline `<script>` in `<head>` that reads `localStorage` and applies the `.light` class before React hydration.

**Rationale**:
- Runs before any rendering
- Prevents flash of wrong theme
- For first-time visitors, no script action needed (dark is default)

### 4. Theme toggle component in navbar
**Decision**: Create a `ThemeToggle` component using `sun` and `moon` icons from `lucide-react`.

**Rationale**:
- Consistent with existing icon library (already using `Menu`, `X`)
- Standard UX pattern for theme switching
- Accessible with proper aria labels

### 5. localStorage key convention
**Decision**: Use `theme` key with values `"light"` | `"dark"`.

**Rationale**: Simple, descriptive, and follows common conventions. No need for complex storage.

## Risks / Trade-offs

- **Flash of wrong theme on first visit**: Mitigated - dark is default, returning users with light preference get `.light` class applied before paint
- **CSS specificity conflicts**: `.light` class on `<html>` gives sufficient specificity. Monitor for any component-level overrides
- **Theme persistence across tabs**: localStorage syncs automatically. No special handling needed
- **Increased CSS bundle**: Minimal impact since we're reusing existing token structure
