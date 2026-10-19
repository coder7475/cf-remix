## ADDED Requirements

### Requirement: Centralized in-view observation
The system SHALL provide a reusable `useInView` React hook that attaches an `IntersectionObserver` to a referenced element and updates visibility state when the element enters the viewport.

#### Scenario: Element enters viewport
- **WHEN** the observed DOM element scrolls into the viewport beyond the configured threshold
- **THEN** `isInView` becomes true and the observer disconnects to avoid ongoing scroll overhead

#### Scenario: Reduced motion preference
- **WHEN** the user has `prefers-reduced-motion: reduce` configured in their browser or operating system
- **THEN** `isInView` immediately initializes to true without registering an observer
