import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="bg-green-400 rounded-3xl p-8 md:p-10 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4 tracking-tight text-balance">
        Free Analytics, Zero Tracking
      </h2>
      <p className="text-base md:text-lg text-neutral-800 mb-8 text-pretty">
        The browser collects anonymized usage data and publishes it openly,
        so developers get real insights without embedding any tracking scripts
        on their sites.
      </p>

      <div className="mt-auto">
        <Link
          to="/analytics"
          className="inline-block bg-neutral-950 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Analytics;
