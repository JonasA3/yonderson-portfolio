import { defineConfig } from 'astro/config';
import tailwind from 'tailwindcss';
import nesting from 'tailwindcss/nesting/index.js';
import autoprefixer from 'autoprefixer';
import netlify from '@astrojs/netlify';

import svelte from '@astrojs/svelte';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    devFeatures: {
      environmentVariables: false,
      images: true,
      edgeFunctions: false,
    },
  }),
  compressHTML: true,
  integrations: [svelte()],
  vite: {
    css: {
      postcss: {
        plugins: [nesting(), tailwind('./tailwind.config.js'), autoprefixer()],
      },
    },
  },
});
