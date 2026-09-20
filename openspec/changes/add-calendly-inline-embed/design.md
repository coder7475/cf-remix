## Context

The contact page (`/contact`) uses a `GetInTouch` component with a two-column layout: a contact form on the left and contact info sidebar on the right. The component currently uses email mailto links as the primary contact method. Adding Calendly provides a direct scheduling option alongside the existing form.

## Goals / Non-Goals

**Goals:**
- Add Calendly inline widget to the contact section for direct meeting booking
- Maintain responsive layout compatibility with existing form/sidebar structure
- Load Calendly script asynchronously without impacting page performance
- Preserve existing contact methods (form, social links)

**Non-Goals:**
- Calendly API integration or webhook setup
- Custom Calendly theming or branding
- Multiple calendar/event type support
- Analytics or tracking of Calendly interactions
- Backend integration for scheduling data

## Decisions

**1. Embed Placement: Below the existing form/sidebar layout**

The Calendly widget will be placed as a new full-width section below the existing form and sidebar. This avoids disrupting the current layout while providing a clear secondary contact option.

*Alternative considered:* Replacing the form entirely - rejected because the form serves a different purpose (quick messages) vs. Calendly (scheduled meetings).

**2. Script Loading: External CDN with async attribute**

Use the standard Calendly widget script from their CDN with `async` attribute to prevent render blocking. The widget initializes automatically when the script loads.

*Alternative considered:* Dynamic script injection via `useEffect` - adds complexity without meaningful benefit since the widget needs to load regardless.

**3. Widget Sizing: Fixed minimum dimensions**

Use Calendly's recommended minimum dimensions (320px width, 700px height) with responsive container to ensure usability on all screen sizes.

## Risks / Trade-offs

- **External dependency** → Calendly CDN availability affects scheduling feature; contact form remains as fallback
- **Third-party script** → Loaded from Calendly domain; mitigated by their established security practices
- **Layout shift** → Widget has fixed height; mitigated by container with `min-width` and `min-height` CSS