import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CpdlEiaC.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<h1>404</h1>\n<p>Page not found.</p>";

				const frontmatter = {"layout":"../layouts/Layout.astro","activeNav":"about","title":"About"};
				const file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/404.md";
				const url = "/404";
				function rawContent() {
					return "   \n                               \n                  \n              \n   \n\n<h1>404</h1>\n<p>Page not found.</p>\n";
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

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
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
