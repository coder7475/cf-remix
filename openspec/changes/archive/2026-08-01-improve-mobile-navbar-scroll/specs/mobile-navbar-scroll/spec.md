## ADDED Requirements

### Requirement: Mobile navbar has solid background when scrolled
The mobile navbar SHALL display a solid background with subtle shadow when the user scrolls past a threshold of 50px from the top of the page.

#### Scenario: Navbar scrolled state
- **WHEN** user scrolls down more than 50px on mobile device
- **THEN** navbar background changes from transparent to solid with subtle shadow

#### Scenario: Navbar non-scrolled state
- **WHEN** user is at the top of the page (scroll position < 50px)
- **THEN** navbar background is transparent with no shadow

### Requirement: Mobile navbar has proper contrast
The mobile navbar SHALL provide sufficient contrast between the navbar background and page content when scrolled.

#### Scenario: Content visibility
- **WHEN** navbar is in scrolled state
- **THEN** navbar text and icons are clearly readable against the solid background

#### Scenario: Content separation
- **WHEN** navbar is in scrolled state
- **THEN** there is clear visual separation between navbar and page content below

### Requirement: Mobile navbar maintains touch target accessibility
The mobile navbar SHALL maintain minimum touch target sizes (44x44px) for all interactive elements when in scrolled state.

#### Scenario: Hamburger button touch target
- **WHEN** navbar is in scrolled state
- **THEN** hamburger menu button maintains minimum 44x44px touch target area

#### Scenario: Logo link touch target
- **WHEN** navbar is in scrolled state
- **THEN** logo/link maintains adequate touch target area

### Requirement: Mobile navbar scroll transition is smooth
The mobile navbar SHALL smoothly transition between non-scrolled and scrolled states.

#### Scenario: Transition animation
- **WHEN** user scrolls past 50px threshold
- **THEN** navbar background and shadow transition smoothly over 200-300ms

#### Scenario: Reduced motion respected
- **WHEN** user has prefers-reduced-motion enabled
- **THEN** navbar transition happens instantly without animation

### Requirement: Mobile navbar height is optimized for scrolled state
The mobile navbar SHALL have appropriate height and padding in scrolled state to maximize content space while maintaining usability.

#### Scenario: Compact scrolled height
- **WHEN** navbar is in scrolled state
- **THEN** navbar height is reduced (e.g., from py-4 to py-2) to save screen space

#### Scenario: Adequate spacing
- **WHEN** navbar is in scrolled state
- **THEN** there is sufficient spacing between logo, hamburger menu, and navbar edges

### Requirement: Mobile navbar works across all mobile browsers
The mobile navbar SHALL function correctly on iOS Safari, Chrome Mobile, and Firefox Mobile.

#### Scenario: iOS Safari compatibility
- **WHEN** user views site on iOS Safari
- **THEN** navbar scroll behavior works correctly with safe area insets

#### Scenario: Chrome Mobile compatibility
- **WHEN** user views site on Chrome Mobile (Android)
- **THEN** navbar scroll behavior works correctly

#### Scenario: Firefox Mobile compatibility
- **WHEN** user views site on Firefox Mobile
- **THEN** navbar scroll behavior works correctly
