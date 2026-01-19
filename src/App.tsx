import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import NativeUrls from "./components/NativeUrls";
import Analytics from "./components/Analytics";
import Rewards from "./components/Rewards";
import DeveloperRewards from "./components/DeveloperRewards";
import Trading from "./components/Trading";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="font-sans">
      <Navigation />
      <Hero />
      <NativeUrls />
      <Analytics />
      <Rewards />
      <DeveloperRewards />
      <Trading />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default App;
