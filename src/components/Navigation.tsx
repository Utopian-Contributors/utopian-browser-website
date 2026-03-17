import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="flex items-center justify-between px-6 py-4 md:grid md:grid-cols-3">
        <div className="flex gap-2 items-center min-w-0">
          <img src="/utopia-icon-128.webp" className="h-10 w-10 shrink-0" />
          <Link
            to="/"
            className="text-2xl text-neutral-950 font-bold tracking-tight truncate"
          >
            Utopian Browser
          </Link>
        </div>
        <div className="mx-auto hidden md:flex items-center gap-8">
          <Link
            to="/native-urls"
            className="text-neutral-500 hover:text-neutral-950 text-sm font-medium transition-colors"
          >
            Native URLs
          </Link>
          <Link
            to="/analytics"
            className="text-neutral-500 hover:text-neutral-950 text-sm font-medium transition-colors"
          >
            Analytics
          </Link>
          <Link
            to="/rewards"
            className="text-neutral-500 hover:text-neutral-950 text-sm font-medium transition-colors"
          >
            Rewards
          </Link>
          <Link
            to="/about"
            className="text-neutral-500 hover:text-neutral-950 text-sm font-medium transition-colors"
          >
            About
          </Link>
        </div>
        <Link
          to="/download"
          className="hidden lg:block shrink-0 w-fit ml-auto bg-neutral-950 text-white px-6 py-2.5 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
        >
          Download
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
