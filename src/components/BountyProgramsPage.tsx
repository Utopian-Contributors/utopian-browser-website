import { useState } from "react";
import {
  bountyPrograms,
  type BountyProgram,
} from "../bountyPrograms";
import { tribe } from "../tribe";
import { useTitle } from "../useTitle";
import Footer from "./Footer";
import Navigation from "./Navigation";

const categories = [
  { key: "code" as const, label: "Code" },
  { key: "marketing" as const, label: "Marketing" },
];

const ProgramCard = ({ program }: { program: BountyProgram }) => (
  <div id={program.id} className="bg-neutral-950 text-white rounded-3xl p-8 md:p-10 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl md:text-2xl font-bold text-balance">
        {program.title}
      </h3>
      <span className="shrink-0 bg-green-400 text-neutral-950 text-sm font-semibold px-3 py-1 rounded-full">
        {program.reward}
      </span>
    </div>
    <p className="text-neutral-400 text-pretty text-lg mb-4">
      {program.description}
    </p>
    <p className="text-neutral-500 text-sm">
      <span className="text-neutral-400 font-medium">Advice:</span>{" "}
      {program.advice}
    </p>
  </div>
);

const INITIAL_FORM = {
  selectedProgram: "",
  links: [""],
  xHandle: "",
  walletAddress: "",
};

