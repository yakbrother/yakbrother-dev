import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BjO9BZzF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CpdlEiaC.mjs';
import { g as getCollection } from '../chunks/_astro_content_EW2BMJSa.mjs';
import { $ as $$LinkCard } from '../chunks/LinkCard_DqXxyJRF.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_DlwYoXLM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts", ({ data }) => {
    return data.public !== false;
  })).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf()).slice(0, 5);
  const finds = (await getCollection("finds", ({ data }) => {
    return data.public !== false;
  })).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf()).slice(0, 10);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero" data-astro-cid-j7pv25f6> <div id="hero-title" data-astro-cid-j7pv25f6> <img src="/assets/timeaton.png" alt="Avatar for Tim Eaton" data-astro-cid-j7pv25f6> <div style="font-weight: 500;" data-astro-cid-j7pv25f6> <h1 class="solway-regular" style="margin:0;" data-astro-cid-j7pv25f6>Timothy Eaton</h1> <div id="subtitle" data-astro-cid-j7pv25f6>He/Him | Senior Full-Stack Developer | Nyon, Switzerland</div> </div> </div> <p data-astro-cid-j7pv25f6>
With over 16 years of experience as a full-stack developer, I specialize in back-end development and user experience design. I build accessible, user-friendly tools and websites using PHP (Laravel), Node.js, React, Typescript, AWS, and various other technologies, whether I'm working from scratch or updating legacy code.
</p><p data-astro-cid-j7pv25f6>
Recently, I've been focusing on creating websites that help reduce both carbon footprints and operating costs. To learn more about sustainable web design, check out <a href="http://sustainable.dev" data-astro-cid-j7pv25f6>sustainable.dev</a>.
</p><p data-astro-cid-j7pv25f6>
I'm currently looking for a new job in the Geneva area. I'm also available for new projects and collaborations. Whether you need a full site or want to make your existing site more optimized, I'd love to discuss it with you. Email me to start a conversation!
</p> <ul id="action-links" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><a href="/resume" data-astro-cid-j7pv25f6>Resume</a></li> <li data-astro-cid-j7pv25f6><a href="mailto:tim@timeaton.dev" data-astro-cid-j7pv25f6>Email</a></li> <li data-astro-cid-j7pv25f6><a href="https://github.com/yakbrother" data-astro-cid-j7pv25f6>Github</a></li> <li data-astro-cid-j7pv25f6><a href="https://www.linkedin.com/in/tim-eaton-pluies/" data-astro-cid-j7pv25f6>LinkedIn</a></li> <li data-astro-cid-j7pv25f6><a href="https://bsky.app/profile/yakbrother.bsky.social" data-astro-cid-j7pv25f6>Bluesky</a></li> </ul> </section> <hr data-astro-cid-j7pv25f6> <section id="skills" data-astro-cid-j7pv25f6> <h2 class="solway-regular" data-astro-cid-j7pv25f6>Skills</h2> <ul class="pill-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>PHP</li> <li data-astro-cid-j7pv25f6>Javascript</li> <li data-astro-cid-j7pv25f6>HTML Standards</li> <li data-astro-cid-j7pv25f6>Modern CSS</li> <li data-astro-cid-j7pv25f6>Accessibility</li> <li data-astro-cid-j7pv25f6>User Experience</li> <li data-astro-cid-j7pv25f6>Design</li> <li data-astro-cid-j7pv25f6>Sustainable Energy Use</li> <li data-astro-cid-j7pv25f6>Laravel</li> <li data-astro-cid-j7pv25f6>Vue.js</li> <li data-astro-cid-j7pv25f6>Typescript</li> </ul> </section> <hr data-astro-cid-j7pv25f6> <section id="word" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Work Case Studies</h2> <div class="work-grid" data-astro-cid-j7pv25f6> <a href="/about" class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Online Agreement System</h3> <p data-astro-cid-j7pv25f6>Building and managing a contract management system.</p> </a> <a href="/now" class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Now</h3> <p data-astro-cid-j7pv25f6>See what I'm currently focused on.</p> </a> <a href="/resume" class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Designs Through the Years</h3> <p data-astro-cid-j7pv25f6>How my design style has changed for this site.</p> </a> </div> </section> <section id="recent-posts" class="posts-section" data-astro-cid-j7pv25f6> <h2 class="solway-regular" data-astro-cid-j7pv25f6>Latest Posts</h2> <div class="posts-grid" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.data.title, "description": post.data.description, "publicationDate": post.data.publicationDate, "category": post.data.category, "slug": post.data.slug, "data-astro-cid-j7pv25f6": true })}`)} <div style="display: flex; align-items: center; justify-content: center;" data-astro-cid-j7pv25f6> <a href="/posts" class="button-primary" data-astro-cid-j7pv25f6>View all posts →</a> </div> </div> </section> <section id="finds" data-astro-cid-j7pv25f6> <h2 class="solway-regular" data-astro-cid-j7pv25f6>Today I Found...</h2> <div class="finds-box" data-astro-cid-j7pv25f6> ${finds.map((entry) => renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "type": entry.data.type, "title": entry.data.title, "publicationDate": entry.data.publicationDate, "description": entry.data.description, "link": entry.data.link, "data-astro-cid-j7pv25f6": true })}`)} </div> </section>  ` })}`;
}, "/Users/smilodon/CascadeProjects/glyptodon/src/pages/index.astro", undefined);

const $$file = "/Users/smilodon/CascadeProjects/glyptodon/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
