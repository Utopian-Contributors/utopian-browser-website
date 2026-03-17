const DeveloperRewards = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto bg-green-400 rounded-3xl p-8 md:p-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 text-center mb-4 tracking-tight text-balance">
          Developers Get Rewarded Too
        </h2>
        <p className="text-lg md:text-xl text-neutral-800 text-center max-w-3xl mx-auto mb-12 text-pretty">
          If you build for the Utopian ecosystem, your code earns revenue
          when people actually use it, not just when they install it.
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="bg-neutral-950 rounded-2xl p-6 md:p-8 flex items-start gap-5">
            <div className="text-green-400 font-mono text-xl font-bold shrink-0 mt-0.5">
              {">"}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-balance">
                Contribute to the Ecosystem
              </h3>
              <p className="text-neutral-400 text-pretty">
                $UTCC is the native token of the Utopian ecosystem. You earn it
                by converting users into subscribers or by facilitating
                transactions, which means your incentives are directly tied to
                the value you create for the people using your software.
              </p>
            </div>
          </div>

          <div className="bg-neutral-950 rounded-2xl p-6 md:p-8 flex items-start gap-5">
            <div className="text-green-400 font-mono text-xl font-bold shrink-0 mt-0.5">
              {">"}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-balance">
                Track Real Adoption
              </h3>
              <p className="text-neutral-400 text-pretty">
                Public telemetry shows how your modules perform in production.
                You can see which versions are active, how often they load, and
                where adoption is growing, all based on real usage rather than
                npm download counts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperRewards;
