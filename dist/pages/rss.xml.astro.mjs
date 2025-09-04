import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_rEaKjqh5.mjs';
import { C as CONFIG } from '../chunks/config_CSNZRVSe.mjs';
export { renderers } from '../renderers.mjs';

let posts = await getCollection("posts");

posts = posts
  .filter((post) => post.data.public)
  .sort(
    (a, b) =>
      b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf()
  );

const GET = () =>
  rss({
    title: CONFIG.site_title,
    description: CONFIG.description,
    site: CONFIG.site_url,
    items: posts.map((post) => ({
      link: `/posts/${post.data.slug}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
    })),
  });

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
