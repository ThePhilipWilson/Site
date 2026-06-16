import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import labBackLink from './src/integrations/lab-back-link.ts';

export default defineConfig({
  site: 'https://philipwilson.co.uk',
  integrations: [labBackLink(), sitemap()],
});
