# Theme Switching

## Purpose

Define the theme toggle mechanism allowing users to switch between dark and light themes, with persistence and SSR-safe hydration.

## Requirements

### Requirement: Theme toggle button
The navbar SHALL include a visible theme toggle button that allows users to switch between dark and light themes.

#### Scenario: Toggle button is visible in desktop navbar
- **WHEN** user views the desktop navbar
- **THEN** a theme toggle button is visible and accessible

#### Scenario: Toggle button is visible in mobile navbar
- **WHEN** user opens the mobile menu
- **THEN** a theme toggle button is visible and accessible

### Requirement: Theme switching mechanism
The system SHALL toggle the `light` class on the `<html>` element when the user activates the theme toggle.

#### Scenario: Switching from dark to light
- **WHEN** user is viewing the site in dark theme (default) and clicks the theme toggle
- **THEN** the `light` class is added to `<html>` and the site displays light theme colors

#### Scenario: Switching from light to dark
- **WHEN** user is viewing the site in light theme and clicks the theme toggle
- **THEN** the `light` class is removed from `<html>` and the site displays dark theme colors

### Requirement: Theme persistence
The system SHALL persist the user's theme preference in `localStorage` under the key `theme`.

#### Scenario: Theme preference is saved
- **WHEN** user switches theme
- **THEN** the new theme value (`"light"` or `"dark"`) is stored in `localStorage.theme`

#### Scenario: Theme preference is restored on return
- **WHEN** user visits the site with a saved theme preference in `localStorage`
- **THEN** the site renders with the previously selected theme

### Requirement: SSR-safe hydration
The system SHALL prevent flash of wrong theme during server-side rendering and hydration.

#### Scenario: No flash on initial load
- **WHEN** user loads the page and has a light theme preference saved
- **THEN** the page renders with light theme from the first paint, without a flash of dark theme

#### Scenario: No flash on first visit
- **WHEN** user visits the site for the first time (no localStorage)
- **THEN** the page renders with the default dark theme

### Requirement: Accessible toggle
The theme toggle button SHALL include appropriate ARIA attributes for screen readers.

#### Scenario: Toggle has aria-label
- **WHEN** screen reader encounters the theme toggle button
- **THEN** it announces the current action (e.g., "Switch to light mode" or "Switch to dark mode")

#### Scenario: Toggle is keyboard accessible
- **WHEN** user navigates to the theme toggle using keyboard
- **THEN** the toggle is focusable and activates on Enter or Space
