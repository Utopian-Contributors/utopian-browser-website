const NativeUrls = () => {
  return (
    <section
      id="native-urls"
      className="bg-neutral-50 text-neutral-950 py-20 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6 text-balance">
          Native URLs
        </h2>
        <p className="font-sans text-lg md:text-xl text-neutral-600 text-center max-w-3xl mx-auto mb-16 text-pretty">
          Load JavaScript libraries and fonts directly from the browser. No more
          downloading the same packages over and over.
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
                <span className="text-green-400 font-semibold text-xl">+</span>
                <span>
                  ESM modules with{" "}
                  <code className="font-mono bg-neutral-100 px-2 py-0.5">
                    native:esm/
                  </code>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-semibold text-xl">+</span>
                <span>
                  CDN-style bundles with{" "}
                  <code className="font-mono bg-neutral-100 px-2 py-0.5">
                    native:cdn/
                  </code>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-semibold text-xl">+</span>
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
  );
};

export default NativeUrls;
