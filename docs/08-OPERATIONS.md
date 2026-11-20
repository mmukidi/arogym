# Business operations and third-party integrations

## Consultation booking — approved behavior
- Offer label: **FREE 30-Min Fitness Consultation**.
- Host: **Anish Jakkula only** at launch.
- Calendar availability: Anish-controlled hours in his timezone; visitors see their own timezone.
- Online: Google Meet or equivalent; confirmation email, calendar invitation, 24h reminder (if configured), reschedule/cancel policy.
- Schedule only available slots; prevent double bookings, account for buffers, local holidays and DST.
- A consultation is discovery and program-fit discussion, **not** a medical assessment.
- One scheduling event type (no duration/coach choice).

## WhatsApp — approved behavior
- Use the **founder's company-controlled WhatsApp Business number**, pending number and verification.
- Public “Chat on WhatsApp” opens a `https://wa.me/<E164_DIGITS>?text=<encoded>` link; user elects to send message.
- Suggested message: “Hi AROGYM, I'd like to learn about a free fitness consultation and personalized coaching.”
- Do not embed a guessed phone number.
- Manual follow-up initially; multiple operators and WhatsApp Business Platform only after support load, consent and integration rules justify it.
- No claims of automated WhatsApp booking confirmations until explicitly implemented and tested.

## Suggested lead pipeline
New enquiry → Contacted → Consultation booked → Attended → Qualified → Offer sent → Won/Not now → Onboarding → Active → Renewal/Closed.
- Store channel, locale/timezone, source, owner, dates, explicit consent and minimal notes.
- Avoid storing symptoms/injury details in lead CRM and don't repurpose chat for marketing without opt-in.
- Define response windows based on actual staffing; show accurate operating hours.
- Owner of business number and CRM must retain admin/recovery control.

## Coaching onboarding
1. Customer selects plan and agrees to terms.
2. Secure intake including activity readiness where appropriate, risk screening, goal and equipment.
3. Fitness coach evaluates scope, requests clearance/referral where needed.
4. Approves individualized program and general food education consistent with credentials.
5. Schedules check-ins; tracks adherence and feedback with secure consented tools.
6. Escalates red flags to licensed professionals; never provides emergency care through chat.

## Team responsibilities
| Role | Initial responsibility |
|---|---|
| Founder | Brand, growth, business WhatsApp, customer support, platform, financial oversight |
| Anish | Free 30-min consultations, training program design, coaching, content and progress reviews |
| Nutrition professional (as needed) | Individualized therapeutic nutrition, editorial review, medical escalation |
| Engineering | Static website, integrations, security, observability and future backend |
| Legal/accounting | Agreements, liability/privacy, cross-border payments/taxes |

## Operating controls
- Written availability and holidays; booking/cancellation/buffer rules.
- Client eligibility and age policy; consent and data retention.
- Escalation playbook for injuries, medical claims, harassment, abuse and emergencies.
- Coach capacity plan: time per consultation/client, attendance, video production, paid delivery workload.
- Monthly reporting: funnels, CAC, enrollments, churn, refunds, gross margin, capacity, content conversion.
- Vendor inventory, account owners, billing/renewal dates and recovery process.

## Integration contract checklist
Scheduler: event ID, guest time zone, cancellation callback, ownership, availability rules.  
CRM: lead deduplication, consent, source attribution, restricted access.  
Messaging: E.164 number, opt-in, compliant templates if API enabled.  
Analytics: no PII/health data in URLs or events; cookie/consent controls if needed.  
Payments later: market support, taxes/refunds, account ownership, reconciliation.