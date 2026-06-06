# Friseursalon Mauro Ricardo — Website

> Cinematische, DSGVO-konforme Premium-Website für den italienischen Friseursalon „Mauro Ricardo — Di Piazza Uomo E Donna 100% Italy" in Münster-Nord.

[![Made with Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black)](https://vercel.com/)

---

## Über das Projekt

| | |
|---|---|
| **Kunde** | Friseursalon Mauro Ricardo |
| **Standort** | Idenbrockpl. 5A, 48159 Münster-Nord |
| **Telefon** | 0251 1624493 |
| **Öffnungszeiten** | Mo–Fr 09:00–18:00 · Sa/So geschlossen |
| **Google Rating** | 4,6 ★ (84 Rezensionen) |
| **Status** | 🚧 In Entwicklung |

## Tech-Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animationen**: Framer Motion + GSAP + Lenis (Smooth Scroll)
- **Fonts**: Playfair Display + Inter (lokal, DSGVO-konform via `next/font/local`)
- **Analytics**: Plausible (cookieless, DSGVO-freundlich)
- **Hosting**: Vercel (CI/CD via GitHub)

## Projektstruktur (geplant)

```
.
├── app/                    # Next.js App Router
│   ├── (legal)/            # /impressum, /datenschutz, /agb
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/           # 1 Datei je Section
│   └── ui/                 # shadcn-Komponenten
├── docs/
│   ├── design/             # Design-System, Section-Specs, Higsfield-Prompts
│   └── legal/              # Impressum-, Datenschutz-Drafts mit Platzhaltern
├── public/
│   ├── fonts/              # lokale WOFF2-Fonts (DSGVO!)
│   └── images/
├── TODO.md                 # offene Aufgaben
└── README.md
```

## Workflow

Sequenzielle Section-Entwicklung — jede Section wird einzeln geplant, designt, freigegeben, gecodet und in einem eigenen Commit/PR gepusht. Siehe `TODO.md` für den aktuellen Stand und `docs/design/sections.md` für Section-Specs.

## Rechtliche Hinweise

Diese Website wird strikt DSGVO-konform entwickelt:
- Google Fonts ausschließlich **lokal** eingebunden (kein Google-CDN)
- Echtes Opt-In Cookie-Consent (TTDSG-konform)
- Datenschutzerklärung & Impressum nach § 5 TMG / § 18 MStV
- AVV mit allen Auftragsverarbeitern (Vercel, Plausible)

## Lokale Entwicklung

```bash
# Wird nach Next.js-Scaffolding ergänzt
npm install
npm run dev
```

## Lizenz

Proprietär — Alle Rechte vorbehalten © Friseursalon Mauro Ricardo
