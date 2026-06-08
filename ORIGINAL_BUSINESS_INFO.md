# Original Business Info — Backup

Dieses Dokument bewahrt **alle echten Unternehmensdaten** des ursprünglichen
Salons auf, bevor das Frontend auf neutrale Platzhalter umgestellt wurde.

Stand vor Umstellung (Branch `claude/lucid-edison-69akrs`).

Sollte der ursprüngliche Käufer die Seite doch übernehmen, einfach die unten
gelisteten Werte an den markierten Stellen zurücktauschen.

---

## Unternehmen

| Feld | Original-Wert |
|---|---|
| Name (kurz) | `Mauro Ricardo` |
| Voller Name | `Friseursalon Mauro Ricardo` |
| Tagline | `Di Piazza Uomo E Donna — 100% Italy` |
| Beschreibung | `Italienisches Friseurhandwerk im Herzen von Münster. Schnitt, Coloration und Styling mit der Seele Italiens.` |
| URL | `https://mauro-ricardo.de` |
| Locale | `de-DE` |
| Timezone | `Europe/Berlin` |

## Kontakt

| Feld | Original-Wert |
|---|---|
| Telefon | `0251 1624493` |
| Telefon (href) | `tel:+492511624493` |
| E-Mail | `info@mauro-ricardo.de` |
| Absender-E-Mail (Resend) | `website@mauro-ricardo.de` |
| Straße | `Idenbrockpl. 5A` |
| PLZ | `48159` |
| Stadt | `Münster` |
| Land | `Deutschland` |

## Öffnungszeiten

- Mo–Fr: 09:00 – 18:00
- Sa: geschlossen
- So: geschlossen

## Rating

- Durchschnitt: `4.6`
- Anzahl Bewertungen: `84`
- Link: `https://www.google.com/search?q=Friseursalon+Mauro+Ricardo+M%C3%BCnster`

## Hero / Marketing-Texte (Originale)

- Hero Eyebrow: `100% Italian Hairstyle · Münster`
- Hero Headline: `Wo Münster italienisch wird.`
- Hero Subline: `Italienisches Friseurhandwerk seit [JAHR] mitten in Münster-Nord.`
- About Headline 2. Zeile: `Münsteraner Seele.`
- About Lead: `Seit über zwei Jahrzehnten steht Mauro Ricardo für italienischen Stil mitten in Münster-Nord.`
- About Portrait-Caption: `Mauro Ricardo`
- Footer Tagline-Zusatz: `Im Herzen von Münster-Nord.`
- Navbar mobile Adresszeile: `Idenbrockpl. 5A · 48159 Münster`
- Logo Text: `Mauro.Ricardo` (Brass-Punkt zwischen Wörtern), Suffix `100% Italy`
- Logo aria-label: `Mauro Ricardo — Startseite`

## Rechtliches

- Aufsichtsbehörde / Kammer: `Handwerkskammer Münster, Bismarckallee 1, 48151 Münster, hwk-muenster.de`
- Landesdatenschutzbehörde: `Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, ldi.nrw.de`

## SEO

- Keywords: `['Friseur Münster', 'italienischer Friseur', 'Haarschnitt Münster', 'Mauro Ricardo']`

## Reviews (statische Fallback-Daten, src/lib/reviews.ts)

```
1) author: "Di Piazza Uomo E Donna", rating: 5, "vor 2 Monaten"
   "War heute wieder dort und bin absolut begeistert. Super Service, entspannte Atmosphäre und handwerklich einfach top. Man merkt sofort, dass hier mit Leidenschaft gearbeitet wird. Immer wieder gerne!"
2) author: "Horst Dübner", rating: 5, "vor einem Jahr"
   "Immer freundlich und kompetent! Gehe gerne dorthin, Termine werden eingehalten, Chef und alle Damen schneiden vorzüglich!"
3) author: "Lenchen K.", rating: 5, "vor 4 Jahren"
   "Ich war dort zum Spitzen schneiden und wurde von einer sehr freundlichen jungen Frau empfangen. Sie beriet mich sehr gut und schnitt mir meine Haare wirklich schön."
```

## Package-Metadaten

- `package.json` name: `friseur-mauro-ricardo-2` (unverändert gelassen, da nur intern)
- `package.json` description (original): `Cinematic GDPR-compliant website for the italian hair salon Mauro Ricardo in Münster.`

---

## Geänderte Dateien (Quick-Reference)

- `src/lib/site.ts` — zentrale Daten
- `src/lib/reviews.ts` — Fallback-Reviews (Autoren anonymisiert)
- `src/components/sections/footer.tsx` — Münster-Nord-Zusatz entfernt
- `src/components/sections/navbar.tsx` — Adresszeile generisch
- `src/components/sections/hero.tsx` — Eyebrow + Subline generisch
- `src/components/sections/hero-headline.tsx` — Headline generisch
- `src/components/sections/about.tsx` — Headline, Lead, Portrait-Caption
- `src/components/ui/logo.tsx` — Marke
- `src/app/layout.tsx` — SEO-Keywords
- `src/app/actions/contact.ts` — Resend From-Adresse
- `src/app/impressum/page.tsx` — Handwerkskammer → Platzhalter
- `src/app/datenschutz/page.tsx` — Aufsichtsbehörde NRW → Platzhalter
- `package.json` — description
