import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, f as renderHead, m as maybeRenderHead, g as renderScript, a as renderComponent, e as renderSlot } from './astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { C as CONFIG } from './config_zK3Fm1ow.mjs';

const $$Astro$3 = createAstro("https://www.timeaton.dev/");
const $$HeadContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeadContent;
  const { title = CONFIG.site_title, description = CONFIG.description, image = "/og-default.jpg" } = Astro2.props;
  return renderTemplate`<head><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#ffe6d8"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta name="twitter:creator" content="@yakbrother"><meta name="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- RSS Link --><link rel="alternate" href="/rss.xml" type="application/rss+xml"${addAttribute(CONFIG.site_title, "title")}><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml">${renderHead()}</head>`;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/components/HeadContent.astro", undefined);

const $$Astro$2 = createAstro("https://www.timeaton.dev/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { activeNav } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" baseProfile="tiny" version="1.2" viewBox="0 0 24 24" id="spiral" data-astro-cid-3ef6ksr2> <path fill="#ffe6d8" d="M12 11.8c1-.4.7-1.8 0-2.4-1.1-.9-2.7-.4-3.4.8-1.5 2.4.9 5 3.4 4.9 2.7-.2 4.3-2.9 3.7-5.4-.7-3-3.9-4.5-6.7-3.6-2.6.8-4.2 3.5-4 6.2.3 3 2.6 5.4 5.5 5.9 2.8.5 5.7-.8 7.2-3.2.7-1.1 1.2-2.4 1.2-3.8 0-.5.5-1 1.1-.9.8 0 1 .8.9 1.4-.4 4.7-4.5 8.6-9.3 8.6-5.9 0-10.5-6.2-8-11.8C6.1 3.1 13.9 2 16.9 7.3c1.5 2.5 1.2 5.8-.9 7.9-2 2-5.3 2.4-7.7.7-2.2-1.6-2.9-4.9-1.1-7.2 1.7-2.3 5.5-2.4 7 .2 1.1 1.9 0 5.2-2.5 4.9-1.6 0-3-1.7-2.1-3.2.6-.9 1.9-.6 2.3.1.2.8.1 1.1.1 1.1z" data-astro-cid-3ef6ksr2></path> </svg> <span data-astro-cid-3ef6ksr2><a href="/" id="home" data-astro-cid-3ef6ksr2>
&nbsp;&gt;&nbsp;Home
</a></span> </div> <nav class="nav" data-astro-cid-3ef6ksr2> <button class="hamburger" aria-label="Toggle Menu" data-astro-cid-3ef6ksr2> <span class="line" data-astro-cid-3ef6ksr2></span> <span class="line" data-astro-cid-3ef6ksr2></span> <span class="line" data-astro-cid-3ef6ksr2></span> </button> <ul class="menu" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/now/"${addAttribute(activeNav === "now" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
Now
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/resume/"${addAttribute(activeNav === "resume" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
Resume
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/about/"${addAttribute(activeNav === "about" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
About
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/posts/"${addAttribute(activeNav === "posts" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
Posts
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/found/"${addAttribute(activeNav === "found" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
Found
</a> </li> </ul> </nav> </header> ${renderScript($$result, "/Users/smilodon/CascadeProjects/glyptodon/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/components/Header.astro", undefined);

const $$Astro$1 = createAstro("https://www.timeaton.dev/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Timothy Eaton. All rights reserved. This design is built with <a href="https://astro.build" data-astro-cid-sz7xmlte>Astro</a>, and you are free to download and use my code for your own personal or commercial projects.</p> </div> </footer> `;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/components/Footer.astro", undefined);

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = CONFIG.site_title, description = CONFIG.description, image = "/og-default.jpg" } = Astro2.props;
  return renderTemplate`<html lang="en-us"> <head>${renderComponent($$result, "HeadContent", $$HeadContent, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
