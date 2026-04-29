# Frontend Design & UX Guidelines

## Motion / Animation Library

This project uses **[motion](https://motion.dev)** (formerly Framer Motion). Always import from `motion/react`:

```tsx
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
```

---

## Animation Principles (Emil Kowalski)

### Core Rules
- **Animations should be purposeful** — every motion communicates something (state change, hierarchy, feedback). If it doesn't add meaning, remove it.
- **Short durations** — UI animations: 100–300ms. Longer feels sluggish. Micro-interactions ≤ 150ms.
- **Springs over duration+easing** — Springs feel physical. Use `type: "spring"` with stiffness/damping instead of timed easing curves for interactive elements.
- **GPU only** — Only animate `transform` (translate, scale, rotate) and `opacity`. Never `width`, `height`, `top`, `left`, `margin`, `padding` — they cause layout reflow.
- **Continuity** — Elements should appear to travel from where they were. `AnimatePresence` + `layoutId` for shared element transitions.
- **Entry vs exit** — Entering elements decelerate (ease-out). Exiting elements accelerate (ease-in). Never symmetric.
- **Stagger sparingly** — 30–50ms offset between items. More feels theatrical.
- **Reduce motion is non-negotiable** — All animations must respect `prefers-reduced-motion`.

### Motion Token Reference
```ts
export const spring = {
  snappy:  { type: "spring", stiffness: 400, damping: 30 },
  gentle:  { type: "spring", stiffness: 200, damping: 25 },
  bouncy:  { type: "spring", stiffness: 300, damping: 15 },
  slow:    { type: "spring", stiffness: 100, damping: 20 },
};

export const duration = {
  instant: 0.05,   // 50ms  — immediate feedback
  fast:    0.1,    // 100ms — button clicks, toggles
  normal:  0.2,    // 200ms — most transitions
  slow:    0.3,    // 300ms — modals, drawers
  slower:  0.5,    // 500ms — page transitions
};

export const ease = {
  enter:  [0, 0, 0.2, 1],         // decelerate — things arriving
  exit:   [0.4, 0, 1, 1],         // accelerate — things leaving
  inOut:  [0.4, 0, 0.2, 1],
  bounce: [0.34, 1.56, 0.64, 1],
};
```

### Reduced Motion Pattern
```tsx
import { useReducedMotion } from "motion/react";

function AnimatedCard() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0 } : spring.gentle}
    />
  );
}
```

### Common Patterns
```tsx
// Fade + slide up (list items, cards)
const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
  transition: spring.gentle,
};

// Scale tap feedback (buttons)
<motion.button whileTap={{ scale: 0.97 }} transition={spring.snappy} />

// Layout animation (reordering lists)
<motion.li layout transition={spring.gentle} />

// Shared element transition
<motion.div layoutId="modal-backdrop" />
```

---

## Elite Frontend UX Design

Create distinctive, production-grade interfaces that combine bold aesthetics with systematic UX excellence. Every output must be visually striking AND functionally flawless.

### Design Philosophy

Before writing code, commit to a clear direction:

**Context Analysis:**
- WHO uses this? (persona, expertise level, device context)
- WHAT action should they take? (single primary goal)
- WHY should they trust/engage? (value proposition)

**Aesthetic Commitment — choose one and commit:**
- Brutally minimal (Stripe, Linear)
- Maximalist editorial (Bloomberg, Awwwards)
- Retro-futuristic (Y2K revival, vaporwave)
- Organic/natural (earthy, hand-drawn, textured)
- Luxury/refined (fashion houses, premium brands)
- Playful/toy-like (Figma, Notion)
- Neo-brutalist (raw, exposed, intentionally rough)
- Soft/pastel (gradient meshes, dreamy)
- Industrial/utilitarian (data-dense, functional)

**The Memorability Test:** What ONE thing will users remember? If you can't answer this, the design lacks focus.

---

### Design Token System

#### Typography Scale
```
--font-size-xs:   0.75rem    /* 12px - captions, labels */
--font-size-sm:   0.875rem   /* 14px - secondary text */
--font-size-base: 1rem       /* 16px - body text (MINIMUM for mobile) */
--font-size-lg:   1.125rem   /* 18px - lead paragraphs */
--font-size-xl:   1.25rem    /* 20px - H4 */
--font-size-2xl:  1.5rem     /* 24px - H3 */
--font-size-3xl:  2rem       /* 32px - H2 */
--font-size-4xl:  2.5rem     /* 40px - H1 */
--font-size-5xl:  3.5rem     /* 56px - Display */
```

**Rules:**
- Line height: 1.5–1.6 for body, 1.1–1.2 for headings
- Line length: 45–75 characters (`max-w-prose` or `max-w-2xl`)
- Max 2–3 typefaces per design
- NEVER use Inter, Roboto, Arial as primary display fonts
- PAIR one distinctive display + one refined body font

**Distinctive fonts:**
- Display: Fraunces, Instrument Serif, Space Grotesk, Clash Display, Satoshi, Cabinet Grotesk
- Body: Source Serif Pro, IBM Plex Sans, Plus Jakarta Sans, Work Sans

#### Spacing Scale (8px base)
```
4px / 8px / 12px / 16px / 20px / 24px / 32px / 40px / 48px / 64px / 80px / 96px / 128px
```
Section gaps on landing pages: 80–120px.

#### Color System (HSL for dark mode)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --primary: 222 47% 11%;
  --primary-foreground: 210 40% 98%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --border: 214 32% 91%;
  --destructive: 0 84% 60%;
  --success: 142 76% 36%;
  --warning: 38 92% 50%;
}
.dark {
  --background: 222 47% 4%;
  --foreground: 210 40% 98%;
}
```

**Color rules:**
- 60-30-10 ratio: 60% dominant, 30% secondary, 10% accent
- ONE bold accent color maximum
- NEVER purple gradients on white (AI cliché)

---

### Accessibility (Non-Negotiable, WCAG 2.1 AA)

| Element | Minimum contrast |
|---------|-----------------|
| Body text | 4.5:1 |
| Large text (18pt+) | 3:1 |
| UI components, icons | 3:1 |

- Touch targets: minimum 44×44px, 8px spacing between
- ALL interactive elements must have visible focus states — never `outline: none` without replacement
- Every input must have a `<label>`, not just a placeholder
- Semantic HTML first: `<button>` not `<div onClick>`, `<a href>` not `<span>`
- First rule of ARIA: don't use ARIA if native HTML works

---

### Tailwind Best Practices

```typescript
// Always use cn() for conditional classes
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// NEVER dynamic class names — Tailwind purges them
// ❌  `bg-${color}-500`
// ✅  { blue: "bg-blue-500", red: "bg-red-500" }[color]
```

Use CVA (`class-variance-authority`) for component variants.

---

### Anti-Patterns — Never Do

**Visual:**
- Purple/blue gradients on white
- Inter/Roboto/Arial as display fonts
- Inconsistent border-radius (pick one: 4, 8, or 12px)
- More than 3 font weights
- Animating layout properties (width, height, margin)

**UX:**
- Confirmshaming ("No thanks, I hate saving money")
- Disabled submit buttons before user attempts submission
- Placeholder text as labels
- Fake urgency/scarcity

**Technical:**
- `outline: none` without a focus replacement
- Dynamic Tailwind class names
- Missing `alt` text on images
- Touch targets < 44×44px
- Body text < 16px on mobile

---

### Pre-Delivery Checklist

- [ ] Color contrast ≥ 4.5:1 (text) / 3:1 (UI)
- [ ] Touch targets ≥ 44×44px
- [ ] All images have `alt` text
- [ ] All form fields have `<label>`
- [ ] Visible focus states on all interactive elements
- [ ] Animations use only `transform` / `opacity`
- [ ] `prefers-reduced-motion` respected
- [ ] No dynamic Tailwind class names
- [ ] Mobile-first responsive
- [ ] Dark mode via CSS variables
- [ ] Single primary goal per page
- [ ] No dark UX patterns

---

## Figma MCP

Figma MCP is connected (`claude.ai Figma`). When given a Figma URL, read the design directly with `get_design_context`. Extract design tokens, layout structure, and component specs from the file before writing any code.
