import { kits } from "./kits";
import type { Kit, Product, ProductGroup } from "./types";

export const groupLabels: Record<ProductGroup, string> = {
  crates: "Crates",
  nets: "Nets",
  cabin: "Cabin",
  coolers: "Coolers",
  packing: "Packing",
  kits: "Kits",
};

export const products: Product[] = [
  {
    id: "tc-01",
    slug: "collapsible-trunk-organizer",
    name: "Collapsible Trunk Organizer",
    price: 42,
    group: "crates",
    featured: true,
    shortDescription:
      "Three-bay fabric organizer that stands grocery bags instead of letting them slide.",
    scenario:
      "The first corner sends a bag of oranges into the spare-tire well.",
    description:
      "Rigid-base fabric walls hold their shape empty, so bags stay in bays instead of becoming a single pile. Mesh side pockets take the jumper-cable pouch or a torch. It folds to about two inches when you need the whole floor for a suitcase. This is not a hard crate — if you stack firewood or a wet tarp, use the folding camp crate.",
    features: [
      "Open size about 24 × 14 × 12 in — measure cargo width first",
      "Holds standing grocery bags, a soft cooler, and a pair of shoes",
      "Will not hold a full-size spare, a standing hard cooler, or lumber",
      "Non-slip pads on the base; collapses to about 2 in high",
    ],
  },
  {
    id: "tc-02",
    slug: "fold-flat-boot-crate",
    name: "Fold-Flat Boot Crate",
    price: 36,
    group: "crates",
    featured: true,
    shortDescription:
      "Plastic-panel crate that folds flat and stands up for mixed hatch loads.",
    scenario:
      "You need something that can take a wet bag and still fold out of the way on Sunday night.",
    description:
      "Hinged plastic panels lock into a crate, then unclip and fold into a slab you can slide behind a seat. It handles bottles and a dirty camp stove better than fabric organizers. The open lattice sides will not hide contents from the rear window, and it will not sit neatly on a steeply sloped sedan floor without a liner underneath.",
    features: [
      "About 18 × 14 × 11 in open; folds to a 2 in slab",
      "Holds bottles, a stove bag, or a folded camp chair",
      "Lattice sides leak small parts — do not use for screws or trail mix",
      "Measure hatch height; the crate needs a near-flat cargo floor",
    ],
  },
  {
    id: "tc-03",
    slug: "hatch-cargo-net",
    name: "Hatch Cargo Net",
    price: 24,
    group: "nets",
    featured: true,
    shortDescription:
      "Four-hook mesh net that keeps a jacket, chair, or boots from sliding on the floor.",
    scenario:
      "A folding chair and a pair of boots travel the length of the boot every time you brake.",
    description:
      "The net stretches across the cargo opening and clips to four hook points so light gear stays put. It is for jackets, a camp chair, or a first-aid pouch — not a tool chest. If your hatch has no cargo hooks, you will need the tie-down strap set or the envelope net that sits on the floor instead.",
    features: [
      "Fits most hatches with four cargo hooks; measure hook-to-hook span",
      "Holds a jacket, folding chair, or boots against the opening",
      "Fails on a 40 lb tool bag or anything with sharp corners that cut mesh",
      "Not a child restraint and not a pet barrier",
    ],
  },
  {
    id: "tc-04",
    slug: "envelope-trunk-net",
    name: "Envelope Trunk Net",
    price: 22,
    group: "nets",
    shortDescription:
      "Floor envelope net for the pouch, ice scraper, and other bits that hide under bags.",
    scenario:
      "The ice scraper and a first-aid pouch vanish under the first grocery bag.",
    description:
      "This is a shallow envelope that sits on the cargo floor, not a wall-to-wall net. Slide in the scraper, a hi-vis vest, and the pouch you want to find without unloading the hatch. It will not hold a crate or stop a cooler from sliding. If you need to pin bulky gear, use the hatch cargo net.",
    features: [
      "About 24 × 10 in envelope — measure the floor in front of the seatbacks",
      "Fits a scraper, vest, and a small pouch",
      "Will not hold a crate, cooler, or anything taller than about 4 in",
      "Needs a relatively flat floor; useless on a steep spare-tire hump",
    ],
  },
  {
    id: "tc-05",
    slug: "seat-back-organizer",
    name: "Seat-Back Organizer",
    price: 28,
    group: "cabin",
    featured: true,
    shortDescription:
      "Hangs from headrest posts for water, a map, tissues, and the charging cable.",
    scenario:
      "The water bottle rolls under the driver's seat every time you turn.",
    description:
      "Two straps loop over most headrest posts and drop pockets where rear passengers can reach them. A mesh bottle pocket and a flat map pocket cover the usual road-trip kit. It will not fit seats without posts, and a thick tablet in a keyboard case will not sit in the flat pocket. For crayons and a sippy cup, add the kid seat tidy.",
    features: [
      "Fits headrest posts about 4–7 in apart — measure the gap first",
      "Holds a water bottle, tissues, a folded map, and a thin cable",
      "Will not fit bucket seats without posts, or most captain's chairs with monitors",
      "Do not put hot drinks in the bottle pocket on a hard stop",
    ],
  },
  {
    id: "tc-06",
    slug: "soft-cooler-tote",
    name: "Soft Cooler Tote",
    price: 38,
    group: "coolers",
    featured: true,
    shortDescription:
      "Carry-in soft cooler that sits in a trunk bay and lifts out at the picnic table.",
    scenario:
      "Milk and a six-pack warm up because the hard cooler is too tall for this hatch.",
    description:
      "A soft tote fits a trunk organizer bay and still has handles you can take into a shop. It keeps a small grocery cold-run or picnic drinks for a few hours with a frozen pack — it is not a multi-day ice chest. If you need a tote that stands on its own in a seat footwell, look at the insulated food tote.",
    features: [
      "About 12 × 8 × 10 in; check the organizer bay or seat footwell",
      "Fits drinks, a cheese pack, or a few frozen items with an ice pack",
      "Will not take a 12-pack upright, and it is not leakproof if you overfill with meltwater",
      "Wipe the liner; do not machine-wash the foam walls",
    ],
  },
  {
    id: "tc-07",
    slug: "car-packing-cubes",
    name: "Car Packing Cubes, 3-pack",
    price: 26,
    group: "packing",
    shortDescription:
      "Three cubes so clothes stay in one crate instead of filling the whole hatch.",
    scenario:
      "A weekend bag explodes the minute you open it to find a sweater.",
    description:
      "These cubes are for the car, not an airline carry-on race. Pack shirts in one, wash in another, and leave the third for shoes that should not touch clothes. They sit inside the collapsible organizer or the weekend duffel. They will not compress bulky jackets — use the compression cube set for that.",
    features: [
      "Three cubes: about 14 × 10, 12 × 9, and 10 × 7 in",
      "Fit a weekend of clothes for one person, or shoes in the smallest cube",
      "Will not swallow a puffer jacket; use compression cubes",
      "Mesh lids so you can see contents without unpacking the hatch",
    ],
  },
  {
    id: "tc-08",
    slug: "grocery-hold-bin",
    name: "Grocery Hold Bin",
    price: 32,
    group: "crates",
    shortDescription:
      "Open bin that keeps paper bags standing on the drive home.",
    scenario:
      "Paper bags slump and cans roll the length of the boot before you leave the lot.",
    description:
      "A lower, open bin is easier to load at the cart than a tall organizer with lids. Stand bags in it, drop the hatch, and drive. It is shorter than the collapsible organizer, so tall cereal boxes still poke out. Combine with the organizer if you want a covered bay for the stuff that lives in the car.",
    features: [
      "About 16 × 12 × 10 in — measure between wheel wells",
      "Holds two or three grocery bags standing",
      "Bags taller than the walls still tip on a hard stop",
      "Open top; not for hiding contents from the rear window",
    ],
  },
  {
    id: "tc-09",
    slug: "trunk-lid-net",
    name: "Trunk Lid Net",
    price: 18,
    group: "nets",
    shortDescription:
      "Shallow net on the underside of the hatch for the vest, cloth, and registration copy.",
    scenario:
      "The high-vis vest lives on the floor and gets buried the first time you shop.",
    description:
      "This net mounts to the inside of the hatch lid, not the cargo floor. Keep the vest, a glass cloth, and papers you want without unloading. Your hatch needs existing loops or you will be adding hooks — we do not include drill hardware, and many plastic lids should not be drilled. If you cannot find mount points, use the envelope floor net instead.",
    features: [
      "Fits lids with four small loops or cargo-net points — look up before you buy",
      "Holds a vest, cloth, and a slim document pouch",
      "Will not hold a first-aid kit that is thicker than about 2 in",
      "Do not drill a plastic hatch lid; skip this if you have no loops",
    ],
  },
  {
    id: "tc-10",
    slug: "folding-camp-crate",
    name: "Folding Camp Crate",
    price: 34,
    group: "crates",
    featured: true,
    shortDescription:
      "Ventilated folding crate for dirty camp kit that should not live in a fabric organizer.",
    scenario:
      "Muddy mugs and a stove bag soak the fabric organizer you also use for groceries.",
    description:
      "This crate is the dirty-job sibling of the fold-flat boot crate: same idea, more ventilation, happier with wet kit. Use it at the trailhead, then fold it when the weekend is over. Small parts fall through the lattice. It is not a seat, and it is not rated as a pet carrier.",
    features: [
      "About 18 × 14 × 11 in open, same fold-flat idea as the boot crate",
      "Holds mugs, a stove bag, and a rolled pad",
      "Lattice will not hold cutlery or snacks",
      "Wipe down; not a sealed dry box",
    ],
  },
  {
    id: "tc-11",
    slug: "kid-seat-tidy",
    name: "Kid Seat Tidy",
    price: 24,
    group: "cabin",
    shortDescription:
      "Smaller seat-back tidy for crayons, wipes, and a sippy cup.",
    scenario:
      "Wipes and crayons live in the seat gap, and the cup ends up on the floor.",
    description:
      "A shorter organizer than the adult seat-back, with pockets sized for wipes, a small bottle, and crayons. It hangs from the same headrest posts. It will not hold a full-size tablet in a thick case, and it is not a toy that should dangle in an active airbag zone — hang it on the back of the front seat, not the side of a child's own seat if that blocks a belt path.",
    features: [
      "Fits the same 4–7 in headrest post spacing as the seat-back organizer",
      "Holds crayons, wipes, a small bottle, and a thin coloring pad",
      "Will not take a tablet with a bulky case",
      "Keep it off belt paths and out of airbag zones",
    ],
  },
  {
    id: "tc-12",
    slug: "insulated-food-tote",
    name: "Insulated Food Tote",
    price: 30,
    group: "coolers",
    shortDescription:
      "Taller insulated tote for a casserole, sandwiches, or the cold grocery bag.",
    scenario:
      "A dish for a potluck has to ride upright and not sweat onto the seat.",
    description:
      "Taller than the soft cooler tote, with a zip top that suits a covered dish or a sandwich box. It stands in a footwell or a trunk bay. It is still a soft tote: it will not keep ice for a full day in July, and a leaking casserole will soak the liner. For drinks on a trailhead, the softer cooler tote is easier to carry.",
    features: [
      "About 14 × 9 × 12 in — measure the footwell or organizer bay",
      "Fits a covered dish, sandwich box, or a small grocery cold-run",
      "Not a multi-day ice chest; use ice packs, not loose ice",
      "Wipe the liner after anything wet",
    ],
  },
  {
    id: "tc-13",
    slug: "boot-base-organizer",
    name: "Boot Base Organizer",
    price: 48,
    group: "crates",
    featured: true,
    shortDescription:
      "Wide low organizer that covers the cargo floor so small kit cannot hide in the well.",
    scenario:
      "Cables, a pump, and a grocery bag all share one anonymous pile on the floor.",
    description:
      "This is the wide, shallow tray — more floor coverage than the collapsible organizer, less height. Dividers keep the pump, a pouch, and bags in their own bays. It needs a nearly rectangular cargo floor; it fights a steeply sloped sedan trunk. If you only have room for one piece, this is the everyday base. Add a cargo net for things that bounce.",
    features: [
      "About 36 × 14 × 8 in — measure width between wheel wells first",
      "Holds a pump, pouch, bags, and a folded blanket in separate bays",
      "Too wide for many small hatchbacks; too shallow for standing bottles",
      "Not waterproof; add the boot liner if the floor gets wet",
    ],
  },
  {
    id: "tc-14",
    slug: "tie-down-strap-set",
    name: "Tie-Down Strap Set",
    price: 16,
    group: "nets",
    shortDescription:
      "Two nylon straps with S-hooks for a crate or cooler that still slides.",
    scenario:
      "The crate is right, but it still walks toward the bumper on the highway.",
    description:
      "Two straps, metal S-hooks, enough length for a compact cargo area. Hook to factory cargo points and cinch over a crate or cooler. They are not a recovery strap, not a tow rope, and not rated for a motorcycle. If you have no cargo hooks at all, these will not invent them.",
    features: [
      "Pair of straps; useful length about 4 ft each — measure hook-to-hook",
      "Holds a crate or soft cooler against sliding",
      "Not for towing, recovery, or anything heavier than ordinary trunk cargo",
      "Needs existing cargo hooks; we do not include bolt-in anchors",
    ],
  },
  {
    id: "tc-15",
    slug: "waterproof-boot-liner",
    name: "Waterproof Boot Liner",
    price: 44,
    group: "packing",
    shortDescription:
      "PVC cargo liner for wet dogs, muddy boots, and the leak that reaches carpet.",
    scenario:
      "A wet dog and muddy boots soak the factory carpet on the way home.",
    description:
      "A raised-edge liner sits on the cargo floor and catches water, sand, and melt. It is a generic rectangle with a slight kickup at the lip — not a molded, year-specific tray. You will trim or live with extra material in a small hatch. It will not cover seatbacks, and it will not replace a full all-weather kit for the cabin.",
    features: [
      "About 48 × 36 in before you fold the lip — measure floor length and width",
      "Catches wet dog, muddy boots, and meltwater",
      "Not a custom-molded liner; extra material bunches in small hatches",
      "Does not cover seatbacks or the hatch lid",
    ],
  },
  {
    id: "tc-16",
    slug: "weekend-duffel",
    name: "Weekend Duffel",
    price: 52,
    group: "packing",
    shortDescription:
      "A duffel that sits in a crate so clothes do not take the whole hatch.",
    scenario:
      "The overnight bag sprawls, and then there is no room for the cooler.",
    description:
      "Sized to sit in the fold-flat crate or beside the collapsible organizer, not to be the only bag in a road-trip van. One main compartment, a wet pocket, and handles you can grab without unloading the hatch. It is not a hiking pack and it is not a checked-luggage replacement for a week away.",
    features: [
      "About 22 × 12 × 12 in packed — check crate or organizer bay",
      "Fits a weekend of clothes for one person plus shoes in a cube",
      "Will not replace a 30 in suitcase or a framed hiking pack",
      "Wet pocket is a liner, not fully waterproof in a storm",
    ],
  },
  {
    id: "tc-17",
    slug: "emergency-boot-pouch",
    name: "Emergency Boot Pouch",
    price: 20,
    group: "packing",
    shortDescription:
      "Zip pouch for jumper cables, a torch, and the bits you want without unloading.",
    scenario:
      "Jumper cables live under a suitcase, so they are never the thing you can reach.",
    description:
      "A compact pouch that belongs in a net, an organizer bay, or the envelope net — not loose on the floor. It holds cables, a compact torch, and a pair of gloves. It does not include the cables, and it is not a full roadside kit with triangles and a compressor.",
    features: [
      "About 12 × 8 × 4 in — fits an organizer bay or envelope net",
      "Holds jumper cables, a compact torch, and gloves (sold separately)",
      "Will not take a full-size compressor or a gallon of washer fluid",
      "Keep it somewhere you can reach without unloading the hatch",
    ],
  },
  {
    id: "tc-18",
    slug: "compression-cube-set",
    name: "Compression Cube Set",
    price: 28,
    group: "packing",
    shortDescription:
      "Two compression cubes for jackets and bulky layers that overfill a crate.",
    scenario:
      "A puffer jacket takes the whole cube and then the crate will not close.",
    description:
      "Zip the second layer down so a jacket or spare linens take less height in the hatch. Use them with the car packing cubes, not instead of a crate. They will not shrink a sleeping bag to backpacking size, and over-compressing wired garments is a bad idea.",
    features: [
      "Two cubes, about 16 × 12 in before compression",
      "Suits a puffer, spare linens, or bulky knit layers",
      "Will not replace a stuff sack for a sleeping bag",
      "Leave a little loft; do not crush gear with electronics in the pockets",
    ],
  },
];

function kitAsProduct(kit: Kit): Product {
  return {
    id: `kit-${kit.slug}`,
    slug: kit.slug,
    name: kit.name,
    price: kit.price,
    group: "kits",
    featured: true,
    shortDescription: kit.tagline,
    scenario: kit.scenario,
    description: kit.description,
    features: kit.features,
    kitIncludes: kit.includes,
  };
}

export const kitProducts: Product[] = kits.map(kitAsProduct);

export const catalog: Product[] = [...products, ...kitProducts];

export function getProduct(slug: string): Product | undefined {
  return catalog.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return catalog.map((p) => p.slug);
}

export function getShopProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByGroup(group: ProductGroup): Product[] {
  if (group === "kits") return kitProducts;
  return products.filter((p) => p.group === group);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.group === product.group)
    .slice(0, limit);
}

export function getIncludedProducts(kit: Kit): Product[] {
  return kit.includes
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}
