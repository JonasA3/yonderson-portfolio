/* eslint-env node */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Bebas Neue"', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        accentMuted: 'var(--color-accent-muted)',
        focus: 'var(--color-focus)',
        border: 'var(--color-border)',
        skillBg: 'var(--color-skill-bg)',
      },
    },
  },
  plugins: [],
};
