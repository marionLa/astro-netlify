// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://deft-churros-b41b32.netlify.app',
  integrations: [mdx(), sitemap()],
  adapter: netlify(),
});