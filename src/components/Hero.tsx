import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-950 text-center max-w-5xl leading-[1.05] tracking-tight text-balance">
        Making websites{" "}
        <span className="text-green-400">90% smaller.</span>
      </h1>
      <p className="text-lg md:text-xl text-neutral-500 text-center max-w-xl mt-8 text-balance">
        Ever had slow internet? Websites download the same code over
        and over. Utopian ships those libraries built in, so pages
        load instantly.
      </p>

      <Link
        to="/download"
        className="hidden lg:block bg-neutral-950 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors mt-10"
      >
        Download Utopian Browser
      </Link>

      <div className="grid md:grid-cols-3 gap-6 mt-28 max-w-4xl w-full">
        <div className="bg-neutral-100 rounded-2xl p-6 text-center">
          <p className="text-green-400 font-mono text-sm mb-2">native:esm/</p>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-2">Native URLs</h3>
          <p className="text-neutral-500 text-sm text-balance">
            Common libraries and fonts live in the browser
          </p>
        </div>
        <div className="bg-neutral-100 rounded-2xl p-6 text-center">
          <p className="text-green-400 font-mono text-sm mb-2">No cookies</p>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-2">Private</h3>
          <p className="text-neutral-500 text-sm text-balance">
            Anonymized analytics with no tracking scripts
          </p>
        </div>
        <div className="bg-neutral-100 rounded-2xl p-6 text-center">
          <p className="text-green-400 font-mono text-sm mb-2">$$$</p>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-2">Earn Rewards</h3>
          <p className="text-neutral-500 text-sm text-balance">
            Users and developers both get paid
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
