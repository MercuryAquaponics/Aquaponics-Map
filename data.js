// ======================================================================
// AQUAPONICS DOME — GARDEN MAP DATA
// ======================================================================
// Built from the real map (dome-map.png) and the exact pin positions you
// marked (mapwithmarkers.png). No plant/fish content has been added yet —
// every container below is intentionally EMPTY ("species": []) until you
// fill in what's actually growing/living in each one.
//
// LABELING (per your instructions):
//   Tank A -> T1        Tank B -> T2
//   Kärl 1..11 -> G1..G11   ("G" = Grow box / Odlingslåda)
//   Roman numerals I..XV -> P1..P15  ("P" = Pot)
//
// NOTE: I only found 15 numbered pots (I through XV) in the marker image,
// not 16 (I-XVI) — if there's a 16th pot, it wasn't visible/detectable in
// the image you sent. Flag it and I'll add it once you confirm.
//
// WATER SOURCE: G1-G6 draw from T1, G7-G11 draw from T2, per your note
// about the light/dark blue zones. Stored as "waterFrom" on each grow box
// and shown as a small tag in its detail page.
// ======================================================================

const DATA = {

  "languages": [
    ["sv", "Svenska"],
    ["en", "English"]
  ],
  "verifiedLangs": ["sv", "en"],

  // ---- SPECIES ------------------------------------------------------------
  // Empty on purpose — add plants/fish here once confirmed, then reference
  // their id in the relevant container's "species" list below.
  "species": {},

  // ---- CATEGORIES -----------------------------------------------------------
  "categories": {
    "G": {
      "hex": "#2f7a2f",
      "label": { "sv": "Odlingslådor", "en": "Grow Boxes" }
    },
    "T": {
      "hex": "#1f4fa0",
      "label": { "sv": "Fisktankar", "en": "Fish Tanks" }
    },
    "P": {
      "hex": "#7c5c3e",
      "label": { "sv": "Krukor", "en": "Pots" }
    }
  },

  // ---- UI TEXT --------------------------------------------------------------
  "ui": {
    "searchPlaceholder": { "sv": "Sök i kupolen…", "en": "Search the dome…" },
    "empty": { "sv": "Tom", "en": "Empty" },
    "ourPlants": { "sv": "Växter & Fisk", "en": "Plants & Fish" },
    "back": { "sv": "Tillbaka", "en": "Back" },
    "container": { "sv": "Behållare", "en": "Container" },
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
    "swipeHint": { "sv": "Svep eller klicka för fler bilder", "en": "Swipe or click for more photos" },
    "waterFrom": { "sv": "Vatten från", "en": "Water from" }
  },

  // ---- CONTAINERS -------------------------------------------------------------
  // "species" left empty everywhere — fill in once you've confirmed contents.
  // "waterFrom" only applies to G (grow box) codes.
  "containers": {
    "G1":  { "species": [], "joiner": "&", "waterFrom": "T1" },
    "G2":  { "species": [], "joiner": "&", "waterFrom": "T1" },
    "G3":  { "species": [], "joiner": "&", "waterFrom": "T1" },
    "G4":  { "species": [], "joiner": "&", "waterFrom": "T1" },
    "G5":  { "species": [], "joiner": "&", "waterFrom": "T1" },
    "G6":  { "species": [], "joiner": "&", "waterFrom": "T1" },
    "G7":  { "species": [], "joiner": "&", "waterFrom": "T2" },
    "G8":  { "species": [], "joiner": "&", "waterFrom": "T2" },
    "G9":  { "species": [], "joiner": "&", "waterFrom": "T2" },
    "G10": { "species": [], "joiner": "&", "waterFrom": "T2" },
    "G11": { "species": [], "joiner": "&", "waterFrom": "T2" },
    "T1":  { "species": [], "joiner": "&" },
    "T2":  { "species": [], "joiner": "&" },
    "P1":  { "species": [], "joiner": "&" },
    "P2":  { "species": [], "joiner": "&" },
    "P3":  { "species": [], "joiner": "&" },
    "P4":  { "species": [], "joiner": "&" },
    "P5":  { "species": [], "joiner": "&" },
    "P6":  { "species": [], "joiner": "&" },
    "P7":  { "species": [], "joiner": "&" },
    "P8":  { "species": [], "joiner": "&" },
    "P9":  { "species": [], "joiner": "&" },
    "P10": { "species": [], "joiner": "&" },
    "P11": { "species": [], "joiner": "&" },
    "P12": { "species": [], "joiner": "&" },
    "P13": { "species": [], "joiner": "&" },
    "P14": { "species": [], "joiner": "&" },
    "P15": { "species": [], "joiner": "&" }
  },

  // ---- PIN POSITIONS ----------------------------------------------------------
  // x/y as % of dome-map.png's actual width/height (618 x 614), extracted
  // directly from the red dots you placed in mapwithmarkers.png.
  "positions": {
    "G1":  { "x": 31.42, "y": 77.36 },
    "G2":  { "x": 30.74, "y": 67.75 },
    "G3":  { "x": 39.32, "y": 43.00 },
    "G4":  { "x": 28.77, "y": 33.55 },
    "G5":  { "x": 30.42, "y": 13.36 },
    "G6":  { "x": 54.37, "y": 9.12 },
    "G7":  { "x": 84.47, "y": 43.97 },
    "G8":  { "x": 84.50, "y": 47.88 },
    "G9":  { "x": 87.06, "y": 71.82 },
    "G10": { "x": 69.26, "y": 88.93 },
    "G11": { "x": 66.99, "y": 62.21 },
    "T1":  { "x": 19.42, "y": 52.61 },
    "T2":  { "x": 82.69, "y": 30.46 },
    "P1":  { "x": 46.93, "y": 80.26 },
    "P2":  { "x": 46.76, "y": 75.07 },
    "P3":  { "x": 46.73, "y": 69.22 },
    "P4":  { "x": 46.80, "y": 65.33 },
    "P5":  { "x": 32.85, "y": 49.02 },
    "P6":  { "x": 37.59, "y": 49.01 },
    "P7":  { "x": 43.06, "y": 48.83 },
    "P8":  { "x": 15.91, "y": 39.92 },
    "P9":  { "x": 20.74, "y": 39.85 },
    "P10": { "x": 46.12, "y": 32.74 },
    "P11": { "x": 50.49, "y": 35.50 },
    "P12": { "x": 51.15, "y": 30.80 },
    "P13": { "x": 55.45, "y": 33.55 },
    "P14": { "x": 72.99, "y": 33.73 },
    "P15": { "x": 74.89, "y": 37.64 }
  },

  // ---- MAP IMAGE ----------------------------------------------------------
  // The real dome layout you uploaded (text labels still on it for now —
  // you said you'll re-upload a cleaned version later; positions above will
  // still line up fine since they're %-based).
  "img": {
    "url": "dome-map.png",
    "w": 618,
    "h": 614
  },

  // ---- CONTAINER PHOTO GALLERIES --------------------------------------------
  // Empty for now — add photo URLs (and optional season tags) per code once
  // you have them. Shape: "CODE": [ { "url": "...", "season": {"sv":"...","en":"..."} } ]
  "containerImages": {},

  // ---- PLANT / FISH INFO --------------------------------------------------
  // Empty — will fill in per species id once "species" above is populated.
  "plantInfo": {}
};
