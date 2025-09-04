import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CkcjB6Tz.mjs';
export { renderers } from '../renderers.mjs';

const $$Resume = createComponent(($$result, $$props, $$slots) => {
  const currentTime = /* @__PURE__ */ new Date("2025-01-22T14:28:00+01:00");
  currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Resume", "description": "Download Resume for Timothy Eaton" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p><a class="button-primary" href="/Timothy_Eaton_Full_Stack_Resume.pdf">Download PDF</a></p> <p>Prefer another format? Email me at <a href="hello@timeaton.dev">hello@timeaton.dev</a> for alternate versions.</p> ` })}`;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/pages/resume.astro", void 0);

const $$file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/resume.astro";
const $$url = "/resume";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resume,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
