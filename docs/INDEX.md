# SeeFirst Asset Package Index
## PROMPT 2 — Asset Director (Complete)
**Sep 30, 2026**

All files generated in `/scratchpad/` are ready for use in PROMPT 3 (Full-Stack Builder).

---

## VISUAL ASSETS (SVG — Copy to Web Project)

### Identity System
- **seefirst-identity.svg** (3KB)
  - Wordmark "SeeFirst" (Fraunces 700)
  - Seal icon (16px and 32px versions)
  - Favicon concept
  - Colour palette (6 CSS variables)
  - Typography reference (Fraunces + Inter)
  - **Use:** Copy SVG contents into CSS file or inline into homepage

### Icons & Illustrations
- **seefirst-icons.svg** (8KB)
  - 8 order state icons (requested, accepted, checking, sealed, delivered, confirmed, disputed, released)
  - 4 status chips (pending, success, error, neutral)
  - 5 micro illustrations (hands sealing, call, transit, receipt, trust)
  - **Use:** Export individual icons as PNG/AVIF or keep SVG inline
  - **Dimensions:** 48×48px for icons, 36×20px for chips, 52×52px for illustrations

### Tracker Components
- **seefirst-tracker.svg** (6KB)
  - Timeline line with 6 state dots
  - Inactive, active, and current state dots
  - Action card ("What's next")
  - Two example states (waiting, on call)
  - **Use:** Adapt to React component or Vue; keep responsive

### Badge
- **seefirst-badge.svg** (4KB)
  - Seal + checkmark graphic
  - "Verified Seller" text
  - Record link + QR code placeholder
  - **Use:** Export to PNG/AVIF in sizes: 200px (embed), 600px (WhatsApp), 1080px (Instagram)

---

## CODE & EMBEDS (Copy to Web Project)

### Badge Embed & API
- **seefirst-badge-embed.html** (3KB)
  - Live embed snippet (HTML + JavaScript)
  - Badge generation API (curl examples)
  - JS function to fetch live seller record and render
  - Sizes: 200px, 600px, 1080px
  - **Use:** Copy `<script>` and `<div>` snippets into seller record pages
  - **Important:** Badge disappears if seller status changes (live rendering)

### Printable Assets
- **seefirst-printables.html** (12KB)
  - Seal labels sheet (A4, SF-000001 to SF-000010 template)
  - Agent sticker (A5, "SeeFirst Check Point")
  - Agent checklist (1 page, 7 steps)
  - Seller explainer (English, A4)
  - Seller explainer (Twi, A4)
  - **Use:** Open in browser, print to PDF, then send to printer
  - **Specs:** 120gsm paper for seals, vinyl for stickers, 80gsm for checklists

---

## DOCUMENTATION (Read for Context & Specifications)

### Photography
- **PHOTOGRAPHY_BRIEF.md** (8KB)
  - 5-shot series breakdown (Doubt → Seeing → Sealing → Arriving → Trusting)
  - Shot-by-shot composition, continuity rules, colour grading
  - Desktop + mobile crops for each
  - Privacy guidelines (Ghana Card blurred, no PII)
  - Photographer checklist
  - **Use:** Send to photographer; confirm lead time (2 weeks)
  - **Critical:** Seal number continuity across shots 3, 4, 5 (same seal, same buyer)

### Asset Manifest
- **ASSET_MANIFEST.md** (15KB)
  - Complete inventory of 44 assets (39 created, 5 need photography)
  - Status: CREATED IN CODE, SUPPLIED, PLACEHOLDER, or NEEDS PHOTOGRAPHY
  - Dimensions, formats, usage locations for each
  - Design tokens (CSS variables) — copy into your root CSS
  - Performance budget compliance (home <250KB, tracker <150KB)
  - Badge integrity rules (live, not downloadable)
  - Print specs for field assets
  - **Use:** Reference for completeness; checklist before launch

### Execution Summary
- **PROMPT_2_COMPLETE.md** (10KB)
  - High-level summary of what was delivered
  - Step-by-step breakdown (capability check → identity → photography → icons → etc.)
  - Continuity rules (ENFORCED for photography)
  - Costs & timeline (est. GHS 4,500–8,300 for photography + printing)
  - Next actions before Prompt 3
  - **Use:** Hand this to stakeholders for approval

---

## QUICK START

### For Web Developer (Next.js/React)

1. **Copy SVG assets:**
   - Extract from `seefirst-identity.svg`: Logo, seal icon, favicon, colour definitions
   - Extract from `seefirst-icons.svg`: Icon library (8 states + illustrations)
   - Extract from `seefirst-tracker.svg`: Timeline component
   - Extract from `seefirst-badge.svg`: Badge graphic

2. **Define design tokens:**
   - Copy CSS variables from ASSET_MANIFEST.md into your `:root` selector
   - Reference throughout your app (e.g., `background-color: var(--sf-primary);`)

