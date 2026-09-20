# schedule-meeting

## Purpose

Provides meeting scheduling functionality through Calendly integration, allowing users to book meetings directly from the portfolio site.

## Requirements

### Requirement: Schedule a Meeting button in hero
The system SHALL display a "Schedule a Meeting" button in the hero banner section.

#### Scenario: Button is visible in hero
- **WHEN** user views the homepage hero section
- **THEN** "Schedule a Meeting" button is visible next to "Get In Touch" button

#### Scenario: Button opens schedule page in new tab
- **WHEN** user clicks "Schedule a Meeting" button
- **THEN** browser opens `/schedule` route in a new tab

### Requirement: Dedicated schedule route
The system SHALL provide a `/schedule` route with a Calendly embed page.

#### Scenario: Schedule page renders Calendly widget
- **WHEN** user navigates to `/schedule`
- **THEN** page displays Calendly inline widget for scheduling

#### Scenario: Schedule page has proper meta
- **WHEN** user views schedule page
- **THEN** page title shows "Schedule a Meeting | Robiul Hossain Portfolio"

### Requirement: Dark theme default on schedule page
The system SHALL display the schedule page with dark theme as default regardless of user's saved theme preference.

#### Scenario: Schedule page always uses dark theme
- **WHEN** user has light theme saved and navigates to `/schedule`
- **THEN** page displays with dark theme colors

#### Scenario: Dark theme is forced
- **WHEN** schedule page loads
- **THEN** page applies dark theme class and does not respond to theme toggle

### Requirement: Consistent button styling
The system SHALL style the "Schedule a Meeting" button as a secondary/outlined variant.

#### Scenario: Button has outlined style
- **WHEN** "Schedule a Meeting" button renders
- **THEN** button has outlined/secondary appearance distinct from primary "Get In Touch" button