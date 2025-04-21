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
        primary: '#1E3A8A',
        secondary: '#FBBF24',
        accent: '#F472B6',
      },
      spacing: {
        18: '4.5rem',
        72: '18rem',
      },
      screens: {
        '2xl': '1536px',
      },
      boxShadow: {
        '3xl': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
      },
      transitionDuration: {
        400: '400ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDelay: {
        200: '200ms',
      },
      rotate: {
        0: '0deg',
        45: '45deg',
        90: '90deg',
        180: '180deg',
      },
      scale: {
        0: '0',
        50: '.5',
        100: '1',
        150: '1.5',
        200: '2',
      },
      translate: {
        0: '0',
        '1/2': '50%',
        full: '100%',
        '-1/2': '-50%',
        '-full': '-100%',
      },
      inset: {
        0: '0',
        '1/2': '50%',
        full: '100%',
        '-1/2': '-50%',
        '-full': '-100%',
      },
      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      opacity: {
        0: '0',
        25: '0.25',
        50: '0.5',
        75: '0.75',
        100: '1',
      },
    },
  },
  plugins: [],
};
