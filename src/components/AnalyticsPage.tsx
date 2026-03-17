import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import Footer from "./Footer";
import Navigation from "./Navigation";

const AnalyticsPage = () => {
  useTitle("Analytics");
  return (
    <main className="font-sans bg-white">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-950 leading-[1.05] tracking-tight text-balance">
            Free Analytics, <span className="text-green-400">Zero Tracking</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto mt-6 text-balance">
            Utopian collects anonymized analytics at the browser level and
            publishes them openly, so you never need to add tracking scripts
            to your site.
          </p>
        </div>
      </section>

      {/* How it works cards */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-green-400 rounded-3xl p-8 flex flex-col min-h-[280px]">
            <p className="text-green-800 text-4xl font-bold mb-4">01</p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-950 mb-3 text-balance">
              Browser-Level Collection
            </h3>
            <p className="text-neutral-800 text-pretty">
              Usage data is gathered by the browser itself rather than by
              JavaScript injected into each page. Your site stays fast because
              there's nothing extra to load.
            </p>
          </div>

          <div className="bg-neutral-100 rounded-3xl p-8 flex flex-col min-h-[280px]">
            <p className="text-neutral-300 text-4xl font-bold mb-4">02</p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-950 mb-3 text-balance">
              Eventual Consistency
            </h3>
            <p className="text-neutral-600 text-pretty">
              Telemetry syncs in the background on its own schedule. Not every
              use case needs real-time numbers, and the delay gives us room
              to anonymize data properly before it's ever shared.
            </p>
          </div>

          <div className="bg-neutral-100 rounded-3xl p-8 flex flex-col min-h-[280px]">
            <p className="text-neutral-300 text-4xl font-bold mb-4">03</p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-950 mb-3 text-balance">
              Public Dashboard
            </h3>
            <p className="text-neutral-600 text-pretty">
              Aggregated results are openly available to developers and users
              alike. Anyone can see how a site or library is being used,
              which keeps the whole system transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Deeper explanation */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-950 rounded-3xl p-8 md:p-10 flex flex-col min-h-[280px]">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-balance mb-4">
              What gets collected
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              The browser records which pages a user visits, how long they
              stay, and which native URL packages are loaded. All of this is
              anonymized before it leaves the device. There are no cookies,
              no user IDs, and no way to reconstruct an individual browsing
              session from the aggregated data.
            </p>
          </div>
          <div className="bg-neutral-950 rounded-3xl p-8 md:p-10 flex flex-col min-h-[280px]">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-balance mb-4">
              What you can do with it
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              If you run a website, you get page-level usage metrics without
              adding a single line of code. If you maintain an open source
              library, you can see how many Utopian users are actually loading
              your package in production, not just how many times it was
              downloaded from a registry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-10 pb-20">
        <div className="max-w-6xl mx-auto bg-green-400 rounded-3xl py-16 md:py-20 px-8 md:px-10 flex flex-col min-h-[320px]">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4 tracking-tight text-balance">
            Analytics that don't slow your site down
          </h2>
          <p className="text-lg text-neutral-800 max-w-lg">
            Try Utopian Browser and see your site's analytics appear
            without a single tracking script.
          </p>
          <div className="mt-auto pt-8">
            <Link
              to="/download"
              className="inline-block bg-neutral-950 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AnalyticsPage;
