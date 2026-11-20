# Architecture decision record, risks and open questions

## Decisions
| ID | Status | Decision | Rationale |
|---|---|---|---|
| ADR-001 | Accepted | AROGYM global parent brand, Telugu launch track | Regional expansion without rebrand |
| ADR-002 | Accepted | 30-minute free consultations with Anish only | Simple user journey and predictable operations |
| ADR-003 | Accepted | Founder-controlled WhatsApp Business for contact | Business continuity and ownership |
| ADR-004 | Proposed | Public site as static Next.js export on GitHub Pages | Fast/low-cost MVP; no backend on Pages |
| ADR-005 | Proposed | Modular monolith later, not microservices | Simpler maintenance and delivery |
| ADR-006 | Proposed | Light/dark hybrid, athletic but inclusive creative direction | Appeals beyond bodybuilders |
| ADR-007 | Accepted | Do **not** build website until content/design approval | Avoid premature rework |
| ADR-008 | Proposed | Use managed scheduler/CRM rather than custom booking service | Reliability and minimal sensitive-data exposure |

## Open decisions / blockers
1. **Domain:** Is `arogym.com` owned/available and who owns DNS? Domain/trademark clearance is not confirmed.
2. **Business WhatsApp:** number and whether registered as WhatsApp Business; not supplied.
3. **Anish calendar:** email/provider, working hours (IANA timezone), days, buffers, holidays, Meet integration.
4. **Coach verification:** certifications/issuers, license/insurance where applicable, verified achievements, right to use photos and videos.
5. **Business contract:** employment/contractor vs partnership, content/IP rights, payment arrangement, coach service limits.
6. **Offer:** launch programs, pricing, included check-ins/live sessions, payment options, refunds.
7. **Visual:** logo, fonts, color palette, imagery, homepage final copy.
8. **Infrastructure:** deploy public site from GitHub Pages vs managed frontend hosting; custom domain timing.
9. **Vendors:** scheduling, secure CRM, email, analytics, cookie management, liability insurance.
10. **Markets:** exact service eligibility in India/USA and cross-border tax, privacy and scope review.

## Risk register
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Brand/domain conflict | Unknown | High | Formal trademark search before marketing investment |
| Overdependence on Anish | High initially | High | Written agreement, business-owned assets, multi-coach-ready model |
| Physique content fails to convert | Medium | Medium | Track qualified leads/consultation→paid, create education content |
| Cross-border service/tax issues | Medium | High | Country eligibility controls, professional legal/tax advice |
| Injury/health scope confusion | Medium | High | Clear claims, referral/clearance, suitable insurance |
| Leakage of client sensitive data | Medium | High | Vendor vetting, minimal intake, access controls, no static storage |
| Schedule/timezone failure | Medium | Medium | Real booking provider, UTC and IANA timezone validation |
| Premium coaching overwhelms one trainer | Medium | High | Coach capacity model and service tier limits |
| Wrong pricing/CAC economics | Medium | High | Low-cost paid pilot, measure gross margin and paid conversion |
| Third-party platform outage | Medium | Medium | Alternative contact channel and recovery procedure |

## Decision review practice
Each proposed ADR needs owner, alternatives considered, implications, date and acceptance evidence. Update this file before production commits that change major system boundaries. 