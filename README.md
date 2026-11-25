# AROGYM — Product & Platform Blueprint

**Status:** Discovery and architecture planning. No website or production service has been launched.  
**Working brand:** AROGYM (“Aro-Gym”) — inspired by *Arogya* (health) + Gym.  
**Brand promise:** **Your Food. Your Fitness. Your Way.**  
**Last updated:** 2026-11-20

## Vision
Personalized, culturally relevant fitness and nutrition coaching that adapts to people’s daily routines, preferred Indian cuisines, goals, training environments, sports, and appropriate physical limitations. Launch with Telugu-speaking clients in India and the global diaspora; scale to languages, regions, coaches and countries without rebuilding.

## Decisions already made
- Global, language-neutral AROGYM umbrella brand; Telugu is an initial coaching track, **not** a restriction on the parent brand.
- Anish Jakkula (reported 11 years of experience) is the **founding coach** and handles all initial fitness consultations.
- **Free consultation duration: fixed 30 minutes**; clients choose an available slot, not duration or trainer.
- The founder's dedicated **WhatsApp Business number** will handle business enquiries and follow-up; number pending.
- The initial website should emphasize personalized coaching, culturally familiar foods, home/gym options, sports-specific conditioning, and appropriate adaptations.
- Launch website source on GitHub; GitHub Pages is a possible **static marketing-site** host, not the backend for private client records.
- Build and validate the customer-acquisition experience **before** custom member-portal software.
- **No website implementation until design and content are approved.**

## Documents
| Document | Scope |
|---|---|
| [Vision and strategy](docs/01-VISION-STRATEGY.md) | Audience, positioning, business model, success metrics |
| [Product requirements](docs/02-PRODUCT-REQUIREMENTS.md) | Functional requirements, user journeys, acceptance criteria |
| [Architecture](docs/03-ARCHITECTURE.md) | System model, modular evolution, integrations, hosting |
| [Data model](docs/04-DATA-MODEL.md) | Domain entities, relationships, internationalization |
| [Security and compliance](docs/05-SECURITY-PRIVACY.md) | Privacy, scope of practice, payments, legal review |
| [Content and creative brief](docs/06-CONTENT-DESIGN.md) | Pages, messaging, tone, imagery, accessibility |
| [Delivery roadmap & backlog](docs/07-ROADMAP-BACKLOG.md) | Phases, dependencies, task IDs, definition of done |
| [Operations & integrations](docs/08-OPERATIONS.md) | WhatsApp, scheduling, CRM, onboarding and support |
| [Decisions, risks & open questions](docs/09-DECISIONS-RISKS.md) | ADRs, assumptions, unresolved blockers |
| [Testing and launch](docs/10-TESTING-LAUNCH.md) | QA, measurement, release checklist |

## Repository layout

The blueprint above stays in `docs/`. Alongside it, this repo holds the marketing site and the research, scripts, and notes that feed it. The live site at [https://arogym.pages.dev](https://arogym.pages.dev) is the `site/` folder, including images and webfonts. Pushes to `main` deploy that folder to the existing Cloudflare Pages project through `.github/workflows/deploy-pages.yml`. Screenshots, video, audio, and archives outside `site/` stay excluded by `.gitignore`.

| Directory | Contents |
|---|---|
| [site/](site/) | AROGYM v9 static site: HTML, CSS, JS, Cloudflare `_headers`, images, and webfonts, deployed to [https://arogym.pages.dev](https://arogym.pages.dev). |
| [research/](research/) | Working research. `research/site/` has deploy notes, architecture, landing-page copy, name checks, the v4 brief, and the site state/log. Also food-strategy and messaging research, plus `research/scout/` competitor and US Telugu niche research. |
| [content/](content/) | Brand voice (`brand-voice.md`) and launch batch 1 hooks and Reel scripts (`launch-batch-1.md`). |
| [growth/](growth/) | Outreach drafts only: community/creator list (`outreach-list.csv`), an empty funnel tracker, launch posts, and top-10 message drafts. |
| [coach/](coach/) | Public profile notes for founding coach Anish Jakkula (`anish-profile.md`). |

## Key boundaries
Coaching is not diagnosis, rehabilitation, or therapeutic nutrition. Injury history requires appropriate screening and referral/medical clearance where indicated. Anish's certifications, insurance, nutrition scope and coaching claims must be verified before publishing.

**Project status:** requirements documented; design not approved; integrations unconfigured; domain and trademark not cleared; no site deployed.

## Proposed project workflow
1. Approve brand clearance, visual direction, website copy, program offering and legal framework.
2. Set up business-owned WhatsApp, 30-minute scheduling account, intake and lead capture.
3. Implement static marketing site with reusable components and content.
4. Validate real leads and paid coaching delivery before adding authenticated product modules.
5. Expand language/region/coach capabilities using shared data and access controls.

See [Roadmap](docs/07-ROADMAP-BACKLOG.md) for execution sequence.