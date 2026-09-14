import { PhotoSlot } from "@/components/photo-slot";
import { waterHighlights, waterProducts } from "@/lib/content";

export function Water() {
  return (
    <section
      id="water"
      className="bg-paper px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,110px)] text-paper-ink"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-end gap-7">
          <div>
            <div className="font-mono text-[11.5px] tracking-[0.14em] text-[oklch(0.48_0.09_150)]">
              03 — DRINKING WATER SYSTEMS
            </div>
            <h2 className="mt-4 max-w-[18ch] text-balance text-[clamp(30px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-0.032em]">
              Industrial-grade filtration, at the drinking glass.
            </h2>
          </div>
          <p className="m-0 max-w-[46ch] text-[16.5px] leading-[1.6] text-[oklch(0.42_0.012_160)]">
            RO and UF dispensers with instant heating, compressor cooling, ice
            making, hydrogen enrichment and sparkling options — direct pipeline
            or manual-fill.
          </p>
        </div>

        <div className="mt-[clamp(30px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-px overflow-hidden rounded-2xl border border-[oklch(0.88_0.01_150)] bg-[oklch(0.88_0.01_150)]">
          {waterHighlights.map((item) => (
            <div key={item.title} className="bg-white p-5">
              <div className="text-[15px] font-bold">{item.title}</div>
              <p className="mt-1.5 mb-0 text-[13.5px] leading-[1.5] text-[oklch(0.46_0.012_160)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[18px]">
          {waterProducts.map((product) => (
            <div
              key={product.title}
              className="overflow-hidden rounded-[18px] border border-[oklch(0.88_0.01_150)] bg-white transition hover:border-[oklch(0.62_0.14_148)]"
            >
              <PhotoSlot
                label={product.photo}
                src={product.image}
                alt={product.title}
                className="h-[190px]"
                fit="contain"
              />
              <div className="px-5 pt-5 pb-[22px]">
                <h3 className="m-0 text-[17.5px] font-bold tracking-[-0.018em]">
                  {product.title}
                </h3>
                <p className="mt-2 mb-0 font-mono text-[11px] tracking-[0.08em] text-[oklch(0.48_0.09_150)]">
                  {product.models}
                </p>
                <p className="mt-2.5 mb-0 text-sm leading-[1.55] text-[oklch(0.45_0.012_160)]">
                  {product.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
