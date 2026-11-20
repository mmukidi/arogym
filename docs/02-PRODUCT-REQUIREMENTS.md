# Product requirements document (PRD)

**Version:** 0.1 / proposed. **Owners:** Founder (business/product), Anish (coaching), engineering (TBD).

## Primary launch user journeys
### UJ-01 Discover → Book
Social/organic visitor → homepage/program page → understand coaching fit → choose “Book FREE 30-Min Consultation” → see Anish's availability in visitor-local time → provide minimal contact data and consent → receive calendar/video confirmation → attend consultation.

### UJ-02 Ask on WhatsApp
Visitor → “Chat on WhatsApp” → wa.me deep link to **business-owned number** with suggested introductory text → visitor deliberately sends message → team responds, records permission/lead status → optionally books a consultation.

### UJ-03 Find My Plan
Visitor chooses primary goal, home/gym, food preferences, time per workout and language → receives **non-clinical starting summary**, not a personalized prescription → may proceed to booking. Avoid collecting medical history in public quiz.

### UJ-04 Enroll and coach
After consultation, customer reviews clear offer and terms → pays through an appropriate provider → completes secure intake and consent → Anish provides appropriate plan and check-ins outside public site until member portal exists.

## Launch requirements
| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| FR-001 | P0 | Mobile-first homepage with clear offer and two CTAs | Both CTAs visible above fold on common mobile sizes |
| FR-002 | P0 | Free 30-min booking with **Anish only** | No coach/duration selector; available times displayed in local timezone |
| FR-003 | P0 | Google Meet or equivalent video links and calendar reminders | Confirmation and reschedule/cancel tested |
| FR-004 | P0 | Founder-owned WhatsApp Business deep link | Verified number; opens correct conversation; no invented automation |
| FR-005 | P0 | Coach profile with verified qualifications | No unverified certifications, results or client claims |
| FR-006 | P0 | Goal-based programs and scope descriptions | Covers body recomposition, strength, WFH, sports, adaptive enquiry |
| FR-007 | P0 | Indian food customization narrative | Shows cuisines, preferences and realistic meal prep; no clinical prescription |
| FR-008 | P0 | Contact/privacy/terms/consent notices | Reviewed for targeted markets before launch |
| FR-009 | P0 | Lead-source attribution and conversion analytics | Consent-aware events for CTA, booking started/completed |
| FR-010 | P1 | Short fitness-discovery quiz | Summary works without collecting health data; booking handoff |
| FR-011 | P1 | Resource hub | Initial editorial articles for training, foods, supplements, injury-safe boundaries |
| FR-012 | P1 | English-first site; Telugu-oriented entry content | User can access translated content as approved; SEO language metadata correct |
| FR-013 | P1 | Accessibility/performance | WCAG 2.2 AA design target, keyboard usable, measured CWV |
| FR-014 | P1 | SEO and social previews | Metadata, sitemap, robots, canonical URLs, appropriate structured data |
| FR-015 | P1 | Testimonials only with informed permission | No fabricated claims; appropriate disclosures |
| FR-016 | P2 | Multi-coach profiles, region/language catalog | Configurable architecture; not exposed as live unless supported |
| FR-017 | P2 | Authenticated member portal | Secure plan/check-in/progress/payment histories in later phase |
| FR-018 | P2 | Wearable and AI features | Consent and human review; no unsupervised medical advice |

## Nonfunctional requirements
- **Usability:** low-friction mobile booking, clear language, usable on slower international networks.
- **Performance:** optimized responsive images, caching, low JS weight, build-time rendering for public content.
- **Security:** HTTPS, no secrets in static repo, vetted third-party integrations, minimal PII collection.
- **Accessibility:** semantic HTML, focus states, contrast, keyboard navigation, screen-reader labels.
- **Reliability:** documented fallback if booking provider/WhatsApp unavailable.
- **Maintainability:** reusable components, typed content models, CI build/lint/test, environment separation.
- **Scalability:** region/language/program/coach modeled as data, not hard-coded pages.
- **Observability:** consent-aware aggregate funnel metrics, uptime checks, integration error visibility.
- **Compliance:** regional privacy/legal/fitness nutrition scope review before expanding locations.

## Explicit exclusions from MVP
No AI medical advice, injury rehabilitation, supplement prescriptions, bespoke workout-generator model, live payments on GitHub Pages, custom client portal, or app-store native app.

## Dependencies & blockers
- Approved brand/domain/trademark screening.
- Verified company-owned WhatsApp number and permission to list it.
- Anish's actual availability, timezone, calendar authorization, bio/credentials and image consent.
- Scheduling platform account and public booking URL; secure lead intake and consent.
- Approved coaching terms, privacy notice, program pricing and service scope.
- GitHub Pages deployment decision and production DNS control.

## Definition of product ready for launch
All P0 requirements validated in staging; booking creates a real calendar invitation; WhatsApp reaches the intended business account; legal/coach claims reviewed; analytics/events verified without leaking personal data.