## 1. Setup & Dependencies

- [x] 1.1 Install Resend package (`resend`)
- [x] 1.2 Create `.env.example` with required variables (`RESEND_API_KEY`, `CONTACT_EMAIL`)
- [x] 1.3 Add TypeScript types for environment variables

## 2. Email Service

- [x] 2.1 Create `app/lib/email.ts` with Resend client initialization
- [x] 2.2 Implement `sendContactEmail` function with form data

## 3. Server Action

- [x] 3.1 Add Remix action to `app/routes/contact.tsx` for form submission
- [x] 3.2 Add form validation in action
- [x] 3.3 Return success/error responses from action

## 4. Client Form Update

- [x] 4.1 Update `GetInTouch.tsx` to use Remix `useFetcher` or `Form`
- [x] 4.2 Implement loading state during submission
- [x] 4.3 Show success message after submission
- [x] 4.4 Show error message on failure

## 5. Security

- [x] 5.1 Ensure API key is only accessed server-side
- [x] 5.2 Add rate limiting considerations (future enhancement note)

## 6. Testing

- [x] 6.1 Test form submission with valid data
- [x] 6.2 Test form submission with invalid data
- [x] 6.3 Verify email receives correct content
