import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_EW2BMJSa.mjs';
import { C as CONFIG } from '../chunks/config_zK3Fm1ow.mjs';
export { renderers } from '../renderers.mjs';

let posts = await getCollection("posts");

posts = posts
  .filter(post => post.data.public)
  .sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf());

const GET = () =>
  rss({
    title: CONFIG.site_title,
    description: CONFIG.description,
    site: "https://glyptodon.dev",
    items: posts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
    })),
  });

// TODO: re design.

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
