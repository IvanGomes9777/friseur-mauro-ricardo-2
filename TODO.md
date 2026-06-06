# TODO — Friseursalon Mauro Ricardo Website

Stand: 2026-06-06
Status-Legende: 🔴 blockierend · 🟡 wichtig · 🟢 nice-to-have · ✅ erledigt

---

## 🔴 RECHTLICH — vor Go-Live zwingend zu klären

Diese Angaben werden für ein rechtssicheres Impressum (§ 5 TMG / § 18 MStV) und die Datenschutzerklärung (DSGVO) benötigt. Bis dahin werden Platzhalter `[PLATZHALTER: ...]` genutzt.

- [ ] **Inhaber: vollständiger Vor- und Nachname** (aktuell Platzhalter: „Mauro Ricardo [NACHNAME]")
- [ ] **Rechtsform** bestätigen (vermutlich Einzelunternehmen — bitte verifizieren)
- [ ] **Geschäftsanschrift** — identisch mit Salon-Adresse? (Idenbrockpl. 5A, 48159 Münster)
- [ ] **E-Mail-Adresse** für Impressum & Kontakt (Vorschlag: `info@mauro-ricardo.de`)
- [ ] **Steuernummer ODER USt-IdNr.** (mind. eines davon ist Pflicht, falls umsatzsteuerpflichtig)
- [ ] **Berufsbezeichnung** (z. B. „Friseurmeister") und **verleihender Staat** (Bundesrepublik Deutschland)
- [ ] **Zuständige Kammer** — vermutlich Handwerkskammer Münster, https://www.hwk-muenster.de — bestätigen
- [ ] **Berufsrechtliche Regelungen** verlinken (Handwerksordnung — HwO, Anlage A)
- [ ] **Verantwortlicher i. S. d. § 18 Abs. 2 MStV** (meist Inhaber, ggf. abweichend)
- [ ] **Hosting-Provider** bestätigen → Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (für Datenschutzerklärung)
- [ ] **AVV mit Vercel** abschließen (Data Processing Addendum verfügbar)
- [ ] **AVV mit Plausible** (falls Analytics genutzt wird) — Plausible Insights OÜ, EU-Anbieter
- [ ] **Stornobedingungen** für Termine? (z. B. „Absage bis 24 h vorher kostenfrei") — bestimmt das AGB-Bedarf

## 🔴 INHALTE & MEDIEN

- [ ] **Logo** als SVG/PNG (transparent, hochauflösend)
- [ ] **Salon-Fotos** — Innenräume, Außenansicht, Detail-Shots (oder via Higsfield generieren)
- [ ] **Team-Fotos & Namen** für Section „Über uns"
- [ ] **Vorher/Nachher-Fotos** oder Portfolio-Material für Galerie
- [ ] **Leistungs- & Preisliste** (Damen, Herren, Färben, Styling, Wellness)
- [ ] **Geschichte/USP** — wie kam Mauro nach Münster? Warum „100% Italy"?
- [ ] **Team-Beschreibungen** (Spezialisierungen, Erfahrung)

## 🔴 INTEGRATIONEN

- [x] **Termin-Buchung**: Entscheidung → **Kontaktformular (Mail) + Telefon** (kein externes Tool)
- [ ] **Mail-Versand-Backend** wählen: Resend (empfohlen, EU-Hosting möglich) oder SMTP-Fallback
- [ ] **Anti-Spam**: Honeypot + Rate-Limit (kein reCAPTCHA — DSGVO-Probleme)
- [ ] **Google Maps Embed** — Place-ID ermitteln (für interaktive Karte)
- [ ] **Google Places API — Live Reviews Sync**: Inhaber muss eine **Google Cloud Konsole** öffnen, **Places API (New)** aktivieren, einen API-Key erstellen (mit HTTP-Referrer-Restriction auf die finale Domain!) und die **Place ID** ermitteln. Beide als `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACES_PLACE_ID` in den Vercel-Envs setzen. Bis dahin fällt die Section automatisch auf den statischen Snapshot zurück. Revalidate alle 6 h → ~4 Calls/Tag = praktisch $0.
- [ ] **WhatsApp Business** Nummer? (falls als Kontakt-Kanal gewünscht)
- [ ] **Domain** registrieren (Vorschlag: `mauro-ricardo.de` oder `friseur-mauro-ricardo.de`)

## 🟡 DESIGN-FREIGABEN

- [x] **Stil-Richtung** „italienisch-cinematic dark" — **freigegeben** ✅
- [x] **Farbpalette** Espresso/Cream/Brass — **freigegeben** ✅
- [x] **Typografie** Playfair Display + Inter — **freigegeben** ✅
- [ ] **Moodboard** via Higsfield generieren lassen
- [ ] **Hero-Video-Konzept** abstimmen (Loop, Länge, Stimmung)

## 🟡 TECH-SETUP

- [x] Git-Branch `claude/relaxed-edison-0LMiU` angelegt
- [ ] Next.js 14 (App Router) + TypeScript scaffolden
- [ ] Tailwind CSS + shadcn/ui konfigurieren
- [ ] Lokale Google Fonts (Playfair Display + Inter) via `next/font/local` DSGVO-konform einbinden
- [ ] Framer Motion + GSAP + Lenis installieren
- [ ] Vercel-Projekt verknüpfen
- [ ] ENV-Variablen-Struktur vorbereiten (`.env.example`)
- [ ] Plausible Analytics einbinden (cookieless)
- [ ] Lighthouse-Performance ≥ 95 sicherstellen
- [ ] WCAG 2.1 AA Accessibility-Check

## 🟡 SECTIONS — sequenziell abarbeiten

Workflow je Section: Konzept → Designfreigabe → Code → Review → Commit → nächste Section.

- [ ] **Section 1**: Navbar (fixiert, sticky, „Termin buchen"-CTA)
- [ ] **Section 2**: Hero (cinematisches Video/Foto + Headline + CTA)
- [ ] **Section 3**: Über uns (Storytelling, Mauro & Team)
- [ ] **Section 4**: Leistungen (Cards mit Hover-Animationen)
- [ ] **Section 5**: Portfolio (Thumbnail-Grid + Lightbox)
- [ ] **Section 6**: Öffnungszeiten (zeitzonenbasiert, „heute offen/geschlossen")
- [ ] **Section 7**: Google-Bewertungen (max. 3 Top-Reviews)
- [ ] **Section 8**: Kontakt (Adresse, Telefon, Maps-Embed)
- [ ] **Section 9**: Footer (Quick-Links + Legal + Cookie-Settings)

## 🟡 LEGAL-SEITEN

- [ ] `/impressum` — Pflichtangaben final einsetzen
- [ ] `/datenschutz` — finale Dienste-Liste (Vercel, Plausible, Google Maps, Fonts lokal)
- [ ] `/agb` — nur erstellen, wenn Stornogebühren o. ä. greifen
- [ ] **Cookie-Consent-Banner** — echtes Opt-In, granular (technisch nötig vs. Maps/Analytics)
- [ ] „Cookie-Einstellungen"-Link im Footer (erneutes Öffnen des Consent-Banners)

## 🟢 SEO / MARKETING

- [ ] **Local SEO**: NAP-Konsistenz (Name, Address, Phone) prüfen
- [ ] **Schema.org JSON-LD**: `HairSalon` mit Öffnungszeiten, Geo, Reviews
- [ ] **OpenGraph & Twitter Cards** (Sharing-Preview)
- [ ] **Sitemap.xml** & `robots.txt`
- [ ] **Favicon-Set** (alle Größen + Apple-Touch-Icon)
- [ ] **Meta-Descriptions** je Seite

## 🟡 ENTSCHEIDUNGEN (vom Inhaber bestätigt, 2026-06-06)

- ✅ Design-Richtung: Italian Editorial × Cinematic Dark
- ✅ Tech-Stack: Next.js 14 + TypeScript + Tailwind
- ✅ Inhalte: werden initial vom Entwickler-Team mit Platzhalter-Texten gesetzt (human, knapp)
- ✅ Termin-Buchung: Kontaktformular (Mail) + Anruf — kein externes Tool
- ✅ Preise: Platzhalter („ab €XX") bis Inhaber finale Preisliste liefert
- ✅ Fotos: Platzhalter, später via Higsfield AI ersetzen — **sparsamer Credit-Einsatz**
- ✅ Repo-Name: `friseur-mauro-ricardo-2`
- ⚠️ Higsfield-Strategie: nur Hero-Visual + 1–2 Schlüsselbilder generieren; restliche Bilder bleiben Platzhalter bis Echtmaterial vorliegt

## 🟢 DEPLOYMENT

- [ ] Vercel-Projekt erstellen & mit GitHub verbinden
- [ ] Preview-Deployments für jeden PR
- [ ] Custom Domain einrichten + SSL
- [ ] Lighthouse CI in PR-Pipeline
- [ ] Production-Deployment-Freigabe vom Inhaber einholen

---

## ✅ Erledigt

- [x] Projekt-Briefing erhalten (2026-06-06)
- [x] Basis-Infos zum Salon eingeholt (Adresse, Telefon, Öffnungszeiten)
- [x] Branch `claude/relaxed-edison-0LMiU` initialisiert
- [x] Design-Konzept-Draft erstellt (siehe `docs/design/design-system.md`)
- [x] Legal-Drafts mit Platzhaltern erstellt (siehe `docs/legal/`)
