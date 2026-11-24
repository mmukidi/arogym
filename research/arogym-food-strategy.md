# AROGYM food messaging: preference-first wording + visual strategy

**Prepared:** Mon Nov 23, 2026, ~9:45 PM ET, for Forge / Gym-Head.
**Manu's rule (verbatim):** "Don't mention what needs to be eaten. Just mention we will customize based on your preference veg non veg or vegan. We will make it your tradition and cultural food kind."
**Translation into a build rule:** The site names **no dishes, no ingredients, no grocery items, no portions or grams**. It names only **preferences** (Vegetarian · Non-Vegetarian · Vegan, plus the Indian nuances) and **the process** (consult → built around your home cooking → adjusted weekly). The specifics move into the free consult and the coaching itself.

Boundaries unchanged: coach-guided everyday food habits, **not** a medical diet, not clinical nutrition, no "certified" or "licensed dietitian" language, no guaranteed results.

---

## 1. Audit: every food-specific spot in `deploy/arogym/index.html` (current v5 file)

Line numbers are from the file as read tonight.

| # | Line | Section | Current text (food-specific part) | Action |
|---|---|---|---|---|
| 1 | 106 | `#vision`, pillar 3 | "Your family's **pappu, kura, rice, and perugu** — smarter portions and **more protein**…" | **Replace** (copy in §3) |
| 2 | 105 | `#vision`, pillar 3 title | "Same kitchen, long-term habit" | Optional tweak (§3) |
| 3 | 93 | `#vision` quote | "…fuelled by the same home food your family already eats." | **Keep** (no dish named); light tweak optional |
| 4 | 258 | `#why-coached` table, Food row, YouTube cell | "'Eat clean' / **boiled chicken**" | **Replace** |
| 5 | 259 | `#why-coached`, Food row, AROGYM cell | "Your own Telugu kitchen: smarter portions + **protein upgrades**" | **Replace** |
| 6 | 330 | `#food` image `alt` | "…**jonna rotte**, a modest serving of **rice, pappu, greens, grilled chicken, salad, and perugu**." | **Replace with new image + alt** |
| 7 | 337 | `#food` H2 | "Same pot, smarter plate." | **Replace** ("plate" implies a prescribed plate) |
| 8 | 338 | `#food` lead | "…your **pappu** or your **rice** — we resize the rice, add the **protein**, and double the **kura**… **protein add-on**…" | **Replace** |
| 9 | 339 | `#food` fact | "…**62% carbs and 12% protein** (ICMR-INDIAB-21)… ICMR-NIN 2024 recommends… **millets**… **grains with pulses**…" | **Replace** (macro and millet advice is a prescription) |
| 10 | 340 | `#food` note | "Coach-guided everyday food habits, not a medical diet…" | **Keep** |
| 11 | 345–383 | `#food` `.pot-block` table "One family pot, five everyday upgrades" | Pesarattu, idli, dosa, upma, eggs, paneer/egg bhurji, sambar, Greek yogurt, roasted chana, peanuts, rice, pappu, kura, perugu, katori, jonna/sajja/ragi rotte, palakura, bendakaya, beerakaya, gongura, tawa chicken, tofu, fish, sprouts, buttermilk, biscuits, mixture, samosa, makhana, sprouts chaat, majjiga, fruit + nuts, biryani, raita, salad, "15-minute walk" | **Delete whole block** |
| 12 | 386–402 | `#food` `.grocery-block` "Your US grocery bridge" | Patel Brothers, Costco, Trader Joe's + jonna/sajja/ragi flour, moong/toor/chana dal, gongura, okra, drumstick, paneer, sona masoori, makhana, roasted chana, tadka oil, eggs, rotisserie/chicken breast, Greek yogurt, tofu, frozen spinach, nuts, salmon, pre-cut veg, sprouted lentils, frozen brown rice, batch pappu, boiled eggs, sheet-pan tawa chicken | **Delete whole block** (reuse `.grocery-grid` / `.grocery-card` CSS for the new preference cards) |
| 13 | 597 | FAQ summary | "Can I eat **rice, pesarattu, biryani**… our food?" | **Replace** |
| 14 | 598 | FAQ answer | "…quit **rice**… Eat our food, with smarter **portions**…" | **Replace** |
| 15 | 187 | `#who` lead | "…a 3 PM crash fueled by **chai**…" | Keep (context, not a prescription). See the honesty flag below. |
| 16 | 203 | `#who` energy card | "…running on evening **chai**…" | Keep (context) |
| 17 | 521 | `#pricing` bullet | "Eat our food, keep the habit. **Sankranti** falls mid-challenge…" | Keep (festival, no dish). Optional tweak in §3. |
| 18 | 8, 73 | meta description, hero lead | "…keep the food you love / you already love" | Keep (no dish) |
| — | `thank-you.html` | — | No food items named | No change |

