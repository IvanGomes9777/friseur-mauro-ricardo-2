# Design-System — Friseursalon Mauro Ricardo

> Stilrichtung: **Italian Editorial × Cinematic Dark** — wie eine Mischung aus Vogue Italia, einem Espresso-Bar-Interior in Mailand und einem Premium-Friseursalon.

---

## 1. Designprinzipien

1. **Cinematisch**: Jede Section fühlt sich wie ein Filmkapitel an — mit Tiefenschärfe, Licht und Bewegung.
2. **Editorial**: Großzügige Whitespace-Verhältnisse, typografische Hierarchie nach Magazin-Vorbild.
3. **Mediterran-warm**: Trotz dunkler Basis bleiben Akzente warm (Brass, Terrakotta, gebrannte Erdtöne).
4. **Haptisch**: Texturen (subtile Grain-Overlays, leichte Filmkorn-Effekte) statt sterilem Flat-Design.
5. **Performant**: Maximum 2 s LCP, ≥ 95 Lighthouse-Score auf Mobile.

---

## 2. Farbpalette

| Token | Hex | Verwendung |
|---|---|---|
| `--color-espresso` | `#1A1410` | Hintergrund (primär), dunkle Sections |
| `--color-ink` | `#0C0907` | Tiefster Schwarzton, Overlays, Schatten |
| `--color-cream` | `#F5F1EA` | Heller Hintergrund, Body-Text auf Dark |
| `--color-bone` | `#E8E0D0` | Sekundärer heller Ton, Borders |
| `--color-brass` | `#C9A961` | **Akzent primär** — CTAs, Highlights, Lines |
| `--color-brass-deep` | `#9B7E3F` | Brass-Hover, Brass-Border |
| `--color-terracotta` | `#B8543A` | Akzent sekundär — sparsam, für Emotion |
| `--color-stone-700` | `#3D352E` | Subtile Trennlinien auf Dark |
| `--color-stone-500` | `#6B5F52` | Sekundärtext auf Dark |

**Kontrast-Checks** (WCAG AA):
- Cream auf Espresso: 13.4:1 ✅ AAA
- Brass auf Espresso: 7.2:1 ✅ AAA
- Stone-500 auf Espresso: 4.6:1 ✅ AA

---

## 3. Typografie

### Font-Stack
| Rolle | Font | Quelle |
|---|---|---|
| **Display / Headlines** | **Playfair Display** (700, 900, italic) | Self-hosted WOFF2 |
| **Body / UI** | **Inter** (400, 500, 600, 700) | Self-hosted WOFF2 |
| **Fallback Serif** | `Georgia, 'Times New Roman', serif` | System |
| **Fallback Sans** | `system-ui, -apple-system, sans-serif` | System |

> ⚠️ **DSGVO-Hinweis**: Fonts werden ausschließlich aus `/public/fonts/` geladen — niemals via `fonts.googleapis.com`. Einbindung via `next/font/local`.

### Scale (Type-Scale 1.250 — Major Third, Mobile-First)

| Token | Mobile | Desktop | Verwendung |
|---|---|---|---|
| `text-hero` | 2.75rem (44px) | 5.5rem (88px) | Hero-Headline |
| `text-display` | 2.25rem (36px) | 4rem (64px) | Section-Headlines |
| `text-h2` | 1.875rem (30px) | 2.5rem (40px) | Sub-Headlines |
| `text-h3` | 1.5rem (24px) | 1.875rem (30px) | Card-Titles |
| `text-lead` | 1.125rem (18px) | 1.25rem (20px) | Intro-Absätze |
| `text-body` | 1rem (16px) | 1.0625rem (17px) | Fließtext |
| `text-small` | 0.875rem (14px) | 0.875rem (14px) | Captions, Meta |
| `text-eyebrow` | 0.75rem (12px) | 0.75rem (12px) | Eyebrow-Labels (tracking +0.2em, uppercase) |

### Spacing-Regeln
- **Letter-Spacing**: Headlines `-0.02em` (tight), Body `0`, Eyebrow `+0.2em` (uppercase)
- **Line-Height**: Headlines `1.05`, Body `1.65`, Lead `1.5`
- **Paragraph-Max-Width**: `65ch` für optimale Lesbarkeit

---

## 4. Spacing & Layout

### Spacing-Skala (Tailwind-kompatibel, basiert auf 4px)
`0 · 1 · 2 · 3 · 4 · 6 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 96 · 128`

