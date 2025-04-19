
import { elementCategories } from './elementCategories';

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;
  electronConfiguration: string;
  electronegativity?: number;
  atomicRadius?: number;
  ionizationEnergy?: number;
  density?: number;
  meltingPoint?: number;
  boilingPoint?: number;
  discoveredBy?: string;
  discoveryYear?: number;
  description: string;
  gridRow: number;
  gridColumn: number;
  commonUses?: string[];
}

// First 20 elements with detailed information for our initial version
export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    category: "nonmetal",
    electronConfiguration: "1s¹",
    electronegativity: 2.2,
    atomicRadius: 120,
    ionizationEnergy: 13.598,
    density: 0.0000899,
    meltingPoint: -259.16,
    boilingPoint: -252.879,
    discoveredBy: "Henry Cavendish",
    discoveryYear: 1766,
    description: "Hydrogen is the lightest and most abundant element in the universe. It is primarily used in industrial processes like ammonia production and petroleum refining.",
    gridRow: 1,
    gridColumn: 1,
    commonUses: ["Rocket fuel", "Industrial processes", "Hydrogen fuel cells"]
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: 4.0026,
    category: "nobleGas",
    electronConfiguration: "1s²",
    electronegativity: undefined,
    atomicRadius: 140,
    ionizationEnergy: 24.587,
    density: 0.0001785,
    meltingPoint: -272.2,
    boilingPoint: -268.93,
    discoveredBy: "Pierre Janssen, Norman Lockyer",
    discoveryYear: 1868,
    description: "Helium is a colorless, odorless noble gas that is the second most abundant element in the universe. On Earth, it's relatively rare and is extracted from natural gas.",
    gridRow: 1,
    gridColumn: 18,
    commonUses: ["Balloons", "Cryogenics", "MRI machines"]
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicMass: 6.94,
    category: "alkaliMetal",
    electronConfiguration: "1s² 2s¹",
    electronegativity: 0.98,
    atomicRadius: 182,
    ionizationEnergy: 5.392,
    density: 0.534,
    meltingPoint: 180.54,
    boilingPoint: 1342,
    discoveredBy: "Johan August Arfwedson",
    discoveryYear: 1817,
    description: "Lithium is a soft, silvery-white alkali metal. It is highly reactive and flammable. It has the lowest density of all metals.",
    gridRow: 2,
    gridColumn: 1,
    commonUses: ["Lithium batteries", "Medication", "Aerospace alloys"]
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    atomicMass: 9.0122,
    category: "alkalineEarthMetal",
    electronConfiguration: "1s² 2s²",
    electronegativity: 1.57,
    atomicRadius: 153,
    ionizationEnergy: 9.323,
    density: 1.85,
    meltingPoint: 1287,
    boilingPoint: 2470,
    discoveredBy: "Louis Nicolas Vauquelin",
    discoveryYear: 1798,
    description: "Beryllium is a steel-gray, strong, lightweight and brittle alkaline earth metal. It is primarily used as a hardening agent in alloys.",
    gridRow: 2,
    gridColumn: 2,
    commonUses: ["Aerospace components", "X-ray equipment", "Nuclear reactors"]
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    atomicMass: 10.81,
    category: "metalloid",
    electronConfiguration: "1s² 2s² 2p¹",
    electronegativity: 2.04,
    atomicRadius: 192,
    ionizationEnergy: 8.298,
    density: 2.34,
    meltingPoint: 2076,
    boilingPoint: 3927,
    discoveredBy: "Joseph Louis Gay-Lussac, Louis Jacques Thénard",
    discoveryYear: 1808,
    description: "Boron is a metalloid that is not found naturally on Earth. It is a poor electrical conductor at room temperature.",
    gridRow: 2,
    gridColumn: 13,
    commonUses: ["Fiberglass", "Detergents", "Semiconductors"]
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: 12.011,
    category: "nonmetal",
    electronConfiguration: "1s² 2s² 2p²",
    electronegativity: 2.55,
    atomicRadius: 170,
    ionizationEnergy: 11.260,
    density: 2.267,
    meltingPoint: 3550,
    boilingPoint: 4827,
    discoveredBy: "Ancient",
    discoveryYear: undefined,
    description: "Carbon is a nonmetal that forms the basis for all known life on Earth. It is the fourth most abundant element in the universe by mass.",
    gridRow: 2,
    gridColumn: 14,
    commonUses: ["Steel production", "Diamonds", "Graphite"]
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicMass: 14.007,
    category: "nonmetal",
    electronConfiguration: "1s² 2s² 2p³",
    electronegativity: 3.04,
    atomicRadius: 155,
    ionizationEnergy: 14.534,
    density: 0.001251,
    meltingPoint: -210.1,
    boilingPoint: -195.79,
    discoveredBy: "Daniel Rutherford",
    discoveryYear: 1772,
    description: "Nitrogen is a colorless, odorless gas that makes up about 78% of Earth's atmosphere. It is an important component of proteins and nucleic acids.",
    gridRow: 2,
    gridColumn: 15,
    commonUses: ["Fertilizers", "Food packaging", "Refrigeration"]
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: 15.999,
    category: "nonmetal",
    electronConfiguration: "1s² 2s² 2p⁴",
    electronegativity: 3.44,
    atomicRadius: 152,
    ionizationEnergy: 13.618,
    density: 0.001429,
    meltingPoint: -218.79,
    boilingPoint: -182.96,
    discoveredBy: "Carl Wilhelm Scheele",
    discoveryYear: 1771,
    description: "Oxygen is a colorless, odorless gas that makes up about 21% of Earth's atmosphere. It is essential for human respiration and combustion processes.",
    gridRow: 2,
    gridColumn: 16,
    commonUses: ["Medical applications", "Steelmaking", "Rocket propellant"]
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    atomicMass: 18.998,
    category: "halogen",
    electronConfiguration: "1s² 2s² 2p⁵",
    electronegativity: 3.98,
    atomicRadius: 147,
    ionizationEnergy: 17.423,
    density: 0.001696,
    meltingPoint: -219.67,
    boilingPoint: -188.12,
    discoveredBy: "Henri Moissan",
    discoveryYear: 1886,
    description: "Fluorine is a pale yellow, highly reactive and corrosive gas. It is the most electronegative element and reacts with almost all elements.",
    gridRow: 2,
    gridColumn: 17,
    commonUses: ["Toothpaste", "Non-stick cookware", "Refrigerants"]
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    atomicMass: 20.180,
    category: "nobleGas",
    electronConfiguration: "1s² 2s² 2p⁶",
    electronegativity: undefined,
    atomicRadius: 154,
    ionizationEnergy: 21.565,
    density: 0.0008999,
    meltingPoint: -248.59,
    boilingPoint: -246.05,
    discoveredBy: "William Ramsay, Morris Travers",
    discoveryYear: 1898,
    description: "Neon is a colorless, odorless noble gas. It glows reddish-orange in a vacuum discharge tube and is used in advertising signs.",
    gridRow: 2,
    gridColumn: 18,
    commonUses: ["Neon signs", "Lasers", "Cryogenics"]
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    atomicMass: 22.990,
    category: "alkaliMetal",
    electronConfiguration: "1s² 2s² 2p⁶ 3s¹",
    electronegativity: 0.93,
    atomicRadius: 227,
    ionizationEnergy: 5.139,
    density: 0.971,
    meltingPoint: 97.72,
    boilingPoint: 883,
    discoveredBy: "Humphry Davy",
    discoveryYear: 1807,
    description: "Sodium is a soft, silvery-white, highly reactive metal. It is an essential element for living organisms and is found in many minerals.",
    gridRow: 3,
    gridColumn: 1,
    commonUses: ["Table salt", "Street lights", "Chemical industry"]
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    atomicMass: 24.305,
    category: "alkalineEarthMetal",
    electronConfiguration: "1s² 2s² 2p⁶ 3s²",
    electronegativity: 1.31,
    atomicRadius: 173,
    ionizationEnergy: 7.646,
    density: 1.738,
    meltingPoint: 650,
    boilingPoint: 1090,
    discoveredBy: "Joseph Black",
    discoveryYear: 1755,
    description: "Magnesium is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column of the periodic table.",
    gridRow: 3,
    gridColumn: 2,
    commonUses: ["Lightweight alloys", "Fireworks", "Supplements"]
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    atomicMass: 26.982,
    category: "postTransitionMetal",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p¹",
    electronegativity: 1.61,
    atomicRadius: 184,
    ionizationEnergy: 5.986,
    density: 2.698,
    meltingPoint: 660.32,
    boilingPoint: 2519,
    discoveredBy: "Hans Christian Ørsted",
    discoveryYear: 1825,
    description: "Aluminum is a silvery-white, soft, non-magnetic metal. It is the third most abundant element in Earth's crust and the most abundant metal.",
    gridRow: 3,
    gridColumn: 13,
    commonUses: ["Construction", "Electronics", "Transportation"]
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    atomicMass: 28.085,
    category: "metalloid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p²",
    electronegativity: 1.9,
    atomicRadius: 210,
    ionizationEnergy: 8.152,
    density: 2.3296,
    meltingPoint: 1414,
    boilingPoint: 3265,
    discoveredBy: "Jöns Jacob Berzelius",
    discoveryYear: 1824,
    description: "Silicon is a hard and brittle crystalline solid with a blue-grey metallic lustre. It is the second most abundant element in Earth's crust.",
    gridRow: 3,
    gridColumn: 14,
    commonUses: ["Semiconductors", "Solar cells", "Silicones"]
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    atomicMass: 30.974,
    category: "nonmetal",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p³",
    electronegativity: 2.19,
    atomicRadius: 180,
    ionizationEnergy: 10.487,
    density: 1.82,
    meltingPoint: 44.15,
    boilingPoint: 280.5,
    discoveredBy: "Hennig Brand",
    discoveryYear: 1669,
    description: "Phosphorus is a nonmetallic element with several allotropes: white phosphorus, red phosphorus, and black phosphorus. It is essential for life as part of DNA and RNA.",
    gridRow: 3,
    gridColumn: 15,
    commonUses: ["Fertilizers", "Detergents", "Matches"]
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    atomicMass: 32.06,
    category: "nonmetal",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁴",
    electronegativity: 2.58,
    atomicRadius: 180,
    ionizationEnergy: 10.360,
    density: 2.067,
    meltingPoint: 115.21,
    boilingPoint: 444.72,
    discoveredBy: "Ancient",
    discoveryYear: undefined,
    description: "Sulfur is a yellow crystalline solid at room temperature. It is essential for life and is used in many industrial processes.",
    gridRow: 3,
    gridColumn: 16,
    commonUses: ["Sulfuric acid production", "Gunpowder", "Vulcanizing rubber"]
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    atomicMass: 35.45,
    category: "halogen",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁵",
    electronegativity: 3.16,
    atomicRadius: 175,
    ionizationEnergy: 12.968,
    density: 0.003214,
    meltingPoint: -101.5,
    boilingPoint: -34.04,
    discoveredBy: "Carl Wilhelm Scheele",
    discoveryYear: 1774,
    description: "Chlorine is a yellow-green gas with a pungent odor. It is widely used as a disinfectant and in the production of many compounds.",
    gridRow: 3,
    gridColumn: 17,
    commonUses: ["Water purification", "Bleach", "PVC production"]
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    atomicMass: 39.948,
    category: "nobleGas",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶",
    electronegativity: undefined,
    atomicRadius: 188,
    ionizationEnergy: 15.760,
    density: 0.0017837,
    meltingPoint: -189.35,
    boilingPoint: -185.85,
    discoveredBy: "Lord Rayleigh, William Ramsay",
    discoveryYear: 1894,
    description: "Argon is a colorless, odorless noble gas. It makes up about 0.93% of Earth's atmosphere and is the third most abundant gas in the atmosphere.",
    gridRow: 3,
    gridColumn: 18,
    commonUses: ["Light bulbs", "Welding", "Lasers"]
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    atomicMass: 39.098,
    category: "alkaliMetal",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    electronegativity: 0.82,
    atomicRadius: 243,
    ionizationEnergy: 4.341,
    density: 0.862,
    meltingPoint: 63.38,
    boilingPoint: 759,
    discoveredBy: "Humphry Davy",
    discoveryYear: 1807,
    description: "Potassium is a soft, silvery-white metal that oxidizes rapidly in air. It is an essential nutrient for plant and human health.",
    gridRow: 4,
    gridColumn: 1,
    commonUses: ["Fertilizers", "Food supplements", "Soaps"]
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    atomicMass: 40.078,
    category: "alkalineEarthMetal",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    electronegativity: 1.0,
    atomicRadius: 194,
    ionizationEnergy: 6.113,
    density: 1.55,
    meltingPoint: 842,
    boilingPoint: 1484,
    discoveredBy: "Humphry Davy",
    discoveryYear: 1808,
    description: "Calcium is a soft, gray alkaline earth metal that forms a dark oxide-nitride layer when exposed to air. It is essential for living organisms, particularly in bone formation.",
    gridRow: 4,
    gridColumn: 2,
    commonUses: ["Construction (limestone/cement)", "Steel making", "Dietary supplements"]
  }
];

