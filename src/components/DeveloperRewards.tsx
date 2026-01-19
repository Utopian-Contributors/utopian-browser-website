const DeveloperRewards = () => {
  return (
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
                Publish optimized native modules. When developers use your code,
                you earn from every execution.
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
  );
};

export default DeveloperRewards;
