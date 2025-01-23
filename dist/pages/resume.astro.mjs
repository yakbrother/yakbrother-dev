import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_Cg10JomW.mjs';
export { renderers } from '../renderers.mjs';

const $$Resume = createComponent(($$result, $$props, $$slots) => {
  const currentTime = /* @__PURE__ */ new Date("2025-01-22T14:28:00+01:00");
  currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Resume", "description": "Download Resume for Timothy Eaton" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>My Resume</h1> <hr> <p><a class="button-primary" href="https://timeaton.dev/resume-timothy-eaton.pdf">Download PDF</a></p> <p>Prefer another format? Email me at <a href="tim@timeaton.dev">tim@timeaton.dev</a> for alternate versions.</p> ` })}`;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/pages/resume.astro", undefined);

const $$file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/resume.astro";
const $$url = "/resume";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resume,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
