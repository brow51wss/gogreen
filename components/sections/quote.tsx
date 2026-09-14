import { QuoteForm } from "@/components/quote-form";

const contacts = [
  { label: "OFFICE", value: "Punturin St., Valenzuela City" },
  {
    label: "PHONE",
    value: (
      <>
        <a href="tel:+639296414990">0929 641 4990</a>
        &nbsp;·&nbsp;
        <a href="tel:+639296414991">0929 641 4991</a>
      </>
    ),
  },
  {
    label: "SALES",
    value: <a href="mailto:sales@gogreenph.com">sales@gogreenph.com</a>,
  },
  {
    label: "MARKETING",
    value: <a href="mailto:marketing@gogreenph.com">marketing@gogreenph.com</a>,
  },
  {
    label: "CAREERS",
    value: (
      <a href="mailto:recruitment@gogreenph.com">recruitment@gogreenph.com</a>
    ),
  },
];

export function Quote() {
  return (
    <section
      id="quote"
      className="bg-[linear-gradient(165deg,oklch(0.24_0.05_158),oklch(0.15_0.016_162)_65%)] px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(30px,4vw,60px)]">
        <div>
          <div className="font-mono text-[11.5px] tracking-[0.14em] text-accent">
            08 — REQUEST A QUOTE
          </div>
          <h2 className="mt-4 max-w-[16ch] text-balance text-[clamp(32px,4.6vw,58px)] leading-none font-extrabold tracking-[-0.035em]">
            Tell us your flow. We’ll size the system.
          </h2>
          <p className="mt-5 mb-0 max-w-[46ch] text-[16.5px] leading-[1.6] text-[oklch(0.80_0.01_160)]">
            Send your project details and our engineering team will come back
            with a configuration, a footprint and a compliance path.
          </p>
          <div className="mt-[34px] grid max-w-[420px] gap-[18px]">
            {contacts.map((row) => (
              <div key={row.label} className="flex items-baseline gap-3.5">
                <span className="w-[68px] flex-none font-mono text-[10.5px] tracking-[0.12em] text-[oklch(0.70_0.01_160)]">
                  {row.label}
                </span>
                <span className="text-base text-fg">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[22px] border border-white/13 bg-card p-[clamp(24px,3vw,34px)]">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