**Honesty flag (outside the food brief, worth fixing in the same pass):** line 187 says "we hear both on **almost every call**." The pilot hasn't run consults yet, so this implies a track record we don't have. Suggested: "Normal weight on the scale with a growing waist, and a 3 PM crash fuelled by chai — a familiar desk-day pair."

### Current photo (`img/telugu-diet.jpg`): candid read
**What works**
- On-brand grade: obsidian background, warm low-key light, matte black ceramics; it sits well beside `#0a0a0b` and the gold accent.
- Reads unmistakably Telugu/Telangana (jonna rotte, pappu with tadka and red chilli, greens, perugu). That cultural signal is right.
- Appetizing, editorial, no text or watermarks.

**Why it clashes with the new strategy**
1. **The chicken (bottom right) is the most prominent protein.** It reads "AROGYM's plan includes meat." Pew's 2019–20 survey found **39% of Indian adults** call themselves vegetarian and **81%** restrict meat in some way (certain meats, certain days, or both). Among Hindus in the South specifically, ~30% are vegetarian. A strict-vegetarian or vegan Telugu family could bounce on sight.
2. **A single finished plate = a fixed meal plan.** The visual says "eat this," exactly what Manu wants removed. It also conflicts with the new copy ("built around *your* food").
3. **Dairy (perugu) and ghee-style tadka** quietly exclude vegans.
4. **The alt text names six foods**, so the prescription leaks to screen readers and SEO too.
5. The meat signal is not "wrong" for most Telugu homes: NFHS-5 Telangana (2019–21) found ~70% of adults 15–49 eat fish/chicken/meat at least weekly. That's why the answer is **neutral imagery + explicit three-way choice**, not swapping to a veg-only plate (which would make non-veg readers feel it's a "diet").

---

## 2. Research backing: why preference-first, non-prescriptive wins

### A. Sticking with it matters more than *which* foods
- **Dansinger ML et al. 2005, *JAMA* 293(1):43–53** (RCT, 160 adults, Atkins vs Zone vs Weight Watchers vs Ornish, 1 year). Weight loss was associated with **adherence level (r = 0.60)**, **not diet type (r = 0.07)**. Only about 25% per group sustained meaningful adherence. https://pubmed.ncbi.nlm.nih.gov/15632335
  → The landing page shouldn't sell a menu; it should sell an approach people can stick with.
- **Honest counterpoint: Yancy WS et al. 2015, *Ann Intern Med* 162(12):805–14** (RCT, 207 veterans with BMI ≥ 30). Simply letting people **choose between two Western diets** (low-carb vs low-fat) did **not** improve 48-week weight loss (5.7 vs 6.7 kg, P = 0.26) or adherence. https://pubmed.ncbi.nlm.nih.gov/26075751
  → "Choice" alone is not magic. The value is **fit to the person's real food life + ongoing coaching**, not a dropdown. So the copy promises "built around your home cooking and adjusted week by week," not just "pick veg or non-veg."

