## Why

The current site uses a dark navy theme (`#020617`) with cyan radial gradient overlays and glassmorphism cards. While dark, it doesn't match the cleaner, more refined black aesthetic of robiulhossain.com which uses deeper blacks, more subtle gradient effects, and cleaner card styling. The goal is to refine the color tokens, gradients, and glassmorphism to produce a polished pure-black theme with consistent cyan accents.

## What Changes

- Refine CSS custom properties to use true black (`#000000`) and near-black tones instead of navy
- Update the `page-shell` background from `#020617` to `#000000` with more subtle radial gradient glows
- Refine glassmorphism cards: reduce blur, adjust border opacity, tighten shadow
- Update `--border`, `--input`, `--muted` tokens to use neutral gray tones instead of blue-tinted values
- Adjust `--secondary` and `--card` tokens to match the pure-black palette
- Ensure all components (Navbar, Footer, section cards) render consistently with the new tokens

## Capabilities

### New Capabilities
- `black-theme-tokens`: Updated CSS custom properties for pure-black color palette with refined glassmorphism and gradient effects

### Modified Capabilities

## Impact

- **Files modified**: `app/tailwind.css` (color tokens, glass-morphism, page-shell, neo-blur)
- **Dependencies**: No new dependencies
- **Breaking changes**: None — only visual theme changes, no API or behavior changes
- **Scope**: All components render through the token system, so updating tokens propagates everywhere automatically
