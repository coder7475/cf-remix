## ADDED Requirements

### Requirement: Cross-component and multi-tab theme synchronization
The system SHALL synchronize theme preference state across all mounted toggle instances and all open browser tabs via React Context and storage event listeners.

#### Scenario: Multi-button synchronization
- **WHEN** a user switches the theme via the desktop toggle button
- **THEN** the mobile menu toggle button state updates immediately without requiring a page reload

#### Scenario: Cross-tab synchronization
- **WHEN** a user changes their theme preference in one browser tab
- **THEN** other open browser tabs detect the change via storage events and update their active theme and UI controls immediately
