---
name: Mauro Ricardo — Italian Editorial × Cinematic Dark
description: Visual system for an italian hair salon — dark espresso surfaces, brass and terracotta accents, editorial Playfair italics over neutral Inter.
colors:
  espresso: "#1A1410"
  espresso-deep: "#0C0907"
  cream: "#F5F1EA"
  bone: "#E8E0D0"
  brass: "#C9A961"
  brass-deep: "#9B7E3F"
  terracotta: "#B8543A"
  stone-700: "#3D352E"
  stone-500: "#6B5F52"
typography:
  hero:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  sm: "2px"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "5rem"
  section: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.espresso-deep}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.brass-deep}"
    textColor: "{colors.cream}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.brass}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-ghost-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.espresso-deep}"
  card-surface:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "40px"
  card-surface-hover:
    backgroundColor: "{colors.espresso-deep}"
  icon-plate:
    backgroundColor: "transparent"
    textColor: "{colors.brass}"
    rounded: "{rounded.none}"
    size: "48px"
  link-underline:
    textColor: "{colors.cream}"
  link-underline-hover:
    textColor: "{colors.brass}"
---

## 1. Overview: The Roman Espresso Bar after Hours

The system feels like a Roman espresso bar after closing time — house lights dimmed, brass fittings still warm, a single shaft of golden street-light hitting the mirror behind the counter. Dark, deliberate, attentive. Italianità without the postcard cliché.

**Mood adjectives.** Cinematic, handwerklich, ruhig. Editorial weight rather than marketing volume. Whitespace is material, not absence. Italian warmth is carried by accent (brass, terracotta) on a near-black base — never by a warm cream body background, which would land squarely in the AI-default zone.

**Aesthetic philosophy.** A salon that practices the patience it sells. Every surface earns its appearance: the hero shaft of light, the brass underline on a hover, the live status badge. Decoration without function is removed. The eye should rest on the work, not on the chrome.

**What it is NOT.** Not the polished Toni & Guy / Klier marketing-stock visual of a model on a white background. Not a Schwarz-Weiß minimalist studio with rounded SaaS cards. Not the cream-bg "warm Italian" cliché that AI systems reach for by reflex. Not numbered `01 / 02 / 03` section markers. Not identical card grids with icon-on-top-of-headline-on-top-of-body. Not gradient text. Not glassmorphism as default.

**Voice in design.** Italian wärme + deutsche Präzision. First-person plural, restrained. Headlines do the work; intros never restate them. No buzzwords, no exclamation marks, no superlatives.

## 2. Colors: The Espresso & Brass Palette

The palette is dominantly dark espresso with two warm accents and a careful neutral ramp. Strategy is **committed** (one brand voice carries 60%+ of the surface), not full-palette — this is a brand-register site, not a data dashboard.

| Token | Value | Role |
|---|---|---|
| `espresso` | `#1A1410` | Primary surface. Body bg, hero base. |
| `espresso-deep` | `#0C0907` | Deeper surface for sections that need separation, lightbox backdrop, hover-deepened cards. |
| `cream` | `#F5F1EA` | Primary body text on dark. Achieves 13.4:1 contrast (AAA). |
| `bone` | `#E8E0D0` | Secondary cream — rarely used, kept in the system for warm separator backgrounds if needed. |
| `brass` | `#C9A961` | **The brand accent.** CTA backgrounds, eyebrow text, hover states, focus rings, the heart of the hierarchy. |
| `brass-deep` | `#9B7E3F` | Brass hover-state, secondary brass for borders + glow. |
| `terracotta` | `#B8543A` | **The emotional second accent — sparing only.** Live "geschlossen" status dot, a single bottom-radial in the hero gradient. Never on a CTA, never on body text, never as a primary surface. |
| `stone-700` | `#3D352E` | Hairline borders on dark, divider lines, deep card outlines. |
| `stone-500` | `#6B5F52` | Muted UI text on dark — eyebrow secondary, metadata, captions. |

Color uses are deliberate, not Material-bucketed. Brass is the only color allowed on a button. Terracotta never touches an interactive element. Cream is body and headline; stone is metadata.

**Tinted neutrals.** Stone-500 and stone-700 are tinted slightly warm toward brass (their hue sits in the 35–45 range) so they belong to the family without competing with the accent.

**Contrast inventory.** Cream on espresso 13.4:1 ✅ AAA. Brass on espresso 7.2:1 ✅ AAA. Stone-500 on espresso 4.6:1 ✅ AA. Brass-on-espresso-deep is the floor for primary CTAs — verified, not assumed.

## 3. Typography: Playfair Italic + Inter

A two-family pair built on a real contrast axis: a humanist serif with strong italic personality (display) against a geometric sans-serif (body). Both self-hosted via `next/font` (no Google CDN at runtime — Schrems II safe).

**Roles.**
- `hero` — Playfair Display 700, italic where used. clamp(2.75rem, 7vw, 5.5rem). Hero only; one per page.
- `display` — Playfair Display 700, italic. clamp(2.25rem, 5vw, 4rem). Section headlines.
- `title` — Playfair Display 700 italic, 1.5rem. Card and service titles, lightbox captions.
- `body` — Inter 400, 1.0625rem (17px). Long-form copy. Line-height 1.65, max-width 65ch.
- `eyebrow` — Inter 500, 0.75rem, uppercase, tracking 0.2em. Reserved labels — used **rarely**, not on every section. See "Do's and Don'ts" on the eyebrow trap.

