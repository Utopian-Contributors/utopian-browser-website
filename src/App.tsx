import { useTitle } from "./useTitle";
import Analytics from "./components/Analytics";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NativeUrls from "./components/NativeUrls";
import Navigation from "./components/Navigation";
import Rewards from "./components/Rewards";

const App = () => {
  useTitle("");
  return (
    <main className="font-sans bg-white">
      <Navigation />
      <Hero />
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <NativeUrls />
          <Analytics />
          <Rewards />
          <FinalCTA />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default App;