### B. Autonomy-supportive coaching predicts better engagement (Self-Determination Theory)
- **Ng JYY et al. 2012, *Perspect Psychol Sci* 7(4)** (meta-analysis, 184 data sets in health contexts). Practitioner **autonomy support** was moderately linked to need satisfaction (ρ ≈ .31–.48) and autonomous motivation (ρ ≈ .21–.42). Autonomous motivation was linked to better mental and physical health indicators. These are correlational. https://pubmed.ncbi.nlm.nih.gov/26168470/
- **Williams GC et al. 1996, *J Pers Soc Psychol* 70(1):115** (128 patients, 6-month very-low-calorie program, 23-month follow-up). More autonomous motivation predicted **better attendance, more weight lost, and better maintenance**. Perceived autonomy support from staff predicted that motivation. https://pubmed.ncbi.nlm.nih.gov/8558405/
  → Telling people "you choose; we build around it" is the autonomy-supportive framing. Prescribing dishes on the homepage is the controlling one.

### C. Cultural fit is a documented adherence lever for South Asians
- **Systematic review, *Diabetic Medicine* 2023** (PMID 37151165; South Asians with T2D/prediabetes in Western countries). Top barriers include **cultural insensitivity**, social pressures, misconceptions, and time. Facilitators include cultural sensitivity and support networks. It recommends "diets tailored to the SA palate." https://pubmed.ncbi.nlm.nih.gov/37151165/
- **Hawthorne K et al., Cochrane Review CD006424** (culturally appropriate health education for ethnic-minority adults with T2D). Short-term HbA1c improved vs usual care (≈ −0.4% at 3 months, −0.5% at 6 months), fading over time. https://pubmed.ncbi.nlm.nih.gov/18646153/ · https://www.cochrane.org/evidence/CD006424_culturally-appropriate-health-education-people-ethnic-minority-groups-type-2-diabetes-mellitus
  → Use internally as rationale. **Don't put the HbA1c numbers on the site** (they're diabetes-patient data, and AROGYM isn't a diabetes program).
- **Farhat G et al. 2024, *J Hum Nutr Diet*** (24 trials in South Asians). Culturally bespoke advice alone gave modest weight change (−0.65 kg). Adding supervised activity gave more (−1.13 kg). https://pubmed.ncbi.nlm.nih.gov/38234263/
  → Supports "food + live training together," which is AROGYM's model.

### D. Food + movement together beats movement alone (keep one line)
- **Johns DJ et al. 2014, *J Acad Nutr Diet*** (meta-analysis of RCTs ≥ 12 months). Combined diet + activity programs beat activity-only by 5.3 kg (3–6 mo) and 6.3 kg (12–18 mo). https://pmc.ncbi.nlm.nih.gov/articles/PMC4180002/ (already on the site; reuse without the macro/millet tail).

### E. Who is reading: Telugu food preference is genuinely mixed
- **Pew Research Center 2021** ("Religion in India," 29,999 face-to-face interviews, Nov 2019–Mar 2020). **39%** of Indian adults vegetarian; **42%** non-veg but avoid meat on certain days and/or certain meats; **81%** restrict meat somehow. **30%** of Hindus in the South are vegetarian. Vegetarian Hindus in the South are more willing (67%) than vegetarian Hindus nationally (39%) to eat at a non-vegetarian friend's home. https://www.pewresearch.org/religion/2021/06/29/religion-and-food/
- **NFHS-5 Telangana state report (2019–21), Table 77** (adults 15–49). "Fish or chicken/meat" at least weekly: **women 72.4%** (daily 2.0 + weekly 70.4), **men 74.6%** (4.6 + 70.0). "Never": women 5.7%, men 2.6%. https://dhsprogram.com/pubs/pdf/FR374/FR374_Telangana.pdf (read this turn). The Andhra Pradesh report link returned "removed," so no AP figure is used.
- **Caveat:** There's no good public data on veg/non-veg split among **US Telugu IT diaspora** families specifically. Telangana non-veg prevalence among adults is high, but India-wide data shows widespread *partial* restriction (veg days, certain meats). Assume a **mixed audience and mixed households**, which is exactly what "Veg · Non-Veg · Vegan, built around you" solves.

