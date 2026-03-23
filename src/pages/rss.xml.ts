import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: "Utopian Blog",
    description:
      "Ideas, analysis, and updates from the Utopian team on building a more efficient, private, and rewarding web.",
    site: context.site ?? "https://utopian.build",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/blog/${post.id}/`,
    })),
  });
}
