"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { resolveCatalogImagePath } from "@/lib/product-images";

export type KitGalleryItem = {
  slug: string;
  name: string;
  label?: string;
};

type Props = {
  items: KitGalleryItem[];
  priority?: boolean;
};

export function KitGallery({ items, priority = false }: Props) {
  const slides = useMemo(() => {
    const seen = new Set<string>();
    const next: Array<KitGalleryItem & { src: string | null }> = [];
    for (const item of items) {
      const src = resolveCatalogImagePath(item.slug);
      const key = src || `missing:${item.slug}`;
      if (seen.has(key)) continue;
      seen.add(key);
      next.push({ ...item, src });
    }
    return next;
  }, [items]);

  const [active, setActive] = useState(0);
  const current = slides[active] ?? slides[0];

  if (!current) return null;

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-[0_1px_2px_rgba(26,28,30,0.04)] sm:p-2.5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-accent-soft">
          {current.src ? (
            <Image
              key={current.slug}
              src={current.src}
              alt={current.name}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-center transition duration-300"
              priority={priority && active === 0}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
              <BrandMark className="h-10 w-10 opacity-80" />
              <p className="font-display text-base text-foreground">
                {current.name}
              </p>
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-asphalt/55 to-transparent px-4 pb-3 pt-10">
            <p className="text-sm font-medium text-white drop-shadow">
              {current.label || current.name}
            </p>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
          {slides.map((slide, index) => {
            const selected = index === active;
            return (
              <button
                key={`${slide.slug}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${slide.name}`}
                aria-pressed={selected}
                className={`group/thumb relative aspect-square overflow-hidden rounded-lg border bg-accent-soft transition duration-200 hover:z-10 hover:scale-[1.06] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  selected
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-border hover:border-accent/50"
                }`}
              >
                {slide.src ? (
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover object-center transition duration-200 group-hover/thumb:scale-110"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center p-2 text-center text-[10px] font-medium text-muted">
                    {slide.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
