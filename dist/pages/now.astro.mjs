import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CkcjB6Tz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$Now = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Now;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Now", "description": "What I'm currently working on and focused on right now" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h2>23 January, 2025</h2> <p>Recently, my wife and I relocated from Paris to a small town near Geneva, Switzerland, and I've been focused on recovering from my recent surgeries and continuing physical therapy.</p> <p>I'm currently in job search mode, but have been occupying my time with a few projects:</p> <ul> <li>Redesigning this site with <a href="https://utopia.fyi">Utopian CSS</a> principles (no more media queries!), using <code>minmax()</code> and <code>clamp()</code> to resize text, grids, and elements fluidly.</li> <li>Taking new courses on React and Node.js to stay on track with the latest updates.</li> <li>Creating open source themes for <a href="http://www.astro.build">Astro</a>, which I hope to release soon.</li> </ul> </section> ` })}`;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/pages/now.astro", void 0);

const $$file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/now.astro";
const $$url = "/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Now,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
