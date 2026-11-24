# Deploy AROGYM to Cloudflare Pages

**Do not start from this file until Manu (or Gym-Head) has signed in to Cloudflare.** Forge has not created an account, logged in, or published the site.

**Upload this folder only:** `/workspace/telugu-fitness/forge/deploy/arogym/`  
(It is a serve-ready copy of the site, plus a Cloudflare `_headers` file. Do not upload `site/`, `screens/`, or the rest of `forge/`.)

**Expected URL:** `https://arogym.pages.dev`  
(Checked Nov 22, 2026: the name had no DNS records. Recheck if this deploy is days later.)

**Account needed:** a Cloudflare account on the **free plan**, under **Manu’s email** (or the address Gym-Head names). GitHub is optional.

Pick **A** (dashboard drag-and-drop — simplest) or **B** (Wrangler CLI). Either one needs Manu’s own Cloudflare sign-in.

---

## A) Cloudflare dashboard — drag and drop

These steps are done in a browser, signed in as Manu.

1. **Manu signs in** at [https://dash.cloudflare.com](https://dash.cloudflare.com) (create a free account with Manu’s email if there isn’t one yet). This sign-in cannot be done as Forge.
2. In the left sidebar go to **Workers & Pages**.
3. Click **Create**, then choose **Pages**.
4. Choose **Upload assets** (direct upload), not “Connect to Git,” unless you later prefer Git.
5. Set the **project name** to `arogym`. Cloudflare will serve it at `https://arogym.pages.dev`. If the name is taken, stop and pick another; do not overwrite someone else’s project.
6. Upload the **contents** of `/workspace/telugu-fitness/forge/deploy/arogym/` — `index.html` must be at the root of the upload, not inside a nested `arogym/` folder. Include `_headers`, `thank-you.html`, `styles.css`, `config.js`, `favicon.svg`, and the `img/` folder.
7. Deploy. When it finishes, open `https://arogym.pages.dev` and `https://arogym.pages.dev/thank-you.html` and check images, fonts, and nav.
8. After a real deploy, paste live Stripe Payment Links and Tally URLs into `config.js` (`stripeEarlyBird`, `stripeStandard`, `tallyHealth`, `tallyWaiver`, `tallyTaster`) and upload again, or edit and redeploy that file. Those links are still `#` in this folder.

No Wrangler login is required for method A.

---

## B) Wrangler — direct upload

Needs the **Cloudflare account ID** (visible on the dashboard overview) and Manu’s sign-in, **or** an API token Manu creates.

### Sign-in (pick one — both need Manu)

- **Interactive:** Manu runs `npx wrangler login` on a machine where he can complete the Cloudflare browser OAuth prompt. Forge must not run this.
- **Token:** Manu creates an API token in the Cloudflare dashboard with **Account → Cloudflare Pages → Edit** (and typically Account Settings / User Details Read if the prompt asks). Set `CLOUDFLARE_API_TOKEN` and, if required, `CLOUDFLARE_ACCOUNT_ID`. Do not commit the token.

### Commands

From any machine that can see the deploy folder (adjust the path if you copy it elsewhere):

```bash
# One time, if the project does not exist yet:
npx wrangler pages project create arogym --production-branch main

# Each upload:
npx wrangler pages deploy /workspace/telugu-fitness/forge/deploy/arogym --project-name arogym
```

If the CLI asks for an account, pass `--account-id <CLOUDFLARE_ACCOUNT_ID>`.

After a successful deploy, the production URL should be `https://arogym.pages.dev`.

---

## Checks after deploy

- Homepage and `/thank-you.html` load; images (hero, trainer, gallery) appear.
- Canonical / Open Graph tags point at `https://arogym.pages.dev/`.
- Stripe and Tally buttons still need live URLs in `config.js` before enrollment is real.

## Custom domain (optional, later)

`arogym.com` is taken. `arogym.in` and `arogym.fit` looked available (Nov 22, 2026). Adding a custom domain is done in the Pages project’s **Custom domains** tab after a purchase — do not buy from this document alone.
