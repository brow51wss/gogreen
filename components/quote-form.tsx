"use client";

import { useActionState, useState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions/quote";
import { quoteNeeds } from "@/lib/content";

const initial: QuoteState = {
  ok: false,
  message: "Typical response within one business day.",
};

const fieldClass =
  "w-full rounded-[10px] border border-white/16 bg-ink px-3.5 py-[13px] font-sans text-[15px] text-fg placeholder:text-white/30";

export function QuoteForm() {
  const [need, setNeed] = useState<string | null>(null);
  const [state, action, pending] = useActionState(submitQuote, initial);

  const note =
    state.message !== initial.message
      ? state.message
      : need
        ? `Selected: ${need} — add your details and send.`
        : initial.message;

  return (
    <form action={action} className="grid gap-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden
      />
      <input type="hidden" name="need" value={need ?? ""} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-4">
        <label className="grid gap-[7px]">
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-[oklch(0.72_0.01_160)]">
            NAME
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Juan Dela Cruz"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-[7px]">
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-[oklch(0.72_0.01_160)]">
            COMPANY
          </span>
          <input
            type="text"
            name="company"
            placeholder="Facility or firm"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-4">
        <label className="grid gap-[7px]">
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-[oklch(0.72_0.01_160)]">
            EMAIL
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-[7px]">
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-[oklch(0.72_0.01_160)]">
            MOBILE
          </span>
          <input
            type="tel"
            name="mobile"
            placeholder="09XX XXX XXXX"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid gap-[9px]">
        <span className="font-mono text-[10.5px] tracking-[0.12em] text-[oklch(0.72_0.01_160)]">
          WHAT DO YOU NEED?
        </span>
        <div className="flex flex-wrap gap-2">
          {quoteNeeds.map((option) => {
            const on = need === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setNeed(option)}
                className={`cursor-pointer rounded-full px-4 py-[9px] font-sans text-sm ${
                  on
                    ? "border border-accent bg-accent/14 text-[oklch(0.86_0.14_148)]"
                    : "border border-white/16 bg-ink text-[oklch(0.88_0.008_150)] hover:border-accent"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <label className="grid gap-[7px]">
        <span className="font-mono text-[10.5px] tracking-[0.12em] text-[oklch(0.72_0.01_160)]">
          PROJECT DETAILS
        </span>
        <textarea
          name="details"
          rows={4}
          placeholder="Facility type, daily flow or waste volume, site location, target timeline."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer rounded-full border-0 bg-accent py-[15px] font-sans text-[15.5px] font-bold text-accent-ink hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send project inquiry"}
      </button>
      <p
        className={`m-0 text-center text-[12.5px] leading-[1.5] ${
          state.ok ? "text-accent" : "text-[oklch(0.68_0.01_160)]"
        }`}
      >
        {note}
      </p>
    </form>
  );
}
