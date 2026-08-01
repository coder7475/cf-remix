## Context

The `.text-gradient` utility in `tailwind.css` uses white colors for the gradient, which creates invisible text on light backgrounds. This was not updated when the `.light` theme override was added.

## Goals / Non-Goals

**Goals:**
- Fix `.text-gradient` visibility in light mode
- Maintain existing dark mode appearance

**Non-Goals:**
- Changing the gradient design or style
- Updating other utilities (already handled)

## Decisions

### 1. Add `.light .text-gradient` override
**Decision**: Add a CSS override under `.light` selector that uses dark text colors for the gradient.

**Rationale**:
- Consistent with existing pattern (`.light .glass-morphism`, `.light .page-shell`)
- Minimal change - only affects light mode
- Dark mode behavior unchanged

## Risks / Trade-offs

- **Gradient style change**: The light mode gradient will use dark colors instead of white. This is intentional and expected.
