export type ProductGroup =
  | "crates"
  | "nets"
  | "cabin"
  | "coolers"
  | "packing"
  | "kits";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  group: ProductGroup;
  shortDescription: string;
  scenario: string;
  description: string;
  features: string[];
  featured?: boolean;
  kitIncludes?: string[];
};

export type Kit = {
  slug: string;
  name: string;
  price: number;
  tagline: string;
  scenario: string;
  description: string;
  features: string[];
  includes: string[];
};
