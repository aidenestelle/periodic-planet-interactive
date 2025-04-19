
// Utility functions for atomic calculations and visualizations

// Get electron configuration layers for visualization
export const getElectronConfiguration = (electronConfig: string): number[] => {
  // Parse the electron configuration string and return array of electrons per shell
  // Example: "1s² 2s² 2p⁶ 3s² 3p⁶" => [2, 8, 8]
  
  const shellMap: Record<string, number> = {};
  
  // Match patterns like "1s²" or "3p⁶"
  const matches = electronConfig.match(/(\d+)([spdf])(\d|⁰|¹|²|³|⁴|⁵|⁶|⁷|⁸|⁹|¹⁰|¹¹|¹²|¹³|¹⁴)/g) || [];
  
  // Convert superscript numbers to regular numbers
  const superscriptToNumber: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', 
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '¹⁰': '10', '¹¹': '11', '¹²': '12', '¹³': '13', '¹⁴': '14'
  };
  
  for (const match of matches) {
    const shellNumber = match.match(/\d+/)?.[0] || '';
    const subshellType = match.match(/[spdf]/)?.[0] || '';
    const electronCountSuperscript = match.match(/(\d|⁰|¹|²|³|⁴|⁵|⁶|⁷|⁸|⁹|¹⁰|¹¹|¹²|¹³|¹⁴)$/)?.[0] || '';
    
    const electronCount = superscriptToNumber[electronCountSuperscript] || electronCountSuperscript;
    
    if (!shellMap[shellNumber]) {
      shellMap[shellNumber] = 0;
    }
    
    shellMap[shellNumber] += parseInt(electronCount);
  }
  
  // Convert to array of electrons per shell
  const result: number[] = [];
  const shellNumbers = Object.keys(shellMap).sort((a, b) => parseInt(a) - parseInt(b));
  
  for (const shellNumber of shellNumbers) {
    result.push(shellMap[shellNumber]);
  }
  
  return result;
};

// Get maximum number of electrons per shell (2n²)
export const getMaxElectronsInShell = (shellNumber: number): number => {
  return 2 * Math.pow(shellNumber, 2);
};

// Get atomic radius for visualization scaling
export const getAtomicRadiusScale = (atomicRadius: number | undefined): number => {
  if (!atomicRadius) return 1;
  
  // Normalize to a reasonable scale for visualization
  return Math.max(0.5, Math.min(2, atomicRadius / 150));
};

// Get element color based on category
export const getElementColor = (category: string): string => {
  const colors: Record<string, string> = {
    alkaliMetal: '#FEC6A1',
    alkalineEarthMetal: '#FEF7CD',
    transitionMetal: '#E5DEFF',
    postTransitionMetal: '#D3E4FD',
    metalloid: '#FFDEE2',
    nonmetal: '#F2FCE2',
    halogen: '#FDE1D3',
    nobleGas: '#F1F0FB',
    lanthanoid: '#D6BCFA',
    actinoid: '#C8C8C9',
    unknown: '#F6F6F7'
  };
  
  return colors[category] || '#F6F6F7';
};

// Format temperature with unit
export const formatTemperature = (temp: number | undefined): string => {
  if (temp === undefined) return 'Unknown';
  return `${temp} °C`;
};

// Calculate electron orbit positions for each shell
export const calculateElectronPositions = (shellCount: number, electronsInShell: number): [number, number, number][] => {
  const positions: [number, number, number][] = [];
  const radius = shellCount * 0.5; // Increase radius for each shell
  
  for (let i = 0; i < electronsInShell; i++) {
    const angle = (i / electronsInShell) * Math.PI * 2;
    // Add some randomness to make it look more realistic
    const randomOffset = Math.random() * 0.1 - 0.05;
    
    const x = radius * Math.cos(angle) + randomOffset;
    const y = radius * Math.sin(angle) + randomOffset;
    const z = (Math.random() * 0.2 - 0.1) * radius; // Small Z variation for 3D effect
    
    positions.push([x, y, z]);
  }
  
  return positions;
};
