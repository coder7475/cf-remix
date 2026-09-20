## Why

The hero banner currently only offers a "Get In Touch" button that scrolls to the contact form. Adding a dedicated "Schedule a Meeting" button provides a direct path for visitors to book consultations without navigating through the contact form, improving conversion for scheduling-focused visitors.

## What Changes

- Add "Schedule a Meeting" button to hero banner section
- Create new `/schedule` route with dedicated Calendly embed page
- Calendly page uses dark theme as default (no theme toggle, always dark)
- Button opens the schedule page in a new browser tab

## Capabilities

### New Capabilities
- `schedule-meeting`: Hero banner button and dedicated Calendly scheduling page with dark theme default

### Modified Capabilities

## Impact

- **Code**: Hero component modified to add button, new route file created
- **Dependencies**: Calendly widget script (already used in contact page)
- **UX**: Additional CTA in hero, dedicated scheduling experience
- **Theme**: Schedule page overrides user theme preference to always use dark

## Non-goals

- Multiple calendar/event type selection
- Calendly API integration or webhook setup
- Custom Calendly branding or theming beyond dark mode
- Backend integration for scheduling data
- Analytics tracking of scheduling interactions