# Cookie-Consent — Konzept

> Rechtsgrundlage: § 25 TTDSG + Art. 6 Abs. 1 lit. a DSGVO. Echtes Opt-In, granular, jederzeit widerrufbar.

---

## Anforderungen (rechtssicher)

1. **Vor jeglichem Setzen nicht-essenzieller Cookies**: Banner muss aktiv eingewilligt werden
2. **Granulare Auswahl**: Nutzer:in muss zwischen Kategorien einzeln entscheiden können
3. **„Ablehnen" gleichwertig sichtbar wie „Akzeptieren"** (kein Nudging)
4. **Widerruf jederzeit möglich** (Footer-Link „Cookie-Einstellungen")
5. **Dokumentation** der Einwilligung (LocalStorage mit Timestamp + Version)
6. **Keine Pre-Selection** für nicht-essenzielle Cookies

## Kategorien

| Kategorie | Pflicht? | Inhalt | Speicherdauer |
|---|---|---|---|
| **Technisch notwendig** | ✅ immer aktiv | Consent-Status, Session | 6 Monate |
| **Karten** | ⚪ opt-in | Google Maps Embed | 24 Monate |
| **Analytics** | ⚪ opt-in | Plausible (cookieless — optional auch ohne Consent möglich, hier konservativ als Opt-In) | — |

## UX-Design

### Erst-Besuch — Banner-Modal

```
┌────────────────────────────────────────────┐
│  Cookies & Datenschutz                     │
│                                            │
│  Wir verwenden Cookies, um diese Website   │
│  bestmöglich zu gestalten. Du entscheidest. │
│                                            │
│  ☑ Notwendig (immer aktiv)                 │
│  ☐ Karten (Google Maps)                    │
│  ☐ Analytics (Plausible)                   │
│                                            │
│  [ Nur notwendige ]  [ Auswahl speichern ] │
│  [ Alle akzeptieren ]                      │
│                                            │
│  Mehr Infos in der Datenschutzerklärung    │
└────────────────────────────────────────────┘
```

### Footer-Link „Cookie-Einstellungen"
- Öffnet das Banner-Modal erneut
- Zeigt aktuelle Auswahl, ermöglicht Änderung
- Speichert neue Auswahl → triggert Reload betroffener Embeds

## Technische Umsetzung

- **State Management**: React Context + LocalStorage
- **Keine 3rd-Party-Library** für maximale Kontrolle (eigenes Component)
- **Maps**: erst nach Consent via `<iframe>` lazy-loaded; vorher Click-to-Load-Placeholder
- **Plausible**: Script erst nach Consent injiziert via dynamic `<script>` Tag

## Versionierung

- LocalStorage-Key: `mr-consent-v1`
- Inhalt: `{ version: 1, timestamp: ISO8601, categories: { maps: bool, analytics: bool } }`
- Bei Version-Update → erneute Einwilligung erforderlich
