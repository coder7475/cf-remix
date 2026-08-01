## Context

The portfolio site runs on Cloudflare Pages/Workers. The contact form currently uses `mailto:` which is unreliable. The user wants to use Nodemailer with Google App Password, but Nodemailer requires Node.js APIs not available in Cloudflare's edge runtime.

## Goals / Non-Goals

**Goals:**
- Send emails from the contact form
- Secure management of email credentials
- Proper form feedback (loading, success, error)
- Cloudflare-compatible implementation

**Non-Goals:**
- Using Nodemailer directly (incompatible with Cloudflare)
- Complex DNS setup for custom email domains
- Email templates or marketing features

## Decisions

### 1. Use Resend API instead of Nodemailer
**Decision**: Use Resend as the email sending service with their REST API.

**Rationale**:
- Cloudflare-compatible (uses fetch, no Node.js APIs needed)
- Simple API, easy to implement
- Free tier available (100 emails/day)
- Can use any "from" address you own
- Google App Password can be used via Resend's SMTP bridge if needed

**Alternatives considered**:
- Nodemailer: Rejected - requires Node.js APIs not available in Cloudflare
- SendGrid: Rejected - more complex setup, less generous free tier
- Cloudflare Email Workers: Rejected - requires DNS changes, more complex for simple use case

### 2. Use Remix action for form submission
**Decision**: Add a server action in `app/routes/contact.tsx` to handle form submission.

**Rationale**:
- Standard Remix pattern
- Server-side code stays secure (API key never exposed to client)
- Built-in form validation and error handling

### 3. Secure environment variables via Wrangler secrets
**Decision**: Store API key as a Cloudflare secret, document required vars in `.env.example`.

**Rationale**:
- Secrets are encrypted at rest
- Never exposed to client-side code
- Standard Cloudflare practice

## Risks / Trade-offs

- **Third-party dependency**: Resend is a new dependency. Mitigation: Simple API, easy to swap if needed
- **Email delivery delays**: Resend may have slight delays. Mitigation: Acceptable for contact form
- **Rate limiting**: Free tier has limits. Mitigation: Sufficient for portfolio site
