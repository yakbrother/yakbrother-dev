import { b as createAstro, c as createComponent, a as renderTemplate, i as renderHead, d as addAttribute, m as maybeRenderHead, j as renderScript, r as renderComponent, e as renderSlot } from './astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { C as CONFIG } from './config_CSNZRVSe.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://www.timeaton.dev/");
const $$HeadContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeadContent;
  const { title = CONFIG.site_title, description = CONFIG.description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<head><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="timeaton.dev"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#ffe6d8"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Miriam+Libre:wght@400..700&family=Radio+Canada:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta name="twitter:creator" content="@yakbrother"><meta name="twitter:image"', '><!-- RSS Link --><link rel="alternate" href="/rss.xml" type="application/rss+xml"', `><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- Structured Data: BlogPosting --><script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	"headline": "{title}",
	"description": "{description}",
	"image": [
		"{image ? image : '/og-default.jpg'}"
	],
	"author": {
		"@type": "Person",
		"name": "Tim Eaton"
	},
	"publisher": {
		"@type": "Organization",
		"name": "timeaton.dev",
		"logo": {
			"@type": "ImageObject",
			"url": "/favicon-96x96.png"
		}
	},
	"mainEntityOfPage": {
		"@type": "WebPage",
		"@id": "{Astro.url}"
	}
}
	<\/script>`, "</head>"])), addAttribute(Astro2.generator, "content"), `Tim Eaton | ${title}`, addAttribute(`Tim Eaton | ${title}`, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(`Tim Eaton | ${title}`, "content"), addAttribute(description, "content"), addAttribute(new URL("/og-default.jpg", Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(`Tim Eaton | ${title}`, "content"), addAttribute(description, "content"), addAttribute(new URL("/og-default.jpg", Astro2.url), "content"), addAttribute(CONFIG.site_title, "title"), renderHead());
}, "/Users/smilodon/Projects/timeaton-dev-4/src/components/HeadContent.astro", void 0);

const $$Astro$2 = createAstro("https://www.timeaton.dev/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { activeNav } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> <a href="/" id="home" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="12" cy="12" r="3" data-astro-cid-3ef6ksr2></circle> <path d="M18 12c0-3.3-2.7-6-6-6s-6 2.7-6 6" data-astro-cid-3ef6ksr2></path> <path d="M15 9c0-1.7-1.3-3-3-3S9 7.3 9 9" data-astro-cid-3ef6ksr2></path> <path d="M21 12c0-5-4-9-9-9s-9 4-9 9" data-astro-cid-3ef6ksr2></path> <path d="M15.5 15.5l2 2" data-astro-cid-3ef6ksr2></path> <path d="M8.5 15.5l-2 2" data-astro-cid-3ef6ksr2></path> <path d="M12 15v3" data-astro-cid-3ef6ksr2></path> </svg> <span data-astro-cid-3ef6ksr2>&gt;&nbsp;Home</span> </a> </div> <nav class="nav" data-astro-cid-3ef6ksr2> <ul class="menu" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/posts/" data-astro-cid-3ef6ksr2>
Blog
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/finds/" data-astro-cid-3ef6ksr2>
Finds
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/about/" data-astro-cid-3ef6ksr2>
About
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/now/" data-astro-cid-3ef6ksr2>
Now
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/uses/" data-astro-cid-3ef6ksr2>
Uses
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/projects/" data-astro-cid-3ef6ksr2>
Projects
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/resume/" data-astro-cid-3ef6ksr2>
Resume
</a> </li> </ul> <div class="nav-right" data-astro-cid-3ef6ksr2> <a href="/rss.xml" title="RSS Feed" class="rss-link" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="M4 11a9 9 0 0 1 9 9" data-astro-cid-3ef6ksr2></path> <path d="M4 4a16 16 0 0 1 16 16" data-astro-cid-3ef6ksr2></path> <circle cx="5" cy="19" r="1" data-astro-cid-3ef6ksr2></circle> </svg> <span class="sr-only" data-astro-cid-3ef6ksr2>RSS Feed</span> </a> <button class="hamburger" aria-label="Toggle Menu" data-astro-cid-3ef6ksr2> <span class="line" data-astro-cid-3ef6ksr2></span> <span class="line" data-astro-cid-3ef6ksr2></span> <span class="line" data-astro-cid-3ef6ksr2></span> </button> </div> </nav> </header> ${renderScript($$result, "/Users/smilodon/Projects/timeaton-dev-4/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://www.timeaton.dev/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Timothy Eaton. All rights reserved. This design is built with <a href="https://astro.build" data-astro-cid-sz7xmlte>Astro</a>, and you are free to <a href="https://github.com/yakbrother/glyptodon" data-astro-cid-sz7xmlte>download</a> and use my code for your own personal or commercial projects.</p> </div> </footer> `;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = CONFIG.site_title, description = CONFIG.description, image = "/og-default.jpg" } = Astro2.props;
  return renderTemplate`<html lang="en-us"> <head>${renderComponent($$result, "HeadContent", $$HeadContent, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
