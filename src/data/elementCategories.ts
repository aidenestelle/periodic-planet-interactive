
export type ElementCategory = {
  name: string;
  color: string;
  backgroundColor: string;
};

export const elementCategories: Record<string, ElementCategory> = {
  alkaliMetal: {
    name: "Alkali Metal",
    color: "#000000",
    backgroundColor: "#FEC6A1" // Soft Orange
  },
  alkalineEarthMetal: {
    name: "Alkaline Earth Metal",
    color: "#000000",
    backgroundColor: "#FEF7CD" // Soft Yellow
  },
  transitionMetal: {
    name: "Transition Metal",
    color: "#000000",
    backgroundColor: "#E5DEFF" // Soft Purple
  },
  postTransitionMetal: {
    name: "Post-Transition Metal",
    color: "#000000",
    backgroundColor: "#D3E4FD" // Soft Blue
  },
  metalloid: {
    name: "Metalloid",
    color: "#000000",
    backgroundColor: "#FFDEE2" // Soft Pink
  },
  nonmetal: {
    name: "Non-metal",
    color: "#000000",
    backgroundColor: "#F2FCE2" // Soft Green
  },
  halogen: {
    name: "Halogen",
    color: "#000000",
    backgroundColor: "#FDE1D3" // Soft Peach
  },
  nobleGas: {
    name: "Noble Gas",
    color: "#000000",
    backgroundColor: "#F1F0FB" // Soft Gray
  },
  lanthanoid: {
    name: "Lanthanide",
    color: "#000000",
    backgroundColor: "#D6BCFA" // Light Purple
  },
  actinoid: {
    name: "Actinide",
    color: "#000000",
    backgroundColor: "#C8C8C9" // Light Gray
  },
  unknown: {
    name: "Unknown",
    color: "#000000",
    backgroundColor: "#F6F6F7" // Dark Gray
  }
};
