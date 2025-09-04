import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DN43BK03.mjs';
import { $ as $$LinkCard } from '../chunks/LinkCard_Bfw3OloA.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const title = "Projects";
  const description = "Current and past projects I've worked on.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-aid3sr62> <h1 data-astro-cid-aid3sr62>${title}</h1> <p class="lead" data-astro-cid-aid3sr62>${description}</p> <section class="projects-grid" data-astro-cid-aid3sr62> ${renderComponent($$result2, "LinkCard", $$LinkCard, { "href": "https://github.com/yakbrother/project-name", "title": "Project Name", "description": "Description of the project", "data-astro-cid-aid3sr62": true })} <!-- Add more projects as needed --> </section> </article> ` })} `;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/pages/projects.astro", void 0);

const $$file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
