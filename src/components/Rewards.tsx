const Rewards = () => {
  return (
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
              Opt in to share more detailed, anonymized browsing data. This data
              helps improve advertising relevance without compromising your
              identity.
            </p>
          </div>

          <div className="p-8 border-4 border-neutral-950">
            <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-balance">
              View Ads
            </h3>
            <p className="font-sans text-neutral-700 mb-6 text-pretty">
              Choose to see privacy-respecting advertisements. Every ad you view
              puts money directly in your pocket, not just the platform's.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
