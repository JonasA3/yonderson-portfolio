# Project Notes

This file logs technical challenges, solutions, and design decisions made during development. It’s meant to serve as a learning archive and reference for future projects.

---

## 🧩 ISSUE: Language cookie not available in Astro server render
**Date:** 2025-05-24  
**Component / Area:** index.astro, layout.astro, Astro SSR

### ❓ Problem
The language selection was stored in `document.cookie`, and the cookie appeared in the browser (DevTools → Application → Cookies). However, Astro's server-side code (using `Astro.cookies.get('lang')`) was returning `undefined`, even after page reload or full browser restart.

### 🔍 Investigation
- Verified that the `lang` cookie was correctly written and persisted in the browser.
- Checked request headers in DevTools → Network tab → Request → Headers and confirmed the cookie was not sent with the request.
- Tried extending the delay before `location.reload()` to give the browser time to store the cookie.
- Found a warning in Astro logs:
- Astro.request.headers is not available on prerendered pages
- Realized that the default `output: "static"` mode in Astro was preventing cookies and headers from being available.

### ✅ Solution
- Set `export const prerender = false;` in `index.astro` to force Astro to render the page on every request.
- Later updated the global config (`astro.config.mjs`) with:
```
export default defineConfig({
  output: 'server',
});
```
This enabled all pages to access cookies, headers, and dynamic request data.

Added a helper function getLangFromRequest() and middleware for future use (even if unused in v1.0).

### 📚 What I Learned
Astro defaults to static output, which means request-specific data like cookies or headers won’t be available unless explicitly rendered server-side. Middleware is optional but helpful for debugging and future features. When debugging SSR vs client mismatches, always check whether you're in static or server mode.

### ✅ DECISION: Server rendering mode for multilingual features
Date: 2025-05-24
Reason: Needed access to cookies for detecting and applying user language preference.

Switched to output: 'server' to make cookies available and allow server-aware components. Pages now access lang directly using Astro.cookies.get() or a shared helper.

### 🔄 NEXT TIME / TODO
- Investigate Astro.locals for setting lang globally via middleware
- Consider adding route-based i18n (/en/, /sv/) for improved SEO
- Add fallback UI for language switching if cookies are blocked