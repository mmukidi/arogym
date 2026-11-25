/**
 * AROGYM — single edit point for dates, prices, policies, and links.
 * Change values here. Elements with data-config="key" are filled on load.
 * If this file fails to load, the HTML already contains the same defaults.
 *
 * TODO: replace every '#' link below with live Stripe Payment Links and Tally forms.
 * siteUrl is https://arogym.pages.dev — update if the production origin changes.
 */
window.AROGYM_CONFIG = {
  // Public origin, no trailing slash.
  siteUrl: "https://arogym.pages.dev",

  // Pricing
  earlyBirdPrice: "49",
  standardPrice: "79",
  earlyBirdUntilISO: "2026-12-24", // last day of early bird, America/New_York
  earlyBirdUntilLabel: "December 24, 2026",

  // Enrollment window (ET)
  enrollStartISO: "2026-12-14",
  enrollEndISO: "2027-01-02",
  enrollStartLabel: "December 14, 2026",
  enrollEndLabel: "January 2, 2027",

  // Challenge
  challengeStartISO: "2027-01-04",
  challengeStartLabel: "Monday, January 4, 2027",
  classDaysLabel: "weekdays",
  classTimeLabel: "8 PM ET",
  classLengthLabel: "about 30 minutes",

  // Free class (Dec 19)
  tasterDateISO: "2026-12-19",
  tasterDateLabel: "Saturday, December 19, 2026",
  tasterTimeLabel: "10 AM ET",

  // Policies
  classCount: "22", // Jan 4 – Feb 2, 2027 weekdays
  guaranteeLabel: "Come to 15 classes. If you don’t feel stronger and lighter, we refund every dollar.",
  recordings: true,
  recordingsLabel: "Yes. Classes are recorded, so you can catch up if you miss a live evening.",

  // Links — all '#' until live (also marked data-todo in the HTML)
  /* TODO: Stripe Payment Link — Early Bird $49 */
  stripeEarlyBird: "#",
  /* TODO: Stripe Payment Link — Standard $79 */
  stripeStandard: "#",
  /* TODO: Tally PAR-Q / health form */
  tallyHealth: "#",
  /* TODO: Tally waiver */
  tallyWaiver: "#",
  /* TODO: Tally (or other) free-class registration */
  tallyTaster: "#",
  /* TODO: optional Calendly URL. When set, the built-in picker is replaced
     with a Calendly inline embed (their widget script loads only then). */
  calendlyUrl: "",
  /* TODO: optional endpoint. When set, the picker POSTs JSON
     {name,email,whatsapp,goal,slotISO,slotET,localTZ,source}. */
  consultSubmit: "",
  /* TODO: Zoom onboarding / join details, shown after forms */
  zoomInfo: "#",
  /* TODO: WhatsApp community invite */
  whatsapp: "#",
  /* TODO: contact email — used for the mailto fallback when consultSubmit is empty */
  contactEmail: "",
  contactEmailLabel: "",

  consultDurationMin: 30,
  consultDurationLabel: "30 minutes",

  // Per-weekday request windows in Eastern Time. Easy to edit one day without
  // touching the others. 0/sunday is closed. Each window is [start, end) in
  // 24h HH:MM; last start is durationMin before end.
  consultSlots: {
    tz: "America/New_York",
    durationMin: 30,
    daysAhead: 14,
    week: {
      sunday: [],
      monday: [
        { start: "07:30", end: "09:30" }, // 7:30, 8:00, 8:30, 9:00 AM ET
        { start: "21:30", end: "23:00" }  // 9:30, 10:00, 10:30 PM ET — after the 8 PM class
      ],
      tuesday: [
        { start: "07:30", end: "09:30" },
        { start: "21:30", end: "23:00" }
      ],
      wednesday: [
        { start: "07:30", end: "09:30" },
        { start: "21:30", end: "23:00" }
      ],
      thursday: [
        { start: "07:30", end: "09:30" },
        { start: "21:30", end: "23:00" }
      ],
      friday: [
        { start: "07:30", end: "09:30" },
        { start: "21:30", end: "23:00" }
      ],
      // Saturday evening 8:30–10:30 PM ET is an assumption to confirm (no Saturday class).
      saturday: [
        { start: "07:30", end: "09:30" },   // 7:30, 8:00, 8:30, 9:00 AM ET
        { start: "11:00", end: "13:00" },   // 11:00, 11:30, 12:00, 12:30 PM ET
        { start: "20:30", end: "22:30" }    // 8:30, 9:00, 9:30, 10:00 PM ET
      ]
    }
  },

  trainerInstagram: "https://www.instagram.com/anish_jakkula",

  // ---- v8 HIDDEN SLOTS ----
  // Each section stays hidden until its flag is true AND real content is filled in.
  // Never switch one on with placeholder or invented content.
  slots: {
    classVideo: false,        // "Watch one class" — needs a real class clip
    testimonials: true,       // ON Nov 25: Manu-supplied Google reviews + before/after photos
    coachCredentials: false,  // Anish's verified certifications + people coached
    contact: false,           // WhatsApp number + email in the footer
    couplesPrice: false,      // couples price — until Manu decides
    foundingWall: false       // founding families wall — real names, with permission
  },
  couplesPrice: "",           // e.g. "89" — TODO Manu
  couplesPriceLabel: "",      // e.g. hero strip / card line — TODO Manu
  /* TODO: Stripe Payment Link — Couples */
  stripeCouples: "#",
  coachCertsLabel: "",        // TODO: verified certifications only
  coachClientsLabel: "",      // TODO: real number of people coached
  whatsappChat: "",           // TODO: https://wa.me/<number>
  whatsappNumberLabel: ""     // TODO: shown text for the WhatsApp link
};

