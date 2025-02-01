import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

import playformCompress from "@playform/compress";

export default defineConfig({
  site: "https://www.timeaton.dev/",
  author: "Tim Eaton",
  base: "/",
  integrations: [
    sitemap(),
    mdx(),
    expressiveCode(),
    playformCompress(),
  ],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
  content: {
    collections: {
      posts: {
        schema: "src/content/config.ts#posts",
      },
      finds: {
        schema: "src/content/config.ts#finds",
      },
    },
  },
});