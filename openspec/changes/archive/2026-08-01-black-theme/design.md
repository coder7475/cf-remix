## Context

The portfolio uses a CSS custom property system defined in `tailwind.css` with HSL color tokens. The current theme is a dark navy (`#020617`) with cyan accents (`hsl(180, 95%, 50%)`) and blue-tinted neutrals. The reference site (robiulhossain.com) uses a pure-black aesthetic with deeper blacks, more refined glassmorphism, and cleaner gradient effects. All components consume these tokens via Tailwind classes (`bg-background`, `text-foreground`, `bg-primary`, etc.), so updating the tokens propagates to every component automatically.

## Goals / Non-Goals

**Goals:**
- Refine CSS custom properties to use true black and neutral gray tones
- Update `page-shell` background to pure black with more subtle radial gradient glows
- Refine glassmorphism card styling (less blur, adjusted borders/shadows)
- Update `neo-blur`, `text-gradient` utilities to match the new palette
- Ensure visual consistency across all components

**Non-Goals:**
- Changing component structure or layout
- Adding new components or features
- Changing the cyan accent color (stays at `hsl(180, 95%, 50%)`)
- Modifying typography or font families
- Changing the dark mode toggle behavior

## Decisions

### 1. Background color approach
**Decision**: Change `page-shell` background from `#020617` to `#000000` (pure black) and update `--background` token to `0 0% 0%`.
**Rationale**: Pure black provides the deepest possible dark theme, matches the reference site, and creates maximum contrast with the cyan accent. OLED-friendly.
**Alternatives considered**: Near-black like `#0a0a0a` (rejected — not pure enough for the target aesthetic).

### 2. Neutral tone palette
**Decision**: Replace blue-tinted neutrals with true grays: `--secondary: 0 0% 8%`, `--muted: 0 0% 10%`, `--border: 0 0% 14%`, `--input: 0 0% 14%`, `--card: 0 0% 5%`.
**Rationale**: Blue-tinted grays create a subtle blue cast. True neutral grays (`hsl(0, 0%, X%)`) keep the focus on the cyan accent and pure-black background.
**Alternatives considered**: Keeping blue tints but darkening them (rejected — still creates color cast).

### 3. Glassmorphism refinement
**Decision**: Update `.glass-morphism` to use `bg-white/[0.03]`, `border-white/[0.06]`, and reduced shadow.
**Rationale**: Current `bg-white/5` with `border-cyan-400/10` is too visible against pure black. Subtler glass effect matches the reference site's card style.
**Alternatives considered**: Fully transparent cards with only borders (rejected — loses the glass depth effect).

### 4. Radial gradient overlays
**Decision**: Update `page-shell` gradient colors from `rgba(6, 249, 249, 0.18)` to `rgba(6, 249, 249, 0.12)` and reposition for better visual balance.
**Rationale**: On pure black, the current gradient opacity is too strong. Reducing opacity creates a more subtle, premium feel.
**Alternatives considered**: Removing gradients entirely (rejected — they add visual interest without being distracting).

## Risks / Trade-offs

- **[Risk]** Pure black may feel too stark on non-OLED monitors → **Mitigation**: The radial gradient overlays add subtle color depth; can adjust opacity if needed.
- **[Risk]** Glassmorphism cards may become too subtle → **Mitigation**: Keep a visible border (`border-white/[0.06]`) and shadow for card definition.
- **[Trade-off]** Removing blue tints from neutrals loses the "cold" feel → Acceptable — the cyan accent provides the cold tone.
