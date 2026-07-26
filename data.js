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
    "R1": { "species": ["banana", "passionfruit"], "joiner": "&" },
    "R2": { "species": ["papaya"], "joiner": "&" },
    "R3": { "species": ["taro", "water_spinach"], "joiner": "&" },
    "R4": { "species": ["ginger", "turmeric"], "joiner": "&" },
    "R5": { "species": ["lemongrass"], "joiner": "&" },
    "R6": { "species": ["dragonfruit"], "joiner": "&" },
    "R7": { "species": ["thai_basil", "okra"], "joiner": "&" },
    "R8": { "species": ["pandan"], "joiner": "&" },

    "P1": { "species": ["thai_basil"], "joiner": "&" },
    "P2": { "species": [], "joiner": "&" },
    "P3": { "species": ["ginger"], "joiner": "&" },
    "P4": { "species": [], "joiner": "&" },

    "F1": { "species": ["tilapia"], "joiner": "&" },
    "F2": { "species": ["koi"], "joiner": "&" }
  },

  "positions": {
    "R1": { "x": 29.9, "y": 16.4 },
    "R2": { "x": 83.4, "y": 9.8 },
    "R3": { "x": 34.6, "y": 40.8 },
    "R4": { "x": 34.6, "y": 63.8 },
    "R5": { "x": 32.6, "y": 74.5 },
    "R6": { "x": 63.9, "y": 93.3 },
    "R7": { "x": 84.7, "y": 40.3 },
    "R8": { "x": 83.7, "y": 44.1 },

    "P1": { "x": 53.5, "y": 26.2 },
    "P2": { "x": 56.2, "y": 27.4 },
    "P3": { "x": 50.7, "y": 28.0 },
    "P4": { "x": 47.5, "y": 25.8 },

    "F1": { "x": 14.6, "y": 50.4 },
    "F2": { "x": 84.9, "y": 26.3 }
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