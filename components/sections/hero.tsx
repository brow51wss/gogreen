import { HeroVideo } from "@/components/sections/hero-video";
import { heroLead } from "@/lib/content";

const stats = [
  { value: "1–5+", label: "CMD BIOLOGICAL STP RANGE" },
  { value: "850°C+", label: "SMOKELESS PYROLYSIS CHAMBER" },
  { value: "99.99%", label: "BACTERIA REMOVAL, RO / UF LINE" },
  { value: "60Hz", label: "EVERY IMPORT RE-CALIBRATED FOR PH" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-[clamp(16px,4vw,40px)] pt-[clamp(56px,9vw,116px)] pb-[clamp(40px,6vw,76px)]"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,oklch(0.24_0.03_162)_0_14px,oklch(0.17_0.017_162)_14px_28px)] opacity-50" />
      <HeroVideo />
      <div className="relative mx-auto max-w-[1280px] [filter:drop-shadow(0_1px_2px_oklch(0_0_0/0.75))_drop-shadow(0_10px_28px_oklch(0_0_0/0.55))]">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/35 bg-accent/8 py-[7px] pr-[15px] pl-[11px] font-mono text-[11px] tracking-[0.1em] text-[oklch(0.84_0.13_148)] [text-shadow:0_1px_8px_oklch(0_0_0/0.7)]">
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          R.A. 9275 · DENR GES · LLDA COMPLIANT
        </div>
        <h1 className="mt-[26px] max-w-[16ch] text-balance text-[clamp(40px,7.6vw,92px)] leading-[0.96] font-extrabold tracking-[-0.035em] [text-shadow:0_2px_4px_oklch(0_0_0/0.7),0_8px_32px_oklch(0_0_0/0.45)]">
          Waste streams in.
          <br />
          <span className="text-accent">Compliant resources</span> out.
        </h1>
        <p className="mt-[26px] hidden max-w-[60ch] text-[clamp(16px,1.5vw,20px)] leading-[1.55] text-[oklch(0.78_0.01_160)] [text-shadow:0_1px_3px_oklch(0_0_0/0.85),0_6px_20px_oklch(0_0_0/0.55)] lg:block">
          {heroLead}
        </p>
        <div className="mt-[34px] flex flex-wrap gap-3">
          <a
            href="#quote"
            className="rounded-full bg-accent px-7 py-[15px] text-[15px] font-bold text-accent-ink shadow-[0_8px_24px_oklch(0_0_0/0.45)] hover:bg-accent-hover hover:text-accent-ink"
          >
            Request a site assessment
          </a>
          <a
            href="#solutions"
            className="rounded-full border border-white/22 bg-ink/35 px-7 py-[15px] text-[15px] font-semibold text-[oklch(0.94_0.006_140)] shadow-[0_8px_24px_oklch(0_0_0/0.45)] hover:border-accent hover:text-accent"
          >
            See what we build
          </a>
        </div>
        <div className="mt-[clamp(40px,6vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-[0_16px_40px_oklch(0_0_0/0.45)]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-panel px-[22px] pt-[22px] pb-5">
              <div className="text-[clamp(28px,3.4vw,40px)] font-extrabold tracking-[-0.03em] text-accent">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[11px] leading-[1.5] tracking-[0.08em] text-[oklch(0.70_0.01_160)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
