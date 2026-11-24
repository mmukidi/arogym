# Anish Jakkula — public Instagram profile notes

Collected for AROGYM (trainer bio and landing-page photos only). Public data only. Nothing was followed, liked, or messaged.

**Profile:** [https://www.instagram.com/anish_jakkula](https://www.instagram.com/anish_jakkula)

**Collected:** Sunday, Nov 22, 2026, 7:47–7:50 PM ET (America/New_York)

## Sources

- **Profile fields** (name, bio, counts, verification, business category, profile photo URLs, external links): Apify actor `apify/instagram-profile-scraper`, run `00L4c0XO1FfsJBbrK`, dataset `ElbiHh9ysP0aQfqQu`, started Nov 22, 2026, 7:47 PM ET. The paid “About account” add-on was not used, so join date and country were not requested.
- **Page title and meta description** (used as a cross-check): Apify `apify/web-fetch` of the public profile URL at Nov 22, 2026, 7:49 PM ET. The rendered page body was mostly a login wall, so post captions and the grid were not taken from this fetch.
- **12 most recent posts** (captions, owners, timestamps, like/comment counts, media type, display images): Apify actor `apify/instagram-post-scraper`, run `pozerLlpFSej54nq0`, dataset `ICVr4vZg5b5Q1aRn8`, `resultsLimit=12`, `dataDetailLevel=basicData`, started Nov 22, 2026, 7:50 PM ET. Video view/play counts were not included in basic data.
- **Images** in this folder were downloaded from the public Instagram CDN URLs returned by those scrapers (`profilePicUrlHD` and each post’s `displayUrl`).

A compact copy of the 12-post sample is in `posts-sample.json`. Numbers below are only what those sources returned. If a field was missing, that is stated.

## Profile snapshot

| Field | Value | Source |
|---|---|---|
| Username | `anish_jakkula` | Profile scraper and profile URL |
| Profile URL | https://www.instagram.com/anish_jakkula | Profile scraper (`url`, `inputUrl`) |
| Instagram user ID | `53716803591` | Profile scraper (`id`) |
| Display name (`fullName`) | **Fit for life** | Profile scraper; also the page title from web-fetch: “Fit for life (@anish_jakkula) • Instagram photos and videos” |
| Legal / given name on the profile | **Not listed.** The display name is not “Anish Jakkula.” The given name is only implied by the username. | Profile scraper `fullName` |
| Bio (exact text) | See below | Profile scraper `biography`; the same three lines appear in the page meta description |
| Followers | **570** | Profile scraper `followersCount`; web-fetch meta description also says “570 Followers” |
| Following | **883** from the profile scraper (`followsCount`). The web-fetch meta description, two minutes later, says **“899 Following.”** Followers (570) and posts (44) matched in both sources. Use 883 as the structured scrape value and note the meta-tag discrepancy; do not invent a reconciled number. | Profile scraper vs. page meta |
| Posts (account total) | **44** | Profile scraper `postsCount`; web-fetch meta also says “44 Posts” |
| External / website link | **None.** `externalUrls` was an empty list. No link appears in the bio text. | Profile scraper |
| Verified | **No** (`verified`: false) | Profile scraper |
| Private | **No** (`private`: false) | Profile scraper |
| Business account | **Yes** (`isBusinessAccount`: true) | Profile scraper |
| Business category | **Education** | Profile scraper `businessCategoryName` |
| Profile location field | **Not present** in the scraped profile fields. Location was not taken from the skipped About-account add-on. | Profile scraper |
| Join date | **Not collected** (About-account add-on was not run) | — |

### Bio text (exact)

```
Empowering lives through improved mobility.
Here to help you move more with less pain
I help busy professionals get lean, strong & build mobility
```

No phone number, email, WhatsApp, city, or credentials appear in the bio.

## Certifications and credentials

**None are stated in the bio.**

In the 12 recent captions, there are also **no formal certificates** (no ACE, ISSA, NASM, K11, or similar). What does appear:

- He refers to **@rakeshudiyar** as “My Coach” / “Coach” on four of his own posts (`DavIDczPmKy`, `DVbelfjj64A`, `DVArY8yDzCr`, `DRkCYhKD7aY`). That is his coach, not a credential he holds.
- One of his captions includes the hashtags `#fitnesscoach`, `#prepcoach`, `#preptime`, `#prepwork`, and `#prepmode` (`DRkCYhKD7aY`, Nov 27, 2025). These are hashtags, not documented certifications. Do not present them as certificates on the AROGYM site.

Manu’s earlier list of specialties (advanced personal training, female fitness training, special population, prep coach, and so on) was **not found on this public profile**. Until Anish confirms certificates in writing, keep public copy limited to what the profile actually says: mobility, less pain, and helping busy professionals get lean and strong.

## Recent post themes (12-post sample)

The 12 items are the most recent posts returned for the profile, from Nov 27, 2025 through Nov 7, 2026. **Three of the 12 are not owned by @anish_jakkula**; they appeared on his grid (collaborations or tags):

- [DfcGJ4RPKYV](https://www.instagram.com/p/DfcGJ4RPKYV/) — owned by **@balu_rachamalla**, Star Fitness Studio Diwali greeting, hashtags include `#starfitnessstudiojubileehills`. Coauthors seen in the scrape: `@star.fitnessstudio`, `@sai_gangula007`, `@anish_jakkula`.
- [DdN1QA5RB7G](https://www.instagram.com/p/DdN1QA5RB7G/) — owned by **@srikanth_hackss**, gym-motivation / workout-partner video.
- [DXqtoqCCkMf…](https://www.instagram.com/p/DXqtoqCCkMfRNxOyE-FunVMu7Oec6XsFDKX50o0/) — owned by **@jakkula_anish** (different user ID `2253874355`, vs `53716803591` for this profile). The handle is similar; it may be a related or older account, but that is **not confirmed** from this scrape.

Themes in **his own 9 posts**:

- **His own physique and gym training**, not client results: mirror selfies, a back double-biceps shot, a shoulder-press video, motivation captions about discipline and work ethic. Hashtags repeatedly used: `#asthetics` (his spelling), `#leanmuscle`, `#menphysique`, `#bodylove`, `#bodybuilding`.
- **Competition-prep language in hashtags only**, on his own content (`#preptime`, `#prepcoach`, `#prepmode`, `#menphysique`). There is no caption in this sample that documents a named client’s contest prep.
- **Coach tribute**, not client coaching footage: several captions credit @rakeshudiyar. The Sep 10, 2026 shoulder-press video thumbnail shows him lifting while a man in a yellow shirt stands behind the bench.
- **City hashtags, not a profile location:** `#hyderabad` and `#jublieehills` (Jubilee Hills, spelled this way) appear on the Mar 3, 2026 selfie. A later collaboration is tagged `#starfitnessstudiojubileehills`. Some photos show **Powerhouse Gym** signage and a Zumba promo banner. That is visible gym branding in photos, not a “location” field on the account.
- **No women-client or client-transformation posts in this sample.** `#bodytransformation` appears once, on his own rear-physique photo. Women appear only on gym marketing banners in the background of two photos, not as identified clients.
- **No before/after client photos** in this sample.

## Languages used in captions

All 12 captions in this sample are **English**. No Telugu script, and no obvious Tenglish, appears in these captions. Several hashtags are misspelled (`#asthetics`, `#consistancy`, `#strenghth`, `#jublieehills`).

## Engagement (from the scraper like/comment counts)

Like and comment counts are what `apify/instagram-post-scraper` returned as `likesCount` and `commentsCount`. View counts were not available in basic data. One owned post, [DavIDczPmKy](https://www.instagram.com/p/DavIDczPmKy/) (Jul 13, 2026, “My Coach - @rakeshudiyar”), was reported as **11,832 likes** and 45 comments. That is an extreme outlier on an account with 570 followers. It is reported as the scraper returned it; it may be a reach/viral figure or a field quirk, and it should not be used as a typical average without a caveat.

| Set | Posts | Avg likes | Median likes | Like range | Avg comments | Median comments | Comment range |
|---|---:|---:|---:|---|---:|---:|---|
| All 12 grid items | 12 | 1,163.25 | 167.5 | 25–11,832 | 13 | 5 | 0–68 |
| Owned by @anish_jakkula | 9 | 1,470.1 | 192 | 25–11,832 | 15.8 | 5 | 0–68 |
| His 8 posts, excluding the 11,832-like item | 8 | 174.9 | 151.5 | 25–432 | 12.1 | 4 | 0–68 |

Typical owned posts in this sample are in the tens to low hundreds of likes. The most-commented owned post in the sample is [DVArY8yDzCr](https://www.instagram.com/p/DVArY8yDzCr/) with 68 comments and 432 likes (Feb 21, 2026). None of the 12 posts was marked pinned.

## Images saved in this folder

Profile photo plus 6 recent post images (4 still photos and 2 video thumbnails), chosen because they show him training or his physique. File names include the post shortcode.

| File | What it is | Posted | Why it may be useful |
|---|---|---|---|
| `profile-pic.jpg` | Official profile photo, 1080×1080 | — | Studio shot, unzipped hoodie with the hood up, face in shadow, midsection visible. Strong physique image, but **the face is hidden**, so it is a weak standalone headshot for a “Meet Anish” section. |
| `post-DdHJ5uey5J2-video-thumb.jpg` | Thumbnail of his shoulder-press Reel | Sep 10, 2026, 11:35 AM ET | Best **training** still: he is seated, pressing dumbbells, with a spotter/coach behind him. Face is clear. |
| `post-DbLG9kCvTM6-video-thumb.jpg` | Thumbnail of a gym Reel | Jul 24, 2026, 7:40 AM ET | Clear **face + physique** mirror selfie, shirtless, on a seated machine. |
| `post-Da79X_bvvHn-image.jpg` | Photo | Jul 18, 2026, 10:11 AM ET | Gym-mirror selfie in a Project Rock tank; face and physique both readable. |
| `post-DYJm73TD_31-image.jpg` | Photo | May 10, 2026, 3:44 AM ET | Rear double-biceps physique photo in a gym. Face is not shown. |
| `post-DVbelfjj64A-image.jpg` | Photo | Mar 3, 2026, 11:53 AM ET | Mirror selfie, tank lifted, midsection visible; face is clear. Background banners include Zumba / gym promo art (not clients). Hashtags include Hyderabad and Jubilee Hills. |
| `post-DbXtLliviFb-image.jpg` | Photo, credit `@anandhrallabhandi` | Jul 29, 2026, 4:51 AM ET | Two men posing in a gym. The man standing in back in the white tank appears to be Anish (matches his selfie face); the man in front in the olive Nike shirt appears to be a friend. Do not crop this as a solo headshot without checking with Anish. |

Get Anish’s permission before using any of these on the site, especially photos that include other people or gym branding.

## Notes for the landing page

- Use **Anish** / **Anish Jakkula** only if Manu/Anish confirm the public name; Instagram itself labels the account **Fit for life**.
- The bio is usable with light editing: mobility, less pain, busy professionals, lean and strong. Do not add certificate names from elsewhere until they are confirmed.
- A clearer **face photo** is still needed for a trainer card. The official profile picture hides the face. Several posts in this folder show his face clearly (especially `post-DdHJ5uey5J2-video-thumb.jpg`, `post-DbLG9kCvTM6-video-thumb.jpg`, and `post-Da79X_bvvHn-image.jpg`).
- Public profile copy in this sample is about **his own training and physique**, plus a gym-community Diwali collab. It does not yet show client transformations, women clients, or formal credentials.
