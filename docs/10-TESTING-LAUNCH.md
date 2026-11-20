# QA, testing, observability and launch checklist

## Public-site test matrix
- Mobile 320–430px, tablet and desktop; modern Safari, Chrome, Firefox/Edge.
- Primary CTAs visible/readable; no confusing duration or coach selection.
- Booking displays correct visitor-local time; test India and US Eastern/Pacific with daylight-saving scenarios.
- Booking session exactly 30 minutes, hosted by Anish; appointment holds slot and produces correct invite.
- Cancel/reschedule and meeting link work; email delivered; buffer and double-booking tests pass.
- WhatsApp deep link opens correct **business-controlled** account; prefilled text is optional.
- All links, contact email, coach photo rights, legal policy pages reviewed.
- Keyboard navigation, focus, accessible form labels, alt text, contrast, reduced motion.
- Performance: optimize images, JS and font usage; test mobile Core Web Vitals in realistic network conditions.
- Metadata and SEO: titles/descriptions, canonical, OG image, sitemap, robots, locale/hreflang when applicable.
- Consent-aware analytics: verify booking CTA/booking completion, WhatsApp click, quiz completion without logging sensitive values.
- Privacy: forms secure, data minimization, no secrets or customer records in public GitHub repository.
- Content: correct English/Telugu where offered, nutritional accuracy review, no false transformations/credentials.
- External failures: scheduler outage/WhatsApp unavailable fallback and support contact.

## Automated tests (when implementation begins)
- Lint, typecheck, build static export.
- Unit tests for localized content, URL generation, currency and timezone formatting.
- Component tests for menu, CTA, FAQ, goal quiz and forms.
- Browser smoke tests for responsive flows and keyboard use.
- Link checker, accessibility scanner, dependency/security scanning.
- Tests do not use real client PII or credentials.

## GitHub delivery model
- main is stable; feature branches via PRs; required CI and review.
- GitHub Actions builds and deploys static output; configure Pages source to Actions after approval.
- Rollback to previous green commit/deployment.
- Branch protection and trusted dependencies where supported; no production secrets in frontend.

## Prelaunch gate checklist
- [ ] Brand and domain cleared; ownership verified.
- [ ] Founder/coach contract + verifiable qualifications + marketing rights reviewed.
- [ ] Legal/privacy/cookie/terms/disclaimer and regional policies approved.
- [ ] Coach schedule and meeting provider integrated.
- [ ] Fixed 30-min event tested end to end.
- [ ] Company WhatsApp number tested on mobile and desktop.
- [ ] CRM/contact capture and explicit consent tested.
- [ ] Performance and accessibility checks passed.
- [ ] All page copy and claims approved.
- [ ] Analytics events and dashboard validated.
- [ ] Support escalation and alternative contact live.
- [ ] Public launch owner signs off.

## Postlaunch operational checks
Daily: failed booking enquiries, forms, broken links and support inbox.  
Weekly: acquisition, booked/attended consultations, qualified conversion, content funnel, coach capacity.  
Monthly: growth vs margin, renewals/refunds, privacy access review, vendor costs, content updates and backlog reprioritization.

## Public-release definition
Working responsive site + tested WhatsApp/booking + accurate policies/copy + owner-approved contacts and real coach service capacity. **A repository with docs alone is not a live website.**