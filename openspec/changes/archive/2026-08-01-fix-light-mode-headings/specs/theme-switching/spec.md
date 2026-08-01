## MODIFIED Requirements

### Requirement: Theme switching mechanism
The system SHALL toggle the `light` class on the `<html>` element when the user activates the theme toggle. All UI elements SHALL be visible and legible in both themes.

#### Scenario: Section headings visible in light mode
- **WHEN** user views any section heading with `.light` class active
- **THEN** the heading text is visible with appropriate contrast against the light background

#### Scenario: Section headings visible in dark mode
- **WHEN** user views any section heading without `.light` class
- **THEN** the heading text is visible with appropriate contrast against the dark background
