import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

import { CONFIG } from "config";

export enum PostType {
  dev = "dev",
  design = "design",
  musings = "musings",
  life = "life",
}

export enum MicroblogType {
  video = "video",
  article = "article",
  book = "book",
  tool = "tool",
  website = "website",
}

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string().default(CONFIG.author),
    externalUrl: z.string().optional(),
    description: z.string(),
    category: z.nativeEnum(PostType),
    publicationDate: z.coerce.date(),
    public: z.boolean().default(true),
    editDate: z.coerce.date().optional(),
  }),
});

const microblog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/microblog" }),
  schema: z.object({
    title: z.string(),
    link: z.string(),
    description: z.string().nullable().optional(),
    type: z.nativeEnum(MicroblogType),
    publicationDate: z.coerce.date(),
    public: z.boolean().default(true),
    microblog_id: z.string().optional(), // Track Micro.blog post ID for syncing
  }),
});

export const collections = { posts, microblog };
