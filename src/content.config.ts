import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.date(),
      author: z.string().default("Utopian Contributors"),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
    }),
});

export const collections = { blog };
