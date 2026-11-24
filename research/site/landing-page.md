# AROGYM — 30-Day Telugu Transformation Challenge
## Landing page v0 draft (wireframe + full copy)

**Status:** Local draft only. Not built as HTML. Not published.  
**Brand:** **AROGYM** (from *arogyam*, Telugu for health, + gym). Decided by Gym-Head, Nov 22, 2026.  
**Voice:** Warm akka/anna-from-home trainer; English sentence spine + light Tenglish; proud of Telugu food; no miracle, weight-loss, or invented testimonial/stat claims.  
**Diet/health lines:** Draft until Anish Jakkula approves.

---

## Page wireframe (section order)

1. **Header** — logo + jump links + enroll CTA (sticky on mobile)
2. **Hero** — hook, dates, primary enroll CTA, secondary taster CTA
3. **Who it’s for** — 3 audience cards (IT / moms / families)
4. **How it works** — 3 steps: pay → health form & waiver → Zoom / onboarding
5. **Schedule & format** — weekday 8 PM ET live Zoom, Jan 4, 2027 start, 30 days
6. **Free Zoom taster** — Dec 19, time [PLACEHOLDER], register CTA
7. **Trainer** — Anish Jakkula (short + long bio drafted), Hyderabad, live, photo `[PHOTO: Anish]`
8. **Pricing** — proposed Early Bird $49 / Standard $79, clearly marked proposed
9. **Enrollment window** — Dec 14, 2026 – Jan 2, 2027 (thin band + repeat CTA)
10. **FAQ** — 10 questions
11. **Health disclaimer** — PAR-Q, doctor, no medical claims
12. **Final CTA** — enroll + taster, restated dates
13. **Footer** — contact [PLACEHOLDER], disclaimer, not-published draft note

**Global layout notes**
- Mobile-first, single column, max readable width ~40rem on desktop.
- Soft, homely, bright — not a dark “gym bro” look. Festive Sankranti nod is fine, no stock fitness-model imagery.
- Times always in **ET**.
- Payment buttons go to `#STRIPE_LINK_EARLY_BIRD` / `#STRIPE_LINK_STANDARD` until real Stripe Payment Links exist.
- Health form and waiver go to `#TALLY_HEALTH_FORM` / `#TALLY_WAIVER`.
- Taster register goes to `#TASTER_REGISTER`.
- No testimonial slider, no result numbers, no “limited spots” count.

---

## 1. Header

**Layout:** Slim bar. Left: AROGYM wordmark. Center (desktop only): How it works · Schedule · Pricing · FAQ. Right: primary button “Enroll” (jumps to Pricing) + text link “Free taster, Dec 19” (jumps to Taster). On mobile: wordmark + “Enroll” button; links in a simple menu.

**Copy**

- Wordmark: `AROGYM`
- Nav: `How it works` · `Schedule` · `Pricing` · `FAQ`
- Button: `Enroll`
- Link: `Free taster — Dec 19`

---

## 2. Hero

**Layout:** Full-width, short above-the-fold block. Eyebrow in Telugu script (the one place it should pop). Headline in English. One short Tenglish subhead. A compact date chip row (Start · Class time · Enroll by). Two buttons stacked on mobile, side-by-side on desktop: primary Enroll, secondary outline for the taster. No countdown clocks, no fake social proof.

**CTA placement:** Primary = jump to Pricing. Secondary = jump to Taster section (or `#TASTER_REGISTER` once a form exists).

**Copy**

Eyebrow: `మన 30 రోజులు`

Headline: `A 30-day live fitness challenge for US Telugu families — from your living room.`

Subhead: `Office lo 9 hours kurchunnava? Emi parledu. Weeknights at 8 PM ET, we show up together. Eat our food. Move a little. That’s the win.`

Date chips:

- `Starts Monday, January 4, 2027`
- `Live Zoom · weekdays 8 PM ET`
- `Enroll December 14, 2026 – January 2, 2027`

Primary button: `Join the 30-day challenge`  
Secondary button: `Try a free class — Dec 19`

Tiny line under buttons: `Led by Anish Jakkula, live from Hyderabad. Classes in Telugu and English.`

---

## 3. Who it’s for

**Layout:** Section title + 3 equal cards (stack on mobile, row on desktop). No photos required for v0; optional later: real people, not stock models. End with one reassuring line for beginners.

**CTA:** None in this section (keeps the scroll moving to How it works).

**Copy**

Title: `Mana people. Mana schedule.`

