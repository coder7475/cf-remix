## Why

The mobile navbar lacks visual clarity when scrolling past the hero section. Currently, the navbar becomes semi-transparent with `bg-background/95 backdrop-blur-md` but this doesn't provide enough contrast or visual hierarchy on mobile devices. When users scroll down, the navbar blends into the content, making navigation feel disconnected and harder to use. This affects usability and perceived quality on mobile, which is a significant portion of portfolio visitors.

## What Changes

- Add a solid background with subtle shadow to mobile navbar when scrolled past a threshold (e.g., 50px)
- Improve visual hierarchy with better contrast and spacing in scrolled state
- Add subtle border or shadow to separate navbar from content
- Ensure mobile menu toggle button remains visible and accessible when scrolled
- Optimize navbar height and padding for mobile touch targets

## Capabilities

### New Capabilities
- `mobile-navbar-scroll`: Enhanced mobile navbar behavior with solid background, shadow, and improved contrast when scrolled past a threshold

### Modified Capabilities
- None (this is a new capability focused on mobile scroll behavior)

## Impact

- **Components**: `app/components/Navbar.tsx` - primary file requiring modifications
- **Styles**: `app/tailwind.css` - may need additional utility classes for shadows/borders
- **Dependencies**: No new dependencies required
- **Testing**: Manual testing on iOS Safari, Chrome Mobile, and Firefox Mobile
- **Performance**: Minimal impact - using CSS properties that don't trigger layout thrashing
