import type { Kit } from "./types";

export const kits: Kit[] = [
  {
    slug: "weekend-trip-kit",
    name: "Weekend Trip Kit",
    price: 106,
    tagline: "Cubes, a standing organizer, and a cooler for one overnight in the hatch.",
    scenario:
      "Two overnight bags, a grocery stop, and a cooler that used to roll into the wheel well.",
    description:
      "This kit keeps a weekend load in three jobs: packing cubes for clothes, a collapsible organizer so bags stand instead of sliding, and a soft cooler tote you can carry into the cabin. It is sized for a compact hatch or small SUV cargo floor, not a truck bed. If you are hauling camp furniture, look at the Camping Boot Kit instead.",
    features: [
      "Includes packing cubes (3-pack), collapsible trunk organizer, and soft cooler tote",
      "Organizer open size about 24 × 14 × 12 in — measure the cargo floor first",
      "Works for one or two people overnight; not a week-long family load",
      "Cubes fail if you need hanging clothes; use a duffel or the weekend duffel instead",
    ],
    includes: [
      "car-packing-cubes",
      "collapsible-trunk-organizer",
      "soft-cooler-tote",
    ],
  },
  {
    slug: "camping-boot-kit",
    name: "Camping Boot Kit",
    price: 144,
    tagline: "A folding crate, floor organizer, cargo net, and cooler for a trailhead load.",
    scenario:
      "Sleeping pads, a stove bag, and boots that used to migrate under the cooler every time you braked.",
    description:
      "Camp gear is bulky and dirty. This kit gives the dirty crate its own bay, holds loose kit against the hatch with a net, and keeps drinks in a tote you can lift out at camp. The boot-base organizer covers the floor so small parts do not vanish into the spare-tire well. It will not replace a roof box, and it will not hold a hard cooler that is taller than the hatch opening — measure height first.",
    features: [
      "Includes folding camp crate, hatch cargo net, soft cooler tote, and boot-base organizer",
      "Crate about 18 × 14 × 11 in open; folds flat when you need the whole floor",
      "Net needs four hook points in the cargo area — check your hatch before you buy",
      "Not for fuel cans or a standing 70-quart hard cooler",
    ],
    includes: [
      "folding-camp-crate",
      "hatch-cargo-net",
      "soft-cooler-tote",
      "boot-base-organizer",
    ],
  },
  {
    slug: "family-road-kit",
    name: "Family Road Kit",
    price: 114,
    tagline: "Seat-back tidy, a kid organizer, a grocery bin, and an insulated tote.",
    scenario:
      "Crumbs in the seat gap, a sippy cup on the floor, and groceries that tipped on the first ramp.",
    description:
      "Cabin clutter and trunk clutter are different jobs. This kit hangs snacks and wipes on the seat back, gives a second row a smaller tidy, and keeps grocery bags standing in the hatch next to an insulated tote for the cold stuff. It is for a sedan or crossover with rear seats, not a two-seater. If you only need the hatch, start with the Everyday Trunk Kit.",
    features: [
      "Includes seat-back organizer, kid seat tidy, grocery hold bin, and insulated food tote",
      "Seat-back hangs from most headrest posts — will not fit bucket seats without posts",
      "Grocery bin about 16 × 12 × 10 in; bags taller than that still tip",
      "Kid tidy is for small bottles and crayons, not a tablet with a thick case",
    ],
    includes: [
      "seat-back-organizer",
      "kid-seat-tidy",
      "grocery-hold-bin",
      "insulated-food-tote",
    ],
  },
  {
    slug: "everyday-trunk-kit",
    name: "Everyday Trunk Kit",
    price: 98,
    tagline: "Organizer, grocery bin, and cargo net for the hatch you use every week.",
    scenario:
      "A jumper-cable bag, two grocery runs, and a ball that rolls the length of the boot.",
    description:
      "Most trunks fail on ordinary Tuesdays, not on vacation. This kit stands bags in a collapsible organizer, gives a second bin for the stuff that lives in the car, and nets the bits that jump on hard stops. It folds down when you need the floor for a suitcase. Skip it if you need a waterproof liner for wet dogs or a crate that can sit in the rain — those are separate pieces.",
    features: [
      "Includes collapsible trunk organizer, hatch cargo net, and grocery hold bin",
      "Organizer plus bin need about 24 × 28 in of cargo floor — measure first",
      "Net is for light gear (jacket, ball, first-aid pouch), not a 40 lb tool bag",
      "Not a liner; spills still reach the carpet unless you add the boot liner",
    ],
    includes: [
      "collapsible-trunk-organizer",
      "hatch-cargo-net",
      "grocery-hold-bin",
    ],
  },
];

export function getKit(slug: string): Kit | undefined {
  return kits.find((k) => k.slug === slug);
}

export function getAllKitSlugs(): string[] {
  return kits.map((k) => k.slug);
}
