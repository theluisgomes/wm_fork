---
name: Wisemetrics
description: Data into Action, strategic intelligence for brand and product decisions.
colors:
  bg: "#060a12"
  bg-elevated: "#141b2a"
  text-primary: "#ece7dc"
  text-secondary: "#8a8067"
  border-soft: "#2a303b"
  accent: "#1db5a3"
  accent-hi: "#42ccbb"
typography:
  display:
    fontFamily: "\"Fraunces\", \"Noto Serif\", Georgia, serif"
    fontSize: "clamp(3.7rem, 7.4vw, 8rem)"
    fontWeight: 350
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "\"Fraunces\", \"Noto Serif\", Georgia, serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "\"Fraunces\", \"Noto Serif\", Georgia, serif"
    fontSize: "clamp(1.75rem, 2.8vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "\"Inter Tight\", \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  label:
    fontFamily: "\"JetBrains Mono\", ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hi}"
    textColor: "{colors.bg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
  card-base:
    backgroundColor: "{colors.bg-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Wisemetrics

## Overview

**Creative North Star: "Signal Engine in the Dark"**

This interface feels like a strategic control room, not a startup dashboard and not a decorative agency portfolio. Darkness carries authority and focus, while restrained cyan accents identify action, emphasis, and analytical confidence.

The visual system prioritizes interpretation over spectacle. Typography does the heavy lifting, surfaces stay mostly flat, and motion is used as feedback. Dense information is welcome, but hierarchy must remain legible in one pass.

**Key Characteristics:**
- Deliberate dark surfaces with warm, readable neutrals
- Accent color used as signal, not decoration
- Editorial serif hierarchy paired with operational sans + mono labels
- Border-led depth and tonal layering instead of heavy shadow styling

## Colors

The palette is a dark analytical environment with a single luminous signal accent.

### Primary
- **Strategic Signal Cyan** (`#1db5a3`): primary CTA, key labels, emphasis lines, and active states.

### Secondary
- **Amplified Signal Cyan** (`#42ccbb`): hover and energized state of primary actions.

### Neutral
- **Observation Black** (`#060a12`): global background and baseline canvas.
- **Layered Night** (`#141b2a`): elevated blocks, cards, and sectional contrasts.
- **Readable Paper** (`#ece7dc`): primary foreground text and high-importance UI text.
- **Muted Evidence** (`#8a8067`): secondary copy and supporting metadata.
- **Soft Structure** (`#2a303b`): separators, borders, and low-priority delimiters.

**The One Signal Rule.** Accent cyan is the only saturated control color on primary surfaces. If a screen needs a second accent, the hierarchy is wrong.

## Typography

**Display Font:** Fraunces (fallback: Noto Serif, Georgia, serif)  
**Body Font:** Inter Tight (fallback: Inter, system sans-serif)  
**Label/Mono Font:** JetBrains Mono (fallback: ui-monospace, monospace)

**Character:** Editorial authority for narrative and strategic statements, paired with operational clarity for UI and data language.

### Hierarchy
- **Display** (350, `clamp(3.7rem, 7.4vw, 8rem)`, 0.94): hero statements and top-level directional claims.
- **Headline** (400, `clamp(2.25rem, 4.5vw, 4.25rem)`, 1): section anchors and large conceptual blocks.
- **Title** (400, `clamp(1.75rem, 2.8vw, 3rem)`, 1.05): card and case titles.
- **Body** (400, `1rem`, 1.55): narrative text, keep line length near 65ch.
- **Label** (500, `0.6875rem`, 0.12em uppercase): micro-labels, taxonomy, and helper metadata.

**The Two Voices Rule.** Fraunces speaks direction and meaning. Inter/Mono speak operation and structure. Never swap these roles.

## Elevation

Depth is tonal first. The system relies on layered backgrounds, subtle borders, and occasional accent glows. Shadows are not primary structure; they appear mainly as interaction reinforcement.

### Shadow Vocabulary
- **Accent Glow** (`0 0 0 1px rgba(29,181,163,.25), 0 0 24px rgba(29,181,163,.25)`): primary button presence and signal emphasis.
- **Hover Lift Soft** (`0 12px 36px -18px rgba(8,10,16,.85)`): elevated chips/cert badges on hover.

**The Flat-By-Default Rule.** Surfaces start flat. Lift appears only when state changes justify it.

## Components

### Buttons
- **Shape:** rounded capsule (`999px`), compact and directional.
- **Primary:** cyan fill (`#1db5a3`) with dark text, glow-enabled.
- **Hover / Focus:** brighter cyan (`#42ccbb`), slight translation, visible focus contrast.
- **Ghost:** transparent with structural border and tonal hover fill.

### Cards / Containers
- **Corner Style:** restrained rounding (`8px` to `18px`), no ornamental curves.
- **Background:** dark tonal surfaces (`#0c121d` / `#141b2a`) over base canvas.
- **Border Strategy:** always explicit soft borders for structure.
- **Internal Padding:** mostly `24px` to `32px` rhythm blocks.

### Inputs / Fields
- **Style:** follows card language, dark backgrounds with soft border contrast.
- **Focus:** accent-colored boundary emphasis, never neon bloom.
- **Error / Disabled:** keep readable contrast and avoid red saturation overload.

### Navigation
- **Top nav:** compact fixed bar with optional blur only when scrolled.
- **Links:** muted by default, full foreground on hover/active.
- **CTA + language toggle:** capsule controls aligned as operational tools, not marketing badges.

## Do's and Don'ts

### Do:
- **Do** preserve the "signal over noise" balance, dense information with clean hierarchy.
- **Do** keep accent usage intentional and scarce relative to neutral surfaces.
- **Do** maintain strong text contrast for strategic and case-study narratives.
- **Do** preserve the serif/sans role separation across all new sections.

### Don't:
- **Don't** build generic SaaS landing pages with hero-metric dashboards and purple gradients.
- **Don't** replicate cookie-cutter agency sites with parallax hero images and "we're creative" copy.
- **Don't** drift into consulting sites that feel like PowerPoint decks (McKinsey blue, stock photography grids).
- **Don't** apply glassmorphism-heavy dark themes with neon accents (crypto/Web3 aesthetic).
