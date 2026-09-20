# What I Do Section

## Purpose

Defines the "What I Do" section that showcases core service capabilities on the homepage with responsive card layout and consistent styling.

## Requirements

### Requirement: What I Do section display
The system SHALL display a "What I Do" section after the hero banner on the homepage.

#### Scenario: Section renders on homepage
- **WHEN** user views the homepage
- **THEN** "What I Do" section is visible between hero and about sections

### Requirement: Three service cards
The system SHALL display 3 service cards: Backend Development, Frontend Development, and Deployment & DevOps.

#### Scenario: All three cards are visible
- **WHEN** user views the "What I Do" section
- **THEN** Backend, Frontend, and Deployment cards are displayed

#### Scenario: Each card has required content
- **WHEN** user views a service card
- **THEN** card displays icon, title, description, and relevant skill tags

### Requirement: Responsive layout
The system SHALL display cards in a 3-column grid on desktop and single column on mobile.

#### Scenario: Desktop layout
- **WHEN** user views on desktop (viewport ≥ 768px)
- **THEN** cards display in a 3-column grid

#### Scenario: Mobile layout
- **WHEN** user views on mobile (viewport < 768px)
- **THEN** cards display in a single column, stacked vertically

### Requirement: Card styling consistency
The system SHALL style cards using the glass-morphism design language.

#### Scenario: Cards have glass effect
- **WHEN** service cards render
- **THEN** cards display with glass-morphism background and consistent styling

### Requirement: Navigation support
The system SHALL include the section in navigation with id "what-i-do".

#### Scenario: Section is navigable
- **WHEN** user clicks "What I Do" in navbar
- **THEN** page scrolls to the what-i-do section
