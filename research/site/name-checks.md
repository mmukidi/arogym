# AROGYM name checks (report only — nothing purchased)

**Checked:** Sunday, Nov 22, 2026, 7:45–7:47 PM ET  
**Method:** Registry RDAP over HTTPS (`https://rdap.org/domain/<d>` and the registry’s own RDAP). `whois` is not installed on this box. Public DNS on the box returned `198.18.0.1` for all three domains (likely a local sinkhole), so DNS was **not** used as evidence. Instagram and YouTube were fetched with `curl` (follow redirects).  
**Action:** Report only. No domains, handles, or services were bought or reserved.

## Domains

| Domain | Result | Confidence | Evidence |
|---|---|---|---|
| **arogym.com** | **Registered** (taken) | **High** | Verisign COM RDAP returned a domain object (HTTP 200). |
| **arogym.in** | **Available** (not registered) | **High** | NIXI registry RDAP HTTP 404: “Domain arogym.in is available for registration.” Same body from `https://rdap.nixiregistry.in/rdap/domain/arogym.in`. |
| **arogym.fit** | **Not registered** (treat as available) | **High** that it is not in the registry; **medium-high** that a registrar will sell it at a normal price (premium/aftermarket not checked) | GoDaddy Registry / `https://rdap.nic.fit/domain/arogym.fit` HTTP 404, title “Not found”, description “No data found.” Unlike `.in`, the `.fit` response does not literally say “available for registration.” |

### arogym.com (registered) — RDAP details

- **Registrar:** HOSTINGER operations, UAB (IANA Registrar ID 1636)
- **Created:** July 26, 2020, 9:00 AM ET (2020-07-26T13:00:41Z)
- **Expires:** July 26, 2027, 9:00 AM ET (2027-07-26T13:00:41Z)
- **Last changed:** June 30, 2026, 10:05 AM ET (2026-06-30T14:05:53Z)
- **Status:** `client transfer prohibited`
- **Nameservers:** `NS1.DNS-PARKING.COM`, `NS2.DNS-PARKING.COM` (parking NS; the name is in use by someone else, even if the site is parked)
- **RDAP:** `https://rdap.verisign.com/com/v1/domain/arogym.com` (related: `https://rdap.hostinger.com/domain/AROGYM.COM`)
- Registrant contact was not relied on (thin registry / privacy). Do not contact the registrant from this check.

Premium, aftermarket, and broker pricing were **not** checked for any of the three names.

## Social handles

| Handle | Result | Confidence | Evidence |
|---|---|---|---|
| **Instagram @arogym** | **Taken** | **High** | `https://www.instagram.com/arogym/` returned HTTP 200. Public page title/og:title: “Aron Cisneros (@arogym) • Instagram photos and videos.” og:description: “351 Followers, 119 Following, 23 Posts.” Username `arogym`, profile_id `3281868655`. Not a “page isn’t available” response. |
| **YouTube @arogym** | **Taken** | **High** | `https://www.youtube.com/@arogym` and `/about` returned HTTP 200 and resolved to an existing channel titled **“Aro Gym”**, handle **@AroGym** (YouTube handles are case-insensitive), channel ID `UCPrk4oPgfVR7EbOjw3ExiIA`. |

No Instagram or YouTube URL was blocked in this check, so nothing is marked “unverified.” These accounts belong to other people; do not contact them from this run. Alternative handles (e.g. a US-Telugu qualifier) were not searched.

## Practical note for Gym-Head

`arogym.com`, Instagram `@arogym`, and YouTube `@arogym` are already taken. `arogym.in` looks clear to register; `arogym.fit` is not in the registry RDAP. A purchase decision is still open — this file is a check, not a buy order.
