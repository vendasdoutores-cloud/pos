---
name: Kinetic Professional
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#4fdbc8'
  on-tertiary: '#003731'
  tertiary-container: '#001c18'
  on-tertiary-container: '#009182'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#71f8e4'
  tertiary-fixed-dim: '#4fdbc8'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1120px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 64px
---

## Brand & Style

The design system is engineered for the modern IT professional, balancing clinical precision with high-tech energy. The aesthetic targets a "Technical Premium" feel—merging the reliability of enterprise software with the forward-leaning vibrancy of the cybersecurity and engineering sectors.

The core style is **Minimalist High-Contrast**, enriched by **Glassmorphism**. Surfaces use deep, atmospheric foundations to allow electric accents to pop, ensuring that critical data (like technical skills and experience metrics) commands immediate attention. The emotional response is one of calculated confidence, clarity, and architectural order.

## Colors

This design system utilizes a "Deep Tech" palette optimized for high-readability in digital environments.

- **Primary (Deep Slate):** The foundation. Used for backgrounds and high-level containers to provide a stable, sophisticated canvas.
- **Secondary (Electric Blue):** The action color. Reserved for interactive elements, headings, and primary brand indicators.
- **Tertiary (Cyber Teal):** The highlight color. Used for progress indicators, success states, and skill proficiency markers to provide visual variety without breaking the technical tone.
- **Neutral (Slate Gray):** Used for secondary text, metadata, and borders to maintain hierarchy.

## Typography

The system relies on **Inter** for its exceptional legibility and neutral, professional tone. To lean into the IT narrative, **JetBrains Mono** is introduced as a secondary label font for metadata and "technical" tags.

Hierarchy is strictly enforced through weight and color. Headings use `SemiBold` or `Bold` in pure white (#FFFFFF), while body text shifts to a slightly muted neutral (#CBD5E1) to reduce eye strain during long-form reading. All technical labels use the monospaced font to evoke a code-like aesthetic.

## Layout & Spacing

The layout follows a **Fluid 12-Column Grid** for desktop and a **Single Column Stack** for mobile.

- **Desktop:** Employs a 2-column asymmetric split (e.g., 4 columns for sidebar/meta, 8 columns for main experience).
- **Mobile:** Horizontal margins are set to 20px. All "cards" and "sections" expand to full width.
- **Rhythm:** A 8px base grid governs all padding. Large vertical gaps (64px) are used between major sections (Experience, Education, Projects) to ensure the resume never feels cluttered despite high information density.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

- **Level 1 (Base):** Deep Slate (#0F172A).
- **Level 2 (Containers):** A semi-transparent overlay (White at 5% opacity) with a 12px backdrop-blur. This creates the "glass" effect for cards.
- **Level 3 (Accents):** High-saturation glows. Skill badges and active state markers use a soft outer glow (0px 4px 20px) tinted with the `secondary` or `tertiary` hex color at 20% opacity.
- **Borders:** Use 1px "ghost" outlines (White at 10% opacity) to define shapes without adding visual weight.

## Shapes

The design system uses a consistent **Rounded** geometry. 

- **Cards & Major Containers:** 12px - 16px corner radius to soften the technical edge and feel approachable.
- **Skill Badges:** Fully rounded (pill-shaped) to distinguish them from structural elements.
- **Timeline Nodes:** Small 8px circles or squares with a 2px stroke, creating a clear, "circuit-board" connection visual.

## Components

### Skill Badges
Pill-shaped containers with a background of `secondary_color` at 10% opacity and a solid 1px border. Text should use `label-caps`.

### Timeline Connectors
A 2px vertical line in `neutral_color` (20% opacity) connecting experience blocks. Active/Current roles feature a `tertiary_color` "glowing" node at the start point.

### Contact Cards
Fixed-width cards for mobile-friendly tapping. They utilize the glassmorphism effect: `backdrop-filter: blur(12px)` with a subtle inner highlight on the top edge.

### Input Fields (For Contact Forms)
Minimalist style with only a bottom border (2px) that transforms from `neutral` to `secondary` color on focus.

### Experience Cards
Large-format containers with generous internal padding (24px). Company logos should be treated with a grayscale filter, reverting to full color only on hover to maintain visual harmony.