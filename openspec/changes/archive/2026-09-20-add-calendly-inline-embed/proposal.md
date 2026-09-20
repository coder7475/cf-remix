## Why

The contact page currently lacks a direct scheduling option, forcing visitors to manually compose emails or navigate away to book meetings. Adding a Calendly inline embed streamlines the process, allowing visitors to schedule consultations directly on the site without friction.

## What Changes

- Add Calendly inline widget embed to the contact/get-in-touch section
- Widget loads asynchronously to avoid blocking page render
- Responsive sizing with minimum width of 320px and height of 700px
- Script loaded from Calendly's CDN with `async` attribute

## Capabilities

### New Capabilities
- `contact-scheduling`: Integration of Calendly inline embed widget in the contact section for direct meeting booking

### Modified Capabilities

## Impact

- **Code**: Contact page component will be modified to include the Calendly embed markup and script
- **Dependencies**: External Calendly widget script (`https://assets.calendly.com/assets/external/widget.js`)
- **Performance**: Additional external script load; mitigated by `async` attribute
- **Security**: Third-party script execution from Calendly domain

## Non-goals

- Custom Calendly branding or theme customization
- Calendly API integration for advanced scheduling logic
- Multiple calendar/event type selection
- Backend integration or webhook setup
- Analytics tracking of Calendly interactions