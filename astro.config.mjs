import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dr-shivani-arun.github.io',
  base: '/',
  integrations: [
    tailwind(),
    sitemap({
      // Customise priority and changefreq per page for better SEO
      serialize: (item) => {
        const priorities = {
          '/': 1.0,
          '/about': 0.8,
          '/experience': 0.8,
          '/research': 0.9,
          '/health-education': 0.9,
        };
        const changefreqs = {
          '/': 'monthly',
          '/about': 'monthly',
          '/experience': 'monthly',
          '/research': 'weekly',
          '/health-education': 'weekly',
        };
        const path = item.url.replace('https://dr-shivani-arun.github.io', '');
        return {
          ...item,
          priority: priorities[path] ?? 0.7,
          changefreq: changefreqs[path] ?? 'monthly',
        };
      },
    }),
  ],
});