Lead: `This is for Telugu folks in the US who want a simple weeknight habit — not a new personality.`

Card 1 — IT professionals  
`Desk day, late Slack, dinner, repeat. Give 8 PM ET a small, honest window. No gym commute.`

Card 2 — Moms  
`Work, kids, dinner, one more thing. Come as you are. Show up, that’s the win. The rest can wait.`

Card 3 — Families  
`Want the house to move together? Join as a household if that helps you actually do it. [PLACEHOLDER: family / household pricing — not set yet.]`

Closing line: `Beginner, coming back after a break, or just tired of starting Monday and stopping Thursday — you are welcome. Ready na? Cheddam.`

---

## 4. How it works

**Layout:** Numbered 3-step row (vertical on mobile). Each step has a number, title, 2–3 sentences, and a placeholder link where a form or payment will live. A small “after you pay” note at the bottom.

**CTA:** Step 1 points to Pricing. Steps 2–3 are informational until Tally / onboarding links exist.

**Copy**

Title: `How it works — simple, I promise.`

**Step 1 — Enroll**  
`Pick a proposed plan and pay through Stripe. You’ll get a confirmation right after.`  
Button/link: `See plans` (jumps to Pricing) · payments will use `#STRIPE_LINK_EARLY_BIRD` or `#STRIPE_LINK_STANDARD`.

**Step 2 — Health form and waiver**  
`Next, fill a short health form (PAR-Q) and a waiver. This is required before you join live class. Chala important — we want you safe, not sorry.`  
Links: `Health form (PAR-Q) → #TALLY_HEALTH_FORM` · `Waiver → #TALLY_WAIVER`  
`[PLACEHOLDER: real Tally form URLs.]`

**Step 3 — Get your Zoom link and onboarding**  
`Once the form and waiver are in, you’ll receive the Zoom link and a short onboarding note — what to set up, when to arrive, how to say hello.`  
`Community / reminders: [PLACEHOLDER — WhatsApp group, email list, or both. Contact email also TBD.]`

After-pay line: `Pay first, then forms, then the Zoom link. If something is delayed, we will [PLACEHOLDER: support / contact path].`

---

## 5. Schedule & format

**Layout:** Two-column on desktop (schedule table left, format bullets right); stacked on mobile. Table is simple: day, time, format. Footnote for length, holidays, and Sankranti. No calendar widget in v0.

**CTA:** Text link under the table: `See the free Dec 19 taster` (jumps to Taster). Optional small “Enroll” text link.

**Copy**

Title: `Weeknights. 8 PM ET. Live.`

Lead: `One live Zoom class, Monday through Friday, for 30 days. Start date: Monday, January 4, 2027.`

Schedule table:

| When | What |
|---|---|
| Monday–Friday, 8 PM ET | Live Zoom class with Anish Jakkula, from Hyderabad |
| Saturday–Sunday | No live class [PLACEHOLDER: optional homework / rest guidance] |
| Monday, January 4, 2027 | Challenge starts |
| ~30 days from start | Challenge ends [PLACEHOLDER: exact end date / last class day] |

Format:

- `Join from home — phone, laptop, or TV, whatever is easier.`
- `Language: Telugu and English. Tenglish is more than fine.`
- `Class length: [PLACEHOLDER — proposed about 30 minutes; confirm with Anish].`
- `Equipment: no gym, no fancy gear. [PLACEHOLDER: confirm if a mat, water, or light household items are suggested].`
- `What we train: [PLACEHOLDER — Anish sets the mix; do not invent a program split].`

Sankranti note: `Sankranti falls mid-challenge. Eat, celebrate, then come back and show up. Pesarattu is not the enemy. We don’t quit our food — we just keep the habit.`

Missed-class line: `Life happens. Missed classes / recordings: [PLACEHOLDER — policy not set].`

---

## 6. Free Zoom taster — December 19

**Layout:** Distinct band (soft highlight, not a pop-up). Left: what the taster is. Right: date/time stack + a single clear register button. Time is visually reserved even while it still says [PLACEHOLDER]. No “limited seats” number unless Manu sets one.

**CTA placement:** One primary button, high contrast: `Register for the free taster` → `#TASTER_REGISTER`. Secondary text: `Or enroll in the full 30 days` (jumps to Pricing).

**Copy**

Eyebrow: `Try before you enroll`

Title: `Free live Zoom taster — Friday, December 19, 2026`

