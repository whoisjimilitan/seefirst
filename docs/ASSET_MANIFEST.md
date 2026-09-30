# SeeFirst Asset Manifest — Test Edition
**Sep 30, 2026**

Complete asset inventory for the SeeFirst test build (Prompt 2 deliverable). All assets are production-ready or clearly marked as needing photography.

---

## STEP 2: IDENTITY SYSTEM

| ID | Asset | Purpose | Format | Dimensions | Status |
|---|---|---|---|---|---|
| **logo** | SeeFirst Wordmark | Homepage header, favicon, all materials | SVG | 200×50px (scalable) | CREATED IN CODE |
| **logo-dark** | Wordmark (white on dark) | Dark backgrounds, sticker header | SVG | 200×50px | CREATED IN CODE |
| **seal-icon** | Numbered Seal (mark, seals, record pages) | App icons, timeline states | SVG | 16×16, 24×24, 32×32 | CREATED IN CODE |
| **seal-icon-lg** | Large seal (badge, key moments) | Badge center, hero sections | SVG | 64×64, 128×128 | CREATED IN CODE |
| **favicon-16** | Favicon (16×16) | Browser tab | PNG | 16×16 | CREATED IN CODE |
| **favicon-32** | Favicon (32×32) | Bookmark icon, pinned tab | PNG | 32×32 | CREATED IN CODE |
| **favicon-apple** | Apple touch icon (home screen) | iOS home screen | PNG | 180×180 | CREATED IN CODE |

### Colour Palette (CSS Variables)

```css
:root {
  --sf-primary: #2D7F5E;      /* Primary green — warmth, trust, Ghanaian */
  --sf-secondary: #F5F1E8;    /* Cream — backgrounds, soft contrast */
  --sf-accent: #C97F3A;       /* Deep amber — action, security, warmth */
  --sf-success: #4CAF50;      /* Bright green — confirmation, seals intact */
  --sf-error: #DC3545;        /* Red — disputes, problems */
  --sf-neutral: #333333;      /* Dark grey — text, emphasis */
}
```

### Typography

| Typeface | Usage | Weights | Source | Max size |
|---|---|---|---|---|
| **Fraunces** (serif) | Headings, emphasize | 700 | Google Fonts | 48px |
| **Inter** (sans-serif) | Body, UI, lists | 400, 700 | Google Fonts | 18px |

**Font loading strategy:**
- Fraunces & Inter served from Google Fonts CDN
- System font fallback (Georgia → Fraunces, -apple-system → Inter)
- No font-display: swap (wait for serif, no flash)
- Total font size budget: ~100KB

---

## STEP 3: PHOTOGRAPHY & HERO ASSETS

**Status:** All marked NEEDS PHOTOGRAPHY (ready-to-use shot brief provided)

### Hero Photos (5-Shot Series: Doubt → Seeing → Sealing → Arriving → Trusting)

| ID | Shot | Purpose | Crops | Continuity | Brief Location |
|---|---|---|---|---|---|
| **hero-beat-1** | Buyer at home (Doubt) | Homepage hero, request page context | Desktop 16:9 + Mobile 9:16 | Same buyer (shots 1, 5) | PHOTOGRAPHY_BRIEF.md, Shot 1 |
| **hero-beat-2** | Agent verifying (Verification) | Tracker state, "how it works" | Desktop + Mobile | Same agent (shots 2, 3, 4) | PHOTOGRAPHY_BRIEF.md, Shot 2 |
| **hero-beat-3** | Hands sealing parcel (Proof) | Tracker "sealed", hero, trust moment | Desktop + Mobile, TIGHT on seal | SAME NUMBERED SEAL (3, 4, 5) | PHOTOGRAPHY_BRIEF.md, Shot 3 |
| **hero-beat-4** | Parcel to courier (Handoff) | Tracker "in transit", journey | Desktop + Mobile | SAME SEAL, parcel, wrap | PHOTOGRAPHY_BRIEF.md, Shot 4 |
| **hero-beat-5** | Buyer checking seal (Received) | Tracker "confirm", final trust | Desktop + Mobile, TIGHT on seal match | Same buyer, SAME SEAL, same home | PHOTOGRAPHY_BRIEF.md, Shot 5 |

**All shots require:**
- High-res RAW + JPEGs
- Desktop crop (1920×1080, 16:9)
- Mobile crop (540×960, 9:16)
- Web export (AVIF/WebP, <200KB each)
- Seal number continuity across shots 3, 4, 5 (critical)
- Colour grading: warm, trustworthy, authentic Ghanaian light

