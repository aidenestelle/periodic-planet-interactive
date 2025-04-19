
import { useState } from "react";
import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { elementCategories } from "@/data/elementCategories";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string | null) => void;
  activeCategory: string | null;
}

export default function SearchFilter({ 
  onSearch, 
  onCategoryFilter, 
  activeCategory 
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  

  
  return (
    <div className="mb-6 space-y-4">
      <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
        <Input
          type="text"
          placeholder="Search by name, symbol or number..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full"
        />
      </form>
      
      <div className="space-y-2">
        <div className="text-sm font-medium">Filter by category:</div>
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant={activeCategory === null ? "default" : "outline"}
            className="cursor-pointer hover:bg-accent"
            onClick={() => onCategoryFilter(null)}
          >
            All
          </Badge>
          
          {Object.entries(elementCategories).map(([key, category]) => (
            <Badge
              key={key}
              variant={activeCategory === key ? "default" : "outline"}
              className="cursor-pointer hover:bg-accent"
              onClick={() => onCategoryFilter(key)}
              style={{
                backgroundColor: activeCategory === key ? category.backgroundColor : undefined,
                color: activeCategory === key ? category.color : undefined,
                borderColor: category.backgroundColor
              }}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
