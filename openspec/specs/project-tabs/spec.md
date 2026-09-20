# Project Tabs

## Purpose

Provides tabbed navigation for filtering featured projects by category (Backend, Fullstack, AI/ML, Mobile) with project counts and pagination.

## Requirements

### Requirement: Tab navigation display
The system SHALL display horizontal tab navigation above the project grid.

#### Scenario: Tabs are visible
- **WHEN** user views the Featured Projects section
- **THEN** tab navigation is visible with 4 categories: Backend, Fullstack, AI/ML, Mobile

### Requirement: Project counts in tabs
The system SHALL display the project count in each tab.

#### Scenario: Tab shows count
- **WHEN** user views a tab
- **THEN** tab displays category name and project count in parentheses (e.g., "Backend (6)")

### Requirement: Tab filtering
The system SHALL filter projects based on the active tab.

#### Scenario: Backend tab selected
- **WHEN** user clicks "Backend" tab
- **THEN** only projects with category "backend" are displayed

#### Scenario: Fullstack tab selected
- **WHEN** user clicks "Fullstack" tab
- **THEN** only projects with category "fullstack" are displayed

#### Scenario: AI/ML tab selected
- **WHEN** user clicks "AI/ML" tab
- **THEN** only projects with category "ai-ml" are displayed

#### Scenario: Mobile tab selected
- **WHEN** user clicks "Mobile" tab
- **THEN** only projects with category "mobile" are displayed

### Requirement: Default active tab
The system SHALL set "Backend" as the default active tab.

#### Scenario: Initial load
- **WHEN** page loads
- **THEN** "Backend" tab is active and backend projects are displayed

### Requirement: Pagination within tabs
The system SHALL maintain pagination within each tab.

#### Scenario: Tab change resets pagination
- **WHEN** user switches tabs
- **THEN** pagination resets to page 1

### Requirement: Tab styling
The system SHALL style active tab with primary color and underline indicator.

#### Scenario: Active tab styling
- **WHEN** a tab is active
- **THEN** tab text is primary color with underline indicator

#### Scenario: Inactive tab styling
- **WHEN** a tab is inactive
- **THEN** tab text is muted color without underline
