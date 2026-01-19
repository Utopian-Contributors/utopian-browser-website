import { WAITLIST_EMAIL } from "../constants";

const FinalCTA = () => {
  return (
    <section className="bg-neutral-50 text-neutral-950 py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-balance">
          Ready for a <span className="text-green-400">Better Web</span>?
        </h2>
        <p className="font-sans text-lg md:text-xl text-neutral-700 mb-12 text-pretty">
          Join the waitlist to be among the first to experience the Utopia
          Browser.
        </p>
        <a
          href={WAITLIST_EMAIL}
          className="btn-retro inline-block bg-green-400 text-neutral-50 font-semibold text-xl px-12 py-5 hover:bg-green-500 tracking-wider"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
