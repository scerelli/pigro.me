import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pigro.me',
  integrations: [mdx(), sitemap(), sentry(), spotlightjs(), tailwind()]
});
