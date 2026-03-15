import Footer from "./Footer";
import Navigation from "./Navigation";

const DOWNLOAD_URL = "https://utopian-mar-host.fra1.cdn.digitaloceanspaces.com/utopian-150.0.en-US.mac.dmg";

const Download = () => {
  return (
    <main className="font-sans">
      <Navigation />
      <section className="bg-neutral-50 text-neutral-950 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Download <span className="text-green-400">Utopian Browser</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-neutral-700 mb-4">
            Version 1.0 for macOS
          </p>
          <p className="font-sans text-sm text-neutral-500 mb-2">
            Based on Firefox 150.0 &middot; en-US &middot; .dmg
          </p>
          <p className="font-sans text-sm text-neutral-500 mb-12">
            Currently only available for Apple Silicon (ARM) Macs.
          </p>
          <a
            href={DOWNLOAD_URL}
            download
            className="btn-retro inline-block bg-green-400 text-neutral-50 font-semibold text-xl px-12 py-5 hover:bg-green-500 tracking-wider"
          >
            Download for macOS
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Download;
