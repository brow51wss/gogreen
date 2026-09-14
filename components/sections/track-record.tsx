import { PhotoSlot } from "@/components/photo-slot";
import { partnerPhotos, projects } from "@/lib/content";

export function TrackRecord() {
  return (
    <section
      id="track"
      className="bg-paper px-[clamp(16px,4vw,40px)] py-[clamp(56px,8vw,110px)] text-paper-ink"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="font-mono text-[11.5px] tracking-[0.14em] text-[oklch(0.48_0.09_150)]">
          05 — TRACK RECORD
        </div>
        <h2 className="mt-4 max-w-[20ch] text-balance text-[clamp(30px,4.4vw,54px)] leading-[1.02] font-extrabold tracking-[-0.032em]">
          Verified by what is running right now.
        </h2>
        <p className="mt-5 max-w-[60ch] text-[16.5px] leading-[1.6] text-[oklch(0.42_0.012_160)]">
          We bridge high-tech global manufacturing and local infrastructure —
          every imported machine is custom-configured for the domestic 60Hz grid
          and Philippine civil engineering standards.
        </p>

        <div className="mt-[clamp(30px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[20px] border border-[oklch(0.88_0.01_150)] bg-white"
            >
              <PhotoSlot
                label={project.photo}
                src={project.image}
                alt={project.title}
                variant={project.variant === "green" ? "green" : "light"}
                className="h-[200px]"
              />
              <div className="px-[22px] pt-[22px] pb-6">
                <div className="font-mono text-[11px] tracking-[0.1em] text-[oklch(0.48_0.09_150)]">
                  {project.place}
                </div>
                <h3 className="mt-2.5 mb-2 text-[19px] font-bold tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[oklch(0.45_0.012_160)]">
                  {project.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[clamp(40px,5vw,72px)] border-t border-[oklch(0.88_0.01_150)] pt-[clamp(32px,4vw,48px)]">
          <div className="mb-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-end gap-7">
            <div>
              <div className="font-mono text-[11.5px] tracking-[0.14em] text-[oklch(0.48_0.09_150)]">
                GLOBAL TECHNICAL ALLIANCE
              </div>
              <h3 className="mt-3.5 max-w-[20ch] text-[clamp(24px,2.8vw,34px)] leading-[1.1] font-extrabold tracking-[-0.028em]">
                We negotiate with the chairman, not a reseller.
              </h3>
            </div>
            <p className="m-0 max-w-[50ch] text-[15.5px] leading-[1.6] text-[oklch(0.42_0.012_160)]">
              Direct relationships with Wanze Shengshi and Weifang Hengyuan
              secure priority supply of parts and equipment, so critical
              components stay available and your system stays running.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4">
            {partnerPhotos.map((item) => (
              <figure key={item.photo} className="m-0">
                <PhotoSlot
                  label={item.photo}
                  src={item.image}
                  alt={item.photo}
                  className="h-[180px] rounded-2xl"
                />
                <figcaption className="mt-2.5 text-[13.5px] leading-[1.5] text-[oklch(0.45_0.012_160)]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