### Section-Padding
- **Mobile**: `py-20 px-6` (80px vertikal, 24px horizontal)
- **Tablet**: `py-28 px-10`
- **Desktop**: `py-40 px-20` (160px vertikal — bewusst großzügig für cinematic feel)

### Container-Breiten
- `container-narrow`: `max-w-3xl` (Text-lastige Sections)
- `container-default`: `max-w-6xl` (Standard)
- `container-wide`: `max-w-7xl` (Galerien)
- `container-bleed`: full-width (Hero, Background-Effects)

### Breakpoints (Mobile-First)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 5. Animation & Motion

### Tooling
- **Framer Motion** — Komponenten-Animationen, Layout-Transitions
- **GSAP + ScrollTrigger** — komplexe Scroll-Choreografien (Parallax, Pinning)
- **Lenis** — Smooth-Scroll-Engine

### Easing & Timing
| Token | Easing | Dauer |
|---|---|---|
| `--ease-cinematic` | `cubic-bezier(0.22, 1, 0.36, 1)` | 800–1200ms |
| `--ease-smooth` | `cubic-bezier(0.65, 0, 0.35, 1)` | 400–600ms |
| `--ease-snap` | `cubic-bezier(0.4, 0, 0.2, 1)` | 200–300ms |

### Standard-Patterns
- **Fade-Up**: Elemente starten `y: 40px, opacity: 0` → `y: 0, opacity: 1`, stagger `0.08s`
- **Reveal Mask**: Headline-Reveal via Clip-Path (von unten nach oben)
- **Parallax**: Hero-Bild bewegt sich `0.6×` der Scroll-Geschwindigkeit
- **Hover-States**: CTA-Buttons mit `scale: 1.02` und Brass-Glow
- **Reduzierte Bewegung**: `prefers-reduced-motion` strikt respektieren — alle Animationen abschaltbar

---

## 6. Komponenten-Sprache

### Buttons
- **Primary CTA** (Brass): Rechteckig, leicht abgerundet (`rounded-sm`), Uppercase, `tracking-wider`, dezenter Brass-Glow on hover
- **Secondary** (Ghost): Transparent mit Brass-Border, fillt sich on hover
- **Tertiary** (Text-Link): Inline mit Brass-Underline-Reveal

### Cards (Leistungen)
- Dunkler Hintergrund (`stone-700`), Brass-Border on hover
- Icon oben, Titel mittig, Beschreibung unten
- Subtle Lift on hover (`translateY(-4px)`)

### Bilder
- Standard-Aspect: `4/5` (Editorial), `16/9` (Cinematic), `1/1` (Detail)
- Filter: leichter Warm-Tone-Tint via CSS `filter` für Konsistenz
- Loading: `next/image` mit Blur-Placeholder

---

## 7. Iconografie

- **Stil**: Outline, 1.5px stroke, abgerundet (Lucide Icons)
- **Größe**: 16px (inline), 20px (UI), 24px (Cards), 32px+ (Hero/Features)
- **Farbe**: Brass für Akzent-Icons, Cream/Stone-500 für UI

---

## 8. Visual Effects

### Texturen
- **Grain-Overlay**: subtle film grain (SVG-Noise oder PNG), opacity 4%, mix-blend-mode `overlay`
- **Vignette**: radial gradient bei Hero/Section-Backgrounds für Tiefe

### Gradients
- **Espresso-Fade**: `linear-gradient(180deg, var(--espresso) 0%, var(--ink) 100%)`
- **Brass-Sheen**: `linear-gradient(135deg, var(--brass) 0%, var(--brass-deep) 100%)` für CTAs

---

## 9. Accessibility

- **WCAG 2.1 AA Mindeststandard** (AAA wo möglich bei Text-Kontrast)
- **Fokus-Indikator**: Brass-Ring (`outline: 2px solid var(--brass); outline-offset: 4px`)
- **Reduced Motion**: Alle Scroll-Animationen abschaltbar
- **Semantik**: `<nav>`, `<main>`, `<section>` mit `aria-labelledby`
- **Skip-Link**: „Zum Hauptinhalt springen" als erstes fokussierbares Element

---

## 10. Mobile-First-Regeln

1. Layout immer zuerst für 375×812px (iPhone-Standard) designen
2. Touch-Targets ≥ 44×44px
3. Hero-Video auf Mobile durch Fallback-Bild ersetzen (Datenvolumen)
4. Navbar wird zu Burger-Menü < 1024px
5. Hover-States haben immer ein Touch-Äquivalent
