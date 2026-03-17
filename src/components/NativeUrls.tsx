import { Link } from "react-router-dom";

const NativeUrls = () => {
  return (
    <div className="bg-neutral-950 rounded-3xl p-8 md:p-10 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight text-balance">
        Native URLs
      </h2>
      <p className="text-base md:text-lg text-neutral-400 mb-8 text-pretty">
        Billions of redundant downloads burn through bandwidth and energy
        every day. Native URLs eliminate that waste by serving common
        libraries and fonts directly from the browser.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <span className="bg-neutral-900 rounded-xl px-4 py-2 font-mono text-green-400 text-sm">native:esm/</span>
        <span className="bg-neutral-900 rounded-xl px-4 py-2 font-mono text-green-400 text-sm">native:cdn/</span>
        <span className="bg-neutral-900 rounded-xl px-4 py-2 font-mono text-green-400 text-sm">native:font/</span>
      </div>

      <div className="mt-auto">
        <Link
          to="/native-urls"
          className="inline-block bg-green-400 text-neutral-950 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-500 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default NativeUrls;
