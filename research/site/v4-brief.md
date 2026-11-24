# AROGYM site v4 brief — richer content, brand imagery, AROGYM as the hero

**For:** Forge (build in `forge/deploy/arogym/`, keep `forge/site/` in sync). No redeploy until Gym-Head / Manu OK it.
**Date:** Monday, Nov 23, 2026 (America/New_York).
**Source of this brief:** research + four new editorial images prepared for the voice request to enhance the live site (currently arogym.pages.dev).

## Design system (match exactly — do not invent a new look)

Use the tokens already in `styles.css`, not the slightly different hexes from earlier notes:

- Background: `--bg: #0a0a0b`, elevated `#121214`, cards `#18181c`
- Text: `#f4f1ea`, muted `#b4aea5`
- Accent gold: `--accent: #e8b44c` (hover `#f3c56a`)
- Type: Clash Display 700 for headings (`letter-spacing: -0.015em; word-spacing: 0.08em` — keep this, it is the mobile “Mana arogyam” fix), Manrope for body, Noto Sans Telugu for `.te` eyebrows
- Telugu eyebrows stay (gold, small, Clash/Noto). Tenglish is welcome in leads; body copy stays mostly English for clarity
- Image pattern: `<picture>` with `avif` → `webp` → `jpg`, `width`/`height`, lazy + async except the hero (`fetchpriority="high"`)
- Copy images into `deploy/arogym/img/` (and `site/img/`) as the filenames below

## Hard boundaries (do not cross)

From `anish/profile.md` and the existing health disclaimer:

- **No unverified credential language.** Do not write “certified,” ACE, NASM, ISSA, K11, “licensed dietitian,” or “physical therapist.” Anish’s public Instagram bio states only: mobility, less pain, helping busy professionals get lean and strong. The live bio’s “11 years,” “female fitness,” “special populations,” and “sports nutrition” were **not** found on that public profile. Keep them only if Manu/Anish have confirmed them in writing; otherwise tighten to the public-safe line.
- Coaching is **not** medical diagnosis, treatment, or physical therapy. Do not claim AROGYM “treats,” “cures,” or “rehabbed” injuries, diabetes, or posture conditions. Acute or clinical injuries need a clinician’s clearance first.
- Diet copy is **coach-guided food habits** for everyday Telugu/Telangana meals — not clinical dietetics, medical nutrition therapy, or a diabetes meal plan.
- No guaranteed results, no miracle “transformation,” no detox claims. Keep the existing PAR-Q / waiver / doctor-check disclaimer, and extend it to cover consults and food guidance.
- Cite at most one or two sourced facts per new section. Prefer “desk-job bodies often show…” over dumping clinic percentages into the hero. Never invent numbers. Clinic studies describe **people who already sought care**, not all Telugu IT workers.

---

## 1. Verified facts & sources (use only these)

### Work-from-home / IT desk posture and musculoskeletal strain

Among Indian IT professionals who visited **on-site occupational health clinics** in Bangalore, Delhi, and Hyderabad, Sharan et al. (2012) reported neck pain in **64.9%**, low back pain in **56.5%**, shoulder pain in **42.1%**, arm pain in **34.5%**, and wrist pain in **19.8%**. These figures are quoted in a later clinic-record analysis and should be framed as clinic attendees, not a population survey.

