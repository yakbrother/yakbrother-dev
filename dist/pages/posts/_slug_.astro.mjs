import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_EW2BMJSa.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CpdlEiaC.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

const $$Astro = createAstro("https://www.timeaton.dev/");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "data-astro-cid-gysqo7gh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post" data-astro-cid-gysqo7gh> <header class="post-header" data-astro-cid-gysqo7gh> <h1 data-astro-cid-gysqo7gh>${post.data.title}</h1> <div class="post-meta" data-astro-cid-gysqo7gh> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")} data-astro-cid-gysqo7gh> ${formatDate(post.data.pubDate)} </time> ${post.data.category && renderTemplate`<span class="category" data-astro-cid-gysqo7gh>${post.data.category}</span>`} </div> ${post.data.description && renderTemplate`<p class="description" data-astro-cid-gysqo7gh>${post.data.description}</p>`} </header> <div class="content" data-astro-cid-gysqo7gh> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-gysqo7gh": true })} </div> </article> ` })} `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/pages/posts/[slug].astro", undefined);

const $$file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
