# STATE.md — AROGYM 30-day challenge (Forge)

**Updated:** Monday, Nov 23, 2026, 10:52 PM ET
**Reporting line:** Forge reports only to Gym-Head.

## Now
- **Status:** **v7** built locally in `/workspace/telugu-fitness/forge/deploy/arogym/` and mirrored to `/workspace/telugu-fitness/forge/site/` (`_headers` deploy-only; `diff -rq --exclude=_headers` clean). **Not deployed** — ready for Gym-Head verification and Cloudflare Pages deploy. **v6** remains live at `https://arogym.pages.dev` (`462bf601-b30f-4e3c-a05e-c56c12026280`).
- **Next action:** Gym-Head verifies local v7 and deploys to `arogym.pages.dev`; then wire live `config.js` links once Manu supplies them.
- **Blocker:** `config.js` placeholders untouched (`contactEmail`, `consultSubmit`, `calendlyUrl` empty; Stripe/Tally/Zoom/WhatsApp `#`). Household/spouse pricing unconfirmed (copy asks visitors to inquire on the free consult).

## Goal and targets
Pilot a 30-day live-Zoom challenge for US Telugu IT professionals, moms, and families under **AROGYM**. Founding coach: Anish Jakkula, live from Hyderabad, weekdays `8 PM ET · 7 PM CT · 6 PM MT · 5 PM PT`. Start Monday, Jan 4, 2027 (through Feb 2, 2027; Makar Sankranti Thu, Jan 14). Enroll Dec 14, 2026 – Jan 2, 2027. Early bird $49 through Dec 24, 2026, then $79. Free taster Sat Dec 19, 2026, `10 AM ET · 9 AM CT · 8 AM MT · 7 AM PT`. Refunds within 3 days. Classes recorded.

## Live products
- AROGYM landing — https://arogym.pages.dev (Cloudflare Pages project `arogym`, live **v6** `462bf601-b30f-4e3c-a05e-c56c12026280`; local **v7** pending Gym-Head deploy).

## What exists (local v7)
- `/workspace/telugu-fitness/forge/deploy/arogym/` mirrored to `/workspace/telugu-fitness/forge/site/`. Preserves v6 obsidian/gold design system, Clash Display + Manrope + Noto Sans Telugu, `h1–h4` spacing fix, and all v6 AVIF/WebP/JPG assets (`brand-hero`, `wfh-posture`, `sports-recovery`, `food-home`, `trainer`, `og-brand-hero`).
- v7 additions: (1) all 4 US time zones everywhere (`8 PM ET · 7 PM CT · 6 PM MT · 5 PM PT` live; `10 AM ET · 9 AM CT · 8 AM MT · 7 AM PT` Dec 19 taster), (2) 5-question interactive vanilla-JS `#fit-check` ("Desk body & home-food fit check") pre-filling `#consult` or jumping to `#taster`, (3) 4-box "What we map in your 30-min consult" + Food Preference & US Time Zone fields in `#consult` form/payload/mailto/copy-details, (4) honest "Good fit / Not for you" + scope boundary block in `#who`, (5) 3-column `#why-coached` comparison (Free YouTube vs. Async Apps & India-Hours Coaches vs. AROGYM Live Cohort, zero competitor names), (6) `#pricing` value anchor (<$2.50/live class), Makar Sankranti bridge callout, and spouse/two-mats welcome notes in `#taster` and `#pricing`. Also fixed `.price-card__amt` display sizing.
- v7 screens (`forge/screens/`, all 38–141 KB): `v7-hero-1280.jpg`, `v7-who-fit-1280.jpg`, `v7-why-1280.jpg`, `v7-why-375.jpg`, `v7-fitcheck-1280.jpg`, `v7-consult-1280.jpg`, `v7-consult-form-1280.jpg`, `v7-pricing-1280.jpg`, `v7-pricing-375.jpg`.

## Metrics snapshot (local v7)
Lighthouse, Nov 23, 2026, 10:51 PM ET, local `http://127.0.0.1:4173/index.html`:
- Mobile: Performance **96**, Accessibility **100**, Best Practices **100**, SEO **100** (LCP 2.7s, TBT 30ms, CLS 0).
- Desktop: Performance **100**, Accessibility **100**, Best Practices **100**, SEO **100** (LCP 0.6s, TBT 0ms, CLS 0).
- Playwright QA (1280 / 1120 / 768 / 375px + `thank-you.html`): 0px overflow, 1-row desktop nav, 2-line hero h1, 8/8 images loaded, 0 console/page/HTTP errors, clean section bg alternation, E2E Fit Check → `#consult` prefill + submit + copy-details verified, zero banned dish/competitor/certification hits.

## Decisions
- Nov 22–23, 2026 — AROGYM brand, Founding Coach Anish Jakkula, v4–v6 shipped live by Gym-Head.
- Nov 23, 2026, 10:52 PM ET — v7 built locally from Scout's 21-competitor & US Telugu diaspora research (`full-competitor-niche-research.md`, §§1B–1C & §4); held locally for Gym-Head QA & deploy.

- Nov 23, 2026, 10:55 PM ET — Gym-Head verified and deployed **v7** live to `https://arogym.pages.dev` (deployment `b1c13f64-9cbc-437e-8704-e76bdb870ffd`).
