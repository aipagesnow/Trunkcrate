import Image from "next/image";
import { getKitImagePath, getProductImagePath } from "@/lib/product-images";
import { getKit } from "@/lib/kits";

type Props = {
  slug: string;
  name?: string;
  className?: string;
  priority?: boolean;
};

export function ProductImage({
  slug,
  name,
  className = "",
  priority = false,
}: Props) {
  const src = getKit(slug) ? getKitImagePath(slug) : getProductImagePath(slug);

  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-md bg-accent-soft ${className}`}
    >
      <Image
        src={src}
        alt={name || slug}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center"
        priority={priority}
      />
    </div>
  );
}
