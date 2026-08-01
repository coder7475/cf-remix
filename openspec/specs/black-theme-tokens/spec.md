# Black Theme Tokens

## Purpose

Define the CSS custom properties and design tokens for the pure black theme implementation across the site.

## Requirements

### Requirement: Pure black background
The site background SHALL use pure black (`#000000` / `hsl(0, 0%, 0%)`) as the base background color. The `--background` CSS custom property SHALL be set to `0 0% 0%`.

#### Scenario: Page background is pure black
- **WHEN** user loads any page
- **THEN** the body background color is `#000000`

### Requirement: Neutral gray color tokens
All neutral color tokens (`--secondary`, `--muted`, `--border`, `--input`, `--card`, `--popover`) SHALL use true neutral grays (`hsl(0, 0%, X%)`) without any blue or color tint.

#### Scenario: Secondary color is neutral gray
- **WHEN** user views any element styled with `bg-secondary`
- **THEN** the background color has no blue or color tint (hue is 0 or undefined)

#### Scenario: Border color is neutral gray
- **WHEN** user views any element with a border
- **THEN** the border color is a neutral gray without color tint

### Requirement: Refined glassmorphism cards
The `.glass-morphism` utility SHALL use `bg-white/[0.03]` background, `border-white/[0.06]` border, and a subtle dark shadow. The backdrop blur SHALL remain at `backdrop-blur-2xl`.

#### Scenario: Glass card appearance
- **WHEN** user views a glass-morphism card
- **THEN** the card has a very subtle white tint background, faint white border, and dark shadow

### Requirement: Subtle radial gradient overlays
The `page-shell` background image SHALL use cyan radial gradients with reduced opacity (approximately `rgba(6, 249, 249, 0.10)` to `rgba(6, 249, 249, 0.06)`) to create subtle color depth on the pure black background.

#### Scenario: Gradient overlays are subtle
- **WHEN** user views the page background
- **THEN** radial gradient glows are visible but subtle, not overpowering

### Requirement: Cyan accent color preserved
The primary accent color SHALL remain at `hsl(180, 95%, 50%)` (cyan/teal). This token SHALL NOT be changed.

#### Scenario: Primary color unchanged
- **WHEN** user views any element styled with `text-primary` or `bg-primary`
- **THEN** the color is cyan/teal (`hsl(180, 95%, 50%)`)
