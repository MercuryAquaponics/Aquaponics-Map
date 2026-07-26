// ======================================================================
// AQUAPONICS DOME — GARDEN MAP DATA  (DEMO / PLACEHOLDER DATA SET)
// ======================================================================
// Forked from the Clarion Hotel garden map, adapted for a tropical
// aquaponics dome: no "dishes" feature, adds a fish-tank category, and
// replaces the single container photo with a swipeable PHOTO GALLERY
// per container (since season/bloom-stage matters a lot here).
//
// EVERYTHING PLANT/FISH-RELATED BELOW IS PLACEHOLDER DEMO CONTENT.
// Swap in the real species list, real tank contents, the real hand-drawn
// dome layout image, and real photos once confirmed with the owner.
//
// QUICK GUIDE:
//   • Swap the map image             -> "img" section
//   • Add/edit a plant or fish       -> "species" section
//   • Add/edit gallery photos        -> "containerImages" section (now an ARRAY per code)
//   • Add a brand new bed/pot/tank   -> "containers" + "positions" sections
//   • Change category names/colors  -> "categories" section
// ======================================================================

const DATA = {

  // ---- LANGUAGES ------------------------------------------------------
  // Trimmed to sv/en for this demo. Can be expanded to the full 31-language
  // list later using the same pattern as the Clarion map's data.js.
  "languages": [
    ["sv", "Svenska"],
    ["en", "English"]
  ],
  "verifiedLangs": ["sv", "en"],

  // ---- SPECIES ----------------------------------------------------------
  // Both PLANTS and FISH live in this one list (a fish is just a "species"
  // planted in a tank instead of a bed/pot) — this keeps container/detail
  // logic identical to the Clarion map, no special-casing needed.
  //
  // PLACEHOLDER CONTENT — replace with the owner's real plant list and
  // actual fish species once confirmed.
  "species": {
    "banana": {
      "latin": "Musa acuminata",
      "names": { "sv": "Banan", "en": "Banana" }
    },
    "papaya": {
      "latin": "Carica papaya",
      "names": { "sv": "Papaya", "en": "Papaya" }
    },
    "passionfruit": {
      "latin": "Passiflora edulis",
      "names": { "sv": "Passionsfrukt", "en": "Passionfruit" }
    },
    "taro": {
      "latin": "Colocasia esculenta",
      "names": { "sv": "Taro", "en": "Taro" }
    },
    "ginger": {
      "latin": "Zingiber officinale",
      "names": { "sv": "Ingefära", "en": "Ginger" }
    },
    "turmeric": {
      "latin": "Curcuma longa",
      "names": { "sv": "Gurkmeja", "en": "Turmeric" }
    },
    "dragonfruit": {
      "latin": "Hylocereus undatus",
      "names": { "sv": "Drakfrukt", "en": "Dragon Fruit" }
    },
    "lemongrass": {
      "latin": "Cymbopogon citratus",
      "names": { "sv": "Citrongräs", "en": "Lemongrass" }
    },
    "thai_basil": {
      "latin": "Ocimum basilicum var. thyrsiflora",
      "names": { "sv": "Thaibasilika", "en": "Thai Basil" }
    },
    "water_spinach": {
      "latin": "Ipomoea aquatica",
      "names": { "sv": "Vattenspenat", "en": "Water Spinach" }
    },
    "pandan": {
      "latin": "Pandanus amaryllifolius",
      "names": { "sv": "Pandan", "en": "Pandan" }
    },
    "okra": {
      "latin": "Abelmoschus esculentus",
      "names": { "sv": "Okra", "en": "Okra" }
    },
    "tilapia": {
      "latin": "Oreochromis niloticus",
      "names": { "sv": "Tilapia", "en": "Tilapia" }
    },
    "koi": {
      "latin": "Cyprinus rubrofuscus",
      "names": { "sv": "Koikarp", "en": "Koi Carp" }
    }
  },

  // ---- CATEGORIES ---------------------------------------------------------
  // B = jungle planting beds (irregular, overlapping — the dome's dense zones)
  // P = smaller hanging/vertical pots tucked between the beds
  // K = fish tanks ("kar")
  "categories": {
    "B": {
      "hex": "#3f7a52",
      "label": { "sv": "Odlingsbäddar", "en": "Planting Beds" }
    },
    "P": {
      "hex": "#c9a227",
      "label": { "sv": "Krukor", "en": "Hanging Pots" }
    },
    "K": {
      "hex": "#2f7f8c",
      "label": { "sv": "Fisktankar", "en": "Fish Tanks" }
    }
  },

  // ---- UI TEXT ------------------------------------------------------------
  "ui": {
    "searchPlaceholder": { "sv": "Sök i kupolen…", "en": "Search the dome…" },
    "empty": { "sv": "Tom", "en": "Empty" },
    "ourPlants": { "sv": "Växter & Fisk", "en": "Plants & Fish" },
    "back": { "sv": "Tillbaka", "en": "Back" },
    "container": { "sv": "Odlingsplats", "en": "Container" },
    "type": { "sv": "Typ", "en": "Type" },
    "plants": { "sv": "Innehåll", "en": "Contents" },
    "description": { "sv": "Beskrivning", "en": "Description" },
    "noDescriptionYet": { "sv": "[Beskrivning kommer snart]", "en": "[Description coming soon]" },
    "englishFallbackNote": { "sv": "", "en": "Description available in Swedish and English only." },
    "languagesTitle": { "sv": "Språk", "en": "Languages" },
    "close": { "sv": "Stäng", "en": "Close" },
    "latinLabel": { "sv": "Latinskt namn", "en": "Latin name" },
    "gallery": { "sv": "Bilder", "en": "Photos" },
    "photoPending": { "sv": "Foto kommer", "en": "Photo pending" },
    "swipeHint": { "sv": "Svep eller klicka för fler bilder", "en": "Swipe or click for more photos" }
  },

  // ---- CONTAINERS -----------------------------------------------------------
  // "species" = list of species-ids planted/kept here.
  // "joiner"  = symbol shown between multiple species sharing one bed/tank.
  "containers": {
    "B1": { "species": ["banana", "passionfruit"], "joiner": "&" },
    "B2": { "species": ["papaya"], "joiner": "&" },
    "B3": { "species": ["taro", "water_spinach"], "joiner": "&" },
    "B4": { "species": ["ginger", "turmeric"], "joiner": "&" },
    "B5": { "species": ["lemongrass"], "joiner": "&" },
    "B6": { "species": ["dragonfruit"], "joiner": "&" },
    "B7": { "species": ["thai_basil", "okra"], "joiner": "&" },
    "B8": { "species": ["pandan"], "joiner": "&" },
    "P1": { "species": ["thai_basil"], "joiner": "&" },
    "P2": { "species": [], "joiner": "&" },
    "P3": { "species": ["ginger"], "joiner": "&" },
    "P4": { "species": [], "joiner": "&" },
    "K1": { "species": ["tilapia"], "joiner": "&" },
    "K2": { "species": ["koi"], "joiner": "&" }
  },

  // ---- PIN POSITIONS --------------------------------------------------------
  // x/y as % of the map image's width/height. Matched to the placeholder
  // dome-map-placeholder.svg — RECALCULATE once the real drawing is in place.
  "positions": {
    "B1": { "x": 27.8, "y": 21.7 },
    "B2": { "x": 73.9, "y": 21.1 },
    "B3": { "x": 20.6, "y": 41.7 },
    "B4": { "x": 81.7, "y": 40.6 },
    "B5": { "x": 21.1, "y": 65.0 },
    "B6": { "x": 81.7, "y": 66.7 },
    "B7": { "x": 32.8, "y": 84.4 },
    "B8": { "x": 71.7, "y": 83.9 },
    "P1": { "x": 36.7, "y": 50.0 },
    "P2": { "x": 63.3, "y": 50.0 },
    "P3": { "x": 50.0, "y": 36.7 },
    "P4": { "x": 50.0, "y": 63.3 },
    "K1": { "x": 50.0, "y": 25.6 },
    "K2": { "x": 50.0, "y": 74.4 }
  },

  // ---- MAP IMAGE ------------------------------------------------------------
  // PLACEHOLDER schematic — swap "url" for the scanned/enlarged version of
  // the owner's original hand-drawn dome layout once it's ready. Keep w/h
  // matching the real image's actual pixel dimensions, or pin positions
  // (which are %-based) will still work fine regardless.
  "img": {
    "url": "dome-map-placeholder.svg",
    "w": 900,
    "h": 900
  },

  // ---- CONTAINER PHOTO GALLERIES --------------------------------------------
  // Each code maps to an ARRAY of photos (not a single URL like the Clarion
  // map) since bloom stage / season matters a lot in the dome. Each entry:
  //   { "url": "...", "season": { "sv": "...", "en": "..." } }
  // "url": null shows a tidy placeholder box instead of breaking.
  //
  // DEMO placeholders below show the shape of the feature — no real photos
  // wired in yet.
  "containerImages": {
    "B1": [
      { "url": null, "season": { "sv": "Sommar", "en": "Summer" } },
      { "url": null, "season": { "sv": "Vinter", "en": "Winter" } }
    ],
    "K1": [
      { "url": null, "season": { "sv": "Nyinsatt", "en": "Recently stocked" } }
    ]
  },

  // ---- PLANT / FISH INFO: description text, per species-id -----------------
  // "sv"/"en" = free-text description (hand-written, Swedish/English only —
  // same fallback behavior as the Clarion map).
  "plantInfo": {
    "banana": { "sv": null, "en": null },
    "papaya": { "sv": null, "en": null },
    "passionfruit": { "sv": null, "en": null },
    "taro": { "sv": null, "en": null },
    "ginger": { "sv": null, "en": null },
    "turmeric": { "sv": null, "en": null },
    "dragonfruit": { "sv": null, "en": null },
    "lemongrass": { "sv": null, "en": null },
    "thai_basil": { "sv": null, "en": null },
    "water_spinach": {
      "sv": null,
      "en": "Grows directly over the tank water, roots trailing in — one of the more visibly \"aquaponic\" plants in the dome."
    },
    "pandan": { "sv": null, "en": null },
    "okra": { "sv": null, "en": null },
    "tilapia": {
      "sv": null,
      "en": "Placeholder species — confirm actual fish stocked in Tank 1 with the owner."
    },
    "koi": {
      "sv": null,
      "en": "Placeholder species — confirm actual fish stocked in Tank 2 with the owner."
    }
  }
};