### F. How leading coaching platforms frame food on their landing pages (fetched tonight)
| Platform | Landing-page food framing (paraphrased; quotes exact) | Dishes named upfront? |
|---|---|---|
| **Precision Nutrition** (1-to-1 coaching page) | "…a nutrition and wellness plan uniquely designed for your lifestyle, preferences and goals." "We don't make you follow complicated, restrictive diets." "Break the cycle of restrictive dieting." | **No** |
| **Noom** (homepage) | "Customized plans tailored just for you." FAQ: programs "can be customized to fit… various dietary needs"; quiz "based on your goals, lifestyle, and preferences." | **No** |
| **Healthify (HealthifyMe)** (homepage) | "Work with a nutritionist who fits your needs best"; AI "personalized meal and workout suggestions." | **No** (tracking/AI-led) |
| **FITTR** (homepage) | Leads with testimonials like "Reversed diabetes…" plus lab tests and doctors. | **No**, but makes **medical-outcome claims** AROGYM must not copy |

**Pattern:** Platforms sell **personalization + process + a human**, and keep menus behind the signup/consult. FITTR is the anti-pattern for AROGYM's boundaries ("reversed diabetes").

### G. Why this is smarter for conversion and adherence
1. **No one self-excludes at the scroll.** Every named dish is a filter: chicken loses strict-veg families, paneer/curd loses vegans, rice-cutting worries rice lovers, millets feel like "diet food." Naming *preferences* instead of *foods* lets all three groups see themselves.
2. **It protects the free 30-min consult.** If the page already gives the plan, the consult has nothing to offer. "We'll build it around your kitchen on the call" gives a concrete reason to book.
3. **It removes diet anxiety.** No "resize your rice," no grams, no "upgrades." The page stops sounding like a list of rules (controlling) and starts sounding like a partner (autonomy-supportive, per SDT).
4. **Adherence follows fit, not menu.** Dansinger 2005: adherence predicts results; diet type doesn't. Cultural tailoring is a documented facilitator for South Asians.
5. **Cleaner compliance.** Fewer specific food claims means less risk of reading as medical nutrition therapy.

---

## 3. Wording strategy + site-ready copy

### Principles
- **Name preferences, never plates.** Vegetarian · Non-Vegetarian · Vegan, plus nuances in one line (eggetarian, veg days/festival weeks, mixed households).
- **"Your" before "our."** "Your food, your tradition, your schedule." AROGYM is the builder, not the menu.
- **Process > promise.** Three steps (consult → built around your home cooking → adjusted weekly).
- **Kill diet-anxiety words:** cut, quit, avoid, cheat, clean, detox, "upgrade," "smarter plate," grams, katori.
- **Warm, confident, short.** One Telugu eyebrow, Tenglish OK in one phrase, English body.
- **One evidence line, one boundary line.** No macro stats in `#food`.

### `#food` replacement (drop-in; delete `.pot-block` and `.grocery-block`)

- **Eyebrow (`.section__kicker.te`):** మన ఇంటి భోజనం *(keep; "our home food")*
- **H2:** **Your food. Your tradition. Built around you.**
- **Lead (2–3 sentences):**
  > Vegetarian, non-vegetarian, or vegan, AROGYM builds your food habits around what your family already cooks and the traditions you keep. No separate "diet food," no foreign meal plan. Your coach starts from your kitchen and your week, then shapes the habits with you.
- **Preference cards** (reuse `.grocery-grid` / `.grocery-card` styles; rename classes to `.pref-grid` / `.pref-card` if Forge prefers). Each card is a gold small-caps label, a title, and one line:
  1. **Vegetarian:** "Built entirely around your vegetarian home cooking, including eggetarian if that's you."
  2. **Non-Vegetarian:** "Built around how your family cooks and eats, every day and on weekends."
  3. **Vegan:** "Fully plant-based, built around your traditions, with no dairy assumed."
