import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-paper px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,110px)] text-paper-ink"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="font-mono text-[11.5px] tracking-[0.14em] text-[oklch(0.48_0.09_150)]">
          07 — FAQ
        </div>
        <h2 className="mt-4 mb-[clamp(28px,3.5vw,44px)] max-w-[20ch] text-balance text-[clamp(30px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-0.032em]">
          Questions engineers and facility managers ask first.
        </h2>
        <div className="flex flex-col gap-2.5">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="rounded-[14px] border border-[oklch(0.88_0.01_150)] bg-white"
              open={i === 0}
            >
              <summary className="flex items-center justify-between gap-5 px-[22px] py-5 text-[17px] font-semibold tracking-[-0.015em]">
                {item.q}
                <span className="plus flex-none text-[22px] font-normal text-[oklch(0.48_0.09_150)] transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="m-0 px-[22px] pb-[22px] text-[15.5px] leading-[1.62] text-[oklch(0.42_0.012_160)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
