import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_EW2BMJSa.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CpdlEiaC.mjs';
import { $ as $$LinkCard } from '../../chunks/LinkCard_DqXxyJRF.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_DfxhIJnJ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.timeaton.dev/");
async function getStaticPaths({ paginate }) {
  const allFinds = await getCollection("finds");
  console.log("All finds:", allFinds);
  const finds = allFinds.filter((find) => find.data.public).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf());
  console.log("Public finds:", finds);
  return paginate(finds, { pageSize: 40 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const pageTitle = page.currentPage === 1 ? "Today I Found..." : `Today I Found... - Page ${page.currentPage}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-76vgkisn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="finds-container" data-astro-cid-76vgkisn> <h1 data-astro-cid-76vgkisn>Today I Found...</h1> <div class="finds-grid" data-astro-cid-76vgkisn> ${page.data.map((find) => renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "type": find.data.type, "title": find.data.title, "description": find.data.description, "link": find.data.link, "publicationDate": find.data.publicationDate, "data-astro-cid-76vgkisn": true })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": page.currentPage, "totalPages": page.lastPage, "baseUrl": "/finds/", "data-astro-cid-76vgkisn": true })} </div> ` })} `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/pages/finds/[page].astro", undefined);

const $$file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/finds/[page].astro";
const $$url = "/finds/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
