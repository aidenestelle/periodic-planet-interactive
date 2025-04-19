
import { fetchElementData } from "@/data/elementsData";
import { Element } from "@/types/ElementTypes";

// API class for fetching element data
export class ChemistryAPI {
  // Fetch data for a specific element by atomic number
  static async getElement(number: number): Promise<Element | undefined> {
    try {
      // In a real app, this would call an external API
      // For now, we'll use our mock data function
      return await fetchElementData(number);
    } catch (error) {
      console.error("Error fetching element data:", error);
      return undefined;
    }
  }
  
  // Search elements by name, symbol, or atomic number
  static async searchElements(query: string): Promise<Element[]> {
    try {
      // Mock API search function
      // In a real app, this would call an external API endpoint
      const response = await import('@/data/elementsData');
      const { elements } = response;
      
      const searchQuery = query.toLowerCase().trim();
      
      return elements.filter(element => 
        element.name.toLowerCase().includes(searchQuery) ||
        element.symbol.toLowerCase() === searchQuery ||
        element.number.toString() === searchQuery
      );
    } catch (error) {
      console.error("Error searching elements:", error);
      return [];
    }
  }
  
  // Get elements by category
  static async getElementsByCategory(category: string): Promise<Element[]> {
    try {
      // Mock API category filter
      const response = await import('@/data/elementsData');
      const { elements } = response;
      
      return elements.filter(element => element.category === category);
    } catch (error) {
      console.error("Error fetching elements by category:", error);
      return [];
    }
  }
  
  // Get similar elements (same group or period)
  static async getSimilarElements(number: number): Promise<Element[]> {
    try {
      const element = await this.getElement(number);
      if (!element) return [];
      
      const response = await import('@/data/elementsData');
      const { elements } = response;
      
      // Get elements in the same group (column) or period (row)
      return elements.filter(el => 
        (el.group === element.group || el.period === element.period) && 
        el.number !== element.number
      );
    } catch (error) {
      console.error("Error fetching similar elements:", error);
      return [];
    }
  }
}

// Helper function to get property comparisons between elements
export const compareElementProperties = <T extends keyof Element>(
  elements: Element[], 
  property: T
): Record<number, Element[T] | undefined> => {
  const result: Record<number, Element[T] | undefined> = {};
  
  elements.forEach(element => {
    result[element.number] = element[property];
  });
  
  return result;
};
