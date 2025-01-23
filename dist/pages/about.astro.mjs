import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_Cg10JomW.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<p>Welcome! I created this site to showcase my work as I explore new opportunities in Switzerland, and to share my ongoing projects and thoughts about design and development. I’ve been a computer programmer since childhood, when my dad taught me how to build motherboards and play with MSDOS scripts and Visual Basic. Since then, I’ve worked as a professional developer for almost 20 years.</p>\n<p>Code has as almost mystical sense of fun for me, whether I’m designing something or helping someone else realize their idea. For this reason I keep ending up coding “the hard way”. I like writing my own HTML, CSS, and Javascript, not using libraries or frameworks - and I like using Vim or Sublime Text (or Windows Notebook in the old days) instead of an IDE. I’m not a purist by any means - I just love a beautiful HTML document. There’s something deeply satisfying about crafting clean, efficient code that works exactly as intended, without any extra layers.</p>\n<p>Beyond coding, both music and travel shape my life. I love making friends across cultures and learning their stories, especially when it involves playing my mandolin or ukulele around a campfire with new friends. This love of different perspectives eventually led me to Switzerland, where I now live with my brilliant wife - and two cats (whose evil-to-cuteness ratio fluctuates dramatically from moment to moment).</p>\n<p>I’m always open to chat with other programmers, designers, and musicians. If you happen to live in the Nyon/Lausanne area, and would like to meet up, I’d be happy to make a new friend! Email me at <a href=\"mailto:tim@timeaton.dev\"></a><a href=\"mailto:tim@timeaton.dev\">tim@timeaton.dev</a>.</p>";

				const frontmatter = {"layout":"../layouts/PageLayout.astro","activeNav":"about","title":"About","description":"About Timothy Eaton - Developer and Designer"};
				const file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \n                                   \n                  \n              \n                                                           \n   \n\nWelcome! I created this site to showcase my work as I explore new opportunities in Switzerland, and to share my ongoing projects and thoughts about design and development. I've been a computer programmer since childhood, when my dad taught me how to build motherboards and play with MSDOS scripts and Visual Basic. Since then, I've worked as a professional developer for almost 20 years.\n\nCode has as almost mystical sense of fun for me, whether I'm designing something or helping someone else realize their idea. For this reason I keep ending up coding \"the hard way\". I like writing my own HTML, CSS, and Javascript, not using libraries or frameworks - and I like using Vim or Sublime Text (or Windows Notebook in the old days) instead of an IDE. I'm not a purist by any means - I just love a beautiful HTML document. There's something deeply satisfying about crafting clean, efficient code that works exactly as intended, without any extra layers.\n\nBeyond coding, both music and travel shape my life. I love making friends across cultures and learning their stories, especially when it involves playing my mandolin or ukulele around a campfire with new friends. This love of different perspectives eventually led me to Switzerland, where I now live with my brilliant wife - and two cats (whose evil-to-cuteness ratio fluctuates dramatically from moment to moment).\n\nI'm always open to chat with other programmers, designers, and musicians. If you happen to live in the Nyon/Lausanne area, and would like to meet up, I'd be happy to make a new friend! Email me at <a href=\"mailto:tim@timeaton.dev\">tim@timeaton.dev</a>.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PageLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
