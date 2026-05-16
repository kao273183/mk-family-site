// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mcp.chenjundigital.com',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-tw',
        locales: {
          'zh-tw': 'zh-TW',
          en: 'en-US',
        },
      },
    }),
  ],
});
