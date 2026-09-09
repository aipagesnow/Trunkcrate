import type { ProductGroup } from "@/lib/types";

export type Group = {
  slug: ProductGroup;
  name: string;
  blurb: string;
};

export const groups: Group[] = [
  {
    slug: "crates",
    name: "Crates & bins",
    blurb: "Fold-flat crates and compartment bins that keep bags upright on the cargo floor.",
  },
  {
    slug: "nets",
    name: "Nets & straps",
    blurb: "Hatch nets, envelope nets, lid nets, and tie-downs for things that should not slide.",
  },
  {
    slug: "cabin",
    name: "Cabin tidy",
    blurb: "Seat-back pockets and kid tidies so the rear seat is not a junk drawer.",
  },
  {
    slug: "coolers",
    name: "Coolers & food",
    blurb: "Soft cooler totes and insulated food bags that ride in a crate cell, then come inside.",
  },
  {
    slug: "packing",
    name: "Packing",
    blurb: "Cubes, compression sacks, and a weekend duffel sized for a hatch, not a hotel cart.",
  },
];

export function getGroup(slug: string): Group | undefined {
  return groups.find((g) => g.slug === slug);
}

export function isProductGroup(value: string): value is ProductGroup {
  return groups.some((g) => g.slug === value) || value === "kits";
}
