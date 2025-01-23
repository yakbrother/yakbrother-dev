import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as renderSlot } from './astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CpdlEiaC.mjs';
/* empty css                         */

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description, image } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": image, "data-astro-cid-3zbxo6iv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-3zbxo6iv> <h1 data-astro-cid-3zbxo6iv>${title}</h1> <hr data-astro-cid-3zbxo6iv> ${renderSlot($$result2, $$slots["default"])} </article> ` })} `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/layouts/PageLayout.astro", undefined);

export { $$PageLayout as $ };
