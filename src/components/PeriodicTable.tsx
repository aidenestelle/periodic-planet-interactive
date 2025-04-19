
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Element, periodicTableLayout, getElementByAtomicNumber } from "@/data/elementsData";
import { elementCategories } from "@/data/elementCategories";

interface PeriodicTableProps {
  onElementClick: (element: Element) => void;
  highlightedCategory?: string | null;
}

export default function PeriodicTable({ onElementClick, highlightedCategory }: PeriodicTableProps) {
  const [hoveredElement, setHoveredElement] = useState<Element | null>(null);
  
  // Grid spans 18 columns (groups) and 9 rows (7 periods + lanthanides + actinides)
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(18, minmax(3.5rem, 1fr))",
    gap: "0.25rem",
    maxWidth: "100%",
    overflowX: "auto" as const
  };
  
  return (
    <div className="relative">
      <div style={gridStyle}>
        {periodicTableLayout.map((layout) => {
          const element = getElementByAtomicNumber(layout.atomicNumber);
          if (!element) return null;
          
          const category = elementCategories[element.category];
          
          const isHighlighted = 
            highlightedCategory === null || highlightedCategory === element.category;
          
          return (
            <button
              key={element.atomicNumber}
              className={cn(
                "aspect-square p-1 rounded border text-left transition-all",
                "hover:shadow-md hover:scale-110 hover:z-10",
                !isHighlighted && "opacity-40"
              )}
              style={{
                backgroundColor: category?.backgroundColor || "#f5f5f5",
                color: category?.color || "#000000",
                gridColumn: layout.gridColumn,
                gridRow: layout.gridRow,
              }}
              onClick={() => onElementClick(element)}
              onMouseEnter={() => setHoveredElement(element)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <div className="text-xs opacity-70">{element.atomicNumber}</div>
              <div className="font-bold text-center text-lg">{element.symbol}</div>
              <div className="text-xs truncate">{element.name}</div>
              <div className="text-xs opacity-80">{element.atomicMass.toFixed(2)}</div>
            </button>
          );
        })}
      </div>
      
      {hoveredElement && (
        <div 
          className="absolute top-full mt-2 left-0 bg-popover border rounded-md p-3 shadow-lg z-20 w-48"
          style={{
            backgroundColor: 
              elementCategories[hoveredElement.category]?.backgroundColor || "#f5f5f5",
            color: elementCategories[hoveredElement.category]?.color || "#000000",
          }}
        >
          <div className="font-bold text-xl">{hoveredElement.symbol}</div>
          <div>{hoveredElement.name}</div>
          <div className="opacity-90">
            {elementCategories[hoveredElement.category]?.name || "Unknown"}
          </div>
          <div className="text-sm mt-1">
            Atomic number: {hoveredElement.atomicNumber}
          </div>
          <div className="text-sm">
            Atomic mass: {hoveredElement.atomicMass.toFixed(2)} u
          </div>
        </div>
      )}
    </div>
  );
}
