import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CkcjB6Tz.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<h1 id=\"404\">404</h1>\n<hr>\n<p>Page not found!</p>";

				const frontmatter = {"layout":"../layouts/PageLayout.astro","title":"404"};
				const file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/404.md";
				const url = "/404";
				function rawContent() {
					return "   \n                                   \n            \n   \n\n# 404\n\n---\n\nPage not found!\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"404","text":"404"}];
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
