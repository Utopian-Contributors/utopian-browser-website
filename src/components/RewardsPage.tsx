import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import Footer from "./Footer";
import Navigation from "./Navigation";

const RewardsPage = () => {
  useTitle("Rewards");
  return (
    <main className="font-sans bg-white">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-950 leading-[1.05] tracking-tight text-balance">
            Browse and <span className="text-green-400">Earn</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto mt-6 text-balance">
            Your browsing generates real value, but right now that value
            goes to ad networks. Utopian routes it back to you and to the
            developers whose code you actually use.
          </p>
        </div>
      </section>

      {/* User rewards */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">
            For users
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-10 tracking-tight text-balance">
            Two ways to earn as you browse
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-8 md:p-10 flex flex-col min-h-[280px]">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                Share Telemetry
              </h3>
              <p className="text-neutral-400 text-pretty text-lg">
                You can opt in to share more detailed, anonymized browsing data.
                This helps improve ad relevance across the ecosystem while
                keeping your identity completely out of the picture, and you
                earn rewards in return for the contribution.
              </p>
            </div>

            <div className="bg-neutral-950 text-white rounded-3xl p-8 md:p-10 flex flex-col min-h-[280px]">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                Subscription Cashback
              </h3>
              <p className="text-neutral-400 text-pretty text-lg">
                $UTCC subscribers get a portion of their subscription returned as
                rewards. The subscription itself removes ads and bundles apps from
                the Utopian ecosystem, so you're paying for something useful and
                getting part of it back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer rewards */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto bg-green-400 rounded-3xl p-8 md:p-16">
          <p className="text-sm font-semibold text-green-800 uppercase tracking-widest mb-4">
            For developers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4 tracking-tight text-balance">
            Your code earns revenue when people use it
          </h2>
          <p className="text-lg text-neutral-800 max-w-3xl mb-12 text-pretty">
            If you build for the Utopian ecosystem, your incentives are tied
            directly to the value you create for the people using your software.
          </p>

          <div className="space-y-4 max-w-3xl">
            <div className="bg-neutral-950 rounded-2xl p-6 md:p-8 flex items-start gap-5">
              <div className="text-green-400 font-mono text-xl font-bold shrink-0 mt-0.5">
                {">"}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-balance">
                  Contribute to the Ecosystem
                </h3>
                <p className="text-neutral-400 text-pretty">
                  $UTCC is the native token of the Utopian ecosystem. You earn it
                  by converting users into subscribers or by facilitating
                  transactions, which means the more value you create, the more
                  you're compensated.
                </p>
              </div>
            </div>

            <div className="bg-neutral-950 rounded-2xl p-6 md:p-8 flex items-start gap-5">
              <div className="text-green-400 font-mono text-xl font-bold shrink-0 mt-0.5">
                {">"}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-balance">
                  Track Real Adoption
                </h3>
                <p className="text-neutral-400 text-pretty">
                  Public telemetry shows how your modules perform in production.
                  You can see which versions are active, how often they load, and
                  where adoption is growing, all based on real usage rather than
                  npm download counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-10 pb-20">
        <div className="max-w-6xl mx-auto bg-neutral-950 rounded-3xl py-16 md:py-20 px-8 md:px-10 flex flex-col min-h-[320px]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight text-balance">
            Start earning
          </h2>
          <p className="text-lg text-neutral-400 max-w-lg">
            Download Utopian Browser and start turning wasted bandwidth
            into real value from day one.
          </p>
          <div className="mt-auto pt-8">
            <Link
              to="/download"
              className="inline-block bg-green-400 text-neutral-950 font-semibold text-base px-8 py-4 rounded-full hover:bg-green-500 transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RewardsPage;
