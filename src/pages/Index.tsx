
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PeriodicTable from "@/components/PeriodicTable";
import ElementCard from "@/components/ElementCard";
import SearchFilter from "@/components/SearchFilter";
import { useElements } from "@/context/useElements";
import { Element } from "@/types/ElementTypes";
import SiteFooter from "@/components/SiteFooter";

export default function Index() {
  const [selectedElement, setSelectedElement] = useState<Element | undefined>(undefined);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { elements, loading, error } = useElements();
const [activeCategory, setActiveCategory] = useState<string | null>(null);
const [searchQuery, setSearchQuery] = useState("");


  
  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
    setIsCardOpen(true);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
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
      <div className="overflow-x-auto pb-6">
        <PeriodicTable
          onElementClick={handleElementClick}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
        />
      </div>

      <Dialog open={isCardOpen} onOpenChange={setIsCardOpen}>
        <DialogContent className="max-w-3xl p-0 rounded-3xl">
          <ElementCard
            element={selectedElement}
            onClose={() => setIsCardOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}