- **Nuance line (small, under the cards):**
  > Veg on certain days? Fasting or festival weeks? A mixed-preference household? Tell us at the consult, and we plan around it, not against it.
- **How it works (3 steps; reuse `.steps` / `.step` / `.step__num`, add a `steps--three` modifier):**
  1. **Free 30-min consult:** "Tell us your preference, your traditions, and how your week really runs."
  2. **Built around your home cooking:** "Your coach shapes simple habits around the food you already make, for you and your family."
  3. **Adjusted week by week:** "As training, travel, festivals, or late calls change, your food habits adjust with you."
- **Evidence line (`.feature__fact`):**
  > In randomized trials, programs that paired food habits with exercise beat exercise alone (Johns et al., 2014), and in a head-to-head diet trial, sticking with the plan mattered more than which diet it was (Dansinger et al., 2005).
- **Boundary (`.feature__note`, keep existing text, tightened):**
  > Coach-guided everyday food habits, not a medical diet. If you manage diabetes, kidney disease, allergies, pregnancy, or another condition, follow your doctor or dietitian.
- **CTA (quiet, optional):** `Book a free consult →` `#consult`
- **Image `alt` (for the new visual, concept A):** "Hands tempering spices in a dark iron pan on a home stove, warm steam rising — AROGYM food coaching built around your home cooking."

### Minor touch-ups elsewhere

| Line | Location | New copy |
|---|---|---|
| 105 | `#vision` pillar 3 title | **Your food, your tradition** |
| 106 | `#vision` pillar 3 body | "Veg, non-veg, or vegan: food habits built around your family's own cooking, for the long run." |
| 93 | `#vision` quote (optional) | "…coached live and built around your body, with food habits built around your own tradition: veg, non-veg, or vegan." *(or keep as-is; it already names no dish)* |
| 258 | `#why-coached` Food, YouTube cell | "One-size 'eat clean' plans" |
| 259 | `#why-coached` Food, AROGYM cell | "Built around your preference (veg, non-veg, or vegan) and your home cooking" |
| 597 | FAQ question | **"Do I have to give up our food or follow a special diet?"** |
| 598 | FAQ answer | "No. Whether you're vegetarian, non-vegetarian, or vegan, we build food habits around your own home cooking and traditions. No detox, no foreign meal plan, no separate cooking for you. This is coach-guided food habits, not a medical diet or a calorie target." |
| new | FAQ (optional add) | **"Our home is mixed: some veg, some non-veg. Does that work?"** "Yes. We plan around the household you actually have. Share it at the consult." |
| 521 | `#pricing` bullet (optional) | "Your food, your festivals. Sankranti falls mid-challenge — celebrate, then show up again." |
| 187 | `#who` lead | Replace "we hear both on almost every call" (see audit honesty flag) |
| 8 | meta description (optional) | "…and keep your own food — veg, non-veg, or vegan — weeknights at 8 PM ET." |

**Check after edit:** run a grep for the banned list (`pappu|rice|kura|perugu|rotte|jonna|sajja|ragi|millet|pesarattu|idli|dosa|upma|egg|chicken|paneer|tofu|fish|dal|curd|yogurt|biryani|Patel|Costco|Trader|protein|katori|gongura|sambar|buttermilk|majjiga|makhana|chana|sprout|raita|samosa`). The only allowed hits are "eggetarian" in the Vegetarian card, and "chai"/"Sankranti" as context.

---

## 4. Visual strategy

