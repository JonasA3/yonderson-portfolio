/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Bebas Neue"', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
/*Add comment for push*/
