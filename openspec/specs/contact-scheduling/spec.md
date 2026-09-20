# Contact Scheduling

## Purpose

Provides contact and scheduling capabilities for the website, including an integrated Calendly widget for appointment booking.

## Requirements

### Requirement: Calendly inline widget display
The system SHALL display a Calendly inline scheduling widget in the contact section.

#### Scenario: Widget renders on contact page
- **WHEN** user navigates to the contact page
- **THEN** Calendly inline widget is visible below the contact form

### Requirement: Asynchronous script loading
The system SHALL load the Calendly widget script asynchronously to avoid blocking page render.

#### Scenario: Page remains interactive during widget load
- **WHEN** contact page loads
- **THEN** page content renders immediately without waiting for Calendly script

### Requirement: Responsive widget sizing
The system SHALL display the Calendly widget with minimum dimensions of 320px width and 700px height.

#### Scenario: Widget displays on mobile devices
- **WHEN** contact page is viewed on a mobile device with viewport width less than 320px
- **THEN** widget container is horizontally scrollable with minimum width of 320px

#### Scenario: Widget displays on desktop
- **WHEN** contact page is viewed on a desktop device
- **THEN** widget displays at full available width with minimum height of 700px

### Requirement: Preserve existing contact methods
The system SHALL maintain all existing contact methods (form, email, social links) alongside the Calendly widget.

#### Scenario: Contact form remains functional
- **WHEN** Calendly widget is displayed
- **THEN** contact form, email link, and social links remain visible and functional
