import { WAITLIST_EMAIL } from "../constants";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/50 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src="/utopia-icon-128.webp" className="h-10 w-10" />
          <a
            href="#"
            className="font-serif text-2xl text-neutral-950 font-semibold"
          >
            Utopia Browser
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#native-urls"
            className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
          >
            Native URLs
          </a>
          <a
            href="#analytics"
            className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
          >
            Analytics
          </a>
          <a
            href="#rewards"
            className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
          >
            Rewards
          </a>
          <a
            href="#trading"
            className="text-neutral-700 hover:text-neutral-950 text-sm font-medium"
          >
            Trading
          </a>
        </div>
        <a
          href={WAITLIST_EMAIL}
          className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