### Principles
1. **Show cooking, not a prescribed plate.** A finished, portioned plate says "this is your meal plan." A kitchen moment says "your food, made at home."
2. **Visually neutral across veg / non-veg / vegan.** No meat, fish, eggs, paneer, curd, or ghee in frame. Everything visible should be plant-based ingredients that every Telugu kitchen shares (spices, curry leaves, mustard seeds, dried red chillies, steam, steel and brass vessels), so nobody is excluded and nothing is prescribed.
3. **Avoid the Western "diet" cliché.** No salads, grilled-chicken-and-broccoli, measuring cups, or scales. For this audience that reads "not for us."
4. **Real over generic.** NN/g eye-tracking (Nielsen 2010, "Photos as Web Content," reviewed 2026) found users **ignore decorative stock photos of generic people** and scrutinize content-relevant images of real people and products. Implications:
   - (a) Make the image *about the content* (home cooking).
   - (b) If faces appear, prefer **real** AROGYM community photos later; AI-generated "families" risk reading as stock.
   - (c) Hands-and-process shots avoid fake-face risk. https://www.nngroup.com/articles/photos-as-web-content/
5. **Brand fit:** deep obsidian negative space, a single warm practical light, gold highlights (brass, flame, turmeric) echoing `#e8b44c`, matte black and steel surfaces. No text in the image.

### Three concepts

**A. "The tadka moment" (hands + home stove)** ⭐ **Recommended**
Close, low-angle shot: a person's hands tempering spices in a small black iron pan on a home gas stove. Mustard seeds popping, curry leaves crackling, two dried red chillies, a wisp of steam lit gold. Dark kitchen, a brass/steel masala dabba softly out of focus.
- **Pros:**
  - Universally Telugu: tadka/popu is in every veg, non-veg, and vegan kitchen.
  - Entirely plant-based in frame, so no group is excluded.
  - Shows *cooking*, not a plate, so nothing is prescribed.
  - Hands avoid fake-face issues.
  - Strong obsidian + gold-flame contrast.
  - Works at 375px crop (pan centred).
- **Cons:**
  - No faces, so less "family."
  - Must keep the oil looking like oil, not ghee (vegan neutrality).
  - Smoke/steam must stay subtle to avoid looking murky in avif.

**B. "Masala dabba overhead" (ingredients flat-lay)**
Overhead: an open round steel masala dabba with seven spice wells (turmeric gold dominant), curry-leaf sprig, dried chillies, a few whole spices scattered on dark slate. Gold rim light.
- **Pros:**
  - Iconic South Indian kitchen object.
  - Plant-only and neutral.
  - Very easy to generate cleanly.
  - Gorgeous gold palette match.
- **Cons:**
  - Static and product-like, so NN/g "decorative" risk is higher.
  - Says "spices," not "your family's food."
  - Overhead flat-lays are common in stock.

**C. "Family kitchen, evening" (people)**
Wide, warm scene: a Telugu mother and father cooking together in a modern US suburban kitchen at night, child at the counter, steel vessels, steam; dark surroundings, practical warm light.
- **Pros:**
  - Strongest "family + tradition" emotion.
  - Directly mirrors "built around your family's cooking."
- **Cons:**
  - AI-generated faces/hands are the highest artifact risk, and it reads as stock (NN/g).
  - Implies a gendered/household setup that may not match everyone.
  - Vessels' contents become ambiguous (veg or meat?).
  - Best done later with **real** AROGYM families (with consent), not generated.

**Recommendation:** Ship **A** now. Keep **B** as a backup or for small cards/OG. Revisit **C** once real pilot families consent to photos.

### Art direction / image-generation brief: Concept A
- **Output:** 1152×864 (4:3) original; export `food-home.avif/.webp/.jpg` at 1200×900 (replacing `telugu-diet.*`; keep the old files out of `img/`). Lazy-load; target ≤ 70 KB avif.
- **Prompt:**
  > Photorealistic editorial food photograph, low three-quarter angle, close-up of a person's hands tempering spices in a small black cast-iron tadka pan on a home gas stove at night. Mustard seeds popping, fresh curry leaves crackling, two dried red chillies, a pinch of cumin, thin golden steam rising. Warm single practical light from the left catching the flame and spices in rich amber-gold tones; deep near-black background (#0a0a0b), matte black stovetop, a softly out-of-focus round steel masala box with turmeric visible in the background right. South Indian Telugu home kitchen feel, modern US apartment, authentic and lived-in, not staged. Shallow depth of field, fine detail on seeds and leaves, natural skin tones, wrist with a simple thread or plain bangle optional. Calm, warm, premium, dark-and-gold color grade.
