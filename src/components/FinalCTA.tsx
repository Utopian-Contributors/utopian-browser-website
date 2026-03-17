import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <div className="bg-neutral-950 rounded-3xl p-8 md:p-10 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight text-balance">
        Ready for a <span className="text-green-400">better web</span>?
      </h2>
      <p className="text-base md:text-lg text-neutral-400 mb-8 text-pretty">
        Less waste, faster pages, and fair compensation for everyone.
        See what an efficient web feels like.
      </p>

      <div className="mt-auto">
        <Link
          to="/download"
          className="inline-block bg-green-400 text-neutral-950 font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-500 transition-colors"
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default FinalCTA;