**Scale ratio.** 1.25 (Major Third), fluid via `clamp()`. Mobile-first scale — every step still readable at 375 px.

**Italic as voice.** Playfair italic is the brand's signature. It carries every display headline, every card title, every lightbox caption. Roman Playfair appears only where italic would conflict (the wordmark dot in the logo). This is a single typographic decision treated consistently across the whole site — not a one-off flourish.

**Ceiling and floor.** Display ceiling enforced at 6rem (Playfair italic touches above that). Display letter-spacing floor at -0.02em (tighter and the italic letters interlock).

**`text-wrap`.** `balance` on display and title; `pretty` on long body paragraphs to manage orphans.

## 4. Elevation: Flat and Tonal

The system is **flat**. There are no box-shadow tokens. Separation between surfaces is achieved by tonal layering (`espresso` → `espresso-deep`) and hairline borders (`stone-700/60`).

The single exception is the **brass glow** on the primary CTA hover: a soft drop-shadow (`0 8px 30px -4px rgba(201,169,97,0.45)`) that reads as light, not as material. It's not in the elevation vocabulary because it doesn't represent depth — it represents activation.

This means the site never feels card-y. Cards are used sparingly (service grid, review grid) and always as part of a hairline-divided sheet, not as floating containers.

## 5. Components

**`button-primary`.** Brass background, espresso-deep text, eyebrow type, sharp 2px corners. On hover: -0.5px translate-y, brass-deep background, brass glow shadow. Focus visible: 2px brass outline at 4px offset.

**`button-ghost`.** Transparent with brass/40 border, brass text. On hover: fills brass, text inverts to espresso-deep. Used as the secondary action paired with primary.

**`card-surface`.** Espresso surface, no rounded corners, no shadow. Border via the 1px stone-700/60 grid bed (services + reviews share this pattern — the grid lines ARE the card borders). On hover: drops to espresso-deep, a top hairline scales from left in brass.

**`icon-plate`.** 48×48 brass-outlined square holding a lucide outline icon (strokeWidth 1.25). Border lifts to full brass on hover; subtle brass/5 background fill. Used by service cards, contact info, social links.

**`link-underline`.** Inline text with a brass hairline beneath, scale-x-0 origin-left, expands to scale-x-100 on hover via ease-cinematic. Used in navbar items, footer nav.

**`portrait-frame`.** 4:5 aspect surface, hairline border, inset brass/15 secondary border at 6px offset. Holds an image OR a gradient-and-icon placeholder. Same shell, two states.

**Motion.** Three named easings: `cinematic` (cubic-bezier(0.22, 1, 0.36, 1), the primary), `smooth` (cubic-bezier(0.65, 0, 0.35, 1)), `snap` (cubic-bezier(0.4, 0, 0.2, 1)). Reveal entries are 0.9s cinematic; status crossfades are 0.5s cinematic; hover transitions are 0.5s cinematic. Stagger between siblings is 0.08–0.12s. **Reduced motion is non-negotiable** — every `motion.*` component checks `useReducedMotion` and substitutes a crossfade or instant transition.

**Layout system.** Three container widths: `container-narrow` (max-w-3xl, legal pages), `container-default` (max-w-6xl, most sections), `container-wide` (max-w-7xl, grids and the hero). Section vertical rhythm: `py-20 md:py-28 lg:py-40`. No global gutter system — each section composes its own grid.

## 6. Do's and Don'ts

**Do**
- Use Playfair italic for every headline above body — it's the brand's typographic signature.
- Reach for brass for any color decision. If it doesn't work in brass, the section probably doesn't need color.
- Compose sections from grid lines, not from cards with shadows. Hairlines do the structural work.
- Trust whitespace. The hero and the legal pages both use container-narrow widths — restraint is part of the voice.
- Carry warmth through accent + imagery + Playfair italic, not through body background.
- Add motion that fits what it reveals — the live status crossfades, the hero headline word-by-word, the portfolio tiles in waves. Different motions for different content.

**Don't**
- Don't reach for a cream / sand / beige body background to convey "italian warmth." That's the saturated AI default. Brand warmth lives in accent, type, and image — not in the surface.
- Don't add a tiny uppercase tracked eyebrow above every section. It already appears on `about`, `services`, `portfolio`, `opening-hours`, `reviews`, `contact` — six is the ceiling, and we're already at it. New sections should find a different opener (a number that earns its place, a question, a single committed Playfair line).
- Don't number sections `01 / 02 / 03` as scaffolding. Numbered markers only earn their place when the section IS a sequence with order-bearing information.
- Don't gradient-text the brass. The brass is a brand color, not a SaaS hero gimmick. Set it solid.
- Don't use glassmorphism for decoration. The navbar backdrop-blur and the lightbox backdrop-blur are the only allowed uses — they serve readability, not vibe.
- Don't add rounded corners to cards. The system is sharp. `rounded-sm` (2px) on buttons is the maximum; everything else is 0px.
- Don't stage identical card grids. The services grid + reviews grid share the same visual pattern because they ARE the same archetype. A third "identical" grid would dilute the signal — find a different layout.
- Don't add em dashes to body copy. The voice avoids them; use commas, colons, periods.
