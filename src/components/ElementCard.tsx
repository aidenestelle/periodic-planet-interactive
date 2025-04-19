
import { useState } from "react";
import { XIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Element } from "@/types/ElementTypes";
import { formatTemperature } from "@/lib/atomicUtils";
import BohrModelViewer from "@/components/BohrModelViewer";

interface ElementCardProps {
  element?: Element;
  onClose?: () => void;
  inDialog?: boolean;
}

export default function ElementCard({ element, onClose, inDialog = true }: ElementCardProps) {
  const [activeTab, setActiveTab] = useState("properties");

  if (!element) return null;

  return (
    <Card className="relative w-full max-h-[calc(90vh-24px)] sm:max-h-[80vh] bg-white dark:bg-gray-900 sm:rounded-2xl shadow-2xl flex flex-col overflow-y-auto overflow-x-visible pb-8 rounded-3xl">
      {/* Dialog accessibility: only render when inDialog */}
      {inDialog && (
        <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
          <DialogTitle>{element.name}</DialogTitle>
          <DialogDescription>{element.summary || `Details for ${element.name}`}</DialogDescription>
        </span>
      )}
      <CardHeader className={cn("relative text-left bg-gradient-to-r from-blue-600/70 to-purple-600/80 text-white p-2 sm:p-8 pb-2 sm:pb-4 rounded-t-2xl")}>        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/90 hover:text-white/100 rounded-full p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300 z-30"
          aria-label="Close"
        >
          <XIcon className="w-8 h-8 sm:w-8 sm:h-8" />
        </button>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
          <div className="flex-shrink-0 flex flex-col items-center w-full sm:w-auto">
            <div className="bg-white/80 rounded-2xl p-2 shadow-xl mb-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700 drop-shadow-sm">{element.symbol}</span>
            </div>
            <span className="block text-xs font-semibold tracking-wider uppercase opacity-70">{element.number}</span>
            {element.bohr_model_image && (
              <img
                src={element.bohr_model_image}
                alt={`Bohr model of ${element.name}`}
                className="rounded-2xl border-2 border-blue-200 shadow-lg w-24 h-24 sm:w-32 sm:h-32 object-contain bg-white/70 mt-2 sm:mt-3"
                style={{ maxWidth: 128, maxHeight: 128 }}
              />
            )}
          </div>
          <div className="w-full">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 drop-shadow-sm">{element.name}</CardTitle>
            <CardDescription className="text-base sm:text-lg text-white opacity-95 mb-2 font-medium drop-shadow-sm">{element.summary}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">{element.category}</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">{element.phase}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-2 sm:px-8 pt-4 sm:pt-6">
          <TabsList className="grid grid-cols-3 bg-white/40 rounded-xl text-xs sm:text-base">
            <TabsTrigger value="properties" className="py-2 sm:py-3">Properties</TabsTrigger>
            <TabsTrigger value="structure" className="py-2 sm:py-3">View Structure</TabsTrigger>
            <TabsTrigger value="history" className="py-2 sm:py-3">History</TabsTrigger>
          </TabsList>
        </div>
        <CardContent className="p-8">
          <TabsContent value="properties" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Atomic Mass</div>
                <div className="font-semibold text-lg">{element.atomic_mass} u</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Electron Configuration</div>
                <div className="font-mono text-base bg-gray-100 rounded px-2 py-1">{element.electron_configuration}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Electronegativity (Pauling)</div>
                <div className="font-semibold text-lg">{element.electronegativity_pauling ?? 'N/A'}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Ionization Energy</div>
                <div className="font-semibold text-lg">{element.ionization_energies?.[0] ? `${element.ionization_energies?.[0]} eV` : 'N/A'}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Density</div>
                <div className="font-semibold text-lg">{element.density ? `${element.density} g/cm³` : 'N/A'}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Melting Point</div>
                <div className="font-semibold text-lg">{formatTemperature(element.melt)}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Boiling Point</div>
                <div className="font-semibold text-lg">{formatTemperature(element.boil)}</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="structure">
            <div className="flex flex-col items-center gap-4">
              {element.bohr_model_3d && (
                <div className="w-full flex justify-center mt-4">
                  <BohrModelViewer glbUrl={element.bohr_model_3d} />
                </div>
              )}
              <p className="text-sm text-center text-muted-foreground mt-4">
                {element.name} has {element.electron_configuration.split(' ').length} electron shells.<br />
                The electronic configuration is <span className="font-mono">{element.electron_configuration}</span>.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="history" className="space-y-6">
            <div className="prose max-w-none text-gray-700">
              <p>{element.summary}</p>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="text-sm text-muted-foreground">Discovery</div>
              <div className="font-medium">
                {element.discovered_by
                  ? `Discovered by ${element.discovered_by}${element.named_by ? ` in ${element.named_by}` : ''}`
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
        </CardContent>
      </Tabs>
    </Card>
  );
}
