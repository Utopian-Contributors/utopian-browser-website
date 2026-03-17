import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

interface BlogPostProps {
  title: string;
  date: string;
  children: React.ReactNode;
  faqJsonLd?: object;
}

const BlogPost = ({ title, date, children, faqJsonLd }: BlogPostProps) => {
  useTitle(title);
  return (
    <main className="font-sans bg-white">
      <Navigation />

      <article className="pt-32 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/blog"
            className="text-sm text-neutral-400 hover:text-neutral-950 transition-colors"
          >
            &larr; All posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-950 leading-tight tracking-tight mt-6 mb-4">
            {title}
          </h1>
          <time className="text-sm text-neutral-400">{date}</time>
          <div className="blog-prose mt-10">{children}</div>
        </div>
      </article>

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Footer />
    </main>
  );
};

export default BlogPost;
