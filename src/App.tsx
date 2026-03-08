import Analytics from "./components/Analytics";
import DeveloperRewards from "./components/DeveloperRewards";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NativeUrls from "./components/NativeUrls";
import Navigation from "./components/Navigation";
import Rewards from "./components/Rewards";

const App = () => {
  return (
    <main className="font-sans">
      <Navigation />
      <Hero />
      <NativeUrls />
      <Analytics />
      <Rewards />
      <DeveloperRewards />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default App;
