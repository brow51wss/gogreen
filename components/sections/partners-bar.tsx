import { partners } from "@/lib/content";

export function PartnersBar() {
  return (
    <div className="overflow-hidden border-y border-white/9 bg-panel">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-[clamp(20px,4vw,44px)] px-[clamp(16px,4vw,40px)] py-4 font-mono text-[11.5px] tracking-[0.1em] text-[oklch(0.66_0.01_160)]">
        <span className="text-accent">ENGINEERING PARTNERS</span>
        {partners.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  );
}
