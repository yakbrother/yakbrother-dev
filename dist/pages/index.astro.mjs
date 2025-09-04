import {
  b as createAstro,
  c as createComponent,
  r as renderComponent,
  a as renderTemplate,
  m as maybeRenderHead,
} from "../chunks/astro/server_N4R4p_6q.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../chunks/Layout_DN43BK03.mjs";
import { g as getCollection } from "../chunks/_astro_content_rEaKjqh5.mjs";
import { $ as $$LinkCard } from "../chunks/LinkCard_Bfw3OloA.mjs";
import { $ as $$PostCard } from "../chunks/PostCard_D5fMfJVW.mjs";
/* empty css                                 */
export { renderers } from "../renderers.mjs";

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$Index = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Index;
    const posts = (
      await getCollection("posts", ({ data }) => {
        return data.public !== false;
      })
    )
      .sort(
        (a, b) =>
          b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf(),
      )
      .slice(0, 5);
    const finds = (
      await getCollection("finds", ({ data }) => {
        return data.public !== false;
      })
    )
      .sort(
        (a, b) =>
          b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf(),
      )
      .slice(0, 10);
    return renderTemplate`${renderComponent(
      $$result,
      "Layout",
      $$Layout,
      { title: "Home", "data-astro-cid-j7pv25f6": true },
      {
        default: async (
          $$result2,
        ) => renderTemplate` ${maybeRenderHead()}<section id="hero" data-astro-cid-j7pv25f6> <div id="hero-title" data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <source srcset="/tim_avatar.webp" type="image/webp" data-astro-cid-j7pv25f6> <img src="/tim_avatar.jpg" alt="Avatar for Tim Eaton" width="200" height="200" loading="lazy" class="avatar-image" data-astro-cid-j7pv25f6> </picture> <div style="font-weight: 500;" data-astro-cid-j7pv25f6> <h1 style="margin:0;" data-astro-cid-j7pv25f6>Timothy Eaton</h1> <div id="subtitle" data-astro-cid-j7pv25f6>He/Him | Senior Full-Stack Developer | Nyon, Switzerland</div> </div> </div> <p data-astro-cid-j7pv25f6>
With over 18 years of experience as a full-stack developer, I specialize in back-end development and user experience design. I build accessible, user-friendly tools and websites using Python, PHP (Laravel), Go, Node.js, React, Typescript, AWS, and various other technologies, whether I'm working from scratch or updating legacy code.
</p><p data-astro-cid-j7pv25f6>
Recently, I've been focused on two things:
</p><ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Creating websites that help reduce both carbon footprints and operating costs. To learn more about sustainable web design, check out <a href="https://the-sustainable.dev/" data-astro-cid-j7pv25f6>sustainable.dev</a>.
</li><li data-astro-cid-j7pv25f6>MCP server creation, agent training, data engineering, and AI development.</li> </ul> <p data-astro-cid-j7pv25f6>
I'm currently looking for a new job in the Geneva area. I'm also available for new projects and collaborations. Whether you need a full site or want to make your existing site more optimized, I'd love to discuss it with you. Email me to start a conversation!
</p> <ul id="action-links" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><a href="/resume" data-astro-cid-j7pv25f6>Resume</a></li> <li data-astro-cid-j7pv25f6><a href="mailto:hello@timeaton.dev" data-astro-cid-j7pv25f6>Email</a></li> <li data-astro-cid-j7pv25f6><a href="https://github.com/yakbrother" data-astro-cid-j7pv25f6>Github</a></li> <li data-astro-cid-j7pv25f6><a href="https://www.linkedin.com/in/tim-eaton-pluies/" data-astro-cid-j7pv25f6>LinkedIn</a></li> <li data-astro-cid-j7pv25f6><a href="https://bsky.app/profile/yakbrother.bsky.social" data-astro-cid-j7pv25f6>Bluesky</a></li> </ul> </section> <hr data-astro-cid-j7pv25f6> <section id="recent-work" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Recent work</h2> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Working with Ranova.ai in Python and Typescript - on the data pipeline, app, and API sides.</li> <li data-astro-cid-j7pv25f6>Designing a (secret) Swift-based Mac app.</li> <li data-astro-cid-j7pv25f6>Working on a CLI for folder cleanup called <a href="https://github.com/yakbrother/folder-elf-cli" data-astro-cid-j7pv25f6>FolderElf</a>, now in it's first release.</li> <li data-astro-cid-j7pv25f6>Created <a href="https://github.com/yakbrother/yak-a11y" data-astro-cid-j7pv25f6>Yak-A11y</a>, an npm plugin to test for web accessibility and give friendly, helpful feedback.</li> <li data-astro-cid-j7pv25f6>Redesigned <a href="https://mostlytrue.life" data-astro-cid-j7pv25f6>Mostly True</a>, a personal blog written under a pseudonym, for crafting my writing skills.</li> <li data-astro-cid-j7pv25f6>Upgraded <a href="https://astro.build/themes/details/glyptodon/" data-astro-cid-j7pv25f6>Glyptodon</a>, an open source theme for Astro based on this site.</li> </ul> </section> <hr data-astro-cid-j7pv25f6> <section id="skills" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Skills</h2> <ul class="pill-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>PHP</li> <li data-astro-cid-j7pv25f6>Javascript</li> <li data-astro-cid-j7pv25f6>Typescript</li> <li data-astro-cid-j7pv25f6>Node.js</li> <li data-astro-cid-j7pv25f6>Astro.js</li> <li data-astro-cid-j7pv25f6>React</li> <li data-astro-cid-j7pv25f6>JAMstacks</li> <li data-astro-cid-j7pv25f6>Laravel</li> <li data-astro-cid-j7pv25f6>HTML Standards</li> <li data-astro-cid-j7pv25f6>Security</li> <li data-astro-cid-j7pv25f6>Modern CSS</li> <li data-astro-cid-j7pv25f6>Accessibility</li> <li data-astro-cid-j7pv25f6>User Experience</li> <li data-astro-cid-j7pv25f6>Design</li> <li data-astro-cid-j7pv25f6>Sustainable Energy Use</li> </ul> </section> <hr data-astro-cid-j7pv25f6>  <section id="recent-posts" class="posts-section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Latest Posts</h2> <div class="posts-grid" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { title: post.data.title, description: post.data.description, publicationDate: post.data.publicationDate, category: post.data.category, slug: post.data.slug, "data-astro-cid-j7pv25f6": true })}`)} <div style="display: flex; align-items: center; justify-content: center;" data-astro-cid-j7pv25f6> <a href="/posts" class="button-primary" data-astro-cid-j7pv25f6>View all posts →</a> </div> </div> </section> <hr data-astro-cid-j7pv25f6> <section id="finds" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Today I Found...</h2> <div class="finds-box" data-astro-cid-j7pv25f6> ${finds.map((entry) => renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { type: entry.data.type, title: entry.data.title, publicationDate: entry.data.publicationDate, description: entry.data.description, link: entry.data.link, "data-astro-cid-j7pv25f6": true })}`)} </div> </section>  `,
      },
    )}`;
  },
  "/Users/smilodon/Projects/timeaton-dev-4/src/pages/index.astro",
  void 0,
);

const $$file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);

const page = () => _page;

export { page };
