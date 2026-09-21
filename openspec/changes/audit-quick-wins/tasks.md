## 1. Profile Image CLS Fix

- [x] 1.1 Add `width="300"` and `height="300"` to profile img in `app/components/AboutMe.tsx`

## 2. Form Accessibility

- [x] 2.1 Add `id="name-error"` to name error message in `app/components/GetInTouch.tsx`
- [x] 2.2 Add `aria-describedby="name-error"` to name input when error is present
- [x] 2.3 Add `id="form-error"` to generic form error message
- [x] 2.4 Add `aria-describedby="form-error"` to form when generic error is shown
- [x] 2.5 Add `autocomplete="name"` to name input
- [x] 2.6 Add `autocomplete="email"` to email input

## 3. Navigation Accessibility

- [x] 3.1 Add `aria-current="page"` to active nav link button in `app/components/Navbar.tsx` desktop nav
- [x] 3.2 Add `aria-current="page"` to active nav link button in `app/components/Navbar.tsx` mobile nav

## 4. Verification

- [x] 4.1 Run `pnpm run typecheck` to confirm no type errors
- [x] 4.2 Run `pnpm run lint` to confirm no lint errors
