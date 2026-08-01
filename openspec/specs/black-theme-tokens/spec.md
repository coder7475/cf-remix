# Black Theme Tokens

## Purpose

Define the CSS custom properties and design tokens for the pure black theme implementation across the site.

## Requirements

### Requirement: Pure black background
The site background SHALL use pure black (`#000000` / `hsl(0, 0%, 0%)`) as the base background color. The `--background` CSS custom property SHALL be set to `0 0% 0%` in `:root`. When the `.light` class is present on `<html>`, the background SHALL use a light color.

#### Scenario: Page background is pure black by default
- **WHEN** user views any page without `.light` class
- **THEN** the body background color is `#000000`

#### Scenario: Page background is light when light theme active
- **WHEN** user views any page with `.light` class active
- **THEN** the body background color is a light shade (not black)

### Requirement: Neutral gray color tokens
All neutral color tokens (`--secondary`, `--muted`, `--border`, `--input`, `--card`, `--popover`) SHALL use true neutral grays (`hsl(0, 0%, X%)`) without any blue or color tint in dark mode (default). Light mode SHALL use appropriate lighter neutral grays.

#### Scenario: Secondary color is neutral gray by default
- **WHEN** user views any element styled with `bg-secondary` without `.light` class
- **THEN** the background color has no blue or color tint (hue is 0 or undefined)

#### Scenario: Secondary color is light neutral in light mode
- **WHEN** user views any element styled with `bg-secondary` with `.light` class
- **THEN** the background color is a light neutral gray

#### Scenario: Border color is neutral gray by default
- **WHEN** user views any element with a border without `.light` class
- **THEN** the border color is a neutral gray without color tint

#### Scenario: Border color is light neutral in light mode
- **WHEN** user views any element with a border with `.light` class
- **THEN** the border color is a light neutral gray

### Requirement: Refined glassmorphism cards
The `.glass-morphism` utility SHALL adapt to the active theme. In dark mode (default), it SHALL use `bg-white/[0.03]` background with subtle white border. In light mode, it SHALL use appropriate light theme styling.

#### Scenario: Glass card appearance in dark mode
- **WHEN** user views a glass-morphism card without `.light` class
- **THEN** the card has a very subtle white tint background, faint white border, and dark shadow

#### Scenario: Glass card appearance in light mode
- **WHEN** user views a glass-morphism card with `.light` class
- **THEN** the card has appropriate light theme styling with subtle depth

### Requirement: Subtle radial gradient overlays
The `page-shell` background image SHALL adapt to the active theme. In dark mode (default), it SHALL use cyan radial gradients. In light mode, it SHALL use appropriate subtle gradients for light backgrounds.

#### Scenario: Gradient overlays in dark mode
- **WHEN** user views the page background without `.light` class
- **THEN** radial gradient glows are visible but subtle, not overpowering

#### Scenario: Gradient overlays in light mode
- **WHEN** user views the page background with `.light` class
- **THEN** subtle gradients are visible that complement the light theme

### Requirement: Cyan accent color preserved
The primary accent color SHALL remain at `hsl(180, 95%, 50%)` (cyan/teal) in both themes. This token SHALL NOT be changed.

#### Scenario: Primary color unchanged in dark mode
- **WHEN** user views any element styled with `text-primary` or `bg-primary` without `.light` class
- **THEN** the color is cyan/teal (`hsl(180, 95%, 50%)`)

#### Scenario: Primary color unchanged in light mode
- **WHEN** user views any element styled with `text-primary` or `bg-primary` with `.light` class
- **THEN** the color is cyan/teal (`hsl(180, 95%, 50%)`)