const isValidUrl = (s: string) => {
  try {
    const url = new URL(s);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const BountyProgramsPage = () => {
  useTitle("Bounty Programs");

  const [form, setForm] = useState(() => {
    const programParam = new URLSearchParams(window.location.search).get("program");
    if (programParam && bountyPrograms.some((p) => p.id === programParam)) {
      return { ...INITIAL_FORM, selectedProgram: programParam };
    }
    return INITIAL_FORM;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.selectedProgram) errs.selectedProgram = "Select a program.";
    const filledLinks = form.links.filter((l) => l.trim());
    if (filledLinks.length === 0) {
      errs.links = "Add at least one link.";
    } else if (filledLinks.some((l) => !isValidUrl(l.trim()))) {
      errs.links = "One or more links are not valid URLs.";
    }
    if (!form.xHandle.trim()) errs.xHandle = "Enter your X handle.";
    if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(form.walletAddress.trim())) {
      errs.walletAddress = "Enter a valid Solana wallet address.";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    const payload = {
      program: form.selectedProgram,
      links: form.links.map((l) => l.trim()).filter(Boolean),
      xHandle: form.xHandle.replace(/^@/, ""),
      walletAddress: form.walletAddress.trim(),
      submittedAt: new Date().toISOString(),
    };
    try {
      await tribe.feedback(JSON.stringify(payload), {
        type: "reward-program-submission",
      });
      setSubmitted(true);
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  const selectedProgramData = bountyPrograms.find(
    (p) => p.id === form.selectedProgram
  );

  return (
    <main className="font-sans bg-white">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-950 leading-[1.05] tracking-tight text-balance">
            Bounty <span className="text-green-400">Programs</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto mt-6 text-balance">
            Complete bounty-style tasks, submit your work, and earn SOL
            for contributing to the Utopian ecosystem.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-green-400 rounded-3xl p-8 flex flex-col min-h-[280px]">
            <p className="text-green-800 text-4xl font-bold mb-4">01</p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-950 mb-3 text-balance">
              Complete the Task
            </h3>
            <p className="text-neutral-800 text-pretty">
              Pick a bounty below and implement the task. Build
              something, write an article, or spread the word about the
              Utopian ecosystem.
            </p>
          </div>

          <div className="bg-neutral-100 rounded-3xl p-8 flex flex-col min-h-[280px]">
            <p className="text-neutral-300 text-4xl font-bold mb-4">02</p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-950 mb-3 text-balance">
              Submit Your Work
            </h3>
            <p className="text-neutral-600 text-pretty">
              Use the form below to submit links to your work along with
              your X handle and Solana wallet address so we can send your
              reward.
            </p>
          </div>

          <div className="bg-neutral-100 rounded-3xl p-8 flex flex-col min-h-[280px]">
            <p className="text-neutral-300 text-4xl font-bold mb-4">03</p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-950 mb-3 text-balance">
              Tag @UtopianContrib on X
            </h3>
            <p className="text-neutral-600 text-pretty">
              Share your contribution on X and tag{" "}
              <a
                href="https://x.com/UtopianContrib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors"
              >
                @UtopianContrib
              </a>{" "}
              with related links so the community can see your work.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing programs */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">
            Ongoing programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-10 tracking-tight text-balance">
            Pick a bounty and start building
          </h2>

          {categories.map((cat) => {
            const programs = bountyPrograms.filter(
              (p) => p.category === cat.key
            );
            if (programs.length === 0) return null;
            return (
              <div key={cat.key} className="mb-10">
                <h3 className="text-lg font-semibold text-neutral-950 mb-4">
                  {cat.label}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {programs.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Submission form / Confirmation */}
      <section className="px-6 py-10 pb-20" id="submit">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">
            Submit your work
          </p>

          {submitted ? (
            <div className="bg-neutral-950 rounded-3xl p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight text-balance">
                Submission received
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mb-6">
                Your work for{" "}
                <span className="text-green-400 font-medium">
                  {selectedProgramData?.title}
                </span>{" "}
                has been submitted. We'll review it and send your reward to the
                wallet address you provided.
              </p>
              <p className="text-lg text-neutral-400 max-w-2xl mb-8">
                Don't forget to tag{" "}
                <a
                  href="https://x.com/UtopianContrib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-500 transition-colors"
                >
                  @UtopianContrib
                </a>{" "}
                on X with your related links.
              </p>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 max-w-2xl">
                <p className="text-neutral-300 text-sm">
                  Submissions cannot be edited after the fact. If something
                  important changed, please submit the program again with the
                  corrected information.
                </p>
              </div>

              <button
                onClick={resetForm}
                className="inline-block bg-green-400 text-neutral-950 font-semibold text-base px-8 py-4 rounded-full hover:bg-green-500 transition-colors"
              >
                Submit another
              </button>
            </div>
          ) : (
            <div className="bg-neutral-950 rounded-3xl p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight text-balance">
                Submit your completed work
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mb-10">
                Fill in the details below. Make sure everything is correct
                before submitting, because submissions cannot be edited after the fact.
              </p>

              {errors.form && (
                <p className="text-red-400 text-sm mb-6">{errors.form}</p>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-2xl"
              >
                {/* Program select */}
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Bounty program
                  </label>
                  <select
                    value={form.selectedProgram}
                    onChange={(e) =>
                      setForm({ ...form, selectedProgram: e.target.value })
                    }
                    className="w-full bg-neutral-900 text-white border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition-colors appearance-none"
                  >
                    <option value="">Select a program…</option>
                    {bountyPrograms.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.reward})
                      </option>
                    ))}
                  </select>
                  {errors.selectedProgram && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.selectedProgram}
                    </p>
                  )}
                </div>

                {/* Selected program details */}
                {selectedProgramData && (
                  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-bold text-white">
                        {selectedProgramData.title}
                      </h4>
                      <span className="shrink-0 bg-green-400 text-neutral-950 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {selectedProgramData.reward}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mb-3">
                      {selectedProgramData.description}
                    </p>
                    <p className="text-neutral-500 text-sm">
                      <span className="text-neutral-400 font-medium">Advice:</span>{" "}
                      {selectedProgramData.advice}
                    </p>
                  </div>
                )}

                {/* Links */}
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Links to your work
                  </label>
                  <div className="space-y-2">
                    {form.links.map((link, i) => (
                      <input
                        key={i}
                        type="url"
                        value={link}
                        onChange={(e) => {
                          const next = [...form.links];
                          next[i] = e.target.value;
                          setForm({ ...form, links: next });
                        }}
                        onBlur={() => {
                          const value = form.links[i].trim();
                          // Add a new empty input if this is the last one and has a valid URL
                          if (i === form.links.length - 1 && isValidUrl(value)) {
                            setForm({ ...form, links: [...form.links, ""] });
                          }
                          // Remove empty inputs (except if it's the only one)
                          if (!value && form.links.length > 1) {
                            setForm({
                              ...form,
                              links: form.links.filter((_, j) => j !== i),
                            });
                          }
                        }}
                        placeholder="https://dev.to/your-article"
                        className="w-full bg-neutral-900 text-white border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition-colors placeholder:text-neutral-600"
                      />
                    ))}
                  </div>
                  {errors.links && (
                    <p className="text-red-400 text-sm mt-1">{errors.links}</p>
                  )}
                </div>

                {/* X handle */}
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    X handle
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                      @
                    </span>
                    <input
                      type="text"
                      value={form.xHandle}
                      onChange={(e) =>
                        setForm({ ...form, xHandle: e.target.value })
                      }
                      placeholder="yourhandle"
                      className="w-full bg-neutral-900 text-white border border-neutral-800 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:border-green-400 transition-colors placeholder:text-neutral-600"
                    />
                  </div>
                  {errors.xHandle && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.xHandle}
                    </p>
                  )}
                </div>

                {/* Wallet address */}
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Solana wallet address
                  </label>
                  <input
                    type="text"
                    value={form.walletAddress}
                    onChange={(e) =>
                      setForm({ ...form, walletAddress: e.target.value })
                    }
                    placeholder="e.g. 7xKX…"
                    className="w-full bg-neutral-900 text-white border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition-colors placeholder:text-neutral-600"
                  />
                  {errors.walletAddress && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.walletAddress}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-block bg-green-400 text-neutral-950 font-semibold text-base px-8 py-4 rounded-full hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting…" : "Submit"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BountyProgramsPage;
