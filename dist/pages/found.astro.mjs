import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_EW2BMJSa.mjs';
import { $ as $$Layout } from '../chunks/Layout_CpdlEiaC.mjs';
import { $ as $$LinkCard } from '../chunks/LinkCard_DqXxyJRF.mjs';
export { renderers } from '../renderers.mjs';

const $$Found = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("finds", ({ data }) => {
    return !data.public ;
  });
  const sortedPosts = posts.sort(
    (a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TIL", "description": "Read the latest interesting things I learned on the interwebs." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1>Today I learned...</h1> <div> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "title": post.data.title, "link": post.data.link, "description": post.data.description, "type": post.data.type, "publicationDate": post.data.publicationDate })}`)} </div> </div> ` })}`;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/pages/found.astro", undefined);
const $$file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/found.astro";
const $$url = "/found";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Found,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
