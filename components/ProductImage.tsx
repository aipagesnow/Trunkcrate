import { BrandMark } from "@/components/BrandMark";

type Props = {
  slug: string;
  name?: string;
  className?: string;
  priority?: boolean;
};

/** Branded placeholder until AliExpress → Ops Desk mapping swaps real photos. */
export function ProductImage({
  name,
  className = "",
}: Props) {
  const label = name || "Product";

  return (
    <div
      className={`relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-md border border-border bg-accent-soft px-4 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <BrandMark className="h-10 w-10 opacity-80" />
      <p className="font-display max-w-[14rem] text-sm leading-snug tracking-[-0.02em] text-foreground sm:text-base">
        {label}
      </p>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
        Photo coming soon
      </p>
    </div>
  );
}