Body: `Curious, but not ready to pay? Come say hi to Anish Jakkula. Meet the format, meet mana people, move a little, and see if 8 PM ET actually fits your life. No pitch-heavy lecture. Just a real class taste.`

Details:

- `Date: Friday, December 19, 2026`
- `Time: [PLACEHOLDER — confirm time in ET]`
- `Where: Zoom (link after you register)`
- `Language: Telugu and English`
- `Cost: Free`
- `Registration: [PLACEHOLDER — Tally, email, or other form] → #TASTER_REGISTER`

Button: `Register for the free taster`  
Secondary link: `I’d rather enroll in the full challenge`

Fine print: `The taster is a visit, not the 30-day challenge. Enrollment for the January 4 start is open December 14, 2026 through January 2, 2027.`

---

## 7. Trainer

**Layout:** Two-column on desktop: `[PHOTO: Anish]` on the left (rounded, homely, not a stock physique shot); name, role, short bio, Instagram, and “more about Anish” on the right. On mobile, photo first, then text. Show the **short bio** by default; place the **long bio** in a “More about Anish” expand, or directly under the short bio. Name is a large heading with “Hyderabad” as the sub-line.

**CTA:** Quiet text link: `Meet Anish first at the Dec 19 taster`.

**Copy**

Title: `Train with Anish Jakkula — live from Hyderabad`

Name: `Anish Jakkula`

Role line: `11 years of coaching. Live weeknights, 8 PM ET — the encouraging anna on the other side of the Zoom, not a celebrity face on a pre-tape.`

Photo: `[PHOTO: Anish]`

Instagram: `[Follow Anish on Instagram](https://www.instagram.com/anish_jakkula)`

**Short bio (~60 words):**

`Anish Jakkula has been coaching for 11 years, with a focus on female fitness and special populations — beginners, moms, and desk-job folks. From Hyderabad, he leads AROGYM’s live weeknight Zoom classes in Telugu and English. His experience also covers hypertrophy, strength and conditioning, functional training, sports nutrition, and personalized coaching. Come as you are. Show up, that’s the win.`

**Long bio (~151 words):**

`Anish Jakkula has been coaching for 11 years, with a focus on female fitness and special populations — beginners, moms, and desk-job folks who want a weeknight habit, not a stage. He leads AROGYM’s live Zoom classes from Hyderabad, in Telugu and English. His experience also includes hypertrophy and muscle development, bodybuilding competition prep, fat loss and body recomposition, strength and conditioning, sports nutrition, functional training, and advanced training techniques. He works as a prep coach and offers personalized coaching and advanced personal training when someone wants a tighter plan. For this 30-day challenge, the ask is simple: show up at 8 PM ET. Anish will meet you where you are, even if it has been a while. We stay honest — no miracle claims, no promised body change — and we keep our food. Want to say hello first? Join the free taster, or find him on Instagram at anish_jakkula.`

Link: `Meet Anish at the free taster on Dec 19.`

Note for builders: Present these as specialties and experience only. Do not add “certified,” license lists, invented credentials, testimonials, or result claims. Fat loss / body recomposition and competition prep are part of Anish’s experience — not promises for this 30-day challenge.

## 8. Pricing

**Layout:** Section title + a clear “PROPOSED — not final” badge at the top. Two cards, equal visual weight. Early Bird slightly highlighted (recommended), Standard next to it. Each card: tier name, proposed price, what’s included (same list), a button. Under the cards: what’s not decided (refunds, family price). Do not show a fake “savings %” unless Manu sets a cutoff and wants it.

**CTA placement:** One button per card, always labeled as proposed.

- Early Bird button → `#STRIPE_LINK_EARLY_BIRD`
- Standard button → `#STRIPE_LINK_STANDARD`

**Copy**

Title: `Simple pricing — proposed`

Badge: `Proposed prices — not final. For Manu’s review.`

Lead: `The planned range is $49–$79 for the 30-day challenge. Below is a proposed two-tier setup, not a live offer.`

**Card A — Early Bird (proposed)**  
Price: `$49`  
Label: `Proposed`  
For: `If you enroll early in the window.`  
Cutoff: `[PLACEHOLDER: early-bird end date / time in ET — not set]`  
Button: `Enroll at $49 (proposed)` → `#STRIPE_LINK_EARLY_BIRD`

**Card B — Standard (proposed)**  
Price: `$79`  
Label: `Proposed`  
For: `Enrollment through January 2, 2027, after early bird ends — or if no early-bird cutoff is used.`  
Button: `Enroll at $79 (proposed)` → `#STRIPE_LINK_STANDARD`

