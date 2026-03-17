import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import Footer from "./Footer";
import Navigation from "./Navigation";

const About = () => {
  useTitle("About");
  return (
    <main className="font-sans bg-white">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-950 leading-[1.1] tracking-tight text-balance">
            A more efficient web.{" "}
            <span className="text-green-400">
              Built into the browser.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mt-8 text-balance">
            Websites waste bandwidth by downloading the same code on
            every visit. We built a browser that fixes this, for the
            benefit of companies, users, and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/download"
              className="bg-neutral-950 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Download Utopian Browser
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-8">
        <div className="max-w-4xl mx-auto border border-neutral-200 rounded-3xl py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-950 mb-1">
                90%
              </p>
              <p className="text-sm text-neutral-400 uppercase tracking-wider">
                Less bandwidth wasted
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-950 mb-1">
                Zero
              </p>
              <p className="text-sm text-neutral-400 uppercase tracking-wider">
                Tracking cookies
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-950 mb-1">
                100%
              </p>
              <p className="text-sm text-neutral-400 uppercase tracking-wider">
                Your data, your earnings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission headline */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">
            Our mission
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 leading-tight tracking-tight text-balance">
            The web wastes more than it needs to. We're fixing that.
          </h2>
        </div>
      </section>

      {/* Problem / Approach cards */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="bg-green-400 rounded-3xl p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-800 mb-4">
              The problem
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4 max-w-xl">
              Redundant downloads burn through bandwidth, energy, and money
              every second of every day.
            </h3>
            <p className="text-lg text-neutral-800 max-w-xl leading-relaxed">
              Every website that uses React downloads it fresh from a CDN, even
              though the visitor's last ten sites used the exact same version.
              Multiply that by every popular library and font on the web,
              and you get an enormous amount of wasted bandwidth on networks,
              wasted energy on servers, and wasted time on devices. It adds
              up to real costs for companies and real environmental impact.
            </p>
          </div>
          <div className="bg-neutral-100 rounded-3xl p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Our approach
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4 max-w-xl">
              The browser is the one place that can actually fix this.
            </h3>
            <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
              It sits between every website and every user, which makes it
              the natural place to eliminate redundant downloads, collect
              privacy-respecting analytics, and distribute fair compensation.
              Utopian does exactly that: Native URLs serve common assets
              locally so nothing gets downloaded twice, built-in telemetry
              replaces wasteful tracking scripts, and a token system rewards
              both users and developers for the value they contribute.
            </p>
          </div>
        </div>
      </section>

      {/* Features headline */}
      <section className="px-6 pt-12 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 leading-tight tracking-tight text-balance">
            What we ship
          </h2>
        </div>
      </section>

      {/* Feature cards grid */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-950 text-white rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Native URLs</h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              React, popular fonts, and dozens of common libraries ship with
              the browser. Sites reference them through native URLs, the
              browser resolves them locally, and all of that redundant
              bandwidth disappears.
            </p>
          </div>
          <div className="bg-neutral-950 text-white rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Privacy built in
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              There are no cookies and no fingerprinting. Instead, the browser
              collects anonymized, pseudonymous analytics on its own and shares
              them through a public dashboard, so developers get real insights
              without needing to embed any tracking code.
            </p>
          </div>
          <div className="md:col-span-2 bg-green-400 text-neutral-950 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Your attention has value
            </h3>
            <p className="text-neutral-800 text-lg leading-relaxed max-w-2xl">
              You can opt in to share anonymized browsing data and earn rewards
              for the contribution, or subscribe for an ad-free experience that
              comes with cashback. Developers on the other side earn based on
              how often their code actually runs, not just how many times it was
              downloaded.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 leading-tight tracking-tight text-balance mb-16">
            Built by people who build every day.
          </h2>

          <div className="max-w-sm mx-auto bg-neutral-100 rounded-3xl p-10 text-center">
            <div className="w-20 h-20 bg-green-400 rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src="/ludwig.jpg"
                alt="Ludwig Schubert"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mb-1">
              Ludwig Schubert
            </h3>
            <p className="text-neutral-500 font-medium text-sm mb-6">Founder</p>
            <div className="flex justify-center gap-6 text-sm">
              <a
                href="https://x.com/UtopianContrib"
                target="_blank"
                rel="me noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-950 transition-colors"
              >
                X
              </a>
              <a
                href="https://github.com/geistinme"
                target="_blank"
                rel="me noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-950 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ludwig-schubert-2034542bb/"
                target="_blank"
                rel="me noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-950 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-neutral-950 rounded-3xl py-20 md:py-28 px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-balance">
            Get in touch
          </h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-lg mx-auto">
            Whether you have a question, a feature request, or a partnership
            idea, we'd genuinely like to hear from you.
          </p>
          <a
            href="mailto:ludwig@utopiancontrib.com"
            className="inline-block bg-green-400 text-neutral-950 font-semibold text-base px-8 py-4 rounded-full hover:bg-green-500 transition-colors"
          >
            ludwig@utopiancontrib.com
          </a>
        </div>
      </section>

      {/* JSON-LD: Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ludwig Schubert",
          url: "https://utopian.build/about",
          jobTitle: "Founder",
          affiliation: {
            "@type": "Organization",
            name: "Utopian Contributors LLC",
          },
          sameAs: [
            "https://x.com/UtopianContrib",
            "https://github.com/geistinme",
            "https://www.linkedin.com/in/ludwig-schubert-2034542bb/",
          ],
        })}
      </script>

      <Footer />
    </main>
  );
};

export default About;
