/**
 * AROGYM consult picker — vanilla JS, no third-party service.
 * Reads window.AROGYM_CONFIG.consultSlots / calendlyUrl / consultSubmit / contactEmail.
 * Also exported as window.AROGYM_CONSULT (and module.exports) for timezone tests.
 */
(function (global) {
  "use strict";

  var DAY_NAMES = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var DAY_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MONTH_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function pad2(n) { return String(n).padStart(2, "0"); }

  function partsInZone(date, timeZone) {
    var dtf = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      hourCycle: "h23"
    });
    var out = {};
    dtf.formatToParts(date).forEach(function (p) {
      if (p.type !== "literal") out[p.type] = p.value;
    });
    return out;
  }

  function asUtcMsFromParts(p) {
    return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +(p.second || 0));
  }

  /**
   * UTC Date for a civil wall time in `timeZone` (month is 1–12).
   * Iterates the TZ offset so DST is applied correctly.
   */
  function zonedWallToDate(timeZone, year, month, day, hour, minute) {
    var intended = Date.UTC(year, month - 1, day, hour, minute, 0);
    var instant = intended;
    for (var i = 0; i < 3; i++) {
      var shown = asUtcMsFromParts(partsInZone(new Date(instant), timeZone));
      var offset = instant - shown; // UTC minus wall, at this instant
      instant = intended + offset;
    }
    return new Date(instant);
  }

  function ymdInZone(date, timeZone) {
    var p = partsInZone(date, timeZone);
    return { year: +p.year, month: +p.month, day: +p.day };
  }

  function addCivilDays(year, month, day, n) {
    var dt = new Date(Date.UTC(year, month - 1, day + n));
    return {
      year: dt.getUTCFullYear(),
      month: dt.getUTCMonth() + 1,
      day: dt.getUTCDate(),
      dow: dt.getUTCDay()
    };
  }

  function hmToMinutes(hhmm) {
    var parts = String(hhmm).split(":");
    return (+parts[0]) * 60 + (+parts[1] || 0);
  }

  function minutesToHm(total) {
    var h = Math.floor(total / 60);
    var m = total % 60;
    return pad2(h) + ":" + pad2(m);
  }

  function startsInWindow(start, end, durationMin) {
    var t = hmToMinutes(start);
    var endM = hmToMinutes(end);
    var out = [];
    while (t + durationMin <= endM) {
      out.push(t);
      t += durationMin;
    }
    return out;
  }

  function windowsForDow(week, dow) {
    if (!week) return [];
    if (Array.isArray(week[dow])) return week[dow];
    var name = DAY_NAMES[dow];
    if (Array.isArray(week[name])) return week[name];
    if (Array.isArray(week[name.slice(0, 3)])) return week[name.slice(0, 3)];
    return [];
  }

  function formatTime(date, timeZone) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(date);
  }

  function formatDateLong(year, month, day, dow) {
    return DAY_LONG[dow] + ", " + MONTH_LONG[month - 1] + " " + day + ", " + year;
  }

  var TZ_DISPLAY_ALIAS = { "Asia/Calcutta": "Asia/Kolkata", "Europe/Kiev": "Europe/Kyiv" };

  function visitorTimeZone() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    } catch (e) {
      return "UTC";
    }
  }

  function displayTimeZone(tz) {
    tz = TZ_DISPLAY_ALIAS[tz] || tz || "UTC";
    return tz.replace(/_/g, " ");
  }

  /** Group label from the visitor's local hour: morning <12, afternoon 12–17, evening >=17, late <5. */
  function localPeriod(date, timeZone) {
    var h = +partsInZone(date, timeZone).hour;
    if (h < 5) return "late";
    if (h < 12) return "morning";
    if (h < 17) return "afternoon";
    return "evening";
  }

  function slotLabels(date, etTz, localTz) {
    var local = formatTime(date, localTz);
    var et = formatTime(date, etTz);
    var same = localTz === etTz;
    return {
      local: local,
      et: et,
      short: same ? et + " ET" : local + " your time · " + et + " ET",
      etLong: et + " ET"
    };
  }

  function buildDays(opts, now) {
    now = now || new Date();
    var tz = opts.tz || "America/New_York";
    var durationMin = opts.durationMin || 30;
    var daysAhead = opts.daysAhead || 14;
    var week = opts.week || {};
    var today = ymdInZone(now, tz);
    var days = [];
    for (var i = 0; i < daysAhead; i++) {
      var civil = addCivilDays(today.year, today.month, today.day, i);
      var windows = windowsForDow(week, civil.dow);
      var slots = [];
      windows.forEach(function (win) {
        startsInWindow(win.start, win.end, durationMin).forEach(function (mins) {
          var hour = Math.floor(mins / 60);
          var minute = mins % 60;
          var instant = zonedWallToDate(tz, civil.year, civil.month, civil.day, hour, minute);
          if (instant.getTime() <= now.getTime()) return;
          slots.push({
            instant: instant,
            iso: instant.toISOString(),
            etHm: minutesToHm(mins),
            etHour: hour,
            year: civil.year,
            month: civil.month,
            day: civil.day,
            dow: civil.dow
          });
        });
      });
      if (!slots.length) continue;
      days.push({
        year: civil.year,
        month: civil.month,
        day: civil.day,
        dow: civil.dow,
        key: civil.year + "-" + pad2(civil.month) + "-" + pad2(civil.day),
        labelShort: DAY_SHORT[civil.dow],
        labelMonth: MONTH_SHORT[civil.month - 1],
        labelLong: formatDateLong(civil.year, civil.month, civil.day, civil.dow),
        slots: slots
      });
    }
    return days;
  }

  function icsText(slot, durationMin) {
    function stamp(d) {
      return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    }
    var end = new Date(slot.instant.getTime() + durationMin * 60000);
    var desc = "This is a request. Your trainer will confirm your slot within 24 hours by email or WhatsApp.";
    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//AROGYM//Consult Request//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:consult-" + slot.instant.getTime() + "@arogym.pages.dev",
      "DTSTAMP:" + stamp(new Date()),
      "DTSTART:" + stamp(slot.instant),
      "DTEND:" + stamp(end),
      "SUMMARY:AROGYM consult request with your trainer",
      "DESCRIPTION:" + desc,
      "END:VEVENT",
      "END:VCALENDAR",
      ""
    ].join("\r\n");
  }

  var api = {
    zonedWallToDate: zonedWallToDate,
    ymdInZone: ymdInZone,
    addCivilDays: addCivilDays,
    startsInWindow: startsInWindow,
    windowsForDow: windowsForDow,
    formatTime: formatTime,
    slotLabels: slotLabels,
    visitorTimeZone: visitorTimeZone,
    displayTimeZone: displayTimeZone,
    localPeriod: localPeriod,
    buildDays: buildDays,
    icsText: icsText
  };

  global.AROGYM_CONSULT = api;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (typeof document === "undefined") return;

  var PERIOD_LABEL = { late: "Late", morning: "Morning", afternoon: "Afternoon", evening: "Evening" };

  function el(tag, attrs, kids) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "checked") { if (attrs[k]) node.setAttribute("aria-checked", "true"); else node.setAttribute("aria-checked", "false"); }
        else if (attrs[k] === false || attrs[k] == null) return;
        else node.setAttribute(k, String(attrs[k]));
      });
    }
    (kids || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function inferUsZone(tz) {
    var s = String(tz || "");
    if (/New_York|Detroit|Indiana|Kentucky|Toronto|Montreal|Eastern/i.test(s)) return "ET";
    if (/Chicago|Winnipeg|Central/i.test(s)) return "CT";
    if (/Denver|Phoenix|Boise|Edmonton|Mountain/i.test(s)) return "MT";
    if (/Los_Angeles|Vancouver|Pacific/i.test(s)) return "PT";
    return "";
  }

  var US_ZONE_LABEL = {
    ET: "Eastern (ET)",
    CT: "Central (CT)",
    MT: "Mountain (MT)",
    PT: "Pacific (PT)"
  };

  var FOOD_PREF_LABEL = {
    vegetarian: "Vegetarian (incl. eggetarian)",
    "non-vegetarian": "Non-Vegetarian",
    vegan: "Vegan"
  };

  function mountCalendly(root, url) {
    root.innerHTML = "";
    var wrap = el("div", {
      class: "calendly-inline-widget consult__calendly",
      "data-url": url,
      style: "min-width:280px;height:720px;"
    });
    root.appendChild(wrap);
    var s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.head.appendChild(s);
  }

  function boot() {
    var root = document.getElementById("consult-booking");
    if (!root) return;
    var C = global.AROGYM_CONFIG || {};
    var calendly = String(C.calendlyUrl || "").trim();
    if (calendly && calendly !== "#") {
      mountCalendly(root, calendly);
      return;
    }
    var slotCfg = C.consultSlots || {};
    mountPicker(root, C, slotCfg);
  }

  function mountPicker(root, C, slotCfg) {
    var etTz = slotCfg.tz || "America/New_York";
    var durationMin = slotCfg.durationMin || 30;
    var localTz = visitorTimeZone();
    var days = buildDays(slotCfg, new Date());
    var state = { day: null, slot: null, step: "date", prefill: { usZone: inferUsZone(localTz), foodPref: "", goal: "", note: "" } };

    root.innerHTML = "";
    var picker = el("div", { class: "picker", "data-step": "date" });

    var zone = el("p", { class: "picker__zone" });
    if (localTz === etTz) {
      zone.textContent = "Times in your zone (" + displayTimeZone(localTz) + ").";
    } else {
      zone.textContent = "Times in your zone (" + displayTimeZone(localTz) + ") · ET shown for reference.";
    }

    var live = el("p", { class: "picker__live", "aria-live": "polite" });
    var requestNote = el("p", {
      class: "picker__request",
      text: "These times are requests, not locked bookings. Your trainer will confirm your slot within 24 hours by email or WhatsApp."
    });

    var datePanel = el("div", { class: "picker__panel", "data-panel": "date" });
    var dateHeading = el("h3", { class: "picker__heading", id: "consult-date-heading", text: "Pick a date" });
    var dateGroup = el("div", {
      class: "picker__dates",
      role: "radiogroup",
      "aria-labelledby": "consult-date-heading"
    });
    datePanel.appendChild(dateHeading);
    datePanel.appendChild(dateGroup);

    var timePanel = el("div", { class: "picker__panel is-hidden", "data-panel": "time", hidden: "hidden" });
    var timeHeadRow = el("div", { class: "picker__headrow" }, [
      el("h3", { class: "picker__heading", id: "consult-time-heading", text: "Pick a time" }),
      el("button", { type: "button", class: "picker__back", "data-back": "date", text: "Change date" })
    ]);
    var timeGroup = el("div", { class: "picker__times-wrap" });
    timePanel.appendChild(timeHeadRow);
    timePanel.appendChild(timeGroup);

    var formPanel = el("div", { class: "picker__panel is-hidden", "data-panel": "form", hidden: "hidden" });
    var confirmPanel = el("div", { class: "picker__panel is-hidden", "data-panel": "confirm", hidden: "hidden" });

    picker.appendChild(zone);
    picker.appendChild(requestNote);
    picker.appendChild(live);
    picker.appendChild(datePanel);
    picker.appendChild(timePanel);
    picker.appendChild(formPanel);
    picker.appendChild(confirmPanel);
    root.appendChild(picker);

    function applyPrefillToForm(form) {
      if (!form || !state.prefill) return;
      var tzSel = form.querySelector("#consult-tz");
      var foodSel = form.querySelector("#consult-food");
      var goalSel = form.querySelector("#consult-goal");
      var noteEl = form.querySelector("#consult-note");
      if (tzSel && state.prefill.usZone) tzSel.value = state.prefill.usZone;
      if (foodSel && state.prefill.foodPref) foodSel.value = state.prefill.foodPref;
      if (goalSel && state.prefill.goal) goalSel.value = state.prefill.goal;
      if (noteEl && state.prefill.note) noteEl.value = state.prefill.note;
    }

    global.AROGYM_PREFILL_CONSULT = function (data) {
      if (!data) return;
      if (data.usZone) state.prefill.usZone = data.usZone;
      if (data.foodPref) state.prefill.foodPref = data.foodPref;
      if (data.goal) state.prefill.goal = data.goal;
      if (data.note) state.prefill.note = data.note;
      state.prefill.bannerDateText = data.bannerText || "";
      state.prefill.bannerFormText = data.bannerFormText || data.bannerText || "";
      var banner = document.getElementById("consult-prefill-banner");
      if (banner && state.prefill.bannerDateText) {
        banner.textContent = state.step === "form" ? state.prefill.bannerFormText : state.prefill.bannerDateText;
        banner.hidden = false;
      }
      var existingForm = formPanel.querySelector("form");
      if (existingForm) applyPrefillToForm(existingForm);
    };

    function setLive(msg) {
      live.textContent = msg || "";
    }

    function showStep(name, focusTarget) {
      state.step = name;
      picker.setAttribute("data-step", name);
      [datePanel, timePanel, formPanel, confirmPanel].forEach(function (panel) {
        var on = panel.getAttribute("data-panel") === name ||
          (name === "time" && panel.getAttribute("data-panel") === "date") ||
          (name === "date" && panel.getAttribute("data-panel") === "date");
        // Date stays visible on the time step; both hide on form/confirm.
        if (name === "time") {
          on = panel === datePanel || panel === timePanel;
        } else if (name === "date") {
          on = panel === datePanel;
        } else if (name === "form") {
          on = panel === formPanel;
        } else if (name === "confirm") {
          on = panel === confirmPanel;
        }
        panel.hidden = !on;
        panel.classList.toggle("is-hidden", !on);
      });
      var card = root.closest(".consult");
      if (card) card.classList.toggle("is-compact", name === "form" || name === "confirm");
      if (name === "form" || name === "confirm") {
        requestNote.hidden = true;
        zone.hidden = true;
      } else {
        requestNote.hidden = false;
        zone.hidden = false;
      }
      if (focusTarget) {
        setTimeout(function () { focusTarget.focus(); }, 0);
      }
    }

    function selectDay(day, announce) {
      state.day = day;
      state.slot = null;
      Array.prototype.forEach.call(dateGroup.querySelectorAll("[role='radio']"), function (btn) {
        var on = btn.getAttribute("data-key") === day.key;
        btn.setAttribute("aria-checked", on ? "true" : "false");
        btn.classList.toggle("is-selected", on);
        if (on) btn.tabIndex = 0;
        else btn.tabIndex = -1;
      });
      renderTimes(day);
      showStep("time", timeHeadRow.querySelector("h3"));
      if (announce) {
        setLive(day.labelLong + " selected. " + day.slots.length + " times available.");
      }
    }

    days.forEach(function (day, index) {
      var btn = el("button", {
        type: "button",
        role: "radio",
        class: "picker__date",
        "data-key": day.key,
        "aria-checked": "false",
        tabindex: index === 0 ? "0" : "-1"
      });
      btn.innerHTML = "<span class=\"picker__date-dow\">" + day.labelShort + "</span>" +
        "<span class=\"picker__date-num\">" + day.day + "</span>" +
        "<span class=\"picker__date-mo\">" + day.labelMonth + "</span>";
      btn.addEventListener("click", function () { selectDay(day, true); });
      dateGroup.appendChild(btn);
    });

    if (!days.length) {
      dateGroup.hidden = true;
      setLive("No upcoming request times are open right now. Please check back shortly, or email your trainer to find a time.");
    }

    dateGroup.addEventListener("keydown", function (e) {
      var radios = Array.prototype.slice.call(dateGroup.querySelectorAll("[role='radio']"));
      var i = radios.indexOf(document.activeElement);
      if (i < 0) return;
      var next = i;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % radios.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + radios.length) % radios.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = radios.length - 1;
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        radios[i].click();
        return;
      } else return;
      e.preventDefault();
      radios[next].focus();
    });

    function renderTimes(day) {
      timeGroup.innerHTML = "";
      var slotsSorted = day.slots.slice().sort(function (a, b) {
        return a.instant.getTime() - b.instant.getTime();
      });
      var groups = [];
      var indexByPeriod = {};
      slotsSorted.forEach(function (slot) {
        var period = localPeriod(slot.instant, localTz);
        if (indexByPeriod[period] == null) {
          indexByPeriod[period] = groups.length;
          groups.push({ period: period, slots: [] });
        }
        groups[indexByPeriod[period]].slots.push(slot);
      });
      var showHeadings = groups.length > 1;
      groups.forEach(function (g) {
        var period = g.period;
        var slots = g.slots;
        var block = el("div", { class: "picker__period" });
        if (showHeadings) {
          block.appendChild(el("p", { class: "picker__period-label", text: PERIOD_LABEL[period] }));
        }
        var group = el("div", {
          class: "picker__times",
          role: "radiogroup",
          "aria-label": PERIOD_LABEL[period] + " times on " + day.labelLong
        });
        slots.forEach(function (slot, index) {
          var labels = slotLabels(slot.instant, etTz, localTz);
          var btn = el("button", {
            type: "button",
            role: "radio",
            class: "picker__time",
            "data-iso": slot.iso,
            "aria-checked": "false",
            tabindex: index === 0 ? "0" : "-1",
            title: labels.short
          });
          var primary = localTz === etTz ? labels.etLong : labels.local;
          var secondary = localTz === etTz ? "" : labels.etLong;
          btn.innerHTML = "<span class=\"picker__time-main\">" + primary + "</span>" +
            (secondary ? "<span class=\"picker__time-sub\">" + secondary + "</span>" : "");
          btn.addEventListener("click", function () { selectSlot(slot, btn); });
          group.appendChild(btn);
        });
        group.addEventListener("keydown", function (e) {
          var radios = Array.prototype.slice.call(group.querySelectorAll("[role='radio']"));
          var i = radios.indexOf(document.activeElement);
          if (i < 0) return;
          var next = i;
          if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % radios.length;
          else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + radios.length) % radios.length;
          else if (e.key === "Home") next = 0;
          else if (e.key === "End") next = radios.length - 1;
          else if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            radios[i].click();
            return;
          } else return;
          e.preventDefault();
          radios[next].focus();
        });
        block.appendChild(group);
        timeGroup.appendChild(block);
      });
    }

    function selectSlot(slot, btn) {
      state.slot = slot;
      Array.prototype.forEach.call(root.querySelectorAll(".picker__time"), function (b) {
        var on = b === btn;
        b.setAttribute("aria-checked", on ? "true" : "false");
        b.classList.toggle("is-selected", on);
      });
      renderForm();
      var labels = slotLabels(slot.instant, etTz, localTz);
      setLive("Selected " + state.day.labelLong + " at " + labels.short + ". Continue with your details.");
      showStep("form", formPanel.querySelector("h3"));
    }

    function summaryLine(slot, day) {
      var labels = slotLabels(slot.instant, etTz, localTz);
      return day.labelLong + " · " + labels.short;
    }

    function renderForm() {
      var slot = state.slot;
      var day = state.day;
      formPanel.innerHTML = "";
      formPanel.appendChild(el("div", { class: "picker__headrow" }, [
        el("h3", { class: "picker__heading", id: "consult-form-heading", text: "Your details" }),
        el("button", { type: "button", class: "picker__back", "data-back": "time", text: "Change time" })
      ]));
      formPanel.appendChild(el("p", { class: "picker__summary", text: summaryLine(slot, day) }));

      var form = el("form", { class: "picker__form", novalidate: "novalidate" });
      form.appendChild(field("name", "Name", "text", "Your name", true, "autocomplete", "name"));
      form.appendChild(field("email", "Email", "email", "you@email.com", true, "autocomplete", "email"));
      var wa = field("whatsapp", "WhatsApp number", "tel", "+1 201 555 0100", true, "autocomplete", "tel");
      wa.appendChild(el("p", {
        class: "picker__hint",
        id: "consult-wa-hint",
        text: "Include your country code, for example +1 or +91."
      }));
      wa.querySelector("input").setAttribute("aria-describedby", "consult-wa-hint");
      form.appendChild(wa);

      var tzWrap = el("div", { class: "picker__field" });
      tzWrap.appendChild(el("label", { for: "consult-tz", text: "Your US time zone" }));
      var tzSelect = el("select", { id: "consult-tz", name: "usTimeZone", required: "required" });
      [
        ["", "Choose your US time zone"],
        ["ET", "Eastern (ET) — live class 8 PM ET"],
        ["CT", "Central (CT) — live class 7 PM CT"],
        ["MT", "Mountain (MT) — live class 6 PM MT"],
        ["PT", "Pacific (PT) — live class 5 PM PT"]
      ].forEach(function (opt) {
        tzSelect.appendChild(el("option", { value: opt[0], text: opt[1] }));
      });
      tzWrap.appendChild(tzSelect);
      tzWrap.appendChild(el("p", { class: "picker__error", id: "consult-tz-error", hidden: "hidden" }));
      form.appendChild(tzWrap);

      var foodWrap = el("div", { class: "picker__field" });
      foodWrap.appendChild(el("label", { for: "consult-food", text: "Home-food preference" }));
      var foodSelect = el("select", { id: "consult-food", name: "foodPreference", required: "required" });
      [
        ["", "Choose your preference"],
        ["vegetarian", "Vegetarian (incl. eggetarian)"],
        ["non-vegetarian", "Non-Vegetarian"],
        ["vegan", "Vegan"]
      ].forEach(function (opt) {
        foodSelect.appendChild(el("option", { value: opt[0], text: opt[1] }));
      });
      foodWrap.appendChild(foodSelect);
      foodWrap.appendChild(el("p", { class: "picker__error", id: "consult-food-error", hidden: "hidden" }));
      form.appendChild(foodWrap);

      var goalWrap = el("div", { class: "picker__field" });
      goalWrap.appendChild(el("label", { for: "consult-goal", text: "What do you want from this call?" }));
      var select = el("select", { id: "consult-goal", name: "goal", required: "required" });
      [
        ["", "Choose one"],
        ["goals-review", "A goals review — where I am, and what I want from the 30 days"],
        ["form-mobility", "A form / mobility check"],
        ["plan-fit", "See if the 30-day challenge is a fit"],
        ["just-hi", "Just saying hi"],
        ["other", "Something else"]
      ].forEach(function (opt) {
        var o = el("option", { value: opt[0], text: opt[1] });
        select.appendChild(o);
      });
      goalWrap.appendChild(select);
      var errGoal = el("p", { class: "picker__error", id: "consult-goal-error", hidden: "hidden" });
      goalWrap.appendChild(errGoal);
      form.appendChild(goalWrap);

      var noteWrap = el("div", { class: "picker__field" });
      noteWrap.appendChild(el("label", { for: "consult-note", text: "Anything your trainer should know? (optional)" }));
      noteWrap.appendChild(el("textarea", {
        id: "consult-note",
        name: "note",
        rows: "3",
        placeholder: "Injuries, schedule constraints, or a little more context."
      }));
      var errNote = el("p", { class: "picker__error", id: "consult-note-error", hidden: "hidden" });
      noteWrap.appendChild(errNote);
      form.appendChild(noteWrap);

      var formLive = el("p", { class: "picker__error picker__form-status", "aria-live": "assertive", hidden: "hidden" });
      form.appendChild(formLive);
      form.appendChild(el("button", { type: "submit", class: "btn btn--primary picker__submit", text: "Request this time" }));
      form.appendChild(el("p", {
        class: "picker__fine",
        text: "Submitting sends a request only. Your trainer will confirm your slot within 24 hours by email or WhatsApp."
      }));
      formPanel.appendChild(form);
      applyPrefillToForm(form);
      var banner = document.getElementById("consult-prefill-banner");
      if (banner && !banner.hidden && state.prefill.bannerFormText) {
        banner.textContent = state.prefill.bannerFormText;
      }

      select.addEventListener("change", function () {
        var other = select.value === "other";
        noteWrap.querySelector("label").textContent = other
          ? "Tell your trainer a little more (required)"
          : "Anything your trainer should know? (optional)";
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        handleSubmit(form, formLive);
      });
    }

    function field(name, label, type, placeholder, required, extra, extraVal) {
      var wrap = el("div", { class: "picker__field" });
      wrap.appendChild(el("label", { for: "consult-" + name, text: label }));
      var input = el("input", {
        id: "consult-" + name,
        name: name,
        type: type,
        placeholder: placeholder,
        required: required ? "required" : false
      });
      if (extra) input.setAttribute(extra, extraVal);
      wrap.appendChild(input);
      wrap.appendChild(el("p", { class: "picker__error", id: "consult-" + name + "-error", hidden: "hidden" }));
      return wrap;
    }

    function setFieldError(form, name, msg) {
      var input = form.querySelector("#consult-" + name);
      var err = form.querySelector("#consult-" + name + "-error");
      if (input) {
        input.setAttribute("aria-invalid", msg ? "true" : "false");
        if (msg) input.setAttribute("aria-describedby", "consult-" + name + "-error");
        else if (name !== "whatsapp") input.removeAttribute("aria-describedby");
      }
      if (err) {
        err.textContent = msg || "";
        err.hidden = !msg;
      }
    }

    function handleSubmit(form, formLive) {
      var name = form.querySelector("#consult-name").value.trim();
      var email = form.querySelector("#consult-email").value.trim();
      var whatsapp = form.querySelector("#consult-whatsapp").value.trim();
      var tzVal = form.querySelector("#consult-tz").value;
      var foodVal = form.querySelector("#consult-food").value;
      var goalVal = form.querySelector("#consult-goal").value;
      var note = form.querySelector("#consult-note").value.trim();
      var ok = true;
      var firstBad = null;

      function fail(id, msg) {
        setFieldError(form, id, msg);
        if (!firstBad) firstBad = form.querySelector("#consult-" + id);
        ok = false;
      }

      setFieldError(form, "name", "");
      setFieldError(form, "email", "");
      setFieldError(form, "whatsapp", "");
      setFieldError(form, "tz", "");
      setFieldError(form, "food", "");
      setFieldError(form, "goal", "");
      setFieldError(form, "note", "");
      formLive.hidden = true;
      formLive.textContent = "";

      if (name.length < 2) fail("name", "Please enter your name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail("email", "Please enter a valid email.");
      var digits = whatsapp.replace(/\D/g, "");
      if (whatsapp.charAt(0) !== "+" || digits.length < 8 || digits.length > 15) {
        fail("whatsapp", "Please include a country code, like +1 or +91, and your number.");
      }
      if (!tzVal) fail("tz", "Please choose your US time zone.");
      if (!foodVal) fail("food", "Please choose your home-food preference.");
      if (!goalVal) fail("goal", "Please choose what you want from the call.");
      if (goalVal === "other" && note.length < 2) fail("note", "Please add a short note so your trainer knows how to help.");

      if (!ok) {
        formLive.textContent = "Please fix the highlighted fields.";
        formLive.hidden = false;
        if (firstBad) firstBad.focus();
        return;
      }

      var goalLabel = form.querySelector("#consult-goal").selectedOptions[0].text;
      var goal = goalLabel + (note ? " — " + note : "");
      var labels = slotLabels(state.slot.instant, etTz, localTz);
      var slotET = state.day.labelLong + " at " + labels.etLong;
      var payload = {
        name: name,
        email: email,
        whatsapp: whatsapp,
        usTimeZone: US_ZONE_LABEL[tzVal] || tzVal,
        foodPreference: FOOD_PREF_LABEL[foodVal] || foodVal,
        goal: goal,
        slotISO: state.slot.iso,
        slotET: slotET,
        localTZ: localTz,
        source: "arogym-consult-picker"
      };

      var submitBtn = form.querySelector(".picker__submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending request…";

      var submitUrl = String(C.consultSubmit || "").trim();
      var inbox = String(C.contactEmail || "").trim();

      function finish(mode, extraMsg) {
        renderConfirm(payload, labels, mode, extraMsg);
        setLive("Request received for " + summaryLine(state.slot, state.day) + ". Your trainer will confirm your slot within 24 hours by email or WhatsApp.");
        showStep("confirm", confirmPanel.querySelector("h3"));
      }

      function mailtoFallback(reason) {
        var body = [
          "AROGYM consult request",
          "",
          "Name: " + payload.name,
          "Email: " + payload.email,
          "WhatsApp: " + payload.whatsapp,
          "US time zone: " + payload.usTimeZone,
          "Food preference: " + payload.foodPreference,
          "Goal: " + payload.goal,
          "Slot (ET): " + payload.slotET,
          "Slot (ISO): " + payload.slotISO,
          "Visitor time zone: " + payload.localTZ,
          "Source: " + payload.source
        ].join("\n");
        var href = "mailto:" + encodeURIComponent(inbox) +
          "?subject=" + encodeURIComponent("AROGYM consult request — " + payload.slotET) +
          "&body=" + encodeURIComponent(body);
        state.payload = payload;
        state.mailtoHref = inbox ? href : "";
        if (inbox) {
          try {
            var a = document.createElement("a");
            a.href = href;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            a.remove();
          } catch (err) { /* leave the confirm-screen mailto link */ }
          finish("mailto", reason);
        } else {
          finish("copy", reason || "Please copy the details below and send them to your trainer by email or WhatsApp.");
        }
      }

      if (submitUrl && /^https?:/i.test(submitUrl)) {
        var timer = setTimeout(function () {
          // slow network; still waiting
        }, 8000);
        fetch(submitUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        }).then(function (res) {
          clearTimeout(timer);
          if (!res.ok) throw new Error("HTTP " + res.status);
          state.payload = payload;
          finish("posted");
        }).catch(function () {
          clearTimeout(timer);
          mailtoFallback("We couldn’t send this automatically. Please copy the details below and send them to your trainer by email or WhatsApp.");
        });
      } else {
        mailtoFallback();
      }
    }

    function renderConfirm(payload, labels, mode, extraMsg) {
      confirmPanel.innerHTML = "";
      confirmPanel.appendChild(el("h3", { class: "picker__heading", text: "Request sent" }));
      confirmPanel.appendChild(el("p", {
        class: "picker__confirm-lead",
        text: "Your trainer will confirm your slot within 24 hours by email or WhatsApp."
      }));
      confirmPanel.appendChild(el("p", { class: "picker__summary", text: summaryLine(state.slot, state.day) }));
      if (localTz !== etTz) {
        confirmPanel.appendChild(el("p", {
          class: "picker__hint",
          text: "That’s " + labels.local + " in " + displayTimeZone(localTz) + ", and " + labels.etLong + "."
        }));
      }
      if (extraMsg) confirmPanel.appendChild(el("p", { class: "picker__hint", text: extraMsg }));

      var actions = el("div", { class: "picker__actions" });
      var icsBtn = el("button", { type: "button", class: "btn btn--ghost", text: "Add to calendar (.ics)" });
      icsBtn.addEventListener("click", function () {
        var blob = new Blob([icsText(state.slot, durationMin)], { type: "text/calendar;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "arogym-consult-request.ics";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      });
      actions.appendChild(icsBtn);

      if (state.mailtoHref) {
        var mail = el("a", { class: "btn btn--ghost", href: state.mailtoHref, text: "Open email draft" });
        actions.appendChild(mail);
      } else if (mode === "copy" || mode === "mailto") {
        var copyBtn = el("button", { type: "button", class: "btn btn--ghost", text: "Copy request details" });
        copyBtn.addEventListener("click", function () {
          var text = [
            "Name: " + payload.name,
            "Email: " + payload.email,
            "WhatsApp: " + payload.whatsapp,
            "US time zone: " + payload.usTimeZone,
            "Food preference: " + payload.foodPreference,
            "Goal: " + payload.goal,
            "Slot (ET): " + payload.slotET,
            "Slot (ISO): " + payload.slotISO,
            "Visitor time zone: " + payload.localTZ
          ].join("\n");
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
              copyBtn.textContent = "Copied";
            }).catch(function () {});
          }
        });
        actions.appendChild(copyBtn);
      }

      var again = el("button", { type: "button", class: "picker__back", text: "Request a different time" });
      again.addEventListener("click", function () {
        state.slot = null;
        showStep(state.day ? "time" : "date", dateHeading);
        setLive("Choose a different time.");
      });
      confirmPanel.appendChild(actions);
      confirmPanel.appendChild(again);
    }

    picker.addEventListener("click", function (e) {
      var back = e.target.closest && e.target.closest("[data-back]");
      if (!back) return;
      var to = back.getAttribute("data-back");
      if (to === "date") {
        state.slot = null;
        showStep("date", dateHeading);
        setLive("Pick a date.");
      } else if (to === "time") {
        showStep("time", timeHeadRow.querySelector("h3"));
        setLive("Pick a time on " + (state.day ? state.day.labelLong : "the selected date") + ".");
      }
    });
  }


  function mountFitCheck() {
    var root = document.getElementById("fitcheck-app");
    if (!root) return;

    var ZONE_TIMES = {
      ET: { label: "Eastern (ET)", live: "8:00 PM ET", taster: "10:00 AM ET" },
      CT: { label: "Central (CT)", live: "7:00 PM CT", taster: "9:00 AM CT" },
      MT: { label: "Mountain (MT)", live: "6:00 PM MT", taster: "8:00 AM MT" },
      PT: { label: "Pacific (PT)", live: "5:00 PM PT", taster: "7:00 AM PT" }
    };

    var QUESTIONS = [
      {
        key: "usZone",
        num: "01",
        prompt: "Your US time zone",
        options: [
          { value: "ET", label: "Eastern (ET)" },
          { value: "CT", label: "Central (CT)" },
          { value: "MT", label: "Mountain (MT)" },
          { value: "PT", label: "Pacific (PT)" }
        ]
      },
      {
        key: "friction",
        num: "02",
        prompt: "Main weekday or weekend friction",
        options: [
          { value: "desk", label: "Neck, shoulder & lower-back desk stiffness" },
          { value: "sport", label: "Weekend badminton, cricket, or pickleball soreness" },
          { value: "energy", label: "Low energy & inconsistent routine" },
          { value: "all", label: "All of the above" }
        ]
      },
      {
        key: "foodPref",
        num: "03",
        prompt: "Home-food preference",
        options: [
          { value: "vegetarian", label: "Vegetarian (incl. eggetarian)" },
          { value: "non-vegetarian", label: "Non-Vegetarian" },
          { value: "vegan", label: "Vegan" }
        ]
      },
      {
        key: "hurdle",
        num: "04",
        prompt: "Biggest kitchen hurdle",
        options: [
          { value: "separate", label: "Can’t cook separate “diet food”" },
          { value: "festivals", label: "Veg days, festivals & weekend potlucks" },
          { value: "late-calls", label: "Late dinners & 3 PM slump around work calls" },
          { value: "charts", label: "Tired of strict meal charts" }
        ]
      },
      {
        key: "firstStep",
        num: "05",
        prompt: "Preferred first step",
        options: [
          { value: "consult", label: "Free 30-min private consult" },
          { value: "taster", label: "Free Dec 19 live class" },
          { value: "partner", label: "Join with my spouse or a friend" }
        ]
      }
    ];

    var answers = { usZone: "", friction: "", foodPref: "", hurdle: "", firstStep: "" };

    root.innerHTML = "";

    var progressWrap = el("div", { class: "fitcheck__progress" });
    var progressText = el("span", { text: "0 of 5 answered" });
    var bar = el("div", { class: "fitcheck__bar", "aria-hidden": "true" });
    var barFill = el("div", { class: "fitcheck__bar-fill" });
    bar.appendChild(barFill);
    progressWrap.appendChild(progressText);
    progressWrap.appendChild(bar);
    root.appendChild(progressWrap);

    var list = el("div", { class: "fitcheck__list" });
    QUESTIONS.forEach(function (q) {
      var block = el("div", { class: "fitcheck__q", "data-q": q.key });
      var labelId = "fitcheck-q-" + q.key;
      var lbl = el("p", { class: "fitcheck__q-label", id: labelId }, [
        el("span", { class: "fitcheck__q-num", text: q.num }),
        document.createTextNode(q.prompt)
      ]);
      var group = el("div", { class: "fitcheck__opts", role: "radiogroup", "aria-labelledby": labelId });
      q.options.forEach(function (opt) {
        var btn = el("button", {
          type: "button",
          class: "fitcheck__opt",
          role: "radio",
          "aria-checked": "false",
          "data-key": q.key,
          "data-value": opt.value,
          text: opt.label
        });
        btn.addEventListener("click", function () {
          answers[q.key] = opt.value;
          group.querySelectorAll(".fitcheck__opt").forEach(function (b) {
            var active = b === btn;
            b.classList.toggle("is-selected", active);
            b.setAttribute("aria-checked", active ? "true" : "false");
          });
          updateProgress(false);
        });
        group.appendChild(btn);
      });
      block.appendChild(lbl);
      block.appendChild(group);
      list.appendChild(block);
    });
    root.appendChild(list);

    var controls = el("div", { class: "fitcheck__controls" });
    var showBtn = el("button", { type: "button", class: "btn btn--primary", id: "fitcheck-show", text: "See my desk-body type" });
    var resetBtn = el("button", { type: "button", class: "picker__back", id: "fitcheck-reset", text: "Reset" });
    var msg = el("p", { class: "fitcheck__msg", id: "fitcheck-msg", "aria-live": "polite" });
    controls.appendChild(showBtn);
    controls.appendChild(resetBtn);
    controls.appendChild(msg);
    root.appendChild(controls);

    var resultBox = el("div", { class: "fitcheck__result", id: "fitcheck-result", "aria-live": "polite", hidden: "hidden" });
    root.appendChild(resultBox);

    function answeredCount() {
      var n = 0;
      QUESTIONS.forEach(function (q) { if (answers[q.key]) n++; });
      return n;
    }

    function updateProgress(fromButton) {
      var n = answeredCount();
      progressText.textContent = n === 5 ? "5 of 5 — your result is ready" : n + " of 5 answered";
      barFill.style.width = (n * 20) + "%";
      if (n === 5) {
        msg.textContent = "";
        renderResult();
      } else if (fromButton) {
        msg.textContent = "Please tap an answer for all 5 questions first.";
      }
    }

    function optionLabel(key, val) {
      for (var i = 0; i < QUESTIONS.length; i++) {
        if (QUESTIONS[i].key === key) {
          for (var j = 0; j < QUESTIONS[i].options.length; j++) {
            if (QUESTIONS[i].options[j].value === val) return QUESTIONS[i].options[j].label;
          }
        }
      }
      return val;
    }

    function buildTakeaway() {
      var moveLine = {
        desk: "Live weekday strength and mobility is coached on camera to unwind desk-day neck, shoulder, and lower-back stiffness at your pace.",
        sport: "Progressive weekday strength and movement prep helps your joints and stamina feel steadier for weekend badminton, cricket, or pickleball.",
        energy: "A fixed US-evening live room in Telugu and English turns inconsistent solo starts into a repeatable 30-minute weekday habit.",
        all: "Targeted weekday strength and mobility on Zoom addresses desk stiffness, weekend-game prep, and evening energy in one 30-minute routine."
      }[answers.friction];

      var foodName = FOOD_PREF_LABEL[answers.foodPref] || "your preferred";
      var hurdlePhrase = {
        separate: "without cooking separate “diet food” from your family",
        festivals: "flexing naturally around veg days, festivals, and weekend potlucks",
        "late-calls": "working around late work calls and afternoon energy dips",
        charts: "with zero rigid meal charts or calorie rules"
      }[answers.hurdle];

      var foodLine = "On food, your coach builds everyday habits around your " + foodName + " home cooking, " + hurdlePhrase + ".";
      if (answers.firstStep === "partner") {
        foodLine += " Two mats in one living room are welcome at the free Dec 19 class — ask about spouse/household options on your consult.";
      }
      return [moveLine, foodLine];
    }

    function buildPrefillPayload() {
      var z = ZONE_TIMES[answers.usZone];
      var goalMap = {
        desk: "form-mobility",
        sport: "form-mobility",
        energy: "plan-fit",
        all: "goals-review"
      };
      var noteParts = [
        "Desk-body quiz — Focus: " + optionLabel("friction", answers.friction),
        "Kitchen hurdle: " + optionLabel("hurdle", answers.hurdle),
        "Preferred first step: " + optionLabel("firstStep", answers.firstStep)
      ];
      return {
        usZone: answers.usZone,
        foodPref: answers.foodPref,
        goal: goalMap[answers.friction] || "plan-fit",
        note: noteParts.join(" · "),
        bannerText: "Pre-filled from your desk-body quiz (" + z.label + " · " + FOOD_PREF_LABEL[answers.foodPref] + "). Pick a date and time below — your form fields are ready.",
        bannerFormText: "Pre-filled from your desk-body quiz (" + z.label + " · " + FOOD_PREF_LABEL[answers.foodPref] + ") — review or edit your details below."
      };
    }

    function scrollAndPrefill(targetId) {
      if (typeof global.AROGYM_PREFILL_CONSULT === "function") {
        global.AROGYM_PREFILL_CONSULT(buildPrefillPayload());
      }
      var target = document.getElementById(targetId);
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    function renderResult() {
      var z = ZONE_TIMES[answers.usZone];
      var lines = buildTakeaway();
      resultBox.innerHTML = "";
      resultBox.appendChild(el("p", { class: "fitcheck__result-tag", text: "Your desk-body type: " + ({desk:"The Desk Sitter",sport:"The Weekend Player",energy:"The Restarter",all:"The All-Rounder"}[answers.friction] || "Desk body") }));
      resultBox.appendChild(el("p", {
        class: "fitcheck__times",
        text: "Live weeknights: " + z.live + " · Free Dec 19 class: " + z.taster
      }));
      resultBox.appendChild(el("p", { class: "fitcheck__takeaway", text: lines[0] }));
      resultBox.appendChild(el("p", { class: "fitcheck__takeaway", text: lines[1] }));

      var btnRow = el("div", { class: "btn-row", style: "margin-top:0.25rem" });
      if (answers.firstStep === "taster") {
        var tasterBtn = el("button", {
          type: "button",
          class: "btn btn--primary",
          id: "fitcheck-cta-primary",
          text: "Join the free Dec 19 class (" + z.taster + ")"
        });
        tasterBtn.addEventListener("click", function () { scrollAndPrefill("free-class"); });
        var consultSecondary = el("button", {
          type: "button",
          class: "btn btn--ghost",
          id: "fitcheck-cta-consult",
          text: "Send to your trainer for my first-week plan"
        });
        consultSecondary.addEventListener("click", function () { scrollAndPrefill("consult"); });
        btnRow.appendChild(tasterBtn);
        btnRow.appendChild(consultSecondary);
      } else {
        var consultBtn = el("button", {
          type: "button",
          class: "btn btn--primary",
          id: "fitcheck-cta-primary",
          text: "Send to your trainer for my first-week plan"
        });
        consultBtn.addEventListener("click", function () { scrollAndPrefill("consult"); });
        var tasterSecondary = el("button", {
          type: "button",
          class: "btn btn--ghost",
          id: "fitcheck-cta-taster",
          text: "Join the free Dec 19 class"
        });
        tasterSecondary.addEventListener("click", function () { scrollAndPrefill("free-class"); });
        btnRow.appendChild(consultBtn);
        btnRow.appendChild(tasterSecondary);
      }
      resultBox.appendChild(btnRow);
      resultBox.appendChild(el("p", {
        class: "fitcheck__note",
        text: "Book the free call below and your trainer will reply with your personal first-week plan, written by him, not a computer."
      }));
      resultBox.hidden = false;
    }

    showBtn.addEventListener("click", function () { updateProgress(true); });
    resetBtn.addEventListener("click", function () {
      Object.keys(answers).forEach(function (k) { answers[k] = ""; });
      root.querySelectorAll(".fitcheck__opt").forEach(function (b) {
        b.classList.remove("is-selected");
        b.setAttribute("aria-checked", "false");
      });
      resultBox.hidden = true;
      resultBox.innerHTML = "";
      msg.textContent = "";
      progressText.textContent = "0 of 5 answered";
      barFill.style.width = "0%";
    });
  }

  function bootAll() {
    boot();
    mountFitCheck();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootAll);
  } else {
    bootAll();
  }
})(typeof window !== "undefined" ? window : globalThis);
