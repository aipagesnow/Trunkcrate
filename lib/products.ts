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
  {
    id: "tc-19",
    slug: "cargo-divider-bar",
    name: "Cargo Divider Bar",
    price: 29,
    group: "crates",
    shortDescription:
      "Telescopic bar that keeps a crate or cooler from sliding across the cargo floor.",
    scenario:
      "One hard brake and the cooler slides into the seatbacks.",
    description:
      "The bar springs between the side walls of the cargo area so a cooler or crate stays in its bay. Twist-lock ends grip painted metal better than soft plastic trim. It will not replace a full cargo net for jackets and chairs, and it needs nearly parallel side walls — many hatchbacks with tapered rears will not hold it.",
    features: [
      "Adjustable length about 28–43 in — measure wall-to-wall first",
      "Holds a cooler or crate from sliding forward on a stop",
      "Will not pin soft bags or jackets on their own",
      "Needs firm side walls; skips plastic trim that flexes",
    ],
  },
  {
    id: "tc-20",
    slug: "non-slip-boot-mat",
    name: "Non-Slip Boot Mat",
    price: 26,
    group: "packing",
    shortDescription:
      "Rubber-backed mat that stops crates and bags skating on a smooth cargo floor.",
    scenario:
      "Everything looks tidy until the first roundabout.",
    description:
      "A grippy mat under organizers and soft bags keeps them from skating on painted or plastic floors. Cut or fold the edges if your spare-tire cover sits proud. It will not waterproof a wet load — use the waterproof seat cover or a liner for muddy boots — and it will bunch on steeply sloped sedan floors.",
    features: [
      "About 40 × 30 in; trim or fold to fit your floor",
      "Helps crates and bags stay put on smooth hatch floors",
      "Not a waterproof liner for mud or melted ice",
      "Works best on flat floors; bunches on steep spare humps",
    ],
  },
  {
    id: "tc-21",
    slug: "backseat-cooler-organizer",
    name: "Backseat Cooler Organizer",
    price: 34,
    group: "coolers",
    shortDescription:
      "Soft cooler with seat straps so drinks stay behind the front seats, not in the boot.",
    scenario:
      "You want cold drinks within reach without opening the hatch every stop.",
    description:
      "Straps loop over the headrest posts so the cooler sits on the rear bench. Soft insulation holds a day of drinks with ice packs; it is not a hard cooler for a multi-day camp. If your rear seats lack posts, or you need the whole bench for passengers, use the soft cooler tote in the boot instead.",
    features: [
      "Fits headrest posts about 4–7 in apart",
      "Holds drinks and snacks for a day trip with ice packs",
      "Will not replace a hard cooler for multi-day ice",
      "Needs rear headrest posts; skips most captain chairs with screens",
    ],
  },
  {
    id: "tc-22",
    slug: "console-catch-all",
    name: "Console Catch-All Tray",
    price: 18,
    group: "cabin",
    shortDescription:
      "Small tray for coins, keys, and the charging cable that usually ends up in the cup holder.",
    scenario:
      "The cup holder is full of keys and the cable you need is under the seat.",
    description:
      "A shallow tray that sits in or beside the centre console so small items stay visible. Soft-touch edges keep coins from rattling as much as a hard plastic bin. It will not hold a large phone in a thick case, and it is not sized for every console — check the footprint against your cup-holder area first.",
    features: [
      "About 6 × 4 in tray — measure your console well",
      "Fits keys, coins, a thin cable, and lip balm",
      "Will not swallow a large phone in a rugged case",
      "Shallow sides; not a sealed bin for liquids",
    ],
  },
    {
    id: "tc-24",
    slug: "trunk-hook-pair",
    name: "Trunk Hook Pair",
    price: 14,
    group: "nets",
    shortDescription:
      "Two cargo hooks for bags that need a hang point when the hatch has none.",
    scenario:
      "Grocery bags tip over because the hatch has nowhere to clip a net.",
    description:
      "Two hooks mount to existing cargo loops or screw points so you can hang bags or clip a net. They are for light grocery loads, not a bike or a tool chest. If your hatch already has four solid hooks, buy the hatch cargo net instead.",
    features: [
      "Pair of hooks; check your cargo loop style before ordering",
      "Hang grocery bags or clip a light net",
      "Not rated for bikes, tool chests, or pet tethers",
      "Needs existing loops or approved mount points",
    ],
  },
  {
    id: "tc-25",
    slug: "soft-trunk-storage-bag",
    name: "Soft Trunk Storage Bag",
    price: 36,
    group: "crates",
    shortDescription:
      "Zippered soft bag for boots and spare clothes that still collapses when empty.",
    scenario:
      "Muddy shoes and a change of clothes need a closed bag, not an open crate.",
    description:
      "A zippered soft bag keeps boots and spare clothes contained without the bulk of a hard crate. Side handles make it easy to lift out at the destination. It will not stand open like a three-bay organizer for groceries, and it is not waterproof if you leave it in a flooded hatch.",
    features: [
      "About 22 × 14 × 12 in packed; collapses when empty",
      "Holds boots, a change of clothes, and a soft cooler",
      "Will not stand grocery bags like a bay organizer",
      "Water-resistant fabric, not a dry bag for standing water",
    ],
  },
  {
    id: "tc-26",
    slug: "car-trash-bin",
    name: "Car Trash Bin",
    price: 18,
    group: "cabin",
    shortDescription:
      "Hanging bin for wrappers and tissues so they stop collecting in the door pocket.",
    scenario:
      "The door pocket is full of wrappers and there is nowhere for a tissue.",
    description:
      "A small hanging bin that clips to a headrest or seatback so rubbish stays in one place. Lined for easy empty; it is for wrappers and tissues, not food waste on a hot day. It will not fit every seat shape — check the clip against your headrest post.",
    features: [
      "Clips to most headrest posts or seatbacks",
      "Sized for wrappers, tissues, and small rubbish",
      "Not for food waste left in a hot car",
      "Check clip fit; some captain chairs block the mount",
    ],
  },
  {
    id: "tc-27",
    slug: "mesh-grocery-bag-set",
    name: "Mesh Grocery Bag Set",
    price: 15,
    group: "packing",
    shortDescription:
      "Three mesh bags that stand in a trunk organizer instead of plastic that tips.",
    scenario:
      "Thin plastic bags tip and spill as soon as you close the hatch.",
    description:
      "Three reusable mesh bags with stiff bases so they stand in organizer bays. They fold small when empty. They will not replace a cooler for cold food, and heavy glass bottles still need a bay with a firm wall.",
    features: [
      "Set of three; each folds flat when empty",
      "Stiff base helps bags stand in organizer bays",
      "Not insulated — cold food still needs a cooler",
      "Heavy glass bottles need a firm bay wall",
    ],
  },
  {
    id: "tc-28",
    slug: "ice-pack-brick-duo",
    name: "Ice Pack Brick Duo",
    price: 14,
    group: "coolers",
    shortDescription:
      "Two hard ice bricks that fit flat in soft coolers without soaking the food.",
    scenario:
      "Loose ice melts into a puddle under the sandwiches.",
    description:
      "Two hard bricks freeze flat and sit beside food instead of drowning it. They work in the soft cooler tote and the backseat cooler. They will not keep a soft cooler cold for multi-day trips the way block ice in a hard cooler can.",
    features: [
      "Pair of hard bricks; freeze flat overnight",
      "Fits soft cooler tote and backseat cooler",
      "Not a substitute for block ice on multi-day trips",
      "Do not puncture; rinse and refreeze",
    ],
  },
  {
    id: "tc-29",
    slug: "waterproof-seat-cover",
    name: "Waterproof Seat Cover",
    price: 38,
    group: "packing",
    shortDescription:
      "Waterproof cover for muddy boots or a wet dog on the rear bench.",
    scenario:
      "Muddy boots and a wet dog turn the rear seat into a towel day.",
    description:
      "A waterproof cover that drapes the rear bench and catches mud and wet fur. Side flaps tuck into the seat gaps on most cars. It will not fit every captain-chair layout, and it is not a crash-rated pet restraint — use a harness or crate for that.",
    features: [
      "Fits most 40/60 and 60/40 rear benches — measure seat width",
      "Catches mud, wet fur, and damp boots",
      "May not fit captain chairs or seats with built-in belts oddly placed",
      "Not a pet crash restraint",
    ],
  },
  {
    id: "tc-30",
    slug: "camping-boot-bag",
    name: "Camping Boot Bag",
    price: 42,
    group: "packing",
    shortDescription:
      "Tall zip bag for hiking boots and damp kit that would wreck a soft duffel.",
    scenario:
      "Muddy boots and damp socks share a bag with clean clothes.",
    description:
      "A tall zip bag keeps hiking boots and damp layers away from clean clothes. Reinforced base takes wet soles better than a thin packing cube. It will not replace a waterproof dry bag for river crossings, and it is bulky when full — plan boot space in the hatch.",
    features: [
      "Tall zip bag sized for a pair of hiking boots plus damp layers",
      "Reinforced base for wet soles",
      "Not a sealed dry bag for submersion",
      "Bulky when full — leave hatch room",
    ],
  },
  {
    id: "tc-31",
    slug: "pet-cargo-barrier-net",
    name: "Pet Cargo Barrier Net",
    price: 35,
    group: "nets",
    shortDescription:
      "Mesh barrier that keeps a dog in the cargo area instead of climbing the seatbacks.",
    scenario:
      "The dog climbs the seatbacks the moment the hatch closes.",
    description:
      "A mesh barrier that mounts behind the rear seats so a dog stays in the cargo area. Adjustable straps fit many hatchbacks; measure height to the headliner. It is not a crash-tested crate, and it will not fit every SUV with a sloping roof without slack.",
    features: [
      "Adjustable straps — measure cargo opening height first",
      "Keeps most medium dogs from climbing seatbacks",
      "Not a crash-tested pet crate or harness",
      "May need extra tension on sloping SUV roofs",
    ],
  },
    {
    id: "tc-33",
    slug: "umbrella-boot-clip",
    name: "Umbrella Boot Clip",
    price: 12,
    group: "cabin",
    shortDescription:
      "Clip that keeps a wet umbrella off the seat and out of the footwell.",
    scenario:
      "A wet umbrella soaks the seat every time it rains.",
    description:
      "A simple clip that holds a folded umbrella against a seatback or cargo wall so drips stay off the fabric. It is for a compact umbrella, not a golf umbrella. Check the clip against your seat material so it does not mark leather.",
    features: [
      "Holds a compact folded umbrella",
      "Keeps drips off the seat fabric",
      "Not for full-size golf umbrellas",
      "Test on leather before long trips",
    ],
  },
  {
    id: "tc-34",
    slug: "multi-bay-lid-organizer",
    name: "Multi-Bay Lid Organizer",
    price: 46,
    group: "crates",
    shortDescription:
      "Four-bay organizer with lids so small parts stay in their bay on rough roads.",
    scenario:
      "Small parts jump bays every time you hit a rough road.",
    description:
      "Four fabric bays with lids keep small tools, cables, and snacks from jumping into one pile. Heavier than an open three-bay organizer, so measure hatch height. It will not replace a hard crate for wet or sharp gear.",
    features: [
      "Four lidded bays; open size about 26 × 14 × 12 in",
      "Keeps small parts from jumping bays",
      "Taller than open organizers — measure hatch height",
      "Not for wet tarps or sharp tools that cut fabric",
    ],
  },
  {
    id: "tc-35",
    slug: "folding-picnic-blanket",
    name: "Folding Picnic Blanket Tote",
    price: 28,
    group: "packing",
    shortDescription:
      "Blanket that folds into its own tote for roadside stops and boot-floor picnics.",
    scenario:
      "You need a clean surface for a roadside stop without packing a full camp kit.",
    description:
      "A picnic blanket that folds into a small tote you can stash beside a cooler. Water-resistant underside helps on damp grass; it is not a groundsheet for heavy rain. Too bulky to leave unfolded under a crate all week.",
    features: [
      "Folds into its own tote for the hatch",
      "Water-resistant underside for damp grass",
      "Not a heavy-rain groundsheet",
      "Pack away when using the full cargo floor",
    ],
  },
  {
    id: "tc-36",
    slug: "tire-well-tray",
    name: "Tire Well Organizer Tray",
    price: 24,
    group: "crates",
    shortDescription:
      "Shallow tray that uses the spare-tire well for the kit you want out of sight.",
    scenario:
      "The spare-tire well is empty space while the cargo floor is a mess.",
    description:
      "A shallow tray that sits in the spare-tire well for the kit you want hidden — jumper cables, a hi-vis vest, a small tool pouch. Measure the well diameter first; many temporary spares leave an odd shape. It will not hold a full-size spare on top of itself.",
    features: [
      "Shallow tray — measure spare-well diameter first",
      "Hides jumper cables, vest, and a small tool pouch",
      "May not fit temporary-spare wells with odd shapes",
      "Not a mount for a second spare",
    ],
  },

];

function kitAsProduct(kit: Kit): Product {
  const pieceTotal = kit.includes
    .map((slug) => products.find((p) => p.slug === slug)?.price ?? 0)
    .reduce((sum, n) => sum + n, 0);
  return {
    id: `kit-${kit.slug}`,
    slug: kit.slug,
    name: kit.name,
    price: pieceTotal > 0 ? pieceTotal : kit.price,
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

export function getKitPiecesTotal(kit: Kit): number {
  return getIncludedProducts(kit).reduce((sum, p) => sum + p.price, 0);
}
