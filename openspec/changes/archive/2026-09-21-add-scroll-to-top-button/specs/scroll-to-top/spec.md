## ADDED Requirements

### Requirement: Scroll-to-top button visibility
The system SHALL display a fixed-position scroll-to-top button after the user scrolls past 300px from the top of the page.

#### Scenario: Button hidden at top
- **WHEN** page scroll position is less than or equal to 300px
- **THEN** the scroll-to-top button is not visible

#### Scenario: Button visible after scrolling
- **WHEN** page scroll position exceeds 300px
- **THEN** the scroll-to-top button is visible with a fade-in animation

### Requirement: Scroll-to-top action
The system SHALL scroll the page smoothly to the top when the button is clicked.

#### Scenario: Click scrolls to top
- **WHEN** user clicks the scroll-to-top button
- **THEN** the page scrolls smoothly to position 0

### Requirement: Responsive sizing
The system SHALL render the scroll-to-top button at 46px on desktop and 42px on mobile (viewport width 749px or less).

#### Scenario: Desktop button size
- **WHEN** viewport width is 750px or greater
- **THEN** the button is 46px by 46px with 2rem offset from right and bottom edges

#### Scenario: Mobile button size
- **WHEN** viewport width is 749px or less
- **THEN** the button is 42px by 42px with 1rem offset from right and bottom edges

### Requirement: Accessible markup
The system SHALL include an aria-label "Scroll to top" and aria-hidden="true" on the SVG icon.

#### Scenario: Screen reader announces button
- **WHEN** user focuses the scroll-to-top button via keyboard or screen reader
- **THEN** the button is announced as "Scroll to top"

### Requirement: Hover interaction
The system SHALL change button background from gold (#c9a84c) to dark (#1f1a12) on hover, only on devices that support hover.

#### Scenario: Hover on capable device
- **WHEN** user hovers over the button on a device with hover capability
- **THEN** the button background transitions to dark (#1f1a12)

#### Scenario: No hover on touch device
- **WHEN** user taps the button on a touch-only device
- **THEN** the button background remains gold (#c9a84c)
