import { PhotoSlot } from "@/components/photo-slot";
import { heroLead, industries, processSteps } from "@/lib/content";

const cards = [
  {
    href: "#technology",
    photo: "STP / WTP EQUIPMENT — SITE PHOTO",
    image: "/images/solutions/wastewater-water-treatment.webp",
    kicker: "STP / WTP",
    title: "Wastewater & Water Treatment",
    body: "Advanced biological and physical treatment built to DENR effluent standards. Membrane Bioreactors, Dissolved Air Flotation and modular underground STP setups.",
    cta: "Explore the technology →",
  },
  {
    href: "#water",
    photo: "RO DISPENSER — PRODUCT SHOT",
    image: "/images/solutions/commercial-drinking-water.webp",
    kicker: "RO / UF",
    title: "Commercial Drinking Water",
    body: "Direct pipe-in Reverse Osmosis and Ultrafiltration purifiers, high-capacity dispensers and automated ice makers for offices, factories and commercial pantries.",
    cta: "See the model range →",
  },
  {
    href: "#thermal",
    photo: "PYROLYSIS FURNACE — PRODUCT SHOT",
    image: "/images/solutions/solid-waste-thermal.webp",
    kicker: "PYROLYSIS",
    title: "Solid Waste & Thermal",
    body: "Industrial biomass furnaces and solid waste incinerators built with heavy-duty boiler steel and forced-draft blower technology for high-efficiency waste reduction.",
    cta: "Read the specifications →",
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-paper px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,110px)] text-paper-ink"
    >
      <div className="mx-auto max-w-[1280px]">
        <p className="mb-[clamp(28px,4vw,48px)] max-w-[62ch] text-[16.5px] leading-[1.6] text-[oklch(0.42_0.012_160)] lg:hidden">
          {heroLead}
        </p>
        <div className="mb-[clamp(32px,4vw,54px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-end gap-7">
          <div>
            <div className="font-mono text-[11.5px] tracking-[0.14em] text-[oklch(0.48_0.09_150)]">
              01 — CORE SOLUTIONS
            </div>
            <h2 className="mt-4 max-w-[18ch] text-balance text-[clamp(30px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-0.032em]">
              Three lines of infrastructure. One accountable team.
            </h2>
          </div>
          <p className="m-0 max-w-[46ch] text-[16.5px] leading-[1.6] text-[oklch(0.42_0.012_160)]">
            Comprehensive environmental engineering and sanitation technologies
            for commercial, industrial and municipal facilities — specified,
            fabricated, installed and commissioned in-house.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="block overflow-hidden rounded-[20px] border border-[oklch(0.88_0.01_150)] bg-white text-inherit transition hover:-translate-y-1 hover:border-[oklch(0.62_0.14_148)] hover:text-inherit"
            >
              <PhotoSlot
                label={card.photo}
                src={card.image}
                alt={card.title}
                className="h-[200px]"
                fit={card.href === "#technology" ? "cover" : "contain"}
              />
              <div className="px-6 pt-6 pb-[26px]">
                <div className="font-mono text-[11px] tracking-[0.12em] text-[oklch(0.48_0.09_150)]">
                  {card.kicker}
                </div>
                <h3 className="mt-2.5 mb-2.5 text-[22px] font-bold tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] text-[oklch(0.44_0.012_160)]">
                  {card.body}
                </p>
                <div className="mt-[18px] text-sm font-bold text-[oklch(0.44_0.13_150)]">
                  {card.cta}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-[clamp(40px,5vw,72px)] border-t border-[oklch(0.88_0.01_150)] pt-[clamp(32px,4vw,48px)]">
          <div className="mb-6 font-mono text-[11.5px] tracking-[0.14em] text-[oklch(0.48_0.09_150)]">
            HOW WE WORK
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[18px]">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="border-l-2 border-[oklch(0.62_0.14_148)] py-1 pl-[18px]"
              >
                <div className="font-mono text-xs text-[oklch(0.55_0.09_150)]">
                  {step.n}
                </div>
                <div className="mt-2 text-[19px] font-bold tracking-[-0.02em]">
                  {step.title}
                </div>
                <p className="mt-2 mb-0 text-[14.5px] leading-[1.55] text-[oklch(0.45_0.012_160)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(32px,4vw,48px)] flex flex-wrap items-center gap-2.5">
          <span className="mr-2 font-mono text-[11.5px] tracking-[0.14em] text-[oklch(0.48_0.09_150)]">
            INDUSTRIES SERVED
          </span>
          {industries.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[oklch(0.86_0.012_150)] bg-white px-4 py-2 text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
