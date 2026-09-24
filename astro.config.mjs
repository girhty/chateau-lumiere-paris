import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/chateau-lumiere-paris/',
  output: 'static',
  site: 'https://chateau-lumiere-paris.com',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});