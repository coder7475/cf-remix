## MODIFIED Requirements

### Requirement: Theme toggle button
The navbar SHALL include a visible theme toggle button that allows users to switch between system, dark, and light themes.

#### Scenario: Toggle button is visible in desktop navbar
- **WHEN** user views the desktop navbar
- **THEN** a theme toggle button is visible and accessible

#### Scenario: Toggle button is visible in mobile navbar
- **WHEN** user opens the mobile menu
- **THEN** a theme toggle button is visible and accessible

### Requirement: Theme switching mechanism
The system SHALL cycle through three theme preferences when the toggle is activated: system → dark → light → system. The system SHALL toggle the `light` class on the `<html>` element based on the resolved theme.

#### Scenario: Switching from system to dark
- **WHEN** user is on system preference and clicks the theme toggle
- **THEN** the theme is set to dark, the `light` class is removed from `<html>`, and the site displays dark theme colors

#### Scenario: Switching from dark to light
- **WHEN** user is on dark theme and clicks the theme toggle
- **THEN** the theme is set to light, the `light` class is added to `<html>`, and the site displays light theme colors

#### Scenario: Switching from light to system
- **WHEN** user is on light theme and clicks the theme toggle
- **THEN** the theme is set to system, the `light` class is added or removed based on `prefers-color-scheme`, and the site follows the OS preference

### Requirement: Theme persistence
The system SHALL persist the user's theme preference in `localStorage` under the key `theme`. Valid values are `"light"`, `"dark"`, and `"system"`.

#### Scenario: Theme preference is saved
- **WHEN** user switches theme
- **THEN** the new theme value (`"light"`, `"dark"`, or `"system"`) is stored in `localStorage.theme`

#### Scenario: Theme preference is restored on return
- **WHEN** user visits the site with a saved theme preference in `localStorage`
- **THEN** the site renders with the previously selected theme preference

#### Scenario: Default preference is system
- **WHEN** user visits the site for the first time (no localStorage value)
- **THEN** the theme preference defaults to `"system"` and follows the OS `prefers-color-scheme`

### Requirement: SSR-safe hydration
The system SHALL prevent flash of wrong theme during server-side rendering and hydration. The system SHALL resolve the effective theme (light or dark) from system preference when the stored value is `"system"`.

#### Scenario: No flash on initial load with system preference
- **WHEN** user loads the page and has `"system"` stored in localStorage
- **THEN** the page renders with the OS-preferred theme from the first paint, without a flash

#### Scenario: No flash on first visit
- **WHEN** user visits the site for the first time (no localStorage)
- **THEN** the page renders with the OS-preferred theme (or dark if `prefers-color-scheme` is not supported)

### Requirement: Accessible toggle
The theme toggle button SHALL include appropriate ARIA attributes for screen readers. The aria-label SHALL reflect the next action.

#### Scenario: Toggle has aria-label
- **WHEN** screen reader encounters the theme toggle button
- **THEN** it announces the next action (e.g., "Switch to dark mode", "Switch to light mode", or "Switch to system preference")

#### Scenario: Toggle is keyboard accessible
- **WHEN** user navigates to the theme toggle using keyboard
- **THEN** the toggle is focusable and activates on Enter or Space
