
import { memo, useMemo } from "react";
import { cn } from "@/lib/utils";
import { periodicTableLayout, getElementByNumber } from "@/data/elementsData";
import { Element } from "@/types/ElementTypes";
import { elementCategories } from "@/data/elementCategories";

// Type for element with layout info
type ElementWithLayout = Element & { gridColumn: number | string; gridRow: number | string };
// Type for category object (from elementCategories)
type ElementCategory = typeof elementCategories[keyof typeof elementCategories];
import ElementCard from "@/components/ElementCard";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface PeriodicTableProps {
  onElementClick: (element: Element) => void;
  activeCategory?: string | null;
  searchQuery?: string;
}

const ElementButton = memo(function ElementButton({ element, isHighlighted, onClick, category }: {
  element: ElementWithLayout;
  isHighlighted: boolean;
  onClick: (el: ElementWithLayout) => void;
  category: ElementCategory | undefined;
}) {
  return (
    <button
      aria-label={element.name}
      tabIndex={isHighlighted ? 0 : -1}
      disabled={!isHighlighted}
      className={cn(
        "relative aspect-square min-w-[2.5rem] min-h-[2.5rem] sm:min-w-[2.75rem] sm:min-h-[2.75rem] md:min-w-[3rem] md:min-h-[3rem] p-0.5 sm:p-1 rounded-xl border border-white/40 shadow text-left transition-colors duration-100 font-sans flex flex-col items-stretch justify-between bg-white/80 dark:bg-gray-700/40 outline-none",
        "hover:shadow-lg hover:scale-105 hover:z-20 hover:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:z-30",
        !isHighlighted && "opacity-30 grayscale pointer-events-none",
        isHighlighted && "ring-2 ring-blue-300"
      )}
      style={{
        background: `linear-gradient(135deg, ${category?.backgroundColor || "#e0e7ff"} 60%, #fff0 100%)`,
        color: category?.color || "#22223b",
        gridColumn: element.gridColumn,
        gridRow: element.gridRow
      }}
      onClick={() => onClick(element)}
    >
      <span className="absolute top-1 left-1 text-[0.7rem] sm:text-[0.8rem] opacity-80 font-bold select-none bg-white/80 rounded px-1 pointer-events-none z-10" style={{lineHeight:'1'}}>{element.number}</span>
      <div className="flex flex-col items-center justify-center w-full h-full gap-0.5 sm:gap-1 pt-4 pb-2">
        <span className="font-extrabold text-center text-lg sm:text-xl md:text-2xl leading-none select-none drop-shadow-sm">{element.symbol}</span>
        <span className="hidden xs:block text-[0.7rem] sm:text-xs truncate opacity-80 text-center w-full select-none">{element.name}</span>
        <span className="hidden xs:block text-[0.6rem] sm:text-[0.7rem] opacity-80 font-mono text-center w-full select-none">{element.atomic_mass.toFixed(2)}</span>
      </div>
    </button>
  );
});

export default function PeriodicTable(props: PeriodicTableProps) {
  const { onElementClick, activeCategory, searchQuery } = props;
  // Memoize the elements to avoid unnecessary recalculations
  const elementsWithLayout = useMemo(() => (
    periodicTableLayout.map((layout) => {
      const element = getElementByNumber(layout.number);
      if (!element) return null;
      return {
        ...element,
        gridColumn: layout.gridColumn,
        gridRow: layout.gridRow,
      } as ElementWithLayout;
    }).filter(Boolean) as ElementWithLayout[]
  ), []);

  // --- Category filter logic ---
  const selectedCategoryName = activeCategory
    ? elementCategories[activeCategory]?.name
    : null;
  function normalizeCategory(str?: string) {
    return (str || "").replace(/[-\s]/g, "").toLowerCase().trim();
  }
  // Special atomic numbers for halogens: F, Cl, Br, I, At, Ts
  const halogenAtomicNumbers = [9, 17, 35, 53, 85, 117];
  // Helper to determine if an element matches the current filter
  function isElementHighlighted(el: ElementWithLayout): boolean {
    // Category filter
    let categoryMatch = true;
    if (selectedCategoryName) {
      const normElCat = normalizeCategory(el.category);
      const normSelCat = normalizeCategory(selectedCategoryName);
      if (normSelCat === "halogen") {
        categoryMatch = halogenAtomicNumbers.includes(el.number);
      } else if (normSelCat === "unknown") {
        categoryMatch = normElCat.startsWith("unknown");
      } else if (normSelCat === "nonmetal") {
        categoryMatch = normElCat.includes("nonmetal");
      } else {
        categoryMatch = normElCat.includes(normSelCat);
      }
    }
    // Search filter
    let searchMatch = true;
    if (props.searchQuery && props.searchQuery.trim()) {
      const q = props.searchQuery.trim().toLowerCase();
      searchMatch = (
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        String(el.number) === q
      );
    }
    return categoryMatch && searchMatch;
  }

  return (
    <section
      role="region"
      aria-label="Periodic Table"
      className="w-full flex flex-col items-center justify-center py-10 px-2"
    >
      <div className="mb-6 text-center sticky top-0 z-20 bg-white/95 dark:bg-gray-900/90 py-2 md:static md:bg-transparent md:dark:bg-transparent">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-800 drop-shadow-sm mb-1 sm:mb-2 tracking-tight">
          Periodic Table of the Elements
        </h2>
        <p className="text-xs sm:text-md text-blue-900/80 font-medium max-w-2xl mx-auto">
          Explore the elements by clicking on any cell. Categories are color-coded for easy navigation.
        </p>
      </div>
      <div
        className="bg-white/90 dark:bg-gray-800/80 border border-blue-200 dark:border-gray-700 rounded-3xl shadow-lg p-2 md:p-8 flex flex-col items-center w-full relative"
        style={{ maxWidth: 'min(100vw, 1400px)' }}
      >
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div
            className="grid justify-center min-w-[29rem] sm:min-w-[36rem] md:min-w-0"
            style={{
              gridTemplateColumns: "repeat(18, minmax(2.1rem, 1fr))",
              gap: "0.3rem",
              padding: "0.5rem 10px",
            }}
          >
            {elementsWithLayout.map((element) => {
              const category = elementCategories[element.category];
              const isHighlighted = isElementHighlighted(element);
              return (
                <ElementButton
                  key={element.number}
                  element={element}
                  isHighlighted={isHighlighted}
                  onClick={onElementClick}
                  category={category}
                />
              );
            })}
          </div>
          {/* Gradient fade at right edge for scroll cue */}
          <div className="pointer-events-none absolute right-2 top-0 h-full w-8 bg-gradient-to-l from-white/90 dark:from-gray-800/80 to-transparent" style={{zIndex:2}} />
        </div>
      </div>
    </section>
  );
}
