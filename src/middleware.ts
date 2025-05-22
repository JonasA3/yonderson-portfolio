/**
 * middleware.ts
 * -------------
 * Astro middleware that runs on every request before rendering.
 * 
 * Currently not required for the language functionality, since language is read
 * directly from `Astro.cookies` in page and layout components.
 * 
 * This file is retained as a placeholder and potential hook for:
 * 
 * 1. Logging or debugging request-level data (e.g. cookie values, user agents)
 * 2. Automatically setting a default `lang` cookie for first-time visitors
 * 3. Injecting `lang` into `Astro.locals` if global server-side access is needed later
 * 4. Expanding to request-aware features like geolocation, auth, or analytics
 *
 * Keeping this file commented but active is intentional for future-proofing and experimentation.
 */

import { defineMiddleware } from 'astro/middleware';
import { getLangFromRequest } from './utils/getLang';

export const onRequest = defineMiddleware((context, next) => {
  const lang = getLangFromRequest(context);
  // eslint-disable-next-line no-undef
  console.log('[middleware] lang =', lang);

  return next();
});
