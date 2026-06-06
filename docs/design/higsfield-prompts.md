# Higsfield AI — Bild- & Video-Prompts

> Konzept-Prompts für die Higsfield-Generierung von Hero-Visuals, Portrait, Portfolio und Detail-Shots. Stilrichtung: **Italian Editorial × Cinematic Dark**.

---

## Globale Style-Anchor (in jedem Prompt mitnutzen)

```
cinematic editorial photography, anamorphic 2.39:1 lens look, warm tungsten and
soft window light, deep espresso shadows with brass highlights, subtle film grain,
shallow depth of field, color graded like an italian vogue editorial, mood:
intimate craftsmanship, premium hair salon, mediterranean elegance
```

---

## 1. HERO-VIDEO (Section 2)

**Ziel**: 8–12s nahtloser Loop, Vertical & Horizontal Variants.

### Prompt A — „Hands & Scissors"
```
extreme close-up of an italian barber's hands holding polished silver scissors,
catching warm tungsten light, soft bokeh of brass mirror frames in background,
slow rotation of the scissors, depth of field razor thin, dust particles floating,
espresso black and bone cream tones with brass accents, anamorphic cinematic
look, 4k, slow motion 60fps, loopable
```

### Prompt B — „Salon Atmosphere"
```
dolly shot moving slowly through an elegant italian hair salon, brass vintage
chairs, marble counters, gold-framed mirrors reflecting warm window light, single
silhouette of stylist working in soft focus background, espresso wood floors,
cinematic 2.39:1, golden hour, film grain, slow loopable motion, premium luxury
mood
```

### Prompt C — „Espresso Detail"
```
overhead macro of an espresso cup on marble countertop next to professional
hair styling tools, cinematic warm light, brass spoon, hand reaching into frame,
shallow depth of field, italian morning ritual feel, 2.39:1 anamorphic, 4k
```

**Empfehlung**: Prompt A oder B als primärer Hero. C als Sub-Section-Accent.

---

## 2. PORTRAIT — MAURO (Section 3)

```
editorial portrait of a confident italian master hairstylist in his 40s, wearing
a crisp black apron over a white shirt, holding silver scissors, leaning against
an espresso-wood wall with soft brass sconce lighting, looking off-camera with
quiet intensity, warm catchlights in eyes, vogue italia style, medium format
film aesthetic, 4:5 vertical, depth of field shallow, cinematic color grade
```

> ⚠️ **Hinweis**: Falls Mauro ein eigenes Portrait einsenden möchte, bevorzugen wir das echte Foto. Higsfield als Fallback bis dahin.

---

## 3. LEISTUNGS-CARDS — Icons/Visuals (Section 4)

Für jede der 6 Leistungen ein abstraktes/elegantes Mini-Visual (1:1 quadratisch).

| Leistung | Prompt-Idee |
|---|---|
| Damen Schnitt | brass scissors gliding through a strand of dark hair, macro, warm light |
| Herren Schnitt & Bart | vintage straight razor on a leather strap, espresso background, cinematic |
| Coloration | swirl of caramel and chestnut hair color tones, abstract, editorial |
| Hochsteckfrisuren | elegant updo from behind, brass hairpins catching light, cream background |
| Pflege & Treatments | glass apothecary bottle with golden hair oil, warm spotlight |
| Beratung | hands holding a small mirror reflecting warm window light, intimate |

---

## 4. PORTFOLIO-GALERIE (Section 5)

9–12 Bilder im Stil:
```
editorial hairstyle portrait, italian high fashion magazine aesthetic, [SPEZIFISCHER LOOK],
warm cinematic lighting against dark espresso background, brass accent jewelry,
medium format film grain, 4:5 vertical, subject looking confident, vogue italia style
```

**Look-Variationen** (jedes Bild ein anderer):
1. „long flowing chestnut waves"
2. „precision pixie cut with silver streaks"
3. „classic italian men's slick-back with fade"
4. „romantic loose updo with face-framing tendrils"
5. „bold copper red bob"
6. „natural curl definition, voluminous"
7. „elegant low chignon with brass pins"
8. „modern shag with curtain bangs"
9. „groomed full beard with sharp lineup"

---

## 5. ATMOSPHÄRE / BACKGROUND-SHOTS

Für Übergänge, Hintergründe, Texturen:
- Marble surface macro
- Brass mirror frame detail
- Window light through espresso curtains
- Hair styling tools arranged flat-lay on marble
- Tungsten bulb close-up with bokeh

---

## Technische Specs

- **Format Web**: Bilder als WebP + AVIF, Fallback JPG
- **Hero-Video**: WebM (VP9) primär, MP4 (H.264) Fallback, max. 2 MB für Mobile-Variante
- **Auflösung**:
  - Hero: 1920×1080 (Desktop), 1080×1920 (Mobile-Portrait-Crop)
  - Portrait: 1200×1500 (4:5)
  - Portfolio: 1080×1350 (4:5)
  - Cards: 800×800 (1:1)
- **Color Profile**: sRGB (Web-safe)

---

## Workflow

1. Higsfield-Workspace auswählen
2. Hero-Video-Prompt A oder B generieren (3 Varianten)
3. Beste Version auswählen → ggf. upscalen
4. In `/public/videos/` ablegen
5. Reframe für Mobile (9:16) via `mcp__Higsfield__reframe`