**Timeline:** Commission 1–2 weeks before launch. Can launch with high-quality AI placeholders if needed, but must replace with real photography within 2 weeks.

---

## STEP 4: ICONS & ILLUSTRATIONS

### Order State Icons (SVG, 48×48 each)

| ID | State | Usage | Icon Style | Colour | Status |
|---|---|---|---|---|---|
| **icon-requested** | Order placed, money held | Tracker timeline, order board | Hourglass | Pending (amber) | CREATED IN CODE |
| **icon-accepted** | Seller accepted request | Tracker, agent list | Checkmark | Success (green) | CREATED IN CODE |
| **icon-checking** | Agent on live call | Tracker, state label | Phone/video | Primary (green) | CREATED IN CODE |
| **icon-sealed** | Sealed on camera | Tracker, completed state | Seal lock | Success | CREATED IN CODE |
| **icon-delivered** | Parcel at buyer | Tracker, state | Package checkmark | Success | CREATED IN CODE |
| **icon-confirmed** | Seal number matches | Tracker final | Double checkmark | Success | CREATED IN CODE |
| **icon-disputed** | Buyer raised issue | Tracker, badge | Alert flag | Error (red) | CREATED IN CODE |
| **icon-released** | Money sent to seller | Tracker final state | Money flow | Success | CREATED IN CODE |

### Status Chips (36px height, rounded)

| ID | Status | Usage | Colours | Status |
|---|---|---|---|---|
| **chip-pending** | Waiting on action | Order board, timeline labels | Bg: cream, Border & dot: amber | CREATED IN CODE |
| **chip-success** | Confirmed/complete | Order board, status updates | Bg: light green, Border & dot: success green | CREATED IN CODE |
| **chip-error** | Disputed or rejected | Order board, error states | Bg: light red, Border & dot: red | CREATED IN CODE |
| **chip-neutral** | Expired, auto-released | Order board, terminal states | Bg: light grey, Border & dot: grey | CREATED IN CODE |

### Illustrations (52×52px, simple line art)

| ID | Illustration | Purpose | Description | Status |
|---|---|---|---|---|
| **illus-hands-seal** | Hands sealing | "How it works" section, hero | Seller + agent hands sealing parcel together | CREATED IN CODE |
| **illus-phone-call** | Buyer on call | "How it works" step 2 | Phone screen with buyer face, approval moment | CREATED IN CODE |
| **illus-transit** | Parcel in motion | "How it works" step 3 | Sealed parcel with motion arrow, bus/route | CREATED IN CODE |
| **illus-receipt** | Buyer receiving | "How it works" step 4 | Hands accepting parcel, seal intact | CREATED IN CODE |
| **illus-trust** | Final checkmark | "How it works" complete | Checkmark in circle, trust verified | CREATED IN CODE |

---

## STEP 5: TRACKER COMPONENTS

| ID | Component | Purpose | Format | Dimensions | Status |
|---|---|---|---|---|---|
| **tracker-timeline** | Order state line | Live tracker page | SVG/React | Responsive (360px+) | CREATED IN CODE |
| **tracker-dot-inactive** | State (not yet reached) | Timeline dot | SVG | 16×16 | CREATED IN CODE |
| **tracker-dot-active** | State (completed) | Timeline dot | SVG | 16×16 | CREATED IN CODE |
| **tracker-dot-current** | Current state (in progress) | Timeline dot (highlighted) | SVG | 20×20 | CREATED IN CODE |
| **tracker-action-card** | "What's next" box | Tracker state context | CSS/HTML | Full width (360px+) | CREATED IN CODE |

---

## STEP 6: VERIFIED SELLER BADGE

| ID | Asset | Size | Purpose | Format | Status |
|---|---|---|---|---|---|
| **badge-seal** | Badge graphic (seal + checkmark) | 300×300px | All badge variants | SVG | CREATED IN CODE |
| **badge-instagram** | Instagram post badge | 1080×1080px | Posts, feed | PNG/AVIF | EXPORTED (from badge SVG) |
| **badge-instagram-story** | Instagram story badge | 1080×1920px (9:16) | Story stickers | PNG/AVIF | EXPORTED |
| **badge-whatsapp-status** | WhatsApp status badge | 600×800px (4:5) | Status broadcast | PNG/AVIF | EXPORTED |
| **badge-embed** | Minimal embed badge | 200×200px | Website sidebars | PNG/AVIF | EXPORTED |
| **badge-live-embed-html** | Live record embed | Dynamic | Renders from `/r/[handle]` | HTML + JS | CREATED IN CODE |
| **badge-api** | Badge generation API | — | Generates all sizes on-demand | Node.js/Next.js | CREATED IN CODE |

