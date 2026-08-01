## Why

The contact form currently uses `mailto:` to open the user's email client, which is unreliable and provides poor UX. Users expect to submit a form and receive confirmation that their message was sent. Additionally, environment variables need secure management for any email service credentials.

## What Changes

- Replace `mailto:` with actual email sending via a Cloudflare-compatible solution
- Add server-side action to handle form submission
- Implement secure environment variable management
- Add proper form feedback (loading, success, error states)

## Capabilities

### New Capabilities
- `contact-email-sending`: Server-side email delivery using Cloudflare Email Workers or compatible API
- `env-security`: Secure environment variable management for email credentials

### Modified Capabilities
- (none)

## Impact

- `app/routes/contact.tsx`: Add server action for form submission
- New file: `app/lib/email.ts` or Cloudflare Worker for email sending
- `wrangler.toml` or `wrangler.jsonc`: Add email bindings or environment variables
- `.env.example`: Document required environment variables
- `app/components/GetInTouch.tsx`: Update form to use server action

## Constraints

This project runs on Cloudflare Pages/Workers. Nodemailer uses Node.js APIs not available in this environment. The solution must use a Cloudflare-compatible approach (Email Workers, third-party API, or Hyperdrive with external SMTP).
