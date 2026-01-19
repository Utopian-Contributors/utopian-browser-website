const Footer = () => {
  return (
    <footer className="bg-neutral-50 text-neutral-600 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm">
          © {new Date().getFullYear()} Utopian Contributors LLC. All rights
          reserved.
        </p>
        <div className="flex gap-6 font-sans text-sm">
          <a
            href="https://turbine.utopian.build"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 transition-colors"
          >
            Turbine
          </a>
          <a
            href="https://utopian.build"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 transition-colors"
          >
            utopian.build
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
