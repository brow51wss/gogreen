import { PhotoSlot } from "@/components/photo-slot";
import { furnacePoints, furnaceSpecs } from "@/lib/content";

export function Thermal() {
  return (
    <section
      id="thermal"
      className="border-t border-white/8 bg-ink-deep px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(30px,4vw,56px)]">
        <div>
          <div className="font-mono text-[11.5px] tracking-[0.14em] text-accent">
            04 — PYROLYSIS & FURNACES
          </div>
          <h2 className="mt-4 text-balance text-[clamp(30px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-0.032em]">
            720 kg of boiler steel that burns without smoke.
          </h2>
          <p className="mt-5 mb-0 max-w-[52ch] text-[16.5px] leading-[1.6] text-[oklch(0.76_0.01_160)]">
            The Model 003 Heavy-Duty Series is built for intense thermal
            decomposition and waste volume reduction in commercial, agricultural
            and industrial environments. A 1100 W forced-draft blower supplies
            enough oxygen for complete thermal breakdown, so combustion runs
            smokeless.
          </p>
          <ul className="mt-[26px] mb-0 flex list-none flex-col gap-3.5 p-0">
            {furnacePoints.map((point) => (
              <li
                key={point.title}
                className="flex gap-3 text-[15px] leading-[1.55] text-[oklch(0.82_0.008_160)]"
              >
                <span className="font-bold text-accent">—</span>
                <span>
                  <strong className="font-semibold text-fg">{point.title}</strong>{" "}
                  {point.body}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className="mt-7 inline-block rounded-full bg-accent px-[26px] py-3.5 text-[15px] font-bold text-accent-ink hover:bg-accent-hover hover:text-accent-ink"
          >
            Configure a furnace for my facility
          </a>
        </div>
        <div>
          <PhotoSlot
            label="MODEL 003 PYROLYSIS FURNACE — PRODUCT SHOT"
            src="/images/thermal/model-003-pyrolysis-furnace.webp"
            alt="Model 003 pyrolysis furnace"
            variant="dark"
            fit="contain"
            className="h-[clamp(220px,28vw,320px)] overflow-hidden rounded-[20px] border border-white/12"
          />
          <div className="mt-[18px] overflow-hidden rounded-[18px] border border-white/12 font-mono text-[13px]">
            <div className="border-b border-white/12 bg-card px-[18px] py-3.5 text-[11px] tracking-[0.12em] text-accent">
              TECHNICAL SPECIFICATIONS · MODEL 003
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-px bg-white/10">
              {furnaceSpecs.map(([label, value]) => (
                <div key={label} className="contents">
                  <div className="bg-[oklch(0.17_0.016_162)] px-[18px] py-3 text-[oklch(0.68_0.01_160)]">
                    {label}
                  </div>
                  <div className="bg-[oklch(0.17_0.016_162)] px-[18px] py-3 text-[oklch(0.93_0.006_140)]">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
