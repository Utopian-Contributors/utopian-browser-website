import { Link } from "react-router-dom";

const Rewards = () => {
  return (
    <div className="bg-neutral-100 rounded-3xl p-8 md:p-10 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4 tracking-tight text-balance">
        Browse and <span className="text-green-400">Earn</span>
      </h2>
      <p className="text-base md:text-lg text-neutral-500 mb-8 text-pretty">
        A more efficient web creates real value. Utopian lets users and
        developers share in that value through telemetry rewards,
        subscription cashback, and usage-based compensation.
      </p>

      <div className="mt-auto">
        <Link
          to="/rewards"
          className="inline-block bg-neutral-950 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Rewards;
