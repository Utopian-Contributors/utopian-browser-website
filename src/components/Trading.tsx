const Trading = () => {
  return (
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
  );
};

export default Trading;
