// ======================================================================
// AQUAPONICS DOME — GARDEN MAP DATA  (DEMO / PLACEHOLDER DATA SET)
// ======================================================================

const DATA = {
  "languages": [
    ["sv", "Svenska"],
    ["en", "English"]
  ],
  "verifiedLangs": ["sv", "en"],

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

  "categories": {
    "R": {
      "hex": "#3f7a52",
      "label": { "sv": "Odlingsbäddar", "en": "Planting Beds" }
    },
    "P": {
      "hex": "#c9a227",
      "label": { "sv": "Krukor", "en": "Hanging Pots" }
    },
    "F": {
      "hex": "#2f7f8c",
      "label": { "sv": "Fisktankar", "en": "Fish Tanks" }
    }
  },

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

    "containers": {
    "R1": { "species": [], "joiner": "&" },
    "R2": { "species": [], "joiner": "&" },
    "R3": { "species": [], "joiner": "&" },
    "R4": { "species": [], "joiner": "&" },
    "R5": { "species": [], "joiner": "&" },
    "R6": { "species": [], "joiner": "&" },
    "R7": { "species": [], "joiner": "&" },
    "R8": { "species": [], "joiner": "&" },
    "R9": { "species": [], "joiner": "&" },
    "R10": { "species": [], "joiner": "&" },
    "R11": { "species": [], "joiner": "&" },

    "P1": { "species": [], "joiner": "&" },
    "P2": { "species": [], "joiner": "&" },
    "P3": { "species": [], "joiner": "&" },
    "P4": { "species": [], "joiner": "&" },
    "P5": { "species": [], "joiner": "&" },
    "P6": { "species": [], "joiner": "&" },
    "P7": { "species": [], "joiner": "&" },
    "P8": { "species": [], "joiner": "&" },
    "P9": { "species": [], "joiner": "&" },
    "P10": { "species": [], "joiner": "&" },
    "P11": { "species": [], "joiner": "&" },
    "P12": { "species": [], "joiner": "&" },

    "F1": { "species": [], "joiner": "&" },
    "F2": { "species": [], "joiner": "&" }
  },

  "positions": {
    "R1":  { "x": 34.0, "y": 26.5 },
    "R2":  { "x": 32.5, "y": 65.8 },
    "R3":  { "x": 39.0, "y": 45.0 },
    "R4":  { "x": 53.5, "y": 14.0 },
    "R5":  { "x": 28.0, "y": 14.5 },
    "R6":  { "x": 64.0, "y": 12.8 },
    "R7":  { "x": 77.5, "y": 46.0 },
    "R8":  { "x": 78.5, "y": 49.0 },
    "R9":  { "x": 76.8, "y": 73.0 },
    "R10": { "x": 62.5, "y": 88.5 },
    "R11": { "x": 59.5, "y": 58.5 },

    "P1":  { "x": 13.8, "y": 40.2 },
    "P2":  { "x": 17.8, "y": 40.5 },
    "P3":  { "x": 39.5, "y": 29.5 },
    "P4":  { "x": 42.8, "y": 32.0 },
    "P5":  { "x": 46.0, "y": 34.5 },
    "P6":  { "x": 49.2, "y": 32.8 },
    "P7":  { "x": 31.5, "y": 49.0 },
    "P8":  { "x": 36.0, "y": 49.2 },
    "P9":  { "x": 41.0, "y": 49.0 },
    "P10": { "x": 46.5, "y": 61.0 },
    "P11": { "x": 46.0, "y": 66.0 },
    "P12": { "x": 46.2, "y": 71.0 },

    "F1":  { "x": 21.0, "y": 49.5 },
    "F2":  { "x": 76.0, "y": 29.5 }
  },

  "img": {
    "url": "https://i.imgur.com/13zXD3q.png",
    "w": 900,
    "h": 900
  },

  "containerImages": {
    "R1": [
      { "url": null, "season": { "sv": "Sommar", "en": "Summer" } },
      { "url": null, "season": { "sv": "Vinter", "en": "Winter" } }
    ],
    "F1": [
      { "url": null, "season": { "sv": "Nyinsatt", "en": "Recently stocked" } }
    ]
  },

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
