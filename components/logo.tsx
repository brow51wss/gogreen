export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const ring = size === "sm" ? "h-[26px] w-[26px]" : "h-[30px] w-[30px]";
  const dot = size === "sm" ? "h-[9px] w-[9px]" : "h-[11px] w-[11px]";

  return (
    <span className="flex items-center gap-[11px]">
      <span
        className={`${ring} grid place-items-center rounded-full border-2 border-accent`}
      >
        <span className={`${dot} rounded-full bg-accent`} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={
            size === "sm"
              ? "text-[15px] font-bold"
              : "text-[17px] font-extrabold tracking-[-0.02em]"
          }
        >
          GGPEP Co.
        </span>
        {size === "md" ? (
          <span className="mt-[3px] hidden font-mono text-[9.5px] tracking-[0.14em] text-[oklch(0.70_0.01_160)] sm:block">
            GO GREEN PH ENVIRONMENTAL
          </span>
        ) : null}
      </span>
    </span>
  );
}
