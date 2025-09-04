import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_rEaKjqh5.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BwVOg8Dv.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DN43BK03.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_D5fMfJVW.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_BxsOvy7c.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-6pawvvaf": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-content" data-astro-cid-6pawvvaf> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "path": ["posts"], "data-astro-cid-6pawvvaf": true })} <h1 data-astro-cid-6pawvvaf>Blog Posts</h1> <hr data-astro-cid-6pawvvaf> <div class="posts-grid" data-astro-cid-6pawvvaf> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "category": post.data.category, "title": post.data.title, "description": post.data.description, "publicationDate": post.data.publicationDate, "slug": post.data.slug, "data-astro-cid-6pawvvaf": true })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": page.currentPage, "totalPages": page.lastPage, "baseUrl": "/posts/", "data-astro-cid-6pawvvaf": true })} </div> ` })} `;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/pages/posts/[page].astro", void 0);

const $$file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/posts/[page].astro";
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
