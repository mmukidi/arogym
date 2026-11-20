# Execution roadmap, epics and backlog

**Priorities:** P0 required for launch, P1 desirable before/soon after launch, P2 later. Owners are proposed roles, not assigned persons.

## Phase 0 — approvals and foundations
- ARO-001 P0 Brand name/domain + US/India trademark screening — Founder/legal.
- ARO-002 P0 Formalize founder–Anish agreement, content ownership, coach compensation/terms — Founder/legal.
- ARO-003 P0 Verify Anish credentials, insurance, qualifications and photo/testimonial use permissions — Operations.
- ARO-004 P0 Define coaching packages, scope, pricing by service market, cancellation/refund terms — Product/Coach.
- ARO-005 P0 Approve AROGYM visual identity, homepage copy and page map — Product/Design.
- ARO-006 P0 Choose business email, contact ownership and privacy/legal reviewer — Operations.

## Phase 1 — operational integrations
- ARO-101 P0 Register/dedicate company-controlled WhatsApp Business number — Founder.
- ARO-102 P0 Configure **only Anish, exactly 30-min consultation**, timezone, calendar integration, lead time/buffers, Google Meet, reminders, reschedule/cancel — Operations/Coach.
- ARO-103 P0 Select secure CRM, configure minimum lead fields/consent and follow-up statuses — Operations.
- ARO-104 P0 Establish integration ownership, admin recovery and vendor access controls — Engineering/Operations.
- ARO-105 P0 Privacy/terms/disclaimer and cross-border compliance review — Legal.

## Phase 2 — marketing-site implementation (after approvals)
- ARO-201 P0 Initialize TypeScript frontend, reusable design tokens/components and lint/typecheck/build CI — Engineering.
- ARO-202 P0 Implement responsive homepage + program pages + coach + food + sports + resources — Engineering/Content.
- ARO-203 P0 Integrate tested booking deep link and WhatsApp deep link — Engineering.
- ARO-204 P0 Add accessible navigation, keyboard support, metadata, sitemap and optimized imagery — Engineering.
- ARO-205 P1 Build optional non-medical goal-discovery flow with privacy-safe booking handoff — Engineering/Product.
- ARO-206 P0 Implement consent-aware conversion analytics and error/uptime monitoring — Engineering.
- ARO-207 P0 Production deployment, domain DNS/HTTPS, smoke tests and rollback plan — Engineering.
- ARO-208 P0 Publish approved policies, verified claims and authentic content — Content/Legal.

## Phase 3 — customer validation
- ARO-301 P0 Pilot organic video/social-to-site funnel and track enquiry/booking/paid conversion — Growth.
- ARO-302 P0 Enroll small founding cohort, test operations, response times and coach capacity — Coach/Operations.
- ARO-303 P1 Add client feedback/testimonials with consent and measured improvement backlog — Product.
- ARO-304 P1 Test small India and US ad cohorts separately; use actual CAC/conversion to decide spend — Growth.

## Phase 4 — secure coaching platform (conditional on traction)
- ARO-401 P2 Identity/roles/consent and data retention governance.
- ARO-402 P2 Clients/program enrollment/plans/check-ins secure backend.
- ARO-403 P2 Coach management and multi-time-zone scheduling.
- ARO-404 P2 Region/language/cuisine configurable content and nutrition review.
- ARO-405 P2 Payment/order/refund integrations and finance reconciliation.
- ARO-406 P2 Secure progress dashboards, observability, backups and recovery.
- ARO-407 P2 Optional wearables/AI assistance only after privacy, safety and user-value validation.

## Milestone gates
- **G0 Design-ready:** decisions and legal/brand checks acknowledged; copy/design signed off.
- **G1 Build-ready:** operating integrations selected and approved; all P0 copy/assets sourced.
- **G2 Launch-ready:** all P0 requirements accepted, security/QA complete, consultations live.
- **G3 Scale-ready:** actual demand, unit economics, retention and coach utilization demonstrate capacity.

## Definition of done for every task
Owner, documented acceptance criteria, test evidence, privacy/accessibility review when applicable, updated docs and a reviewable GitHub PR; no unreviewed production configuration.

## First 10 working tasks (suggested execution order)
ARO-001 → 002 → 003 → 004 → 005 → 006 → 101 → 102 → 103 → 105.  
Website implementation intentionally follows approvals; this repository begins with documentation only.

## Weekly operating cadence
Review backlog and blockers, coach capacity and quality, lead funnel, content production, privacy incidents, and upcoming releases. Keep decisions in [09-DECISIONS-RISKS.md](09-DECISIONS-RISKS.md).