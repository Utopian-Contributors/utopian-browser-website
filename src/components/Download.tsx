import { useTitle } from "../useTitle";
import Footer from "./Footer";
import Navigation from "./Navigation";

const DOWNLOAD_URL = "https://utopian-mar-host.fra1.cdn.digitaloceanspaces.com/utopian-150.0.en-US.mac.dmg";

const Download = () => {
  useTitle("Download");
  return (
    <main className="font-sans bg-white">
      <Navigation />
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 mb-6 tracking-tight text-balance">
            Download the <span className="text-green-400">Utopian Browser</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 mb-4">
            Version 1.0 for macOS
          </p>
          <p className="text-sm text-neutral-400 mb-2">
            Based on Firefox 150.0 &middot; en-US &middot; .dmg
          </p>
          <p className="text-sm text-neutral-400 mb-12">
            Currently only available for Apple Silicon (ARM) Macs.
          </p>
          <a
            href={DOWNLOAD_URL}
            download
            className="inline-block bg-green-400 text-neutral-950 font-semibold text-xl px-12 py-5 rounded-full hover:bg-green-500 transition-colors"
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
