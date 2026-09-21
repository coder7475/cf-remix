## ADDED Requirements

### Requirement: Scroll-to-top button theme colors
The scroll-to-top button SHALL use CSS custom properties for background, hover background, and border colors that respond to the active theme.

#### Scenario: Button colors in dark mode
- **WHEN** the site is in dark theme
- **THEN** the button background is gold (#c9a84c), hover background is dark (#1f1a12), and border is white (#fff)

#### Scenario: Button colors in light mode
- **WHEN** the site is in light theme
- **THEN** the button background is gold (#c9a84c), hover background is dark (#1f1a12), and border is a visible color appropriate for light backgrounds

#### Scenario: Theme transition updates button
- **WHEN** the user switches theme while the button is visible
- **THEN** the button colors update to match the new theme without page reload