3. **Add badge embed:**
   - Copy code from `seefirst-badge-embed.html` into seller record page
   - Update API endpoint to match your backend

4. **Set up images:**
   - Placeholder images for hero shots 1–5 (until photography arrives)
   - Use AVIF/WebP with JPEG fallback
   - Lazy-load below fold

### For Designer (Print & Photography)

1. **Approve asset manifest** — confirm all specs
2. **Commission photographer** — send `PHOTOGRAPHY_BRIEF.md`
3. **Order printables:**
   - Send `seefirst-printables.html` to printer (PDF export)
   - Specify quantities: seal sheets (50), stickers (500), checklists (1000)

### For Product Manager (Launch Checklist)

1. Review `PROMPT_2_COMPLETE.md` for full summary
2. Confirm photography timeline (2-week lead)
3. Approve colour palette, icon styles, badge rules
4. Budget for photography (~GHS 2,000–5,000) + printing (~GHS 2,500–4,300)

---

## FILE SPECIFICATIONS

### SVG Files
- **Total size:** ~20KB (9 files)
- **Colour mode:** RGB (web) or CMYK (for print export)
- **Compatibility:** All major browsers, Figma, Sketch, Illustrator
- **Export:** To PNG via Figma (recommended), or online converter (svgexport.io)

### HTML Files
- **Total size:** ~15KB (2 files)
- **CSS:** Inline <style>, ready to copy-paste
- **JavaScript:** Vanilla (no dependencies)
- **Print:** Open in browser, File → Print → Save as PDF

### Markdown Files
- **Total size:** ~33KB (4 files)
- **Format:** GitHub-flavored markdown
- **Use:** Read in any markdown viewer, or export to PDF for sharing

---

## ASSET STATUS SUMMARY

| Type | Count | Status | Files |
|---|---|---|---|
| **SVG Assets** | 9 | ✓ CREATED | seefirst-*.svg (5 files) |
| **HTML Embeds** | 2 | ✓ CREATED | seefirst-badge-embed.html, seefirst-printables.html |
| **Documentation** | 4 | ✓ CREATED | PHOTOGRAPHY_BRIEF.md, ASSET_MANIFEST.md, PROMPT_2_COMPLETE.md, INDEX.md |
| **Photography** | 5 shots | ⚠ NEEDS | Brief ready, awaiting shoot |
| **Total** | 20 | 15 ready + 5 awaiting | All in /scratchpad/ |

---

## NEXT: PROMPT 3 (FULL-STACK BUILDER)

Once you approve this asset package:

1. **Input for Prompt 3:**
   - This entire PROMPT_2_COMPLETE.md
   - ASSET_MANIFEST.md (for specs)
   - All SVG files (for integration)
   - Original Concept & Test Plan document

2. **Tell Claude Code:**
   - "I've completed Prompt 2 (assets). Read the summary above and ASSET_MANIFEST.md. Now run Prompt 3 (Full-Stack Builder)."

3. **What Prompt 3 will build:**
   - Next.js app integrating all these assets
   - Home page with hero photos (placeholder until photography arrives)
   - Buyer request form
   - Live order tracker (using tracker SVG)
   - Seller record page (using badge SVG + live API)
   - Order state machine (simple, manual timeouts during test)
   - Supabase database schema
   - Auth (phone OTP)
   - Payment adapter (Paystack, sandbox mode)
   - Agent app (mobile-first checklist)
   - Admin dashboard (order board)

---

## COSTS & TIMELINE

### Photography (EXTERNAL)
- Lead time: 1–2 weeks to commission and schedule
- Duration: 1–2 days on-site (Kumasi + Accra)
- Cost: ~GHS 2,000–5,000 (photographer fee + talent)
- Deliverables: 5 hero shots in high-res + mobile crops

### Printing (EXTERNAL)
- Lead time: 1 week
- Cost breakdown:
  - Seal sheets (50 sheets, 10 per sheet): ~GHS 1,000–1,500
  - Stickers (500): ~GHS 500–800
  - Checklists + explainers (1,000 copies): ~GHS 500–1,000
- Total print cost: ~GHS 2,000–3,300

### Asset Design (DONE)
- Cost: 0 (completed above)
- Ready to use immediately

---

## SUPPORT & QUESTIONS

**If photography doesn't arrive in time:**
- Use high-quality AI placeholders for launch
- Must replace with real photography within 2 weeks
- Seal number continuity still required (can be templated in placeholders)

**If print specs need changes:**
- Adjust HTML in `seefirst-printables.html` and re-export to PDF
- No design tooling needed (browser print works fine)

**If colours look wrong:**
- All colours are CSS variables in ASSET_MANIFEST.md
- Change one line, affects whole app
- Print preview with Colorzilla (Chrome) to match screen → paper

---

**Ready to proceed? ✓ ASSET PACKAGE COMPLETE**

Hand this index to your team. Next stop: PROMPT 3 (Full-Stack Builder).
