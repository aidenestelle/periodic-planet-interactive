
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Element } from "@/data/elementsData";
import { formatTemperature } from "@/lib/atomicUtils";
import AtomVisualization from "@/components/AtomVisualization";
import { elementCategories } from "@/data/elementCategories";

interface ElementCardProps {
  element?: Element;
  onClose?: () => void;
}

export default function ElementCard({ element, onClose }: ElementCardProps) {
  const [activeTab, setActiveTab] = useState("properties");
  
  if (!element) {
    return null;
  }

  const category = elementCategories[element.category];
  
  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden shadow-lg animate-fade-in">
      <CardHeader 
        className={cn(
          "text-left",
          "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        )}
      >
        <div className="flex justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono opacity-80">
                {element.atomicNumber}
              </span>
              <CardTitle className="text-3xl font-bold">
                {element.symbol}
              </CardTitle>
            </div>
            <CardDescription className="text-xl text-white opacity-90">
              {element.name}
            </CardDescription>
            <div className="mt-1 text-sm opacity-75">
              {category?.name || "Unknown Category"}
            </div>
          </div>
          
          {onClose && (
            <button 
              onClick={onClose} 
              className="p-1 text-white opacity-70 hover:opacity-100"
              aria-label="Close"
            >
              ✕
            </button>
          )}
        </div>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="px-6 pt-4">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="uses">Uses</TabsTrigger>
          </TabsList>
        </div>
        
        <CardContent className="p-6">
          <TabsContent value="properties" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Atomic Mass</div>
                <div className="font-medium">{element.atomicMass} u</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Electron Configuration</div>
                <div className="font-mono text-sm">{element.electronConfiguration}</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Electronegativity</div>
                <div className="font-medium">{element.electronegativity ?? 'N/A'}</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Atomic Radius</div>
                <div className="font-medium">{element.atomicRadius ? `${element.atomicRadius} pm` : 'N/A'}</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Ionization Energy</div>
                <div className="font-medium">{element.ionizationEnergy ? `${element.ionizationEnergy} eV` : 'N/A'}</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Density</div>
                <div className="font-medium">{element.density ? `${element.density} g/cm³` : 'N/A'}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Melting Point</div>
                <div className="font-medium">{formatTemperature(element.meltingPoint)}</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Boiling Point</div>
                <div className="font-medium">{formatTemperature(element.boilingPoint)}</div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="structure">
            <div className="flex flex-col items-center">
              <div className="w-full h-64 mb-4">
                <AtomVisualization element={element} />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                {element.name} has {element.electronConfiguration.split(' ').length} electron shells. 
                The electronic configuration is {element.electronConfiguration}.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <p>{element.description}</p>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Discovery</div>
              <div className="font-medium">
                {element.discoveredBy 
                  ? `Discovered by ${element.discoveredBy}${element.discoveryYear ? ` in ${element.discoveryYear}` : ''}`
                  : 'Discovery information not available'}
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground pt-2">
              The name {element.name} comes from 
              {element.name === "Hydrogen" && " the Greek words 'hydro' and 'genes', meaning 'water forming'"}
              {element.name === "Helium" && " the Greek word 'helios', meaning 'sun'"}
              {element.name === "Lithium" && " the Greek word 'lithos', meaning 'stone'"}
              {element.name === "Beryllium" && " the mineral beryl, which contains beryllium"}
              {element.name === "Boron" && " the Arabic word 'buraq' and the Persian word 'burah'"}
              {element.name === "Carbon" && " the Latin word 'carbo', meaning 'coal'"}
              {element.name === "Nitrogen" && " the Latin words 'nitrum' and 'genes', meaning 'nitre forming'"}
              {element.name === "Oxygen" && " the Greek words 'oxy' and 'genes', meaning 'acid forming'"}
              {element.name === "Fluorine" && " the Latin word 'fluere', meaning 'to flow'"}
              {element.name === "Neon" && " the Greek word 'neos', meaning 'new'"}
              {!["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"].includes(element.name) && " its linguistic origin"}
              .
            </div>
          </TabsContent>
          
          <TabsContent value="uses">
            {element.commonUses && element.commonUses.length > 0 ? (
              <div className="space-y-4">
                <p>Common applications and uses of {element.name}:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {element.commonUses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No common uses information available for {element.name}.</p>
            )}
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
