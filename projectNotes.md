🧩 **Cookie Language Preference – Debug + Solution**
Issue:
Language selection was stored using document.cookie, but server-rendered .astro components were not picking up the lang cookie on reload. Despite the cookie appearing in the browser, Astro.cookies.get('lang') returned undefined.

Cause:
By default, Astro prerenders pages as static HTML (output: 'static'). Prerendered pages do not have access to runtime request data like cookies, headers, or query params.

Solution:
Switched the project to server-rendered mode by:

Adding export const prerender = false; to any page using Astro.cookies.get()

Later updating astro.config.mjs with:

```
export default defineConfig({
  output: 'server',
});
```

**Bonus Fixes:**

Added a helper getLangFromRequest(context) in utils/ for reusable cookie logic

Kept middleware.ts with logging and fallback potential for future scaling

Used client:only on Svelte components relying on window to avoid hydration mismatch

Confirmed cookie appears in DevTools > Network > Request Headers > Cookie and is readable server-side

Lesson Learned:
Astro’s default static rendering doesn’t support request-aware logic. To read cookies, you must opt into server-rendered mode. Middleware and helpers can simplify logic reuse across pages and future features like auth or geolocation.
