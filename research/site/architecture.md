# AROGYM architecture (one page)

**Status:** Design only. Nothing was built or purchased. Forge reports to Gym-Head.

## Pilot (Jan 2027 challenge)

**Stack:** static HTML site **or** Carrd, plus Stripe Payment Links, Tally (PAR-Q + waiver), and Zoom.

**Recommendation:** **Static HTML on Cloudflare Pages or Netlify**, with an owned domain, Stripe Payment Links, Tally forms, and a brand Zoom account.

**Why not Carrd for the pilot:** The landing copy is already written for a single static page. Payment and forms are just URLs, so Carrd adds little. A git-hosted static site is cheaper, is easy to point a custom domain at, and can become a Next.js app later without a Carrd export. Use Carrd only if no one can publish HTML before enrollment opens (Dec 14, 2026).

**Pilot flow:** Landing page → Stripe Payment Link → thank-you page → Tally PAR-Q + waiver → Zoom link + onboarding (email and/or WhatsApp). No custom accounts, no app, no in-house billing in v0.

## Phase 2 (after the pilot)

**Path:** **Next.js + Supabase or Appwrite** on the same domain.

**Roles (role-based logins):** `admin`, `trainer`, `dietician`, `client`.

**What it adds:** trainer and dietician profiles; a programs table; enrollments; client dashboards; Stripe Connect so trainers and dieticians can receive payouts. Health-form answers stay restricted (not in a public CMS).

### Minimal data model

```
users            id, email (unique, stable client key), name, role, created_at
trainer_profiles user_id, bio, timezone, stripe_connect_id, …
dietician_profiles  user_id, bio, stripe_connect_id, …
programs         id, slug, name, start_at, end_at, schedule, price_cents,
                 trainer_id, dietician_id?, status
enrollments      id, program_id, user_id, status (paid/forms_complete/active/…),
                 stripe_customer_id, stripe_checkout_or_payment_id,
                 tally_parq_id, tally_waiver_id, enrolled_at
payouts          id, enrollment_id or period, payee_user_id, stripe_transfer_id,
                 amount_cents, status
```

Optional later: class sessions, attendance, messages. Do not invent a second identifier when email already exists in Stripe and Tally.

**Supabase vs Appwrite:** pick at phase 2. Both can cover auth, roles, and tables. Prefer the one the builder already knows. Auth emails must match the pilot’s Stripe/Tally emails so enrollments can be imported.

## Pilot choices that keep phase 2 open

- **Own the domain** now (see `name-checks.md`). Use it as the canonical URL, not `*.carrd.co` or a temporary host path.
- **Export Stripe customers** after the pilot (email, customer ID, payment ID). Do not run unpaid “test” checkouts on a personal Stripe that you cannot export.
- **Keep Tally data exportable** (PAR-Q, waiver, taster signups). Download CSV/JSON; store submission IDs on a simple enrollments sheet keyed by email.
- **Consistent client IDs/emails** — same email on Stripe, Tally, Zoom, and WhatsApp. Ask people not to switch emails mid-challenge.
- **Keep copy and assets in git**, even if a no-code host is used later.
- **Don’t build custom billing** in the pilot. Payment Links map cleanly to Stripe Customer objects and, later, to Connect.
- **Put Zoom and the Stripe/Tally accounts under the brand**, not a personal account that is hard to transfer.
- **Don’t store health-form answers** in the public site or in a shared inbox-only workflow with no export.
- **Leave room on the domain** for `/app` (or similar) so the marketing site and the future Next.js app can coexist.
