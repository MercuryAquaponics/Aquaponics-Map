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
    "R1":  { "x": 20.0, "y": 15.0 },
    "R2":  { "x": 24.0, "y": 12.0 },
    "R3":  { "x": 40.0, "y": 25.0 },
    "R4":  { "x": 62.0, "y": 20.0 },
    "R5":  { "x": 75.0, "y": 18.0 },
    "R6":  { "x": 82.0, "y": 35.0 },
    "R7":  { "x": 78.0, "y": 55.0 },
    "R8":  { "x": 70.0, "y": 70.0 },
    "R9":  { "x": 45.0, "y": 75.0 },
    "R10": { "x": 28.0, "y": 72.0 },
    "R11": { "x": 15.0, "y": 60.0 },

    "P1":  { "x": 22.0, "y": 38.0 },
    "P2":  { "x": 28.0, "y": 32.0 },
    "P3":  { "x": 38.0, "y": 42.0 },
    "P4":  { "x": 45.0, "y": 38.0 },
    "P5":  { "x": 52.0, "y": 42.0 },
    "P6":  { "x": 60.0, "y": 40.0 },
    "P7":  { "x": 35.0, "y": 50.0 },
    "P8":  { "x": 42.0, "y": 52.0 },
    "P9":  { "x": 50.0, "y": 50.0 },
    "P10": { "x": 48.0, "y": 62.0 },
    "P11": { "x": 52.0, "y": 68.0 },
    "P12": { "x": 45.0, "y": 60.0 },

    "F1":  { "x": 25.0, "y": 50.0 },
    "F2":  { "x": 72.0, "y": 48.0 }
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