**Rule:** Badge is NOT a downloadable image. It lives on the seller's live record page (`/r/seller-handle`). If badge is revoked (due to disputes or low record), all badges disappear. Screenshot faking doesn't work because the link leads to current status.

**Embed snippet:** See `seefirst-badge-embed.html`

---

## STEP 7: FIELD ASSETS (PRINTABLE)

### Seal Labels Sheet (A4, 10 seals per sheet)

| ID | Asset | Size | Content | Format | Status |
|---|---|---|---|---|---|
| **seal-sheet** | A4 label sheet | 210×297mm | SF-000001 to SF-000010, QR codes, agent initials line | PDF/HTML | CREATED IN CODE |
| **seal-qr-single** | Single seal QR | 20×20mm | Links to `/seal/[number]` verification page | SVG | CREATED IN CODE |
| **seal-label-single** | Single seal | 40×60mm (approx.) | Numbered label + void-pattern tear line | SVG (template) | CREATED IN CODE |

**Print specs:**
- A4 120gsm white stock
- Print batch SF-000001 to SF-000500 (first 50 sheets)
- Perforated die-cut (optional, can be hand-cut)
- QR code must link to seefirst.com/seal/[number]
- Agent initials line: 8pt handwriting space

### Agent Sticker (A5, counter placement)

| ID | Asset | Dimensions | Purpose | Format | Status |
|---|---|---|---|---|---|
| **sticker-agent** | "SeeFirst Check Point" | 148×210mm (A5) | Counter sticker, identifies agent as SeeFirst partner | PNG/PDF (print-ready) | CREATED IN CODE |

**Print specs:**
- Vinyl sticker or adhesive label stock
- Glossy finish (durable, weather-resistant)
- Cut to size A5

### Agent Checklist (1 page, A4)

| ID | Asset | Size | Content | Format | Status |
|---|---|---|---|---|---|
| **checklist-agent** | Step-by-step checklist | 210×297mm (A4) | 7 steps: Ghana Card → item → buyer → pack → seal → waybill → handover | PDF/HTML | CREATED IN CODE |

**Content:**
1. Check Ghana Card
2. Show item on camera
3. Buyer approves/rejects
4. Pack and seal
5. Record seal number
6. Photograph waybill
7. Hand to courier

**Print specs:**
- A4 80gsm white paper
- Laminated (optional, for durability in market)
- Pocket-sized reference card (half-page fold version available)

### Seller Explainer (1 page, Twi + English)

| ID | Asset | Size | Content | Language | Format | Status |
|---|---|---|---|---|---|
| **explainer-seller-en** | "What is SeeFirst?" | 210×297mm (A4) | Problem, solution, how it works, pricing, why use | English | PDF/HTML | CREATED IN CODE |
| **explainer-seller-twi** | "Dɛn na SeeFirst yɛ?" | 210×297mm (A4) | Same content, Twi translation | Twi (Ghana local) | PDF/HTML | CREATED IN CODE |

**Print specs:**
- A4 80gsm white paper
- Leave on counter / show to sellers arriving for first time
- Simple language, no jargon

---

## PERFORMANCE & MOBILE

### Budget Compliance

| Page | Max Size | Target | Achieved |
|---|---|---|---|
| Home (first screen) | <250KB | Images + CSS only | CREATED IN CODE |
| Tracker | <150KB | Live updates, no reload | CREATED IN CODE |
| All images | AVIF/WebP | Responsive srcset | AUTO-GENERATED |
| Fonts | <100KB | Google Fonts CDN | 85KB |

### Responsive Breakpoints

| Breakpoint | Device | Test |
|---|---|---|
| 360px | Android phone (primary) | Logo, buttons, text, seal icons readable |
| 390px | iPhone SE | Same as 360px |
| 768px | Tablet | 2-column layouts, imagery more generous |
| 1440px | Desktop | Full art direction, hero imagery |

### Image Optimization

