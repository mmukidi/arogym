/* AROGYM v9 tabs: one panel at a time, #hash deep links, WAI-ARIA tablist keyboard support.
   Without JS every panel shows as one long page. */
(function () {
  "use strict";
  var bar = document.querySelector(".tabs");
  if (!bar) return;
  var list = bar.querySelector('[role="tablist"]');
  var tabs = Array.prototype.slice.call(bar.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute("aria-controls")); });
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var current = -1;

  function panelIndexFor(id) {
    if (!id) return -1;
    var el = document.getElementById(id);
    if (!el) return -1;
    var p = el.closest(".tabpanel");
    return p ? panels.indexOf(p) : -1;
  }

  function activate(i) {
    if (i === current) return;
    current = i;
    tabs.forEach(function (t, j) {
      var on = j === i;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle("is-active", on);
      panels[j].classList.toggle("is-active", on);
      panels[j].hidden = !on;
    });
    // keep the active tab visible in the scrollable bar (horizontal only)
    var t = tabs[i], left = t.offsetLeft - 16, right = t.offsetLeft + t.offsetWidth + 16;
    if (left < list.scrollLeft) list.scrollLeft = left;
    else if (right > list.scrollLeft + list.clientWidth) list.scrollLeft = right - list.clientWidth;
    document.dispatchEvent(new CustomEvent("arogym:tab", { detail: { id: t.hash.slice(1) } }));
  }

  // where the bar's bottom edge sits once it is stuck (sticky top + its height)
  function barBottom() { return (parseFloat(getComputedStyle(bar).top) || 0) + bar.offsetHeight; }

  function scrollToEl(el, onlyIfAbove) {
    var top = el.getBoundingClientRect().top;
    var offset = barBottom() + (el.classList.contains("tabpanel") ? 0 : 8);
    if (onlyIfAbove && top >= offset - 1) return;
    window.scrollTo({ top: Math.max(0, top + window.pageYOffset - offset), behavior: reduce ? "auto" : "smooth" });
  }

  function go(id, mode) {
    var i = panelIndexFor(id);
    if (i < 0) return false;
    activate(i);
    var target = document.getElementById(id);
    var isPanelTop = target.classList.contains("anchor-alias") || target === panels[i].querySelector("section.section:not([hidden])") || tabs[i].hash === "#" + id;
    window.requestAnimationFrame(function () {
      if (mode === "tab") scrollToEl(panels[i], true);
      else scrollToEl(isPanelTop ? panels[i] : target, false);
    });
    return true;
  }

  // Any in-page link (tabs, hero CTA, footer, quiz) opens the right panel
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = decodeURIComponent(a.getAttribute("href").slice(1));
    var isTab = a.getAttribute("role") === "tab";
    if (go(id, isTab ? "tab" : "link")) {
      e.preventDefault();
      if (location.hash !== "#" + id) history.pushState(null, "", "#" + id);
      if (isTab) a.focus({ preventScroll: true });
    }
  });

  // Arrow keys / Home / End move between tabs and open them
  list.addEventListener("keydown", function (e) {
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var n = tabs.length, next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); tabs[i].click(); return; }
    if (next < 0) return;
    e.preventDefault();
    tabs[next].focus({ preventScroll: true });
    var id = tabs[next].hash.slice(1);
    go(id, "tab");
    history.replaceState(null, "", "#" + id);
  });

  window.addEventListener("popstate", function () {
    if (!go(decodeURIComponent(location.hash.slice(1)), "link")) { activate(0); }
  });
  window.addEventListener("hashchange", function () { go(decodeURIComponent(location.hash.slice(1)), "link"); });

  // Initial state: deep link if the hash points inside a panel, else the first tab
  if (!go(decodeURIComponent(location.hash.slice(1)), "link")) activate(0);
})();
