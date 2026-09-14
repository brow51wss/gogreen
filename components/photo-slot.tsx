import Image from "next/image";

type Variant = "light" | "dark" | "green";

const variants: Record<Variant, string> = {
  light:
    "bg-[repeating-linear-gradient(135deg,oklch(0.93_0.008_150)_0_10px,oklch(0.90_0.009_150)_10px_20px)] text-[oklch(0.46_0.012_160)] border-[oklch(0.84_0.012_150)]",
  dark: "bg-[repeating-linear-gradient(135deg,oklch(0.22_0.02_162)_0_10px,oklch(0.20_0.018_162)_10px_20px)] text-[oklch(0.72_0.012_160)] border-white/12",
  green:
    "bg-[linear-gradient(150deg,oklch(0.30_0.05_158),oklch(0.20_0.02_162))] text-accent border-transparent",
};

export function PhotoSlot({
  label,
  src,
  alt,
  className = "",
  variant = "light",
  fit = "cover",
}: {
  label: string;
  src?: string | readonly string[];
  alt?: string;
  className?: string;
  variant?: Variant;
  fit?: "cover" | "contain";
}) {
  const sources = src == null ? [] : Array.isArray(src) ? src : [src];
  const caption = alt ?? label.replaceAll("\n", " ");

  if (sources.length > 0) {
    const objectClass = fit === "contain" ? "object-contain" : "object-cover";
    const tone =
      variant === "dark"
        ? "bg-panel"
        : variant === "green"
          ? "bg-[oklch(0.22_0.03_158)]"
          : "bg-white";

    return (
      <div className={`relative overflow-hidden ${tone} ${className}`}>
        {sources.length === 1 ? (
          <Image
            src={sources[0]}
            alt={caption}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            className={objectClass}
          />
        ) : (
          <div className="absolute inset-0 grid grid-cols-2">
            {sources.map((item, index) => (
              <div key={item} className="relative min-w-0">
                <Image
                  src={item}
                  alt={`${caption} ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 210px"
                  className={objectClass}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`grid place-items-center border-b ${variants[variant]} ${className}`}
    >
      <span className="px-4 text-center font-mono text-[10.5px] leading-[1.7] tracking-[0.12em] whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}
