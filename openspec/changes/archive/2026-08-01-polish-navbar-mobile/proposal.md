## Why

The current mobile navbar has basic functionality but lacks polish. The full-screen overlay menu appears abruptly without animations, the hamburger icon positioning could be improved, and there's no touch gesture support. These issues create a jarring experience on mobile devices, which represent a significant portion of portfolio visitors.

## What Changes

- Add smooth slide-in/fade animations for mobile menu open/close transitions
- Improve hamburger icon positioning and add subtle hover effects
- Implement touch gesture support (swipe right to close menu)
- Add proper focus management for accessibility (trap focus when menu is open)
- Handle iOS safe area insets for notch/home indicator
- Add visual feedback for active menu items with animated underline
- Improve menu item spacing and typography for better readability

## Capabilities

### New Capabilities
- `mobile-navbar-polish`: Enhanced mobile navigation experience with animations, gestures, and accessibility improvements

### Modified Capabilities
- None (this is a new capability focused on mobile UX improvements)

## Impact

- **Components**: `app/components/Navbar.tsx` - primary file requiring modifications
- **Styles**: `app/tailwind.css` - may need additional utility classes for animations
- **Dependencies**: No new dependencies required (using existing Lucide icons and Tailwind)
- **Testing**: Manual testing on iOS Safari, Chrome Mobile, and Firefox Mobile
- **Performance**: Minimal impact - animations use CSS transforms and opacity for GPU acceleration
