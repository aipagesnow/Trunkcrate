import imageMap from "@/lib/product-image-map.json";
import { getKit } from "@/lib/kits";

const map = imageMap as Record<string, string>;

export function getProductImagePath(slug: string): string | null {
  return map[slug] ?? null;
}

export function getKitImagePath(slug: string): string | null {
  return map[slug] ?? null;
}

export function resolveCatalogImagePath(slug: string): string | null {
  if (map[slug]) return map[slug];
  const kit = getKit(slug);
  if (kit) {
    for (const include of kit.includes) {
      if (map[include]) return map[include];
    }
  }
  return null;
}

export function hasCatalogImage(slug: string): boolean {
  return Boolean(resolveCatalogImagePath(slug));
}
