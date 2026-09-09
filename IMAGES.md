# Trunk Crate product images

## Flippa rule (2026-09-09)

Supplier shots with **watermarks**, **dimension overlays**, marketplace collages, or third-party brand patches must not ship on PDPs/shop cards.

Those SKUs use the branded **Photo coming soon** placeholder until clean packshots or honest lifestyle photos are ready.

## Currently mapped (kept after scrub)

See `lib/product-image-map.json` — only clean / generic-but-ok shots.

## Scrubbed (placeholder until replaced)

- soft-cooler-tote, insulated-food-tote (BEECHIP)
- non-slip-boot-mat (NovaAcc)
- boot-base-organizer, multi-bay-lid-organizer (size overlays)
- fold-flat-boot-crate, soft-trunk-storage-bag (dim arrows)
- grocery-hold-bin, folding-camp-crate, camping-boot-kit
- envelope-trunk-net, pet-cargo-barrier-net, seat-gap-filler
- car-trash-bin, waterproof-boot-liner, trunk-lid-net
- led-cargo-light, camping-boot-bag, compression-cube-set
- trunk-hook-pair, folding-picnic-blanket (4monster), kid-seat-tidy

Raw supplier files may still sit under `public/images/products/` for Ops reference; they are not linked from the map.

## Clean gallery rescues (2026-09-09)

Pulled from Exact AE product galleries (no watermark/dims):

- camping-boot-bag
- multi-bay-lid-organizer
- folding-camp-crate (+ camping-boot-kit)

Remaining scrubbed SKUs still placeholder — Exact supplier frames are watermarked/annotated only. Need Near remap to clean listings or lifestyle shoots.

## Near-remap pass (2026-09-09)

Vision-audited remaining placeholder SKUs against `/workspace/trunkcrate-img-alts` and search-cache thumbs (`trunkcrate-near-cache-dl`). Flippa rule unchanged: no watermarks, cm/dimension overlays, size-text banners, marketplace collages, or third-party brand patches. **No AI packshots.**

- **14 remapped** to clean AE photos → `public/images/products/<slug>.jpg` + `lib/product-image-map.json`
- **4 left as placeholder** (no clean near match): `insulated-food-tote`, `fold-flat-boot-crate`, `seat-gap-filler`, `led-cargo-light`
- Report: `trunkcrate-near-remap.json`

