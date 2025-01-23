import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, description, publicationDate, category, slug } = Astro2.props;
  const date = new Date(publicationDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class="post-card" data-astro-cid-iyiqi2so> <a${addAttribute(`/posts/${slug}`, "href")} data-astro-cid-iyiqi2so> <div class="post-meta" data-astro-cid-iyiqi2so> <span class="category" data-astro-cid-iyiqi2so>${category}</span> <time${addAttribute(date.toISOString(), "datetime")} data-astro-cid-iyiqi2so>${formattedDate}</time> </div> <h3 class="post-title" data-astro-cid-iyiqi2so> ${title} </h3> <p class="post-description" data-astro-cid-iyiqi2so>${description}</p> </a> </article> `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/components/PostCard.astro", undefined);

export { $$PostCard as $ };