Both plans include (draft list):

- `Live Zoom classes, weekdays at 8 PM ET, for 30 days starting January 4, 2027`
- `Anish Jakkula, live from Hyderabad, in Telugu and English`
- `Onboarding and the class Zoom link after you complete the health form and waiver`
- `[PLACEHOLDER: community channel — WhatsApp and/or email]`
- `[PLACEHOLDER: recordings, if any]`
- `[PLACEHOLDER: any written plan, nutrition notes, or bonus sessions — only if Anish confirms]`

Not included / still open:

- `Family or household pricing: [PLACEHOLDER — not set]`
- `Refunds: [PLACEHOLDER — policy not set; do not promise a refund on this page yet]`
- `Payment method: Stripe Payment Links (links not created yet)`

Tiny line: `Prices are in USD. Final amounts and the early-bird cutoff need Manu’s OK before this goes live.`

---

## 9. Enrollment window

**Layout:** Narrow full-width band between Pricing and FAQ (or visually attached under the price cards). One sentence, the two dates, and a repeat of the two CTAs in text-button form so no one has to scroll back up.

**CTA:** `Enroll` → Pricing anchors already in view or jump to cards. `Free taster` → Taster / `#TASTER_REGISTER`.

**Copy**

Title: `Enrollment is open for a short window`

Body: `Enroll from Sunday, December 14, 2026 through Saturday, January 2, 2027. The challenge itself starts Monday, January 4, 2027.`

Buttons: `Enroll in the 30-day challenge` · `Register for the Dec 19 taster`

Note: `[PLACEHOLDER: what happens if someone tries to join after January 2 — closed, waitlist, or exception path.]`

---

## 10. FAQ

**Layout:** Accordion on mobile (one question open at a time). Desktop can be the same accordion, full width, not a dense two-column wall of text. 10 questions. Short answers. Mark every unsettled policy as [PLACEHOLDER].

**CTA:** Last item can end with a link to Pricing or Taster. No button row here.

**Copy**

Title: `Questions, honest answers`

**1. I don’t live on Eastern Time. Will this work?**  
`Classes are always at 8 PM ET, Monday through Friday. Convert that once to your local time and treat it as your weeknight slot. The taster on December 19 is a good way to test the timing. [PLACEHOLDER: if we later add a second batch for other zones, say so here — not offered now.]`

**2. What if I miss a class? Are there recordings?**  
`Emi parledu — some evenings will slip. The missed-class and recording policy is not set yet.`  
`[PLACEHOLDER: recordings yes/no, how long they stay up, and whether live attendance is still expected.]`

**3. I’m not “fit.” Can I still join?**  
`Yes. This is built for people starting from a busy life, not from a gym habit. We will offer regressions where we can, and you go at a pace that feels safe. Show up, that’s the win. If you have a health condition, complete the PAR-Q and check with your doctor first.`

**4. What equipment do I need?**  
`No gym membership and no fancy gear. A little floor space at home is the main requirement.`  
`[PLACEHOLDER: Anish confirms whether a yoga mat, chair, or light household items are suggested.]`

**5. What language are the classes in?**  
`Telugu and English. Tenglish is welcome. If you only have one of the two, you can still follow along — Anish will keep cues clear.`

**6. Can I eat rice, pesarattu, biryani… our food?**  
`Yes. We are proud of our food. We don’t ask you to quit rice or “detox.” The draft idea is eat our food, with smarter portions — not a new cuisine. [PLACEHOLDER: any nutrition guidance must be written or approved by Anish. No meal plans or calorie targets on this page until then.]`

**7. What’s the refund policy?**  
`[PLACEHOLDER: refund policy not set. Do not promise refunds, credits, or “satisfaction guarantees” until Manu and Anish decide. Include how to ask, the cutoff, and what happens if the class is cancelled.]`

**8. I have a health condition / I haven’t exercised in years. Is this safe?**  
`This challenge is not medical care, and we can’t tell you it’s safe for every body. Complete the health form (PAR-Q) and waiver after you enroll, and check with your doctor if you are pregnant, postpartum, managing an injury or condition, or unsure. If the form flags a concern, pause and talk to a professional before you join a live class.`  
Links: `#TALLY_HEALTH_FORM` · `#TALLY_WAIVER`

