# Section-Konzept — Mauro Ricardo Website

> 9 Sections, sequenziell entwickelt. Jede Section: Konzept → Designfreigabe → Code → Review → Commit.

---

## Section 1 — Navbar (fixed/sticky)

**Ziel**: Persistente Navigation, sofortige Buchungs-Conversion.

**Layout**:
- Höhe: 80px desktop / 64px mobile
- Logo links (Brass-Wordmark), Nav mittig, CTA rechts
- **Scroll-Verhalten**: bei Scroll > 80px → Hintergrund von transparent → Espresso mit subtle Backdrop-Blur + Bottom-Border in Stone-700
- **Mobile**: Burger-Menü → Full-Screen-Overlay mit Slide-in-Items (stagger)

**Items**: Über uns · Leistungen · Öffnungszeiten · Bewertungen · Kontakt
**CTA**: „Termin buchen" (Brass-Primary, leichter Glow)

**Animation**:
- Initial-Fade-In von oben (`y: -40, opacity: 0` → `0, 1`) über 800ms
- Logo: Subtle Letter-Reveal beim Mount
- Nav-Items: Hover → Brass-Underline-Reveal von links nach rechts

---

## Section 2 — Hero

**Ziel**: Cinematischer Moment, der den italienischen Premium-Charakter sofort vermittelt.

**Layout**:
- Full-Viewport (`100svh`), Background-Video oder -Bild (Higsfield)
- Mehrschichtiger Overlay: Espresso-Gradient bottom 40%, Vignette
- **Eyebrow** (Brass, uppercase): „100% Italian Hairstyle · Münster"
- **Headline** (Playfair Display Italic, riesig): „Wo Münster italienisch wird."
- **Sub-Headline** (Inter, Cream/70): „Friseurhandwerk mit der Seele Italiens. Seit [JAHR — PLATZHALTER]."
- **CTAs**: „Termin buchen" (Brass) + „Unsere Leistungen" (Ghost)
- Scroll-Indikator unten (dezent animiert)

**Animation**:
- Video startet mit `0.95×` Scale → animiert auf `1×` über 4s
- Headline-Reveal via Clip-Path (Wort für Wort, stagger 0.15s)
- Parallax: Video bewegt sich `0.6×` beim Scrollen
- Mouse-Move-Parallax (subtle, 8px max)

**Higsfield-Prompts**: siehe `docs/design/higsfield-prompts.md`

---

## Section 3 — Über uns / Storytelling

**Ziel**: Emotionale Bindung, USP klar machen.

**Layout**:
- Asymmetrisches Grid: links 60% Text, rechts 40% Portrait-Bild (Mauro)
- **Eyebrow**: „Unsere Geschichte"
- **Headline**: „Die Schere ist mein Pinsel. Münster ist meine Galerie." *(Platzhalter-Quote — final final mit Mauro abstimmen)*
- 2–3 Absätze Storytelling
- Drei Stats nebeneinander: „[X] Jahre Erfahrung" · „4,6 ★ Google" · „[Y] zufriedene Kund:innen"

**Animation**:
- Scroll-getriggert: Bild slidet von rechts ein, Text fadet von links
- Stats zählen hoch (CountUp)
- Quote mit Reveal-Mask

---

## Section 4 — Leistungen

**Ziel**: Klare Übersicht der Services, Conversion-Trigger.

**Layout**:
- **Eyebrow**: „Unsere Leistungen"
- **Headline**: „Italienisches Handwerk — auf den Punkt."
- Grid 2×3 (Desktop) / 1-spaltig (Mobile)
- **Service-Cards** (Platzhalter):
  1. „Damen Schnitt & Styling"
  2. „Herren Schnitt & Bart"
  3. „Coloration & Strähnen"
  4. „Hochsteckfrisuren & Anlässe"
  5. „Pflege & Treatments"
  6. „Beratung & Typberatung"

