const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-neutral-50 text-neutral-950 flex flex-col items-center justify-center px-6 py-24 pt-32"
    >
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-center max-w-5xl leading-tight text-balance">
        Making websites <span className="text-green-400">90%</span> smaller.
      </h1>
      <p className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-700 text-center max-w-2xl mt-8 text-balance">
        The browser that makes the web fast, private, and rewarding.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-4xl">
        <div className="text-center">
          <div className="text-green-400 font-mono text-sm mb-2">
            native:esm/
          </div>
          <h3 className="font-serif text-4xl font-medium mb-2">Native URLs</h3>
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
          <h3 className="font-serif text-4xl font-medium mb-2">Earn Rewards</h3>
          <p className="text-balance text-neutral-600 text-sm">
            Users and developers get paid
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