// Full periodic table grid definition with positions
export const periodicTableLayout = [
  // Period 1
  { atomicNumber: 1, gridRow: 1, gridColumn: 1 },  // H
  { atomicNumber: 2, gridRow: 1, gridColumn: 18 }, // He
  
  // Period 2
  { atomicNumber: 3, gridRow: 2, gridColumn: 1 },  // Li
  { atomicNumber: 4, gridRow: 2, gridColumn: 2 },  // Be
  { atomicNumber: 5, gridRow: 2, gridColumn: 13 }, // B
  { atomicNumber: 6, gridRow: 2, gridColumn: 14 }, // C
  { atomicNumber: 7, gridRow: 2, gridColumn: 15 }, // N
  { atomicNumber: 8, gridRow: 2, gridColumn: 16 }, // O
  { atomicNumber: 9, gridRow: 2, gridColumn: 17 }, // F
  { atomicNumber: 10, gridRow: 2, gridColumn: 18 }, // Ne
  
  // Period 3
  { atomicNumber: 11, gridRow: 3, gridColumn: 1 }, // Na
  { atomicNumber: 12, gridRow: 3, gridColumn: 2 }, // Mg
  { atomicNumber: 13, gridRow: 3, gridColumn: 13 }, // Al
  { atomicNumber: 14, gridRow: 3, gridColumn: 14 }, // Si
  { atomicNumber: 15, gridRow: 3, gridColumn: 15 }, // P
  { atomicNumber: 16, gridRow: 3, gridColumn: 16 }, // S
  { atomicNumber: 17, gridRow: 3, gridColumn: 17 }, // Cl
  { atomicNumber: 18, gridRow: 3, gridColumn: 18 }, // Ar
  
  // Period 4 (Not fully implemented yet)
  { atomicNumber: 19, gridRow: 4, gridColumn: 1 }, // K
  { atomicNumber: 20, gridRow: 4, gridColumn: 2 }, // Ca
  { atomicNumber: 21, gridRow: 4, gridColumn: 3 }, // Sc
  { atomicNumber: 22, gridRow: 4, gridColumn: 4 }, // Ti
  { atomicNumber: 23, gridRow: 4, gridColumn: 5 }, // V
  { atomicNumber: 24, gridRow: 4, gridColumn: 6 }, // Cr
  { atomicNumber: 25, gridRow: 4, gridColumn: 7 }, // Mn
  { atomicNumber: 26, gridRow: 4, gridColumn: 8 }, // Fe
  { atomicNumber: 27, gridRow: 4, gridColumn: 9 }, // Co
  { atomicNumber: 28, gridRow: 4, gridColumn: 10 }, // Ni
  { atomicNumber: 29, gridRow: 4, gridColumn: 11 }, // Cu
  { atomicNumber: 30, gridRow: 4, gridColumn: 12 }, // Zn
  { atomicNumber: 31, gridRow: 4, gridColumn: 13 }, // Ga
  { atomicNumber: 32, gridRow: 4, gridColumn: 14 }, // Ge
  { atomicNumber: 33, gridRow: 4, gridColumn: 15 }, // As
  { atomicNumber: 34, gridRow: 4, gridColumn: 16 }, // Se
  { atomicNumber: 35, gridRow: 4, gridColumn: 17 }, // Br
  { atomicNumber: 36, gridRow: 4, gridColumn: 18 }, // Kr
  
  // Period 5 (Not fully implemented yet)
  { atomicNumber: 37, gridRow: 5, gridColumn: 1 }, // Rb
  { atomicNumber: 38, gridRow: 5, gridColumn: 2 }, // Sr
  { atomicNumber: 39, gridRow: 5, gridColumn: 3 }, // Y
  { atomicNumber: 40, gridRow: 5, gridColumn: 4 }, // Zr
  { atomicNumber: 41, gridRow: 5, gridColumn: 5 }, // Nb
  { atomicNumber: 42, gridRow: 5, gridColumn: 6 }, // Mo
  { atomicNumber: 43, gridRow: 5, gridColumn: 7 }, // Tc
  { atomicNumber: 44, gridRow: 5, gridColumn: 8 }, // Ru
  { atomicNumber: 45, gridRow: 5, gridColumn: 9 }, // Rh
  { atomicNumber: 46, gridRow: 5, gridColumn: 10 }, // Pd
  { atomicNumber: 47, gridRow: 5, gridColumn: 11 }, // Ag
  { atomicNumber: 48, gridRow: 5, gridColumn: 12 }, // Cd
  { atomicNumber: 49, gridRow: 5, gridColumn: 13 }, // In
  { atomicNumber: 50, gridRow: 5, gridColumn: 14 }, // Sn
  { atomicNumber: 51, gridRow: 5, gridColumn: 15 }, // Sb
  { atomicNumber: 52, gridRow: 5, gridColumn: 16 }, // Te
  { atomicNumber: 53, gridRow: 5, gridColumn: 17 }, // I
  { atomicNumber: 54, gridRow: 5, gridColumn: 18 }, // Xe
  
  // Period 6 (Not fully implemented yet)
  { atomicNumber: 55, gridRow: 6, gridColumn: 1 }, // Cs
  { atomicNumber: 56, gridRow: 6, gridColumn: 2 }, // Ba
  { atomicNumber: 57, gridRow: 8, gridColumn: 3 }, // La (moved to lanthanide row)
  { atomicNumber: 72, gridRow: 6, gridColumn: 4 }, // Hf
  { atomicNumber: 73, gridRow: 6, gridColumn: 5 }, // Ta
  { atomicNumber: 74, gridRow: 6, gridColumn: 6 }, // W
  { atomicNumber: 75, gridRow: 6, gridColumn: 7 }, // Re
  { atomicNumber: 76, gridRow: 6, gridColumn: 8 }, // Os
  { atomicNumber: 77, gridRow: 6, gridColumn: 9 }, // Ir
  { atomicNumber: 78, gridRow: 6, gridColumn: 10 }, // Pt
  { atomicNumber: 79, gridRow: 6, gridColumn: 11 }, // Au
  { atomicNumber: 80, gridRow: 6, gridColumn: 12 }, // Hg
  { atomicNumber: 81, gridRow: 6, gridColumn: 13 }, // Tl
  { atomicNumber: 82, gridRow: 6, gridColumn: 14 }, // Pb
  { atomicNumber: 83, gridRow: 6, gridColumn: 15 }, // Bi
  { atomicNumber: 84, gridRow: 6, gridColumn: 16 }, // Po
  { atomicNumber: 85, gridRow: 6, gridColumn: 17 }, // At
  { atomicNumber: 86, gridRow: 6, gridColumn: 18 }, // Rn
  
  // Period 7 (Not fully implemented yet)
  { atomicNumber: 87, gridRow: 7, gridColumn: 1 }, // Fr
  { atomicNumber: 88, gridRow: 7, gridColumn: 2 }, // Ra
  { atomicNumber: 89, gridRow: 9, gridColumn: 3 }, // Ac (moved to actinide row)
  { atomicNumber: 104, gridRow: 7, gridColumn: 4 }, // Rf
  { atomicNumber: 105, gridRow: 7, gridColumn: 5 }, // Db
  { atomicNumber: 106, gridRow: 7, gridColumn: 6 }, // Sg
  { atomicNumber: 107, gridRow: 7, gridColumn: 7 }, // Bh
  { atomicNumber: 108, gridRow: 7, gridColumn: 8 }, // Hs
  { atomicNumber: 109, gridRow: 7, gridColumn: 9 }, // Mt
  { atomicNumber: 110, gridRow: 7, gridColumn: 10 }, // Ds
  { atomicNumber: 111, gridRow: 7, gridColumn: 11 }, // Rg
  { atomicNumber: 112, gridRow: 7, gridColumn: 12 }, // Cn
  { atomicNumber: 113, gridRow: 7, gridColumn: 13 }, // Nh
  { atomicNumber: 114, gridRow: 7, gridColumn: 14 }, // Fl
  { atomicNumber: 115, gridRow: 7, gridColumn: 15 }, // Mc
  { atomicNumber: 116, gridRow: 7, gridColumn: 16 }, // Lv
  { atomicNumber: 117, gridRow: 7, gridColumn: 17 }, // Ts
  { atomicNumber: 118, gridRow: 7, gridColumn: 18 }, // Og
];

export const getElementByAtomicNumber = (atomicNumber: number): Element | undefined => {
  return elements.find(element => element.atomicNumber === atomicNumber);
};

export const elementsByCategory = elements.reduce((acc, element) => {
  if (!acc[element.category]) {
    acc[element.category] = [];
  }
  acc[element.category].push(element);
  return acc;
}, {} as Record<string, Element[]>);

// Mock data for API calls - in a real app, this would come from an external API
export const fetchElementData = async (atomicNumber: number): Promise<Element | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getElementByAtomicNumber(atomicNumber));
    }, 300);
  });
};
