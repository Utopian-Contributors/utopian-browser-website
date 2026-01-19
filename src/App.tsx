function App() {
  const waitlistEmail =
    "mailto:ludwig@utopiancontrib?subject=I%20would%20like%20to%20start%20using%20the%20Utopian%20Browser%20as%20early%20as%20possible!";

  return (
    <main className="font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/50 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex">
            <img src="/favicon.svg" className="h-4 w-4"/>
            <a
              href="#"
              className="font-serif text-2xl italic text-neutral-950 font-semibold"
            >
              Utopian Browser
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#native-urls"
              className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
            >
              Native URLs
            </a>
            <a
              href="#analytics"
              className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
            >
              Analytics
            </a>
            <a
              href="#rewards"
              className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
            >
              Rewards
            </a>
            <a
              href="#trading"
              className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
            >
              Trading
            </a>
          </div>
          <a
            href={waitlistEmail}
             className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-neutral-50 text-neutral-950 flex flex-col items-center justify-center px-6 py-24 pt-32"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-center max-w-5xl leading-tight text-balance">
          Making websites <span className="text-green-400">90%</span>{" "}
          smaller.
        </h1>
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-700 text-center max-w-2xl mt-8 text-balance">
          The browser that makes the web fast, private, and rewarding.
        </p>

        {/* Key Points */}
        <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-4xl">
          <div className="text-center">
            <div className="text-green-400 font-mono text-sm mb-2">
              native:esm/
            </div>
            <h3 className="font-serif text-4xl font-medium mb-2">
              Native URLs
            </h3>
            <p className="text-balance text-neutral-600 text-sm">
              Load JS and fonts from the browser itself
            </p>
          </div>
          <div className="text-center">
            <div className="text-green-400 font-mono text-sm mb-2">
              Goodbye Cookies
            </div>
            <h3 className="font-serif text-4xl font-medium mb-2">
              Free Analytics
            </h3>
            <p className="text-balance text-neutral-600 text-sm">
              Browser-level telemetry, no tracking needed
            </p>
          </div>
          <div className="text-center">
            <div className="text-green-400 font-mono text-sm mb-2">$$$</div>
            <h3 className="font-serif text-4xl font-medium mb-2">
              Earn Rewards
            </h3>
            <p className="text-balance text-neutral-600 text-sm">
              Users and developers get paid
            </p>
          </div>
        </div>
      </section>

      {/* Native URLs Section */}
      <section
        id="native-urls"
        className="bg-neutral-50 text-neutral-950 py-20 md:py-28 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6 text-balance">
            Native URLs
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-600 text-center max-w-3xl mx-auto mb-16 text-pretty">
            Load JavaScript libraries and fonts directly from the browser. No
            more downloading the same packages over and over.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-balance">
                How it works
              </h3>
              <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed text-pretty">
                Native URLs use a new URL scheme that lets websites reference
                JavaScript modules and fonts that are pre-installed in the
                browser. Instead of downloading React from a CDN every time you
                visit a site, the browser already has it.
              </p>
              <ul className="space-y-4 font-sans text-base md:text-lg text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-semibold text-xl">
                    +
                  </span>
                  <span>
                    ESM modules with{" "}
                    <code className="font-mono bg-neutral-100 px-2 py-0.5">
                      native:esm/
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-semibold text-xl">
                    +
                  </span>
                  <span>
                    CDN-style bundles with{" "}
                    <code className="font-mono bg-neutral-100 px-2 py-0.5">
                      native:cdn/
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-semibold text-xl">
                    +
                  </span>
                  <span>
                    Web fonts with{" "}
                    <code className="font-mono bg-neutral-100 px-2 py-0.5">
                      native:font/
                    </code>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-800 p-6 md:p-8 border-4 border-neutral-950">
              <div className="font-mono text-sm md:text-base text-green-400 code-terminal space-y-6">
                <div>
                  <p className="text-neutral-500 mb-2">// ESM module</p>
                  <p>
                    import React from{" "}
                    <span className="text-neutral-50">
                      'native:esm/react@18.2.0'
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500 mb-2">// CDN bundle</p>
                  <p>
                    import{" "}
                    <span className="text-neutral-50">
                      'native:cdn/react@16.14.0/umd/react.production.min.js'
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500 mb-2">// Web font</p>
                  <p>
                    @import url(
                    <span className="text-neutral-50">
                      'native:font/Montserrat'
                    </span>
                    );
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section
        id="analytics"
        className="bg-neutral-50 text-neutral-950 py-20 md:py-28 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance">
            Free Analytics,{" "}
            <span className="text-green-400">Zero Tracking</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto mb-16 text-pretty">
            The browser collects anonymized analytics and makes them publicly
            available. No tracking scripts needed on your site.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-left p-6 border border-neutral-800">
              <div className="text-green-400 text-4xl font-semibold mb-4">
                01
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-balance">
                Browser-Level Collection
              </h3>
              <p className="font-sans text-neutral-600 text-pretty">
                The browser itself collects usage data, not third-party scripts.
                Nothing extra loads on your pages.
              </p>
            </div>

            <div className="text-left p-6 border border-neutral-800">
              <div className="text-green-400 text-4xl font-semibold mb-4">
                02
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-balance">
                Eventual Consistency
              </h3>
              <p className="font-sans text-neutral-600 text-pretty">
                Telemetry syncs in the background. Real-time isn't always
                necessary, but privacy always is.
              </p>
            </div>

            <div className="text-left p-6 border border-neutral-800">
              <div className="text-green-400 text-4xl font-semibold mb-4">
                03
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-balance">
                Public Dashboard
              </h3>
              <p className="font-sans text-neutral-600 text-pretty">
                Aggregated data is available for everyone: developers and users
                alike. Transparency by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Rewards Section */}
      <section
        id="rewards"
        className="bg-neutral-50 text-neutral-950 py-20 md:py-28 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6 text-balance">
            Browse and <span className="text-green-400">Earn</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-600 text-center max-w-3xl mx-auto mb-16 text-pretty">
            Your attention and data have value. Get paid for it, on your terms.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-8 border-4 border-neutral-950">
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-balance">
                Share Telemetry
              </h3>
              <p className="font-sans text-neutral-700 mb-6 text-pretty">
                Opt in to share more detailed, anonymized browsing data. This
                data helps improve advertising relevance without compromising
                your identity.
              </p>
            </div>

            <div className="p-8 border-4 border-neutral-950">
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-balance">
                View Ads
              </h3>
              <p className="font-sans text-neutral-700 mb-6 text-pretty">
                Choose to see privacy-respecting advertisements. Every ad you
                view puts money directly in your pocket, not just the
                platform's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Rewards Section */}
      <section className="bg-neutral-100 text-neutral-950 py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6 text-balance">
            Developers Get Rewarded Too
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-600 text-center max-w-3xl mx-auto mb-16 text-pretty">
            Build for the Utopian ecosystem and earn when your code runs.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 border border-neutral-700">
              <div className="text-green-400 font-mono text-xl font-semibold shrink-0">
                {">"}
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 text-balance">
                  Use Native Modules
                </h3>
                <p className="font-sans text-neutral-600 text-pretty">
                  Build websites that leverage native URLs. Smaller bundles mean
                  faster sites and happier users, and rewards for you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-neutral-700">
              <div className="text-green-400 font-mono text-xl font-semibold shrink-0">
                {">"}
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 text-balance">
                  Contribute to the Ecosystem
                </h3>
                <p className="font-sans text-neutral-600 text-pretty">
                  Publish optimized native modules. When developers use your
                  code, you earn from every execution.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 border border-neutral-700">
              <div className="text-green-400 font-mono text-xl font-semibold shrink-0">
                {">"}
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 text-balance">
                  Track Adoption
                </h3>
                <p className="font-sans text-neutral-600 text-pretty">
                  Public telemetry data shows how your modules perform in the
                  wild. See real usage, not just download counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Platform Section */}
      <section
        id="trading"
        className="bg-neutral-50 text-neutral-950 py-20 md:py-28 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance">
            Trade JavaScript Assets
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8 text-pretty">
            Telemetry data powers <strong>utopian.build</strong>, a trading
            platform for native JavaScript modules. Bet on the adoption of
            libraries based on real usage data.
          </p>
          <p className="font-sans text-base text-neutral-500 max-w-2xl mx-auto mb-12 text-pretty">
            Think React will overtake Vue? See a new framework gaining traction?
            Put your money where your code is.
          </p>
          <a
            href="https://utopian.build"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-retro inline-block border-neutral-950 text-neutral-950 font-semibold text-lg px-10 py-4 tracking-wider hover:bg-neutral-950 hover:text-neutral-50"
          >
            Visit utopian.build
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-neutral-50 text-neutral-950 py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-balance">
            Ready for a <span className="text-green-400">Better Web</span>?
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-700 mb-12 text-pretty">
            Join the waitlist to be among the first to experience the Utopian
            Browser.
          </p>
          <a
            href={waitlistEmail}
            className="btn-retro inline-block bg-green-400 text-neutral-50 font-semibold text-xl px-12 py-5 hover:bg-green-500 tracking-wider"
          >
            Join Waitlist
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-50 text-neutral-600 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm">
            © {new Date().getFullYear()} Utopian Contributors LLC. All rights
            reserved.
          </p>
          <div className="flex gap-6 font-sans text-sm">
            <a
              href="https://turbine.utopian.build"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              Turbine
            </a>
            <a
              href="https://utopian.build"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              utopian.build
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
