import { useState } from "react";
import { bountyPrograms } from "../bountyPrograms";

let tribe: any = null;
async function getTribe() {
  if (!tribe) {
    const { Tribe } = await import("@tribecloud/sdk");
    tribe = new Tribe({
      siteId: "cmmuqfheg00t60zo7ltf2hlfg",
      _baseUrl: "https://api.tribe.utopian.build",
      autoTrack: false,
    });
  }
  return tribe;
}

const isValidUrl = (s: string) => {
  try {
    const url = new URL(s);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const INITIAL_FORM = {
  selectedProgram: "",
  links: [""],
  xHandle: "",
  walletAddress: "",
};

export default function BountyForm() {
  const [form, setForm] = useState(() => {
    const programParam = new URLSearchParams(window.location.search).get(
      "program"
    );
    if (
      programParam &&
      bountyPrograms.some((p) => p.id === programParam)
    ) {
      return { ...INITIAL_FORM, selectedProgram: programParam };
    }
    return INITIAL_FORM;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedProgramData = bountyPrograms.find(
    (p) => p.id === form.selectedProgram
  );

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
      const t = await getTribe();
      await t.feedback(JSON.stringify(payload), {
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

  if (submitted) {
    return (
      <div className="bg-neutral-950 p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Submission received
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          Your work for{" "}
          <span className="text-green-400 font-medium">
            {selectedProgramData?.title}
          </span>{" "}
          has been submitted. We'll review it and send your reward to the wallet
          address you provided.
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
        <div className="bg-neutral-900 border border-neutral-800 p-6 mb-8 max-w-2xl">
          <p className="text-neutral-300 text-sm">
            Submissions cannot be edited after the fact. If something important
            changed, please submit the program again with the corrected
            information.
          </p>
        </div>
        <button
          onClick={resetForm}
          className="btn-secondary-light"
        >
          Submit another →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 p-8 md:p-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        Submit your completed work
      </h2>
      <p className="text-lg text-neutral-400 max-w-2xl mb-10">
        Fill in the details below. Make sure everything is correct before
        submitting, because submissions cannot be edited after the fact.
      </p>

      {errors.form && (
        <p className="text-red-400 text-sm mb-6">{errors.form}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        {/* Program select */}
        <div>
          <label className="block text-neutral-300 text-sm font-mono mb-2">
            Bounty program
          </label>
          <select
            value={form.selectedProgram}
            onChange={(e) =>
              setForm({ ...form, selectedProgram: e.target.value })
            }
            className="w-full bg-neutral-900 text-white border border-neutral-800 px-4 py-3 focus:outline-none focus:border-green-400 transition-colors appearance-none"
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
          <div className="bg-neutral-900 border border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-lg font-bold text-white">
                {selectedProgramData.title}
              </h4>
              <span className="shrink-0 bg-green-400 text-neutral-950 text-xs font-mono font-semibold px-2.5 py-0.5">
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
          <label className="block text-neutral-300 text-sm font-mono mb-2">
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
                  if (i === form.links.length - 1 && isValidUrl(value)) {
                    setForm({ ...form, links: [...form.links, ""] });
                  }
                  if (!value && form.links.length > 1) {
                    setForm({
                      ...form,
                      links: form.links.filter((_, j) => j !== i),
                    });
                  }
                }}
                placeholder="https://dev.to/your-article"
                className="w-full bg-neutral-900 text-white border border-neutral-800 px-4 py-3 focus:outline-none focus:border-green-400 transition-colors placeholder:text-neutral-600"
              />
            ))}
          </div>
          {errors.links && (
            <p className="text-red-400 text-sm mt-1">{errors.links}</p>
          )}
        </div>

        {/* X handle */}
        <div>
          <label className="block text-neutral-300 text-sm font-mono mb-2">
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
              className="w-full bg-neutral-900 text-white border border-neutral-800 pl-8 pr-4 py-3 focus:outline-none focus:border-green-400 transition-colors placeholder:text-neutral-600"
            />
          </div>
          {errors.xHandle && (
            <p className="text-red-400 text-sm mt-1">{errors.xHandle}</p>
          )}
        </div>

        {/* Wallet address */}
        <div>
          <label className="block text-neutral-300 text-sm font-mono mb-2">
            Solana wallet address
          </label>
          <input
            type="text"
            value={form.walletAddress}
            onChange={(e) =>
              setForm({ ...form, walletAddress: e.target.value })
            }
            placeholder="e.g. 7xKX…"
            className="w-full bg-neutral-900 text-white border border-neutral-800 px-4 py-3 focus:outline-none focus:border-green-400 transition-colors placeholder:text-neutral-600"
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
          className="btn-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Submit →"}
        </button>
      </form>
    </div>
  );
}
