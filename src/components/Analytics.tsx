const Analytics = () => {
  return (
    <section
      id="analytics"
      className="bg-neutral-50 text-neutral-950 py-20 md:py-28 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance">
          Free Analytics, <span className="text-green-400">Zero Tracking</span>
        </h2>
        <p className="font-sans text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto mb-16 text-pretty">
          The browser collects anonymized analytics and makes them publicly
          available. No tracking scripts needed on your site.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-left p-6 border border-neutral-800">
            <div className="text-green-400 text-4xl font-semibold mb-4">01</div>
            <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-balance">
              Browser-Level Collection
            </h3>
            <p className="font-sans text-neutral-600 text-pretty">
              The browser itself collects usage data, not third-party scripts.
              Nothing extra loads on your pages.
            </p>
          </div>

          <div className="text-left p-6 border border-neutral-800">
            <div className="text-green-400 text-4xl font-semibold mb-4">02</div>
            <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-balance">
              Eventual Consistency
            </h3>
            <p className="font-sans text-neutral-600 text-pretty">
              Telemetry syncs in the background. Real-time isn't always
              necessary, but privacy always is.
            </p>
          </div>

          <div className="text-left p-6 border border-neutral-800">
            <div className="text-green-400 text-4xl font-semibold mb-4">03</div>
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
  );
};

export default Analytics;
