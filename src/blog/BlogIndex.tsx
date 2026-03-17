import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export const posts: PostMeta[] = [
  {
    slug: "privacy-first-browsing",
    title: "How Privacy-First Browsing Actually Works",
    excerpt:
      "Most browsers bolt privacy on after the fact. Here's what changes when it's built in from the start.",
    date: "February 24, 2026",
  },
  {
    slug: "web-rewards-ecosystem",
    title: "Your Attention Has Value. Here's How to Capture It.",
    excerpt:
      "The ad-supported web pays everyone except the person doing the browsing. Web rewards flip that model.",
    date: "March 5, 2026",
  },
  {
    slug: "browser-performance-benchmarks",
    title: "Why Websites Keep Downloading the Same JavaScript",
    excerpt:
      "Every site you visit re-downloads React, fonts, and common libraries from scratch. The numbers show how much that costs.",
    date: "March 12, 2026",
  },
];

const BlogIndex = () => {
  useTitle("Blog");
  return (
    <main className="font-sans bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight mb-12">
            Blog
          </h1>
          <div className="space-y-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block group"
              >
                <time className="text-sm text-neutral-400">{post.date}</time>
                <h2 className="text-xl md:text-2xl font-bold text-neutral-950 mt-1 group-hover:text-green-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-500 mt-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogIndex;
