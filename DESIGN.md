---
name: Print Studio
colors:
  surface: '#fcf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fcf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#444655'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2d4edc'
  primary: '#002db4'
  on-primary: '#ffffff'
  primary-container: '#2447d6'
  on-primary-container: '#c4ccff'
  inverse-primary: '#b9c3ff'
  secondary: '#b32053'
  on-secondary: '#ffffff'
  secondary-container: '#fe5b89'
  on-secondary-container: '#620027'
  tertiary: '#533e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#705400'
  on-tertiary-container: '#fdc73a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#001158'
  on-primary-fixed-variant: '#0032c3'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#ffb1c0'
  on-secondary-fixed: '#3f0017'
  on-secondary-fixed-variant: '#90003d'
  tertiary-fixed: '#ffdf9a'
  tertiary-fixed-dim: '#f4bf32'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#fcf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the physical, tactile ethos of an independent risograph print workshop and small-press publisher. It channels the visceral delight of raw art papers, vibrant oil-based spot inks, tactile imperfections, and editorial publishing. The interface rejects generic software tropes: no cold blur filters, no artificial neon glow, and no sterile dark-mode palettes. 

Instead, the design mirrors physical paper goods—zines, posters, and book covers. It combines the expressive warmth of transitional editorial serifs with the structure of utility sans-serifs, all anchored by deliberate 2px structural ink strokes and bold, hard-edged shadow blocks. The emotional atmosphere is friendly, artisan-crafted, highly confident, and deeply grounded in analog craftsmanship.

## Colors

The palette takes direct inspiration from traditional risograph spot-color printing on natural, uncoated paper stock:

- **Canvas & Paper (`#F3EEE3`):** Warm cream paper base that replaces pure digital white. All surfaces live on or directly contrast against this natural stock.
- **Deep Ink Black (`#17171A`):** Rich, oil-dense carbon black used for text, high-contrast 2px structural outlines, and hard 4px offset drop shadows.
- **Riso Blue (`#2447D6`):** The primary ink channel. Used for primary calls-to-action, key focal points, and major interaction states.
- **Fluo Pink (`#FF5C8A`):** Secondary ink channel. Emotive, vibrant, and used for promotional ribbons, active toggle states, stickers, and artistic badges.
- **Riso Yellow (`#FFC93C`):** Warm golden accent ink channel. Applied to tags, highlight flourishes, notices, and decorative studio starbursts.

Always maintain high contrast against the paper substrate. Gradients should never be smooth digital fades; when simulated overlap is desired, rely on solid color multiplication or geometric dithered patterns resembling spot ink overprints.

## Typography

Typography balances warm, literary presence with crisp utility:

- **Headings (Newsreader):** Chosen for its crafted serifs, rich stroke contrast, and literary book-press weight. Set headlines with generous optical breathing room. Italic styles can be layered playfully to mimic editorial emphasis and artistic captions.
- **Body & Labels (DM Sans):** Clear, low-contrast, highly legible grotesque sans. It keeps informational content, metadata, price tags, and technical specs grounded and scannable without competing with the serifs.

## Layout & Spacing

The layout is structured around an editorial grid reminiscent of broadsheet periodicals and catalog layouts. 

- **Grid Framework:** A 12-column layout on desktop screens (1024px+), collapsing to 8 columns on tablet, and 4 columns on mobile. Columns have defined 24px gutters on desktop and 16px on mobile.
- **Canvas Margins:** Generous framing margins preserve the feeling of uncut deckled paper borders around printed content.
- **Rhythm & Gaps:** Component internal paddings and flow spacings map strictly to the 8px baseline rhythm (`0.5rem`, `1rem`, `1.5rem`, `2.5rem`). Whitespace should feel intentional—editorial and airy, rather than crowded like enterprise dashboards.

## Elevation & Depth

This design system avoids blurry digital shadows and simulated light sources. Depth is achieved purely through tactile print layers:

- **Ink Keylines:** Every surface, button, input, and card is framed with a sharp `2px solid #17171A` ink outline.
- **Hard Offset Cast Shadows:** Elevation is rendered through solid, unblurred drop shadows: `4px 4px 0px #17171A`. When an element is raised or hovered, the shadow expands to `6px 6px 0px #17171A` while the element translates `-2px, -2px`.
- **Pressed & Active States:** On active click, interactive elements collapse the shadow to `0px 0px 0px #17171A` and translate `+4px, +4px`, simulating the physical compression of an ink stamp hitting paper.
- **Layer Stacking:** Secondary dialogs, floating toasts, and zine sticker labels can feature minor rotation (`-1deg` to `1.5deg`) paired with the uniform 4px offset shadow to reinforce the feeling of manual assembly.

## Shapes

Corner radii use soft, tactile geometry that prevents cards and frames from feeling overly rigid or clinical:

- Standard components (buttons, tags, chips, input fields) use `0.5rem` (8px) radius.
- Cards, modal dialogs, and paper panels use `rounded-lg` (16px) or `rounded-xl` (24px) radius.
- Decorative badges, edition stickers, and circular stamps break the grid with pure circular geometry or starburst polygons.
- Outlines always follow the perimeter curve cleanly, with no clipped interior artifacts.

## Components

### Buttons
- **Primary:** Background in `#2447D6`, text in `#F3EEE3`, wrapped in `2px solid #17171A` with a `4px 4px 0px #17171A` hard shadow. On hover, translate `-2px, -2px` with a `6px 6px 0px #17171A` shadow. On active click, translate `+4px, +4px` with `0px` shadow.
- **Secondary:** Background in `#FF5C8A` or `#FFC93C`, text in `#17171A`, 2px border, and 4px offset shadow.
- **Outline / Neutral:** Background in `#F3EEE3` or transparent, text in `#17171A`, 2px solid border, and 4px offset shadow.

### Cards & Paper Sheets
- Built with a `#F3EEE3` surface, `2px solid #17171A` border, `16px` border-radius (`rounded-lg`), and `4px 4px 0px #17171A` offset shadow.
- Content sections inside cards are divided by `2px solid #17171A` rule lines rather than faint gray dividers.
- Cards may include decorative "Edition Number" corner tabs or illustrated paper-clip accents.

### Chips & Badges
- Compact pills with `2px solid #17171A` border and `2px 2px 0px #17171A` mini-offset shadows.
- Tinted with Risograph spot colors: Fluo Pink for status badges ("Limited Edition"), Riso Yellow for categories ("Screenprint"), and Riso Blue for formats ("Zine").

### Form Inputs & Textareas
- Background `#FFFFFF` or pale cream, framed by `2px solid #17171A` with a `2px 2px 0px #17171A` resting shadow.
- On focus, stroke stays `2px solid #17171A`, but the hard shadow grows to `4px 4px 0px #2447D6` (Riso Blue offset highlight), without fuzzy focus rings.
- Placeholder text in `#17171A` at 50% opacity.

### Checkboxes & Radio Controls
- Custom boxes with `2px solid #17171A` and `2px 2px 0px #17171A` offset shadow.
- Checked state fills the box with `#2447D6` and renders a crisp hand-drawn style checkmark or inner solid black disc for radios.

### Specialized Studio Elements
- **Doodle Flourishes & Starbursts:** Hand-crafted vector sparkles, registration marks (`+` and registration targets in corners), and ink bleed stamps used sparingly in empty states, section headers, and hero banners.
- **Paper Grain:** An imperceptible, noise-filtered grain overlay (SVG fractal noise at ~3-4% opacity) layered atop the `#F3EEE3` canvas to complete the paper-stock feel.