- Sharan D, Ajeesh PS, Rameshkumar R, Jose J. Risk factors, clinical features and outcome of treatment of work related musculoskeletal disorders in on-site clinics among IT companies in India. *Work*. 2012;41(Suppl 1):5702–5704. [https://doi.org/10.3233/WOR-2012-0924-5702](https://doi.org/10.3233/WOR-2012-0924-5702)
- Quoted in: Mohandoss M, Sharan D, Ranganathan R, Jose J. Co morbidities of myofascial neck pain among information technology professionals. *Ann Occup Environ Med*. 2014. [https://pmc.ncbi.nlm.nih.gov/articles/PMC4387776/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4387776/)

The 2014 paper itself reviewed **5,357** complete records (2005–2011) from the same three cities. Neck pain was the most common symptom, then low back, shoulder, and arm pain. **81.6%** of those records showed **8–12 hours** of computer work per day; 71.3% of attendees were aged 25–35. Again: people who already attended a clinic.

In a 2022 survey of **121** computer users working from home ≥6 hours/day during COVID-19 lockdowns, the most reported regions were neck **60.3%**, lower back **59.5%**, shoulder **49.6%**, upper back **42.1%**, and wrist/hand **35.5%**. Authors linked pain to makeshift home workstations, prolonged static posture, eye strain, and work stress. Small sample; useful as a WFH-specific snapshot, not a universal rate.

- Gosain L, Ahmad I, Rizvi MR, Sharma A, Saxena S. Prevalence of musculoskeletal pain among computer users working from home during the COVID-19 pandemic: a cross-sectional survey. *Bull Fac Phys Ther*. 2022;27:51. [https://doi.org/10.1186/s43161-022-00110-x](https://doi.org/10.1186/s43161-022-00110-x) · [https://pmc.ncbi.nlm.nih.gov/articles/PMC9800234/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9800234/)

**How to talk about hip tightness and rounded shoulders (no made-up prevalence):** prolonged sitting keeps the hips flexed and the trunk rounded, which commonly shows up as a forward-head / rounded-shoulder / tight-hip, stiff-low-back pattern. Describe the pattern in plain language. Do not invent a percentage for “tech neck” or “tight hip flexors.”

**AROGYM framing:** live mobility + progressive strength that helps busy professionals move more comfortably and get lean and strong — not a posture diagnosis or a PT protocol.

### South Asian / Telugu IT and diaspora metabolic risk

The MASALA study (Mediators of Atherosclerosis in South Asians Living in America) finds that South Asian adults in the US have a higher type 2 diabetes prevalence, more insulin resistance, **more liver and intermuscular fat**, and **lower lean muscle mass** than four other US groups in MESA, even after accounting for BMI. In a MASALA–MESA comparison, **44%** of South Asians with a “normal” BMI had two or more metabolic abnormalities, versus **21%** of White participants. South Asian participants at a BMI of **19.6** had a similar prevalence of metabolic abnormalities as White participants with an average BMI of **25**. South Asians had about **2.5-fold** higher odds of two or more metabolic abnormalities than White participants in adjusted models.

- Kanaya AM. Diabetes in South Asians: uncovering novel risk factors with longitudinal epidemiologic data. Kelly West Award Lecture 2023. *Diabetes Care*. 2024;47(1):7–16. [https://diabetesjournals.org/care/article/47/1/7/154008/Diabetes-in-South-Asians-Uncovering-Novel-Risk](https://diabetesjournals.org/care/article/47/1/7/154008/Diabetes-in-South-Asians-Uncovering-Novel-Risk)
- Shah AD, Kandula NR, Lin F, et al. Less favorable body composition and adipokines in South Asians compared with other US ethnic groups: results from the MASALA and MESA studies. *Int J Obes (Lond)*. 2016. [https://pmc.ncbi.nlm.nih.gov/articles/PMC4821815/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4821815/)

Because risk rises at a lower BMI, the American Diabetes Association (2015) and the US Preventive Services Task Force (2021) recommend considering diabetes screening for Asian American adults at **BMI ≥ 23** (not 25). WHO’s 2004 expert consultation also set public-health action points at BMI 23 and 27.5 for many Asian populations. This is a **screening** fact — do not turn it into “AROGYM will lower your BMI” or “we prevent diabetes.”

- Hsu WC, Araneta MRG, Kanaya AM, Chiang JL, Fujimoto W. BMI cut points to identify at-risk Asian Americans for type 2 diabetes screening. *Diabetes Care*. 2015;38(1):150–158. [https://diabetesjournals.org/care/article/38/1/150/37769/BMI-Cut-Points-to-Identify-At-Risk-Asian-Americans](https://diabetesjournals.org/care/article/38/1/150/37769/BMI-Cut-Points-to-Identify-At-Risk-Asian-Americans)
- WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. *Lancet*. 2004;363:157–163.

The ICMR-INDIAB-17 national survey (113,043 adults, 2008–2020) estimated India’s weighted prevalence of **diabetes 11.4%** (95% CI 10.2–12.5), **prediabetes 15.3%** (13.9–16.6), hypertension 35.5%, generalised obesity 28.6%, and **abdominal obesity 39.5%** (37.7–41.4). State-level estimates from the supplement (wide confidence intervals — show the range if you use them):

| State | Diabetes | Prediabetes | Generalised obesity | Abdominal obesity |
|---|---|---|---|---|
| Telangana | 9.9% (3.0–17.2) | 11.1% (3.1–19.3) | 25.7% (14.1–37.5) | 27.0% (10.5–43.9) |
| Andhra Pradesh | 9.5% (3.7–15.5) | 10.4% (4.2–16.9) | 27.4% (18.0–37.0) | 29.7% (15.5–44.1) |

- Anjana RM, Unnikrishnan R, Deepa M, et al. Metabolic non-communicable disease health report of India: the ICMR-INDIAB national cross-sectional study (ICMR-INDIAB-17). *Lancet Diabetes Endocrinol*. 2023. [https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00119-5/fulltext](https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00119-5/fulltext)
- Supplement Table S20: [https://www.thelancet.com/cms/10.1016/S2213-8587(23)00119-5/attachment/14ece557-560e-404d-b31f-2a91d8501d47/mmc1.pdf](https://www.thelancet.com/cms/10.1016/S2213-8587(23)00119-5/attachment/14ece557-560e-404d-b31f-2a91d8501d47/mmc1.pdf)

**AROGYM framing:** long desk hours plus a staple-heavy plate and lower muscle mass are a documented pattern in this community. AROGYM answers with live strength and mobility, plus practical Telugu meal upgrades — as fitness coaching, not as a clinic.

### Sports and recreational injuries (weekend athletes)

A BJSM meta-analysis of **25** randomised trials (26,610 participants, 3,464 injuries) found that exercise programmes can reduce sports injuries. **Strength training** was associated with a relative risk of **0.315** (95% CI 0.207–0.480) — injuries reduced to less than one-third. Multiple-component programmes RR 0.655; proprioception RR 0.550. Stretching alone was not beneficial (RR 0.963, CI crossed 1). Overuse injuries RR 0.527; acute injuries RR 0.647. Use this to support *progressive strength + movement prep*, not as a promise that AROGYM will cut anyone’s injury risk by 68%.

- Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. *Br J Sports Med*. 2014;48:871–877. [https://pubmed.ncbi.nlm.nih.gov/24100287/](https://pubmed.ncbi.nlm.nih.gov/24100287/) · PDF: [https://bjsm.bmj.com/content/bjsports/48/11/871.full.pdf](https://bjsm.bmj.com/content/bjsports/48/11/871.full.pdf)

Running: a 2021 systematic review found overall injury incidence around **40.2%** and prevalence around **44.6%** (large SDs). The highest incidence proportions by pathology included Achilles tendinopathy (10.3%), medial tibial stress syndrome (9.4%), **patellofemoral pain / runner’s knee (6.3%)**, plantar fasciitis (6.1%), and ankle sprains (5.8%). Knee, ankle, and lower leg were the leading locations in non-ultramarathon runners.

- Kakouris N, Yener N, Fong DTP. A systematic review of running-related musculoskeletal injuries in runners. *J Sport Health Sci*. 2021. PMID: 33862272. [https://pubmed.ncbi.nlm.nih.gov/33862272/](https://pubmed.ncbi.nlm.nih.gov/33862272/)

Pickleball (fast-growing among US adults 35+): a 2024 JAAOS review of emergency-department series found the most common presentations were **muscle strains, joint sprains, and fractures**. Men were three times more likely to present with strains/sprains; women three times more likely with fractures.

- Pickleball: A Standard Review of Injury Prevalence and Prevention in a Rapidly Growing Sport. *J Am Acad Orthop Surg*. 2024. PMID: 39079099. [https://pubmed.ncbi.nlm.nih.gov/39079099/](https://pubmed.ncbi.nlm.nih.gov/39079099/)

Name badminton (ankle/foot sprains, shoulder strain), cricket (shoulder, ankle, thigh), gym lifting (shoulder overload / impingement-pattern discomfort), and pickleball (elbow tendinopathy, shoulder, ankle) as **common weekend-sport complaint patterns**. Do not invent sport-specific percentages we did not lock down from a full text. Always: if pain is sharp, swollen, unstable, or lingering, see a clinician first; AROGYM coaches movement preparation and a safe return to training after clearance.

### Telugu / Telangana-style nutrition (official guidance, not blogs)

ICMR-NIN *Dietary Guidelines for Indians, 2024* and the “My Plate for the Day” model (2000 kcal reference):

- A balanced diet should provide **not more than 45% of energy from cereals and millets** (“diversify staples with millets”) and **up to 15% from pulses, beans and meat**; the rest from nuts, vegetables, fruits, and milk. That works out to roughly **50–55% carbohydrate, 10–15% protein, 20–30% fat**.
- **20–30% of cereal intake (raw weight) should be millets for adults**; prefer at least **half** of cereals/millets as whole grain.
- Combine cereals with pulses in a **3:1 raw-weight ratio** to improve protein quality. Eggs, fish, or meat can stand in for part of the pulses.
- My Plate (2000 kcal): cereals/millets **250 g**, pulses **85 g**, milk/curd **300 ml**, vegetables **400 g** (including green leafy), fruits **100 g**, nuts/seeds **35 g**, fats/oils **27 g**. NIN also notes that a large share of Indian diets lean too hard on cereals and too light on pulses, dairy, nuts, vegetables, and fruit.

- ICMR-NIN. *Dietary Guidelines for Indians, 2024*. [https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf](https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf) (and booklet: [https://www.nin.res.in/downloads/DGI_Booklet_English_CMYK.pdf](https://www.nin.res.in/downloads/DGI_Booklet_English_CMYK.pdf))
- Hemalatha R. Promotion of “My Plate for the Day” and physical activity… ICMR-NIN, 2023. [https://www.nin.res.in/brief/Policy%20Brief%20My%20Plate%20J18%2024.pdf](https://www.nin.res.in/brief/Policy%20Brief%20My%20Plate%20J18%2024.pdf)

**Practical plate upgrades to show (coach habits, not a prescription):**

- Swap one rice serving for **jonna rotte** (sorghum) or **sajja rotte**; keep a modest katori of sona masoori, hand-pounded, or brown rice — not a second mountain of rice plus rotte.
- Make **pappu / dal** a full bowl, not a garnish; keep **pesarattu**, sprouts / senagalu, and palakura or gongura on the plate.
- Add a clear protein: boiled eggs or egg bhurji, grilled or lightly spiced lean chicken, paneer, or tofu.
- Finish with **perugu** or buttermilk (or plain Greek yogurt in a US kitchen).
- US grocery swaps: Patel Brothers / Indian grocery for jonna/sajja flour, toor/moong dal, gongura, sona masoori; Costco for eggs, rotisserie chicken, paneer or firm tofu, frozen spinach, plain yogurt, nuts. Keep tadka oil modest.

Do **not** cite the MASALA finding that higher protein intake was associated with higher diabetes odds as a reason to eat more or less protein — it is easy to misuse and is not a meal-planning rule.

---

## 2. Images — paths, sizes, alt text

Copy the optimized `picture` set into `img/`. Keep the larger originals in `assets-v4/originals/` (do not ship those to the site).

Generated files were JPEG (the image tool returns `.jpg`); originals use that extension.

| Use | Optimized files (in `forge/assets-v4/`) | Dimensions | File sizes | Suggested alt |
|---|---|---|---|---|
| New hero background | `brand-hero.avif` / `.webp` / `.jpg` | 1600 × 900 | 22.4 KB / 45.4 KB / 93.9 KB | Two adults training together in a calm dark home studio — AROGYM coaching for strength and mobility. |
| WFH / posture section | `wfh-posture.avif` / `.webp` / `.jpg` | 1200 × 900 | 14.0 KB / 29.5 KB / 62.8 KB | A software professional at a dark home desk, leaning toward a laptop and holding the back of his neck. |
| Sports / recovery section | `sports-recovery.avif` / `.webp` / `.jpg` | 1200 × 900 | 15.0 KB / 28.3 KB / 59.0 KB | An athlete in black training wear doing controlled resistance-band shoulder work in a dark studio. |
| Telugu diet section | `telugu-diet.avif` / `.webp` / `.jpg` | 1200 × 900 | 94.7 KB / 183.3 KB / 243.9 KB | A Telangana-style plate: jonna rotte, a modest serving of rice, pappu, greens, grilled chicken, salad, and perugu. |

Originals (reference only):

- `forge/assets-v4/originals/arogym-brand-hero.jpg` — 1280 × 720, 165.7 KB
- `forge/assets-v4/originals/arogym-wfh-posture.jpg` — 1152 × 864, 159.9 KB
- `forge/assets-v4/originals/arogym-sports-recovery.jpg` — 1152 × 864, 153.5 KB
- `forge/assets-v4/originals/arogym-telugu-diet.jpg` — 1152 × 864, 438.4 KB

**Hero layout:** the left ~40–45% of `brand-hero` is clean obsidian negative space. Place the eyebrow, headline, lead, and CTAs on the **left**; keep `object-position` so the two people stay on the **right** at 375 and 1280 widths. Do not put type over faces. Rehearse the two-line “Mana arogyam, mana gym.” wrap.

**Performance:** lazy-load the three section images. The diet JPG is the heavy one (~244 KB) — avif/webp first, and keep it out of the first screen. Hero avif/webp should help LCP. Recheck Lighthouse after implementation (target still 95+).

**Visual QA already done:** all four approved; no regeneration needed. Photorealistic, dark-gold grade, no text/watermarks/logos. Hands and faces read cleanly. Mild Lanczos upscale from native 1152 / 1280 to the web widths. Diet rice is a touch generous next to two rotte, but the plate is appetizing and on-brand.

---

## 3. Section order and copy guidance (Manu’s five asks)

Suggested page flow. Reuse existing components (`section`, `section--alt`, `pain-card`, `btn-row`, chips, consult picker). Keep the 30-day challenge, Dec 19 taster, schedule, pricing, FAQ, and health form — just stop treating them as the #1 ask.

1. **Nav** — Wordmark; links: How it works, Desk & sport, Food, Team (was “Anish”), Free consult, Challenge / Pricing, FAQ. **Primary nav button: “Book a free consult” → `#consult`.** Move “Enroll” out of the primary button (text link or ghost is fine).
2. **Hero (`#top`)** — New `brand-hero` image. AROGYM is the speaker. Keep the Telugu eyebrow and “Mana arogyam, mana gym.” Rewrite the lead so the company/platform is the hero, not Anish personally.
   - **Primary CTA:** “Book a free 30-min consult” → `#consult`
   - **Secondary (ghost):** “See the 30-day challenge” → `#pricing` or `#challenge`
   - Tertiary text link: free taster, Dec 19
   - Drop or soften “Led by Anish Jakkula…” in the byline. A quieter line works: “Live Zoom coaching for US Telugu professionals and families, in Telugu and English.”
3. **`#promise` (short)** — One tight lead on the weeknight problem, then jump into the two new visual sections. Do not keep Anish as the subject of the pain cards.
4. **`#desk` — WFH posture** — Use `wfh-posture`. Cover slouching, forward-head / tech-neck, rounded shoulders, low-back stiffness, tight hips, and wrist/forearm strain from long laptop days. One sourced clinic or WFH fact is enough. CTA at the end: book the consult to talk through your week and your desk setup.
5. **`#sport` — Common sports and physical complaints** — Use `sports-recovery`. Badminton, cricket, pickleball, running, and gym lifting: shoulder overload, runner’s knee, low-back strain, ankle sprains, elbow tendinopathy. Position AROGYM as mobility, progressive strength, and technique coaching for prevention and a **safe return after medical clearance**. Not PT.
6. **`#who` — Built for Telugu employees, IT, and WFH** — No need for a fourth big photo. Two or three sentences + optional small fact row (MASALA: risk at a lower BMI / less lean mass; ICMR-INDIAB: diabetes and abdominal obesity are common in India, with state figures only if you show CIs). Then: this is why the method pairs live strength and mobility with Telugu meal habits, on weeknights at 8 PM ET.
7. **`#how` — How AROGYM works** — Reframe as the **platform** path: free 30-min consult (now step 1) → enroll in the challenge if it’s a fit → health form & waiver → Zoom / WhatsApp onboarding. The consult is how someone meets the team, not a footnote after payment.
8. **`#food` — Telugu / Telangana kitchen** — Use `telugu-diet`. Eyebrow e.g. “మన ఇంటి భోజనం”. Practical protein and portion upgrades, Costco / Patel Brothers swaps, “pesarattu is not the enemy.” One NIN My Plate / millet fact max. Footer of the section: “Coach-guided food habits, not a medical diet.”
9. **`#anish` → retitle as the team** — **“Anish Jakkula, Founding Coach.”** Keep his name and photo, de-emphasize him as the sole face. One short bio on mobility and busy professionals. Add an explicit line: *AROGYM is building a coaching team — additional coaches and Telugu dieticians will join as the pilot grows.* Do not make this section the visual climax of the page. Consult CTA can sit here as a quiet button, but the hero, nav, and sticky bar already do the heavy lift.
10. **`#consult` — 30-minute free consult (primary conversion)** — Keep the existing date/time picker, request-not-confirmed language (“Anish will confirm your slot within 24 hours by email or WhatsApp”), and Calendly swap hook. Update headings from “15 minutes” leftovers if any remain. Opening line: this is the best first step — goals, desk/sport history, and whether the challenge fits. The challenge remains the program, not the first button.
11. **`#schedule` / taster / `#pricing`** — Unchanged dates and prices ($49 through Dec 24, then $79; enroll Dec 14–Jan 2; start Jan 4, 2027; weekdays 8 PM ET). Pricing CTAs can stay “Enroll,” but a ghost “Or book a free consult first” should sit next to them.
12. **FAQ + health disclaimer + footer** — Add two FAQ rows: consult vs challenge, and “is this physical therapy / a medical diet?” (No.) Extend the disclaimer to consults and food guidance. Footer blurb: AROGYM, a coaching platform for Telugu families — not “classes with Anish” as the only identity. Sticky **`.cta-bar`:** primary button “Book a free consult,” meta line can still mention the $49 challenge as the secondary path. Change `aria-label` from “Enroll” to “Book a consult.”

### Sample copy (edit for length, keep the voice)

**Hero lead:** “AROGYM is a live coaching platform for US Telugu professionals, moms, and families. We help you get strong, move with less stiffness, and keep the food you already love — from your living room.”

**Desk kicker / title:** “Desk job body.” / “The laptop posture we all know.”
**Desk lead:** “Nine hours on a chair, head toward the screen, shoulders rounding, hips tight, back complaining by 6 PM. Among IT professionals who showed up at workplace clinics in India, neck and low-back discomfort were the most common complaints. AROGYM’s weeknight sessions build mobility and strength around a real workday — not a gym commute.”

**Sport title:** “Weekend games, weekday desks.”
**Sport lead:** “Badminton, cricket, pickleball, a Saturday run, or a hurried gym session on top of a stiff work week is a familiar mix. Structured strength and movement prep can lower injury risk in sport; AROGYM coaches that preparation. If something is swollen, sharp, or not settling, start with a doctor or physical therapist, then come back and we’ll train around what you’re cleared to do.”

**Food title:** “Mana intilone, protein and portions.”
**Food lead:** “We keep our kitchen. Jonna or sajja rotte, a smaller katori of rice, a real bowl of pappu, palakura or gongura, eggs or chicken or paneer, and perugu. ICMR-NIN suggests diversifying staples with millets and pairing grains with pulses — we turn that into weeknight habits you can actually cook in a US or India kitchen. This is coaching, not a clinic meal plan.”

**Team title:** “The AROGYM team.”
**Anish card:** “Anish Jakkula, Founding Coach, live from Hyderabad. He focuses on mobility and helping busy professionals get lean and strong, with less pain, in Telugu and English. As the pilot grows, more coaches and Telugu dieticians will join the team.”

---

## 4. Implementation notes for Forge

- Do not publish, buy domains, or change `consultUrl` / `calendlyUrl` / `contactEmail` unless they are already set. Leave those TODOs in `config.js`.
- Keep the consult picker slots as confirmed (weekdays 7:30–9:30 AM and 9:30–11:00 PM ET; Saturday mornings, 11:00 AM–1:00 PM, and 8:30–10:30 PM ET; Sundays off).
- Preserve the heading `word-spacing: 0.08em` fix.
- Update `og:image` only if you can produce a 1200 × 630 crop of `brand-hero` (people on the right, dark left). Until then, do not silently swap in a 16:9 file that will letterbox oddly. Update og alt text so it is not “Anish, AROGYM trainer…”
- Recheck desktop 1280 and mobile 375 for: hero type sitting in the dark left half, two-line headline, consult as the gold button in nav / hero / sticky bar, and all four images in dark cards with gold eyebrows.
- When done: short status (done / blockers / next), Lighthouse snapshot, and screenshots of hero (375 + 1280), desk, sport, food, team, and consult.

No redeploy from this brief alone.
