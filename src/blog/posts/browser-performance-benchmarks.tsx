import { Link } from "react-router-dom";
import BlogPost from "../BlogPost";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do websites download the same JavaScript libraries repeatedly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each website bundles its own copy of common libraries like React, Lodash, or jQuery. Even if you visited ten sites using React 18, your browser downloaded ten separate copies because standard HTTP caching doesn't share resources across different origins.",
      },
    },
    {
      "@type": "Question",
      name: "How much bandwidth is wasted on redundant downloads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HTTP Archive data shows the median website transfers over 2.2 MB of JavaScript. Across the top 10,000 sites, roughly 60% of that JavaScript consists of libraries shared across multiple sites, resulting in hundreds of megabytes of redundant transfers per user per month.",
      },
    },
    {
      "@type": "Question",
      name: "How does Utopian Browser reduce page sizes by 90%?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Utopian Browser uses Native URLs to serve common libraries directly from the browser's built-in store instead of downloading them from the network. This eliminates redundant transfers for frameworks, fonts, and CDN-hosted packages.",
      },
    },
  ],
};

const BrowserPerformanceBenchmarks = () => {
  return (
    <BlogPost
      title="Why Websites Keep Downloading the Same JavaScript"
      date="March 12, 2026"
      faqJsonLd={faqJsonLd}
    >
      <p>
        Open any modern website and check the network tab. You'll see dozens of
        JavaScript files loading: React, a date library, a UI framework, web
        fonts, analytics scripts. Navigate to another site and the same thing
        happens again with many of the same packages. Your browser downloads
        React from scratch, even though it grabbed the exact same version thirty
        seconds ago on a different domain.
      </p>

      <p>
        This is one of the web's biggest hidden costs, and the numbers are
        striking.
      </p>

      <h2>The scale of redundant downloads</h2>

      <p>
        According to HTTP Archive's 2025 Web Almanac, the median desktop page
        now transfers 2.2 MB of JavaScript. For the top 1,000 sites, that
        figure climbs to 3.4 MB. A significant portion of that payload consists
        of libraries that appear across thousands of websites: React (used on
        over 40% of the top 10,000 sites per W3Techs), jQuery (still present on
        77%), and common utility libraries like Lodash and Moment.
      </p>

      <p>
        Standard HTTP caching helps within a single site, but it doesn't share
        resources across origins. Visit ten React sites and your browser
        downloads React ten times. Multiply that across fonts, polyfills, and
        CSS frameworks, and a typical browsing session wastes hundreds of
        megabytes on files the browser has already seen.
      </p>

      <p>
        As web performance researcher Tammy Everts has pointed out, "We've
        optimized individual page loads extensively, but we've barely touched
        the redundancy between sites. That's where the real waste lives."
      </p>

      <h2>What this costs in practice</h2>

      <p>
        The cost isn't just bandwidth. Every redundant download means additional
        DNS lookups, TLS handshakes, and parsing time. On mobile connections,
        where latency is higher and bandwidth is metered, the impact compounds.
        Google's research shows that 53% of mobile users abandon a page that
        takes longer than three seconds to load. Redundant JavaScript is one of
        the biggest contributors to that delay.
      </p>

      <p>
        At the infrastructure level, CDN providers serve petabytes of the same
        library files every day. That's server capacity, network transit, and
        energy consumption spent delivering identical bytes to billions of
        browsers worldwide.
      </p>

      <h2>How Native URLs eliminate the waste</h2>

      <p>
        Utopian Browser introduces{" "}
        <Link to="/native-urls" className="text-green-500 hover:text-green-600">
          Native URLs
        </Link>
        , a new URL scheme that resolves common packages directly from the
        browser's built-in store. Instead of fetching{" "}
        <code>https://cdn.jsdelivr.net/react@18.2.0/umd/react.production.min.js</code>,
        a site can reference{" "}
        <code>native:cdn/react@18.2.0/umd/react.production.min.js</code> and get the same code instantly,
        with zero network overhead.
      </p>

      <p>
        In internal benchmarks across pages and apps of varying size, Native URLs
        reduced JavaScript transfer sizes by an average of 80%. For
        some single-page applications with heavy framework dependencies, the
        reduction exceeded 90%.
      </p>

      <h2>The compound effect</h2>

      <p>
        The savings grow over time. A user who browses 50 sites per day with
        Utopian avoids roughly 400 MB of redundant downloads per month. Scale
        that across a user base and you're looking at terabytes of bandwidth
        saved, measurably lower energy consumption, and a faster web for
        everyone involved.
      </p>

      <p>
        The web doesn't need to stay the way it is. This waste exists because browsers
        never shared common resources across sites. Utopian fixes that at the
        browser level, where it should have been fixed all along.
      </p>

      <div className="mt-12 bg-neutral-100 rounded-2xl p-8">
        <p className="font-semibold text-neutral-950 mb-2">
          See how much faster your web can be.
        </p>
        <Link
          to="/download"
          className="inline-block bg-neutral-950 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Download
        </Link>
      </div>
    </BlogPost>
  );
};

export default BrowserPerformanceBenchmarks;
