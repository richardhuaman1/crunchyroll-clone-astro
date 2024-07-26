import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), playformCompress()],
});
