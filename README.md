# 🌐 Yonderson – Developer Portfolio

Welcome to the codebase for [Yonderson.se](https://yonderson.se) — my personal portfolio site where I showcase my frontend development skills, highlight real-world coding techniques, and share projects in a clean, accessible, and user-first experience.

This site reflects my approach to modern web development — component-based architecture, strong typing, accessibility, and user preferences like dark mode and language selection.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (server-rendered mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript (strict mode)
- **UI Interactivity**: [Svelte](https://svelte.dev/) (used for toggles, dropdowns, scroll indicators)
- **Icons**: [Lucide](https://lucide.dev/) (via static or Svelte packages)
- **Code Quality**: ESLint + Prettier
- **Deployment**: [Netlify](https://www.netlify.com/)
- **CI/CD**: GitHub Actions for lint/format checks on push

---

## 🌍 Multilingual Support (EN/SV)

The site supports both English and Swedish via a cookie-based language preference. Language is:

- Stored in `localStorage` + `document.cookie`
- Read server-side via `Astro.cookies.get('lang')`
- Passed into layouts and components for dynamic translation using a centralized `t[lang]` object

A helper and middleware file are also included for future expansion (like automatic redirects, fallbacks, or localization headers).

---

## 🚀 Available Scripts

Use Node.js 22.19 or newer. With nvm, run `nvm install` and `nvm use`
to select the version in `.nvmrc`, then run `npm ci`.

The dependency overrides update Netlify's local function emulator to remove
the vulnerable `extract-zip` dependency and update `ipx`'s image processor
to a patched `sharp` release. Keep these until Netlify's dependency ranges
include the patched versions.

| Command             | Action                                  |
|---------------------|-----------------------------------------|
| `npm install`       | Install dependencies                    |
| `npm run dev`       | Start local dev server (with SSR)       |
| `npm run build`     | Build the site for production           |
| `npm run preview`   | Preview built site locally              |
| `npm run lint`      | Run ESLint for code quality             |
| `npm run format`    | Format code with Prettier               |

---

## ✨ Key Features

- 🌗 **Light/Dark mode toggle** — respects system preferences
- 🌍 **Multilingual interface** — cookie-based EN/SV switching
- 🎯 **Accessible dropdown navigation** — keyboard-friendly, ARIA-labeled
- 💬 **Interactive Svelte components** — smooth toggles, bounce hints, scroll awareness
- 🧠 **Well-structured content layer** — translations and CV data in TypeScript
- ⚙️ **Server-side rendering (SSR)** — required for cookie access + i18n

---

## 🚧 Work in Progress

Planned features and polish for future iterations:

- Project filtering and animations on the portfolio page
- Contact form with validation + API/email handling
- CMS or headless backend integration (e.g. for blog/projects)
- Route-based i18n support (`/en/`, `/sv/`) for SEO
- Unit tests or accessibility snapshot tests

---

## 📬 Contact

- Site: [yonderson.se](https://yonderson.se)
- GitHub: [github.com/JonasA3](https://github.com/JonasA3)
- LinkedIn: [Jonas Andersson](https://www.linkedin.com/in/jonas-andersson-57245727/)

---

Made with 💙 by Jonas Andersson  
*“With my sights set yonder.”*
