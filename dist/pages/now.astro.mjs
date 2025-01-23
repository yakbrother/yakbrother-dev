import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_Cg10JomW.mjs';
export { renderers } from '../renderers.mjs';

const $$Now = createComponent(($$result, $$props, $$slots) => {
  const currentTime = /* @__PURE__ */ new Date("2025-01-22T14:28:00+01:00");
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Now", "description": "What I'm currently working on and focused on right now" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Now</h1> <hr> <p>Last updated: ${formattedDate}</p> <section> <h2>What I'm focused on right now:</h2> <ul> <li>Building this personal website</li> <li>Learning and growing</li> <li>Working on exciting projects</li> </ul> </section> ` })}`;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/pages/now.astro", undefined);

const $$file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/now.astro";
const $$url = "/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Now,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
