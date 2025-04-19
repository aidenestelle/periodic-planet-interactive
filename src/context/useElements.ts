import { useContext } from "react";
import { ElementsContext, ElementsContextType } from "./ElementsContextValue";

export const useElements = (): ElementsContextType => {
  const ctx = useContext(ElementsContext);
  if (!ctx) throw new Error("useElements must be used within an ElementsProvider");
  return ctx;
};
