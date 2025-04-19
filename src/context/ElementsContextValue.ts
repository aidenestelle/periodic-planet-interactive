import * as React from "react";

import { Element } from "@/types/ElementTypes";

export interface ElementsContextType {
  elements: Element[];
  loading: boolean;
  error: string | null;
}

export const ElementsContext = React.createContext<ElementsContextType | undefined>(undefined);