(function applyConfig() {
  const C = window.AROGYM_CONFIG;
  if (!C) return;

  const get = (key) => (key in C ? C[key] : undefined);

  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    const val = get(key);
    if (val === undefined || val === null || val === "") return;

    const mode = el.getAttribute("data-config-mode") || "text";
    if (mode === "href") {
      el.setAttribute("href", String(val));
      // Keep '#' CTAs non-live and announced as upcoming
      if (String(val) === "#") {
        el.setAttribute("aria-disabled", "true");
      } else {
        el.removeAttribute("aria-disabled");
      }
    } else if (mode === "mailto") {
      el.setAttribute("href", "mailto:" + String(val));
      if (!el.textContent.trim()) el.textContent = String(val);
    } else {
      el.textContent = String(val);
    }
  });

  // Hidden slots: reveal only when the flag is on
  const slots = C.slots || {};
  document.querySelectorAll("[data-slot]").forEach((el) => {
    el.hidden = slots[el.getAttribute("data-slot")] !== true;
  });
  // Keep strict base/alt background alternation whichever slots are on
  document.querySelectorAll(".tabpanel").forEach((p) => {
    Array.prototype.filter.call(p.querySelectorAll(":scope > section.section"), (s) => !s.hidden)
      .forEach((s, i) => s.classList.toggle("section--alt", i % 2 === 1));
  });

  // Enrollment / early-bird status in America/New_York (degrades: HTML already has dates)
  try {
    const fmt = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    const parts = fmt.formatToParts(new Date());
    const pick = (t) => parts.find((p) => p.type === t).value;
    const today = pick("year") + "-" + pick("month") + "-" + pick("day");

    const enrollEls = document.querySelectorAll("[data-enroll-status]");
    let enrollText = "Enrollment is open " + C.enrollStartLabel + " – " + C.enrollEndLabel + ".";
    if (today < C.enrollStartISO) {
      enrollText = "Enrollment opens " + C.enrollStartLabel + ".";
    } else if (today > C.enrollEndISO) {
      enrollText = "Enrollment for this cohort closed on " + C.enrollEndLabel + ".";
    } else {
      enrollText = "Enrollment is open through " + C.enrollEndLabel + ".";
    }
    enrollEls.forEach((el) => { el.textContent = enrollText; });

    const earlyOpen = today <= C.earlyBirdUntilISO;
    document.querySelectorAll("[data-early-bird-card]").forEach((card) => {
      card.classList.toggle("is-closed", !earlyOpen);
    });
    document.querySelectorAll("[data-early-bird-state]").forEach((el) => {
      el.textContent = earlyOpen
        ? "Founding price, through " + C.earlyBirdUntilLabel
        : "Founding price ended " + C.earlyBirdUntilLabel;
    });
  } catch (e) {
    // Leave HTML defaults in place
  }

  // Scroll reveal — subtle, skipped when the user prefers reduced motion
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  nodes.forEach((n) => io.observe(n));
  // Fallback: never leave content hidden if IO doesn't fire (print, odd viewports)
  setTimeout(() => { nodes.forEach((n) => n.classList.add("is-visible")); }, 2000);
})();
