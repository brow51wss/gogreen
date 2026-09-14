import { PhotoSlot } from "@/components/photo-slot";
import { featuredUnits, techCards } from "@/lib/content";

export function Technology() {
  return (
    <section
      id="technology"
      className="bg-ink px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="font-mono text-[11.5px] tracking-[0.14em] text-accent">
          02 — TREATMENT TECHNOLOGY
        </div>
        <h2 className="mt-4 max-w-[20ch] text-balance text-[clamp(30px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-0.032em]">
          The equipment behind a compliant discharge point.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[16.5px] leading-[1.6] text-[oklch(0.76_0.01_160)]">
          Every process below is deployed as part of a single engineered train —
          sized to your flow, not sold from a catalogue.
        </p>

        <div className="mt-[clamp(34px,4.5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-[18px]">
          {techCards.map((card) => (
            <article
              key={card.code}
              className="overflow-hidden rounded-[18px] border border-white/10 bg-card transition hover:border-accent/50"
            >
              {"image" in card && card.image ? (
                <PhotoSlot
                  label={card.title}
                  src={card.image}
                  alt={card.title}
                  variant="dark"
                  className="h-[180px]"
                />
              ) : null}
              <div className="p-[26px]">
                <div className="font-mono text-[11px] tracking-[0.1em] text-accent">
                  {card.code}
                </div>
                <h3 className="mt-3 mb-2.5 text-xl font-bold tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.62] text-[oklch(0.76_0.01_160)]">
                  {card.body}
                </p>
                <p className="mt-3.5 mb-0 font-mono text-[11.5px] leading-[1.6] text-[oklch(0.62_0.01_160)]">
                  {card.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
          {featuredUnits.map((unit) => (
            <article
              key={unit.title}
              className={`overflow-hidden rounded-[20px] border ${
                unit.accent === "green"
                  ? "border-accent/28 bg-[linear-gradient(160deg,oklch(0.22_0.04_158),oklch(0.18_0.018_162))]"
                  : "border-[oklch(0.80_0.13_210/0.3)] bg-[linear-gradient(160deg,oklch(0.22_0.035_205),oklch(0.18_0.018_162))]"
              }`}
            >
              <PhotoSlot
                label={unit.photo}
                src={unit.image}
                alt={unit.title}
                variant={unit.accent === "green" ? "light" : "dark"}
                fit="contain"
                className="h-[280px]"
              />
              <div className="px-[26px] pt-[26px] pb-7">
                <div
                  className={`font-mono text-[11px] tracking-[0.1em] ${
                    unit.accent === "green"
                      ? "text-accent"
                      : "text-[oklch(0.80_0.13_210)]"
                  }`}
                >
                  {unit.label}
                </div>
                <h3 className="mt-3 mb-2.5 text-2xl font-extrabold tracking-[-0.025em]">
                  {unit.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.62] text-[oklch(0.78_0.01_160)]">
                  {unit.body}
                </p>
                <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-px overflow-hidden rounded-xl border border-white/12 bg-white/12">
                  {unit.specs.map((spec) => (
                    <div key={spec.k} className="bg-card p-3.5">
                      <div className="font-mono text-[10px] tracking-[0.1em] text-[oklch(0.65_0.01_160)]">
                        {spec.k}
                      </div>
                      <div className="mt-[5px] text-[15px] font-bold">{spec.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
