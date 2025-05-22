import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import svelte from '@astrojs/svelte';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    edge: false,
    split: false,
  }),
  middleware: true,
  integrations: [
    tailwind({
      configFile: './tailwind.config.js',
      applyBaseStyles: true,
      nesting: true,
    }),
    svelte(),
  ],
});
