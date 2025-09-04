import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_DN43BK03.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_BwVOg8Dv.mjs';

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description, image } = Astro2.props;
  const pathname = new URL(Astro2.request.url).pathname;
  const path = pathname.split("/").filter((segment) => segment !== "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content"> ${path.length > 0 && renderTemplate`${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "path": path })}`} ${title && renderTemplate`<h1>${title}</h1>`} ${title && renderTemplate`<hr>`} ${renderSlot($$result2, $$slots["default"])} </article> ` })}`;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
