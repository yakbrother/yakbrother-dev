import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DN43BK03.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Uses = createComponent(($$result, $$props, $$slots) => {
  const title = "Uses";
  const description = "Software, hardware, and tools I use daily.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-xstiyjza": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-xstiyjza> <h1 data-astro-cid-xstiyjza>${title}</h1> <p class="lead" data-astro-cid-xstiyjza>${description}</p> <section data-astro-cid-xstiyjza> <h2 data-astro-cid-xstiyjza>Development</h2> <ul data-astro-cid-xstiyjza> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Editor:</strong> VS Code with GitHub theme</li> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Terminal:</strong> iTerm2 with Oh My Zsh</li> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Font:</strong> Fira Code for coding</li> </ul> </section> <section data-astro-cid-xstiyjza> <h2 data-astro-cid-xstiyjza>Hardware</h2> <ul data-astro-cid-xstiyjza> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Computer:</strong> Your main computer</li> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Display:</strong> Your monitor setup</li> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Keyboard:</strong> Your keyboard</li> </ul> </section> <section data-astro-cid-xstiyjza> <h2 data-astro-cid-xstiyjza>Software</h2> <ul data-astro-cid-xstiyjza> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Browser:</strong> Your preferred browser</li> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Design:</strong> Your design tools</li> <li data-astro-cid-xstiyjza><strong data-astro-cid-xstiyjza>Notes:</strong> Your note-taking app</li> </ul> </section> </article> ` })} `;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/pages/uses.astro", void 0);

const $$file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/uses.astro";
const $$url = "/uses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Uses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