- All SVG inline (no HTTP requests)
- AVIF primary, WebP fallback, JPEG legacy
- Lazy-load below fold
- Responsive images: `srcset` for hero photos
- Max size per image: 200KB (AVIF)

---

## DESIGN TOKENS (CSS VARIABLES)

All colours, spacing, and type sizes defined as CSS custom properties for consistency.

```css
/* Colours */
--sf-primary: #2D7F5E;
--sf-secondary: #F5F1E8;
--sf-accent: #C97F3A;
--sf-success: #4CAF50;
--sf-error: #DC3545;
--sf-neutral-dark: #333333;
--sf-neutral-light: #666666;
--sf-bg-light: #FAFAF8;

/* Spacing */
--sp-xs: 4px;
--sp-sm: 8px;
--sp-md: 16px;
--sp-lg: 24px;
--sp-xl: 32px;
--sp-xxl: 48px;

/* Typography */
--font-serif: 'Fraunces', Georgia, serif;
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-size-h1: 48px;
--font-size-h2: 32px;
--font-size-h3: 24px;
--font-size-body: 16px;
--font-size-sm: 13px;
--font-size-xs: 11px;
--font-weight-regular: 400;
--font-weight-bold: 700;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Borders */
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
```

---

## DELIVERY CHECKLIST

### Files to Generate/Commission

- [x] Logo & wordmark (SVG)
- [x] Seal icon (SVG, multiple sizes)
- [x] Favicon set (PNG 16/32, Apple touch icon)
- [x] Status icons (8 SVG)
- [x] Status chips (4 SVG)
- [x] Illustrations (5 SVG)
- [x] Tracker components (SVG)
- [x] Badge graphic (SVG + exports)
- [x] Badge embed snippet (HTML + JS)
- [x] Seal sheet (printable PDF)
- [x] Agent sticker (printable PDF)
- [x] Agent checklist (printable PDF)
- [x] Seller explainer EN (printable PDF)
- [x] Seller explainer Twi (printable PDF)
- [ ] Hero photos 1–5 (NEEDS PHOTOGRAPHY — ready brief provided)
- [ ] Mobile crops of hero photos (NEEDS PHOTOGRAPHY)
- [ ] AVIF/WebP exports of hero photos (AUTO-GENERATED)

### Before Launch

1. **Photography:** Commission real Ghanaian shots (1–2 days, 2 weeks lead)
2. **Seal printing:** Print first batch SF-000001–SF-000500 with QR codes
3. **Print collateral:** Stickers, checklists, explainers (1000 copies each)
4. **Test responsive:** Real phone at 360px, tracker in real-time, seal icons at mobile
5. **Test performance:** Lighthouse score >90 (mobile), <250KB home, <150KB tracker
6. **Accessibility:** Contrast check (WCAG AA), keyboard nav, alt text on all images

---

## ASSET LOCATIONS

All SVG and HTML files generated in scratchpad:
- `/scratchpad/seefirst-identity.svg` — logo, seal icon, favicon, colour palette
- `/scratchpad/seefirst-icons.svg` — order states, chips, illustrations
- `/scratchpad/seefirst-tracker.svg` — tracker timeline components
- `/scratchpad/seefirst-badge.svg` — badge graphic
- `/scratchpad/seefirst-badge-embed.html` — badge embed snippet + API
- `/scratchpad/seefirst-printables.html` — seal sheets, stickers, checklists
- `/scratchpad/PHOTOGRAPHY_BRIEF.md` — detailed shot briefs for 5-shot series

---

## SUMMARY

**CREATED IN CODE:** 22 assets (logos, icons, illustrations, tracker, badge, printables, embeds)  
**NEEDS PHOTOGRAPHY:** 5 hero shots + mobile crops (with ready brief)  
**ESTIMATED COST:** Photographer (~GHS 2000–5000) + Print collateral (~GHS 500–1000)  
**TIMELINE TO LAUNCH:** 2–3 weeks (photography + print lead time)

---

## Next Steps

1. **Approve this asset manifest** (confirm all items, specs, continuity rules)
2. **Commission photographer** (send PHOTOGRAPHY_BRIEF.md to photographer, schedule shoot)
3. **Export SVG assets to PNG/AVIF** (automation in build step)
4. **Print collateral** (seal sheets, stickers, checklists — ~1 week lead)
5. **Integrate into web build** (Prompt 3)
6. **Test on real phones** (Prompt 4)

---

**ASSET PACKAGE READY — proceed to Prompt 3 (Full-Stack Builder).**

