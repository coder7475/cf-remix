## Context

The portfolio site's mobile navigation currently uses a basic full-screen overlay that appears/disappears without animations. The implementation lacks modern mobile UX patterns like touch gestures, smooth transitions, and proper focus management. This creates a disjointed experience compared to the polished desktop version.

Current implementation details:
- Full-screen overlay with `fixed inset-0 z-40 bg-background/95 backdrop-blur-sm`
- Simple conditional rendering (no animation states)
- Basic hamburger/X icon toggle
- No touch gesture support
- No focus trapping for accessibility

## Goals / Non-Goals

**Goals:**
- Create smooth, performant animations for menu open/close transitions
- Add touch gesture support (swipe right to close) for natural mobile interaction
- Implement proper focus management for keyboard and screen reader accessibility
- Handle iOS safe area insets to prevent content from being hidden behind notch/home indicator
- Maintain visual consistency with the existing design system (colors, typography, spacing)
- Ensure animations respect `prefers-reduced-motion` media query

**Non-Goals:**
- Redesigning the entire navigation structure
- Adding new navigation items or changing information architecture
- Implementing complex gesture patterns (pinch, multi-finger)
- Adding haptic feedback (device-specific, not web-standard)
- Supporting very old browsers without CSS transforms/opacity animations

## Decisions

### 1. Animation Approach: CSS Transitions vs. JavaScript Animation Library

**Decision**: Use CSS transitions with React state management

**Rationale**: 
- CSS transitions are GPU-accelerated and performant on mobile
- No additional bundle size (vs. adding framer-motion or similar)
- Simple implementation for slide/fade effects
- Easy to respect `prefers-reduced-motion` with CSS media queries

**Alternatives Considered**:
- framer-motion: More powerful but adds ~30KB bundle size, overkill for this use case
- React Spring: Similar to framer-motion, unnecessary complexity
- Manual JavaScript animation: More control but harder to maintain and less performant

### 2. Touch Gesture Implementation: Custom vs. Library

**Decision**: Implement custom touch gesture handling using Touch Events API

**Rationale**:
- Only need simple swipe-right-to-close (not complex multi-touch)
- Minimal code required (~50 lines)
- No dependency overhead
- Full control over gesture thresholds and behavior

**Alternatives Considered**:
- react-swipeable: Adds dependency for simple use case
- Hammer.js: Overkill, adds bundle size
- Native CSS scroll-snap: Doesn't support swipe-to-close pattern

### 3. Focus Management Strategy

**Decision**: Implement focus trap using React refs and useEffect

**Rationale**:
- Required for WCAG 2.1 compliance (Level A)
- Prevents keyboard users from tabbing out of open menu
- Simple implementation with minimal code
- No additional dependencies needed

**Alternatives Considered**:
- @reach/dialog: Has focus trap built-in but adds dependency
- React Aria: More comprehensive but overkill for single component
- Manual implementation: Chosen for simplicity and control

### 4. iOS Safe Area Handling

**Decision**: Use CSS `env(safe-area-inset-*)` with Tailwind's safe area utilities

**Rationale**:
- Standard approach for iOS notch/home indicator
- Works with existing Tailwind setup
- Progressive enhancement (ignored on non-iOS devices)
- No JavaScript required

**Alternatives Considered**:
- JavaScript detection: More control but unnecessary complexity
- Fixed padding: Less flexible, doesn't adapt to device orientation

### 5. Animation Timing and Easing

**Decision**: Use cubic-bezier(0.4, 0, 0.2, 1) for menu transitions (200-300ms duration)

**Rationale**:
- Matches Material Design motion guidelines
- Feels natural and responsive on touch devices
- Not too fast (feels abrupt) or too slow (feels sluggish)
- Consistent with other site animations

**Alternatives Considered**:
- Linear: Feels mechanical and unnatural
- Ease-in-out: Too slow at start/end
- Custom spring: More complex, diminishing returns

## Risks / Trade-offs

**[Risk] Performance on low-end devices** → Mitigation: Use only CSS transforms/opacity, avoid layout triggers, test on representative devices

**[Risk] iOS Safari quirks with safe-area-inset** → Mitigation: Test on actual iOS devices, use feature detection, provide fallback padding

**[Risk] Focus trap breaking if component unmounts unexpectedly** → Mitigation: Clean up focus trap in useEffect cleanup function

**[Risk] Touch gestures interfering with scrolling** → Mitigation: Only activate gesture when menu is open, use threshold to prevent accidental triggers

**[Trade-off] Custom gesture vs. library** → Accepting more code for zero dependencies and full control

**[Trade-off] CSS animations vs. JavaScript** → Accepting less flexibility for better performance and simpler code
