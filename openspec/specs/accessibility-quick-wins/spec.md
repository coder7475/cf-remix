# Accessibility Quick Wins

## Purpose

Improve accessibility across the portfolio site with targeted, high-impact fixes for layout stability, form usability, and navigation clarity.

## Requirements

### Requirement: Image layout stability
All images SHALL include explicit `width` and `height` attributes to prevent cumulative layout shift.

#### Scenario: Profile image has dimensions
- **WHEN** the profile image in AboutMe renders
- **THEN** the img element has explicit width and height attributes

### Requirement: Form error accessibility
Form error messages SHALL be linked to their corresponding inputs via `aria-describedby`.

#### Scenario: Error announced to screen reader
- **WHEN** a form validation error is displayed
- **THEN** the corresponding input has `aria-describedby` pointing to the error message element

### Requirement: Form autocomplete
Form inputs SHALL include appropriate `autocomplete` attributes for browser autofill.

#### Scenario: Name field has autocomplete
- **WHEN** the name input renders
- **THEN** it has `autocomplete="name"`

#### Scenario: Email field has autocomplete
- **WHEN** the email input renders
- **THEN** it has `autocomplete="email"`

### Requirement: Active navigation indicator
Active navigation links SHALL include `aria-current="page"` for screen readers.

#### Scenario: Active section announced
- **WHEN** a nav link corresponds to the currently visible section
- **THEN** the link has `aria-current="page"`
