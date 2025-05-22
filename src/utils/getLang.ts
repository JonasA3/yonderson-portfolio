/**
 * getLangFromRequest
 * ------------------
 * Utility function to consistently extract the user's language preference
 * from the Astro request context (`Astro` or `APIContext`).
 *
 * Currently not used directly, since language is read via `Astro.cookies.get()` 
 * in each .astro file where needed. However, this function is retained for:
 * 
 * 1. Centralizing fallback logic (e.g. defaulting to 'en')
 * 2. Making future refactors easier if lang logic becomes more complex
 * 3. Enabling consistent use in pages, middleware, or server endpoints
 *
 * Having this function helps keep the codebase DRY and flexible as language features evolve.
 */

// src/utils/getLang.ts
import type { APIContext } from 'astro';

export function getLangFromRequest(context: APIContext): 'en' | 'sv' {
  return context.cookies.get('lang')?.value === 'sv' ? 'sv' : 'en';
}
