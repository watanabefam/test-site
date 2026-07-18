import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://watanabefam.github.io/test-site',
  output: 'static',
  integrations: [sitemap(), tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