**Card-Design**:
- Brass-Outline-Icon oben
- Titel (Playfair, 24px)
- Beschreibung (Inter, 16px, Stone-500)
- Optional Preis-Hinweis (z. B. „ab €[XX]") *— Preise sind Platzhalter*
- Hover: Lift + Brass-Border-Glow

**Animation**:
- Stagger-Fade-Up bei Scroll-Eintritt (0.08s je Card)

---

## Section 5 — Portfolio / Galerie

**Ziel**: Visueller Beweis der Qualität.

**Layout**:
- **Eyebrow**: „Unsere Arbeiten"
- Masonry-Grid oder strenges 3-Spalten-Grid mit Aspect-Variation
- 9–12 Thumbnails (Mobile: 2 Spalten)
- Klick → **Lightbox** (Full-Screen Modal):
  - Bild groß, Caption darunter
  - Pfeile rechts/links für Navigation
  - ESC schließt, Click-Outside schließt
  - Keyboard-Nav (←/→/Esc)
  - Smooth Image-Crossfade

**Animation**:
- Thumbnails: Hover → leichter Zoom-In + Brass-Tint
- Lightbox-Open: Shared-Layout-Transition (Framer Motion `layoutId`)

**Bilder**: Higsfield generiert — Portfolio-Prompts in `higsfield-prompts.md`

---

## Section 6 — Öffnungszeiten

**Ziel**: Sofortige Info „Habt ihr jetzt offen?"

**Layout**:
- **Eyebrow**: „Wir sind für dich da"
- **Live-Status-Badge** oben groß: „🟢 JETZT GEÖFFNET — bis 18:00" oder „🔴 GESCHLOSSEN — öffnet [Tag] 09:00"
- Tabelle/Liste mit allen Wochentagen
- **Heute** ist visuell hervorgehoben (Brass-Underline)
- Hinweis: Zeitzone Europe/Berlin

**Logik**:
- Client-side basierend auf User-Zeitzone, fallback Europe/Berlin
- Server-Component für initialen SSR-Render
- Aktualisiert sich automatisch (Re-Render alle 60s)

**Animation**:
- Status-Badge pulst sanft (1.5s loop)
- Heutiger Tag: Brass-Highlight-Bar slidet von links ein

---

## Section 7 — Google-Bewertungen

**Ziel**: Social Proof, Vertrauen.

**Layout**:
- **Eyebrow**: „4,6 ★ auf Google · 84 Rezensionen"
- **Headline**: „Was unsere Gäste sagen."
- 3 Bewertungs-Cards nebeneinander (Mobile: Swipe-Carousel)
- Card-Inhalt:
  - 5 Brass-Sterne
  - Quote (Italic, Playfair)
  - Name + „vor X Monaten"
  - „Google" Badge
- CTA unten: „Alle Bewertungen auf Google ansehen" → externer Link

**Bewertungen** (statisch, aus Recherche):
1. **Di Piazza Uomo E Donna 100% Italy** — „War heute wieder dort und bin absolut begeistert. Super Service, entspannte Atmosphäre und handwerklich einfach top..." — vor 2 Monaten
2. **Horst Dübner** — „Immer freundlich und kompetent! Gehe gerne dorthin, Termine werden eingehalten, Chef und alle Damen schneiden vorzüglich!" — vor 1 Jahr
3. **Lenchen K.** — „Ich war dort zum Spitzen schneiden und wurde von einer sehr freundlichen jungen Frau empfangen..." — vor 4 Jahren

**Animation**: Cards fadet stagger ein, Sterne füllen sich nacheinander.

---

## Section 8 — Kontakt

**Ziel**: Conversion-Touchpoint, alle Wege zum Salon.

**Layout**:
- Split: links Kontaktdaten, rechts Maps-Embed
- **Linke Seite**:
  - **Eyebrow**: „Kontakt"
  - **Headline**: „Komm vorbei. Wir freuen uns."
  - Adresse (groß, Playfair): Idenbrockpl. 5A, 48159 Münster-Nord
  - Telefon (Brass, klickbar): `0251 1624493`
  - E-Mail (Platzhalter): `info@mauro-ricardo.de`
  - Öffnungszeiten kompakt
  - CTAs: „Anrufen" + „Termin buchen"
- **Rechte Seite**:
  - Google Maps Embed (interaktiv)
  - **DSGVO**: Maps erst nach Consent laden — Click-to-Load-Placeholder

**Animation**: Karte fadet ein nach Scroll-Trigger.

---

## Section 9 — Footer

**Ziel**: Rechtssichere Quick-Navigation, finale Brand-Note.

**Layout** (3 Spalten Desktop / Stack Mobile):
1. **Brand**: Logo + Tagline „100% Italy in Münster" + Social-Icons (Instagram, Facebook — falls vorhanden)
2. **Navigation**: Über uns · Leistungen · Öffnungszeiten · Bewertungen · Kontakt
3. **Kontakt-Kurzinfo**: Adresse, Telefon, E-Mail

**Bottom-Bar**:
- Links: © 2026 Friseursalon Mauro Ricardo. Alle Rechte vorbehalten.
- Rechts: Impressum · Datenschutz · AGB · **Cookie-Einstellungen** (öffnet Consent-Banner erneut)

**Animation**: Subtle Reveal beim ersten In-View.

---

## Globale Komponenten

### Cookie-Consent-Banner
- **Bei erstem Besuch**: Fixed Bottom-Banner / Modal
- **Granular**: Toggle für „Technisch notwendig" (immer an, disabled) + „Karten (Google Maps)" + „Analytics (Plausible)"
- Buttons: „Alle akzeptieren" · „Auswahl speichern" · „Nur notwendige"
- Link zu Datenschutz
- Settings re-öffenbar via Footer-Link

### Skip-to-Content
- Versteckt bis Tab-Fokus, dann Brass-Pill oben links

### Smooth Scroll
- Lenis global aktiv, respektiert `prefers-reduced-motion`
