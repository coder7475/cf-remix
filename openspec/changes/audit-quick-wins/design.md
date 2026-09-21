## Context

The frontend audit found 7 quick wins — small accessibility and performance fixes across AboutMe, GetInTouch, Navbar, and Blog components. These are isolated attribute additions with no architectural changes.

## Goals / Non-Goals

**Goals:**
- Prevent CLS on profile image with explicit dimensions
- Improve form accessibility with aria-describedby and autocomplete
- Add aria-current to active nav links for screen readers
- Ensure all images have alt text

**Non-Goals:**
- Refactoring component architecture
- Adding new UI components
- Changing visual design

## Decisions

**Explicit width/height on profile image** — The image is inside an `aspect-square` div. Adding `width="300" height="300"` matches the visual dimensions and prevents layout shift during lazy loading.

**autocomplete on individual inputs** — The form currently has `autoComplete="off"` on the `<form>` element. Individual inputs need `autocomplete="name"`, `autocomplete="email"`. The textarea gets `autocomplete="off"` (no standard value for message).

**aria-describedby pattern** — Error messages get a unique `id` (e.g., `name-error`), and inputs get `aria-describedby` pointing to it when an error is present. This announces the error to screen readers.

**aria-current="page" on nav links** — Applied to the active anchor link button in both desktop and mobile nav. Only applies to section-based links (not `/blog` route link).

## Risks / Trade-offs

- [CLS] Profile image dimensions assume 300x300 — if the image is truly square this is fine; the `aspect-square` container enforces it anyway.
- [autocomplete] Browsers may override `autocomplete="off"` — acceptable since the goal is to help autofill, not block it.
