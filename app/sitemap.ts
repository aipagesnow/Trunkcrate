import type { MetadataRoute } from "next";
import { getAllKitSlugs } from "@/lib/kits";
import { getShopProducts } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/kits",
    "/shop",
    "/about",
    "/contact",
    "/shipping",
    "/privacy",
    "/terms",
    "/cart",
  ];

  const kitRoutes = getAllKitSlugs().map((slug) => `/kits/${slug}`);
  const productRoutes = getShopProducts().map((p) => `/products/${p.slug}`);

  return [...staticRoutes, ...kitRoutes, ...productRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