**9. What happens after I pay?**  
`1) You get a payment confirmation. 2) You fill the Tally health form (PAR-Q) and waiver — required. 3) We send the Zoom link and a short onboarding note. 4) You join [PLACEHOLDER: WhatsApp and/or email]. 5) Optional: come to the free taster on December 19 if you enroll before that date. 6) Live classes start January 4, 2027, at 8 PM ET.`

**10. Is the December 19 taster the same as the 30-day challenge?**  
`No. December 19 is a free visit so you can feel the class. The paid challenge is the 30-day series starting January 4, 2027. You enroll separately between December 14, 2026 and January 2, 2027.`

---

## 11. Health disclaimer

**Layout:** Full-width, quieter type, bordered or slightly muted background, placed before the final CTA (so the last screen is hope, but the disclaimer is not buried only in the footer). Short paragraphs, not a wall of legalese. Footer repeats a one-line version.

**CTA:** Links to the two Tally placeholders only — no enroll button inside the disclaimer.

**Copy**

Title: `Please read this — your health comes first`

Body:

`AROGYM’s 30-day challenge offers general fitness classes, not medical advice, diagnosis, or treatment. Nothing on this page is a promise of a specific result — no guaranteed weight change, no “transformation” in the miracle sense, no cure or detox claim.`

`By enrolling, you will be asked to complete a health screening (PAR-Q) and a waiver before you receive the live Zoom link. If you are pregnant, postpartum, injured, managing a medical condition, or you haven’t been active in a long time, please check with your doctor before you start.`

`If you feel pain, dizziness, or anything that feels wrong in class, stop and get help if you need it. Show up for your health, not to push through warning signs.`

`Health form (PAR-Q): #TALLY_HEALTH_FORM`  
`Waiver: #TALLY_WAIVER`  
`[PLACEHOLDER: both Tally URLs, plus who reviews submitted forms.]`

`[PLACEHOLDER: formal legal disclaimer language, if a lawyer or waiver template supplies it.]`

---

## 12. Final CTA

**Layout:** Closing band, same energy as the hero but shorter. Headline, three date facts, two buttons (Enroll primary, Taster secondary). No new claims.

**CTA placement:** Last primary enroll button on the page, then taster, then a contact line.

**Copy**

Headline: `Emi parledu. Start cheddam.`

Subhead: `Thirty weeknights with Anish Jakkula, live from Hyderabad. Mana community, on Zoom, at 8 PM ET.`

Facts:

- `Enroll: December 14, 2026 – January 2, 2027`
- `Free taster: December 19, 2026, time [PLACEHOLDER]`
- `Challenge starts: January 4, 2027`

Primary button: `Enroll in the 30-day challenge` (jumps to Pricing)  
Secondary button: `Register for the free Dec 19 taster` → `#TASTER_REGISTER`

Contact: `Questions? [PLACEHOLDER: contact email / WhatsApp].`

---

## 13. Footer

**Layout:** Compact, 3 groups on desktop (brand + one-line disclaimer; links; contact). Single column on mobile. No fake Instagram follower counts. No invented address.

**Copy**

`© [PLACEHOLDER: year / legal entity] AROGYM. All rights reserved.`

`30-day live Zoom challenge for Telugu families in the US. Classes with Anish Jakkula, weekdays at 8 PM ET, starting January 4, 2027.`

Links: `How it works` · `Schedule` · `Pricing` · `FAQ` · `Health form` · `Waiver`

Contact: `[PLACEHOLDER: email]` · `[PLACEHOLDER: WhatsApp or other]` · `[PLACEHOLDER: Instagram / social, if any]`

Disclaimer (one line): `Fitness classes, not medical advice. Complete the health form and waiver, and check with your doctor if you have a condition or you’re unsure. No guaranteed results.`

Payments: `Payments will be processed by Stripe. Links not live on this draft.`

Draft note (remove before any public launch): `This page is a private v0 copy draft. It is not published, and prices, policies, and links are not final.`

---

## Copy / design notes for whoever builds next

- Brand name is AROGYM (decided). Do not swap in other name options.
- Do not add testimonials, star ratings, “X kg lost,” or alumni quotes.
- Do not harden proposed prices or refund/recording language into a live promise.
- Diet and program lines need Anish Jakkula’s approval before publish. Do not add “certified” or invented credentials.
- Thank-you / post-payment page is not in this draft; next build should cover: fill Tally health form + waiver, join WhatsApp/email [PLACEHOLDER], calendar/Zoom info.
