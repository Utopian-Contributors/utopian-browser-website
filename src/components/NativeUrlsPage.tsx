import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import Footer from "./Footer";
import Navigation from "./Navigation";

const NativeUrlsPage = () => {
  useTitle("Native URLs");
  return (
    <main className="font-sans bg-white">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-950 leading-[1.05] tracking-tight text-balance">
            <span className="text-green-400">Native URLs</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto mt-6 text-balance">
            Your browser downloads React, fonts, and common libraries from
            scratch on every site you visit. Native URLs skip the network
            entirely and serve them from the browser itself.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto bg-neutral-950 rounded-3xl p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                How it works
              </h2>
              <p className="text-base md:text-lg text-neutral-400 leading-relaxed text-pretty">
                Every time a visitor loads a page that uses React, the browser
                downloads the same package from a CDN, even if the last ten
                sites used the exact same version. That's wasted bandwidth on
                every network and device involved. Utopian introduces new URL
                schemes like <code className="font-mono bg-neutral-800 px-1.5 py-0.5 rounded-md text-green-400">native:esm/react@18.2.0</code> that
                resolve instantly from the browser's own store, delivering
                the same code without the round trip.
              </p>
              <ul className="space-y-4 text-base md:text-lg text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-semibold text-xl">+</span>
                  <span>
                    ES modules with{" "}
                    <code className="font-mono bg-neutral-800 px-2 py-0.5 rounded-md text-green-400">
                      native:esm/
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-semibold text-xl">+</span>
                  <span>
                    CDN-style bundles with{" "}
                    <code className="font-mono bg-neutral-800 px-2 py-0.5 rounded-md text-green-400">
                      native:cdn/
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-semibold text-xl">+</span>
                  <span>
                    Web fonts with{" "}
                    <code className="font-mono bg-neutral-800 px-2 py-0.5 rounded-md text-green-400">
                      native:font/
                    </code>
                  </span>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block bg-neutral-900 rounded-2xl p-6 md:p-8">
              <div className="font-mono text-sm md:text-base text-green-400 space-y-6">
                <div>
                  <p className="text-neutral-600 mb-2">// ESM module</p>
                  <p>
                    import React from{" "}
                    <span className="text-neutral-200">
                      'native:esm/react@18.2.0'
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-neutral-600 mb-2">// CDN bundle</p>
                  <p>
                    import{" "}
                    <span className="text-neutral-200">
                      'native:cdn/react@16.14.0/umd/react.production.min.js'
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-neutral-600 mb-2">// Web font</p>
                  <p>
                    @import url(
                    <span className="text-neutral-200">
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

      {/* Why it matters */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-green-400 rounded-3xl p-8 md:p-10 flex flex-col min-h-[280px]">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4">
              For users
            </h3>
            <p className="text-neutral-800 text-lg leading-relaxed">
              Pages load faster because the browser already has the
              libraries they need. That also means less bandwidth consumed
              on your device, lower data costs on metered connections, and
              less energy spent on network transfers overall.
            </p>
          </div>
          <div className="bg-neutral-100 rounded-3xl p-8 md:p-10 flex flex-col min-h-[280px]">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-4">
              For developers
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Adopting Native URLs is a one-line change in your import map or
              build config. You keep using the same packages and the same APIs,
              but your bundle shrinks because the browser handles the common
              dependencies for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-10 pb-20">
        <div className="max-w-6xl mx-auto bg-neutral-950 rounded-3xl py-16 md:py-20 px-8 md:px-10 flex flex-col min-h-[320px]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight text-balance">
            See it in action
          </h2>
          <p className="text-lg text-neutral-400 max-w-lg">
            Download Utopian Browser and try loading a site that uses React.
            You'll see faster pages, less bandwidth used, and the same
            code delivered without the waste.
          </p>
          <div className="mt-auto pt-8">
            <Link
              to="/download"
              className="inline-block bg-green-400 text-neutral-950 font-semibold text-base px-8 py-4 rounded-full hover:bg-green-500 transition-colors"
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

export default NativeUrlsPage;
