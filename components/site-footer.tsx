import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-ink-footer px-[clamp(16px,4vw,40px)] py-10">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5">
        <div className="flex flex-wrap items-center gap-[11px]">
          <Logo size="sm" />
          <span className="font-mono text-[11px] tracking-[0.08em] text-[oklch(0.60_0.01_160)]">
            GO GREEN PH ENVIRONMENTAL PRODUCTS
          </span>
        </div>
        <div className="font-mono text-[11px] tracking-[0.08em] text-[oklch(0.58_0.01_160)]">
          © 2026 GGPEP CO. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
