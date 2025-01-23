import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { CONFIG } from "../config";

let posts = await getCollection("posts");

posts = posts
  .filter(post => post.data.public)
  .sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf());

export const GET = () =>
  rss({
    title: CONFIG.site_title,
    description: CONFIG.description,
    site: "https://glyptodon.dev",
    items: posts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
    })),
  });

// TODO: re design.
