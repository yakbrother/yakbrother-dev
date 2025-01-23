import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl } = Astro2.props;
  const prevUrl = currentPage > 1 ? `${baseUrl}${currentPage - 1}` : null;
  const nextUrl = currentPage < totalPages ? `${baseUrl}${currentPage + 1}` : null;
  return renderTemplate`${maybeRenderHead()}<nav class="pagination" aria-label="Pagination" data-astro-cid-d776pwuy> <div class="pagination-links" data-astro-cid-d776pwuy> ${prevUrl ? renderTemplate`<a${addAttribute(prevUrl, "href")} class="prev" aria-label="Previous page" data-astro-cid-d776pwuy>←&nbsp;Previous</a>` : renderTemplate`<span class="prev disabled" data-astro-cid-d776pwuy>←&nbsp;Previous</span>`} <span class="page-info" data-astro-cid-d776pwuy>
Page ${currentPage} of ${totalPages} </span> ${nextUrl ? renderTemplate`<a${addAttribute(nextUrl, "href")} class="next" aria-label="Next page" data-astro-cid-d776pwuy>Next&nbsp;→</a>` : renderTemplate`<span class="next disabled" data-astro-cid-d776pwuy>Next&nbsp;→</span>`} </div> </nav> `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/components/Pagination.astro", undefined);

export { $$Pagination as $ };
