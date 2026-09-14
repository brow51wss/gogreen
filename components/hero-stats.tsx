import { heroStats } from "@/lib/content";

export function HeroStats({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
        {heroStats.map((stat) => (
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
  );
}
