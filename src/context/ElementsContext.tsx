import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ElementsContext } from "./ElementsContextValue";

import { Element } from "@/types/ElementTypes";

interface ElementsContextType {
  elements: Element[];
  isLoading: boolean;
  error: string | null;
}

// ElementsContext is now defined in ElementsContextValue.ts

export const ElementsProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/elements.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load elements.json");
        return res.json();
      })
      .then((data) => {
        setElements(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch elements");
        setLoading(false);
      });
  }, []);

  return (
    <ElementsContext.Provider value={{ elements, loading, error }}>
      {children}
    </ElementsContext.Provider>
  );
};
