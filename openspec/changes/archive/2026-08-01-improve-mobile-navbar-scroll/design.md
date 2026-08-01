## Context

The portfolio site's mobile navigation currently uses a semi-transparent background with backdrop blur when scrolled. This creates a visual disconnect between the navbar and page content, especially on mobile devices where the smaller screen makes the lack of visual separation more apparent. The current implementation triggers at 10px scroll, which is too early and doesn't provide meaningful visual feedback.

Current implementation details:
- `isScrolled` state triggers at `window.scrollY > 10`
- Scrolled state: `bg-background/95 backdrop-blur-md border-b border-border/50 py-2`
- Non-scrolled state: `bg-transparent py-4`
- Mobile menu is a full-screen overlay (separate concern)

## Goals / Non-Goals

**Goals:**
- Create clear visual separation between navbar and content when scrolled
- Improve mobile usability with solid background and subtle shadow
- Maintain visual consistency with the existing design system
- Ensure smooth performance without layout thrashing
- Keep touch targets accessible (minimum 44x44px)

**Non-Goals:**
- Redesigning the entire navigation structure
- Changing the mobile menu overlay behavior
- Adding new navigation items or changing information architecture
- Implementing complex animations (keep it simple and performant)
- Supporting very old browsers without CSS transforms/opacity

## Decisions

### 1. Scroll Threshold: 10px vs. 50px vs. 100px

**Decision**: Use 50px scroll threshold for scrolled state

**Rationale**:
- 10px is too early - triggers almost immediately, no visual feedback
- 100px is too late - users scroll past hero before seeing change
- 50px provides good balance - noticeable change after scrolling past hero intro

**Alternatives Considered**:
- Dynamic threshold based on hero height: More complex, unnecessary for this use case
- IntersectionObserver on hero: Overkill, simple scroll listener is sufficient

### 2. Background Style: Semi-transparent vs. Solid

**Decision**: Use solid background with subtle shadow instead of semi-transparent

**Rationale**:
- Solid background provides better contrast and readability
- Shadow creates clear visual separation from content
- More professional appearance on mobile devices
- Easier to maintain consistent appearance across different content

**Alternatives Considered**:
- Keep semi-transparent: Doesn't solve the visual clarity issue
- Gradient background: Adds complexity without clear benefit
- Glass morphism: Already used elsewhere, would be inconsistent

### 3. Shadow vs. Border vs. Both

**Decision**: Use subtle shadow only (no border)

**Rationale**:
- Shadow provides depth without harsh lines
- More modern and subtle appearance
- Better performance than border (no layout recalculation)
- Works well with both light and dark content below

**Alternatives Considered**:
- Border only: Can look harsh on mobile
- Both shadow and border: Redundant, adds visual noise
- No separation: Doesn't solve the problem

### 4. Animation Approach: CSS Transitions vs. JavaScript

**Decision**: Use CSS transitions with React state management

**Rationale**:
- CSS transitions are GPU-accelerated and performant
- Simple implementation with Tailwind classes
- Easy to respect `prefers-reduced-motion`
- No additional dependencies needed

**Alternatives Considered**:
- JavaScript animation: More control but unnecessary complexity
- framer-motion: Overkill for simple background change
- No animation: Feels jarring and unpolished

### 5. Mobile-Specific Considerations

**Decision**: Apply different padding and spacing for mobile vs. desktop

**Rationale**:
- Mobile screens need more compact navbar to maximize content space
- Touch targets need to be large enough (44x44px minimum)
- Logo and hamburger menu need adequate spacing
- Scrolled state should be more compact than non-scrolled

**Alternatives Considered**:
- Same padding for all devices: Wastes space on mobile
- Complex responsive breakpoints: Overkill for navbar changes

## Risks / Trade-offs

**[Risk] Performance on low-end devices** → Mitigation: Use only CSS properties that don't trigger layout (opacity, transform, box-shadow), avoid JavaScript calculations on scroll

**[Risk] Visual regression on desktop** → Mitigation: Use `md:` prefix for desktop styles, test on multiple screen sizes

**[Risk] Shadow too subtle or too strong** → Mitigation: Use design system tokens, test with actual content, get feedback

**[Trade-off] Solid vs. semi-transparent** → Accepting less "modern" glass effect for better usability and contrast

**[Trade-off] Fixed threshold vs. dynamic** → Accepting simpler implementation for sufficient functionality