- **Negative prompt:** meat, chicken, fish, egg, paneer, cheese, yogurt, curd, ghee jar, butter, plated meal, thali, salad, broccoli, measuring cups, scale, Western diet food, text, logo, watermark, extra fingers, distorted hands, faces, cluttered counter, blue light, oversaturated orange, heavy smoke, blur on the pan.
- **Composition:** Pan and hands in the **right-centre**, with left ~35% clean dark negative space for desktop layout. The pan must stay fully in frame for a centred 375px crop.
- **QA checklist:**
  - Hands look natural (five fingers each, no fused fingers).
  - Oil looks like oil.
  - No animal products visible.
  - Curry leaves read as curry leaves, not bay leaves.
  - No text.
  - Gold highlights roughly match `#e8b44c`.
  - Check at 375 and 1280 against the obsidian card.
- **Alt:** "Hands tempering spices in a dark iron pan on a home stove, warm steam rising — AROGYM food coaching built around your home cooking."
- **Concept B fallback prompt (short):** "Overhead editorial photo of an open round steel masala dabba with seven spice wells — turmeric, red chilli, mustard seeds, cumin, coriander seeds, fenugreek, urad dal — a fresh curry-leaf sprig and two dried red chillies on dark slate, single warm gold rim light, near-black background, no text, photorealistic."

---

## Sources (all fetched or read this turn)
1. Dansinger ML et al. *JAMA* 2005;293(1):43–53. https://pubmed.ncbi.nlm.nih.gov/15632335
2. Yancy WS Jr et al. *Ann Intern Med* 2015;162(12):805–14. https://pubmed.ncbi.nlm.nih.gov/26075751
3. Ng JYY et al. *Perspect Psychol Sci* 2012;7(4). https://pubmed.ncbi.nlm.nih.gov/26168470/
4. Williams GC et al. *J Pers Soc Psychol* 1996;70(1):115. https://pubmed.ncbi.nlm.nih.gov/8558405/
5. Systematic review of South Asian dietary barriers, *Diabet Med* 2023. PMID 37151165.
6. Hawthorne K et al. Cochrane CD006424. https://pubmed.ncbi.nlm.nih.gov/18646153/
7. Farhat G et al. *J Hum Nutr Diet* 2024. PMID 38234263.
8. Johns DJ et al. *J Acad Nutr Diet* 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC4180002/
9. Pew Research Center, "Religion and food" (Religion in India, 2021). https://www.pewresearch.org/religion/2021/06/29/religion-and-food/ and short read https://www.pewresearch.org/short-reads/2021/07/08/eight-in-ten-indians-limit-meat-in-their-diets-and-four-in-ten-consider-themselves-vegetarian/
10. NFHS-5 Telangana State Report 2019–21, Table 77. https://dhsprogram.com/pubs/pdf/FR374/FR374_Telangana.pdf
11. Nielsen J. "Photos as Web Content," NN/g, 2010 (reviewed 2026). https://www.nngroup.com/articles/photos-as-web-content/
12. Precision Nutrition 1-to-1 Coaching page. https://www.precisionnutrition.com/coaching
13. Noom homepage. https://www.noom.com/
14. Healthify homepage. https://www.healthifyme.com/
15. FITTR homepage. https://www.fittr.com/

**Not used:** NFHS-5 Andhra Pradesh figures (report URL returned "removed"; the blog numbers weren't verified). No diaspora-specific veg/non-veg data exists that I could verify.
