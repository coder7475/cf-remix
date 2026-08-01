# Mobile Navbar Polish

## Purpose

Polish the mobile navigation bar with animations, touch gestures, accessibility focus management, iOS safe area handling, and visual refinements.

## Requirements

### Requirement: Mobile menu has smooth open/close animations
The mobile menu SHALL animate in and out with smooth transitions when opened and closed. The animation SHALL use CSS transforms and opacity for GPU-accelerated performance.

#### Scenario: Menu opens with animation
- **WHEN** user taps the hamburger icon to open the mobile menu
- **THEN** the menu slides in from the right (or fades in) over 200-300ms with ease-out timing

#### Scenario: Menu closes with animation
- **WHEN** user taps the close button or selects a menu item
- **THEN** the menu slides out to the right (or fades out) over 200-300ms with ease-in timing

#### Scenario: Animation respects reduced motion
- **WHEN** user has prefers-reduced-motion enabled
- **THEN** menu appears/disappears instantly without animation

### Requirement: Hamburger icon has improved positioning and hover effects
The hamburger icon SHALL be properly positioned in the mobile header with adequate touch target size and subtle hover/focus effects.

#### Scenario: Hamburger icon touch target
- **WHEN** user views the mobile header
- **THEN** the hamburger icon has a minimum 44x44px touch target area for accessibility

#### Scenario: Hamburger icon hover effect
- **WHEN** user hovers over the hamburger icon (on devices with hover capability)
- **THEN** the icon shows a subtle opacity change or background highlight

#### Scenario: Hamburger icon focus state
- **WHEN** user focuses the hamburger icon via keyboard navigation
- **THEN** the icon shows a visible focus ring matching the site's focus styles

### Requirement: Touch gesture support for closing menu
The mobile menu SHALL support swipe-right gesture to close the menu, providing a natural mobile interaction pattern.

#### Scenario: Swipe right closes menu
- **WHEN** user swipes right from the left edge of the screen while menu is open
- **THEN** the menu closes with a滑-out animation to the right

#### Scenario: Swipe threshold
- **WHEN** user performs a short swipe (less than 30% of screen width)
- **THEN** the menu does not close and snaps back to its original position

#### Scenario: Swipe ignored when menu closed
- **WHEN** user swipes right on the page when menu is closed
- **THEN** no menu interaction occurs (normal page scrolling)

### Requirement: Focus management for accessibility
The mobile menu SHALL trap focus when open, preventing keyboard users from tabbing out of the menu. Focus SHALL return to the hamburger icon when the menu closes.

#### Scenario: Focus trapped in open menu
- **WHEN** menu is open and user presses Tab key
- **THEN** focus cycles through menu items and does not escape to page content

#### Scenario: Focus returns on close
- **WHEN** menu closes (via button click, item selection, or swipe gesture)
- **THEN** focus returns to the hamburger icon that opened the menu

#### Scenario: Escape key closes menu
- **WHEN** menu is open and user presses Escape key
- **THEN** menu closes and focus returns to hamburger icon

### Requirement: iOS safe area handling
The mobile menu SHALL properly handle iOS safe area insets to prevent content from being hidden behind the notch or home indicator.

#### Scenario: Safe area padding
- **WHEN** menu is viewed on iOS device with notch or home indicator
- **THEN** menu content has appropriate padding to avoid being obscured by system UI elements

#### Scenario: Safe area on landscape
- **WHEN** menu is viewed on iOS device in landscape orientation
- **THEN** menu adapts to different safe area dimensions (wider notch on some devices)

### Requirement: Active menu item visual feedback
The mobile menu SHALL provide clear visual feedback for the currently active section, matching the desktop navigation's active state styling.

#### Scenario: Active item highlighting
- **WHEN** user scrolls to a section while menu is open
- **THEN** the corresponding menu item shows active state (color change and/or underline)

#### Scenario: Active item animation
- **WHEN** menu opens and an item is active
- **THEN** the active indicator animates in (e.g., underline slides in from left)

### Requirement: Menu item spacing and typography
The mobile menu SHALL use appropriate spacing and typography for optimal readability on mobile devices.

#### Scenario: Menu item font size
- **WHEN** menu items are displayed
- **THEN** each item uses text-xl or text-2xl font size for easy tapping

#### Scenario: Menu item spacing
- **WHEN** multiple menu items are displayed
- **THEN** there is adequate vertical spacing (minimum 1.5rem) between items for touch targets

#### Scenario: Menu item typography
- **WHEN** menu items render
- **THEN** they use the site's font system (Space Grotesk for headings, consistent with desktop nav)

### Requirement: Menu backdrop behavior
The mobile menu SHALL display a semi-transparent backdrop that can be tapped to close the menu.

#### Scenario: Backdrop visible
- **WHEN** menu is open
- **THEN** a semi-transparent backdrop covers the page content behind the menu

#### Scenario: Backdrop tap closes menu
- **WHEN** user taps the backdrop (not on a menu item)
- **THEN** the menu closes with animation

#### Scenario: Backdrop has appropriate opacity
- **WHEN** menu is open
- **THEN** the backdrop has 50-70% opacity to maintain context while focusing on menu
