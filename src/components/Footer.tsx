import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-neutral-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Utopian Contributors LLC
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            to="/about"
            className="hover:text-neutral-950 transition-colors"
          >
            About
          </Link>
          <a
            href="https://tribe.utopian.build"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 transition-colors"
          >
            Tribe SDK
          </a>
          <a
            href="https://x.com/UtopianContrib"
            target="_blank"
            rel="me noopener noreferrer"
            className="hover:text-neutral-950 transition-colors"
          >
            X
          </a>
          <a
            href="https://github.com/Utopian-Contributors"
            target="_blank"
            rel="me noopener noreferrer"
            className="hover:text-neutral-950 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
