import { whyCards } from "@/lib/content";

export function Why() {
  return (
    <section className="bg-ink px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,104px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-[clamp(30px,4vw,56px)]">
        <div>
          <div className="font-mono text-[11.5px] tracking-[0.14em] text-accent">
            06 — WHY GGPEP
          </div>
          <h2 className="mt-4 text-balance text-[clamp(28px,3.8vw,46px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
            One vendor removes the friction — and the finger-pointing.
          </h2>
          <p className="mt-5 mb-0 max-w-[52ch] text-[16.5px] leading-[1.6] text-[oklch(0.76_0.01_160)]">
            Consultancy, civil works, hardware integration and vacuum tanker
            hauling logistics sit under one contract. When an inspection comes,
            there is one team accountable for the result.
          </p>
          <blockquote className="mt-7 mb-0 border-l-2 border-accent px-6 py-5 text-[17px] leading-[1.55] text-[oklch(0.90_0.008_150)] not-italic">
            “One to change a few. A few to change many. Many to change the
            world. It all starts with one.”
            <span className="mt-3.5 block font-mono text-[11px] tracking-[0.12em] text-[oklch(0.66_0.01_160)]">
              INSTITUTIONAL PHILOSOPHY
            </span>
          </blockquote>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-px overflow-hidden rounded-[18px] border border-white/10 bg-white/10">
          {whyCards.map((card) => (
            <div key={card.title} className="bg-card p-6">
              <div className="text-base font-bold">{card.title}</div>
              <p className="mt-2 mb-0 text-sm leading-[1.55] text-[oklch(0.74_0.01_160)]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
