import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://glyptodon.dev',
  base: "/",
  integrations: [
    mdx(),
    sitemap(),
  ],
  content: {
    collections: {
      posts: {
        directory: 'src/content/posts',
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
});
