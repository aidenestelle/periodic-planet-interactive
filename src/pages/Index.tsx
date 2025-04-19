
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PeriodicTable from "@/components/PeriodicTable";
import ElementCard from "@/components/ElementCard";
import SearchFilter from "@/components/SearchFilter";
import { Element } from "@/data/elementsData";
import { ChemistryAPI } from "@/lib/api";

export default function Index() {
  const [selectedElement, setSelectedElement] = useState<Element | undefined>(undefined);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [filteredElements, setFilteredElements] = useState<Element[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
    setIsCardOpen(true);
  };
  
  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setIsSearchActive(false);
      return;
    }
    
    const results = await ChemistryAPI.searchElements(query);
    setFilteredElements(results);
    setIsSearchActive(true);
  };
  
  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
    setIsSearchActive(false);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Interactive Periodic Table
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Explore the elements and their properties
        </p>
      </header>

      <SearchFilter 
        onSearch={handleSearch} 
        onCategoryFilter={handleCategoryFilter}
        activeCategory={activeCategory}
      />
      
      {isSearchActive && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Search Results</h2>
          {filteredElements.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredElements.map((element) => (
                <button
                  key={element.atomicNumber}
                  className="p-3 bg-card border rounded-md hover:shadow-md transition-shadow text-left"
                  onClick={() => handleElementClick(element)}
                >
                  <div className="text-2xl font-bold">{element.symbol}</div>
                  <div>{element.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {element.atomicNumber}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center p-8 bg-muted/20 rounded-md">
              No elements found matching your search.
            </div>
          )}
          
          <button
            className="mt-4 text-sm text-primary hover:text-primary/80"
            onClick={() => setIsSearchActive(false)}
          >
            ← Back to full periodic table
          </button>
        </div>
      )}
      
      {!isSearchActive && (
        <div className="overflow-x-auto pb-6">
          <PeriodicTable
            onElementClick={handleElementClick}
            highlightedCategory={activeCategory}
          />
        </div>
      )}
      
      <Dialog open={isCardOpen} onOpenChange={setIsCardOpen}>
        <DialogContent className="max-w-3xl p-0">
          <ElementCard 
            element={selectedElement} 
            onClose={() => setIsCardOpen(false)} 
          />
        </DialogContent>
      </Dialog>
      
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>Interactive Periodic Table - Educational chemistry tool</p>
        <p className="mt-1">Data provided for educational purposes</p>
      </footer>
    </div>
  );
}
