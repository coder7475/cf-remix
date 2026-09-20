## Context

The portfolio site has a hero banner (`Banner.tsx`) with a "Get In Touch" button that scrolls to the contact section. The contact section already includes a Calendly inline widget via the `CalendlyInline` component. The site uses a theme system with dark as default and light as optional via toggle.

## Goals / Non-Goals

**Goals:**
- Add "Schedule a Meeting" CTA to hero banner
- Create dedicated `/schedule` route for Calendly booking
- Force dark theme on schedule page regardless of user preference
- Maintain consistent design language with existing hero buttons

**Non-Goals:**
- Multiple calendar/event type selection
- Calendly API integration
- Custom Calendly branding beyond dark mode
- Backend scheduling integration

## Decisions

**1. Button Placement: Secondary button next to "Get In Touch"**

Add as a secondary/outlined button to the right of the existing "Get In Touch" button. This provides visual hierarchy while keeping both CTAs prominent.

*Alternative considered:* Replacing "Get In Touch" - rejected because contact form serves different purpose (quick messages vs scheduled meetings).

**2. Navigation: Open in new tab (`target="_blank"`)**

The schedule page opens in a new tab to preserve the user's position on the homepage. This is appropriate since Calendly is an external service that may take time to load.

*Alternative considered:* Same-tab navigation - rejected because users lose their scroll position and may want to return to browsing after scheduling.

**3. Dark Theme Enforcement: CSS override on schedule page**

Apply `dark` class directly to the schedule page container and override any theme-related styles. This ensures consistent dark appearance regardless of user's saved theme preference.

*Alternative considered:* Creating a separate theme context - adds unnecessary complexity for a single page.

## Risks / Trade-offs

- **External dependency** → Calendly CDN availability affects scheduling; contact form remains as fallback
- **Theme override** → Users who prefer light theme get dark on this page; mitigated by consistent dark being standard for Calendly embeds
- **Layout shift** → Button addition may affect hero layout; mitigated by using flex container with gap