## Why

Section headings in light mode are invisible because the `.text-gradient` utility uses white colors that blend into the light background. This was introduced when the theme toggle was added - the CSS utility was not updated to handle light mode.

## What Changes

- Add `.light .text-gradient` override with dark text colors
- Verify all section headings display correctly in both themes

## Capabilities

### New Capabilities
- (none - this is a bug fix, not a new feature)

### Modified Capabilities
- `theme-switching`: Fix text-gradient visibility in light mode

## Impact

- `app/tailwind.css`: Add light mode override for `.text-gradient`
- Components using `text-gradient`: AboutMe, Skills, Experience, Projects (section headings)
