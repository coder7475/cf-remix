## ADDED Requirements

### Requirement: URL search parameter synchronization for project tabs
The system SHALL reflect and synchronize the active project category and page number in URL search parameters (`?category=<category>&page=<page>`).

#### Scenario: Direct navigation via URL query
- **WHEN** a user visits `/projects?category=fullstack&page=1` or clicks back/forward in browser history
- **THEN** the active tab activates "Fullstack" and displays matching projects

#### Scenario: Switching tabs updates URL
- **WHEN** a user selects a new project tab
- **THEN** the URL updates without resetting the page scroll position

### Requirement: WAI-ARIA tab semantics
The project tabs container and buttons SHALL adhere to WAI-ARIA Tabs pattern with appropriate roles and states.

#### Scenario: Screen reader accessibility
- **WHEN** an assistive technology inspects the project tabs
- **THEN** the tab bar has `role="tablist"` and each category button has `role="tab"` and `aria-selected` matching its active state
