import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_EW2BMJSa.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CpdlEiaC.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_DlwYoXLM.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_DfxhIJnJ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.timeaton.dev/");
async function getStaticPaths({ paginate }) {
  const posts = (await getCollection("posts")).filter((post) => post.data.public).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const pageTitle = page.currentPage === 1 ? "Blog Posts" : `Blog Posts - Page ${page.currentPage}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-6pawvvaf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="posts-container" data-astro-cid-6pawvvaf> <h1 data-astro-cid-6pawvvaf>Blog Posts</h1> <div class="posts-grid" data-astro-cid-6pawvvaf> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "category": post.data.category, "title": post.data.title, "description": post.data.description, "publicationDate": post.data.publicationDate, "slug": post.data.slug, "data-astro-cid-6pawvvaf": true })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page, "data-astro-cid-6pawvvaf": true })} </div> ` })} `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/pages/posts/[page].astro", undefined);

const $$file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/posts/[page].astro";
const $$url = "/posts/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
