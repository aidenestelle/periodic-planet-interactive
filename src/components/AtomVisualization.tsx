
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";
import { getElectronConfiguration, calculateElectronPositions } from "@/lib/atomicUtils";
import type { Element as ChemicalElement } from "@/types/ElementTypes";
import { elementCategories } from "@/data/elementCategories";

// Electron component
function Electron({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // Runtime validation (after hooks)
  const isValid = Array.isArray(position) && position.length === 3 && position.every((v) => typeof v === 'number' && !isNaN(v));
  useFrame(() => {
    if (!isValid) {
      console.error('Invalid position prop for Electron:', position);
      return;
    }
    if (mesh.current) {
      mesh.current.position.x += (Math.random() - 0.5) * 0.01;
      mesh.current.position.y += (Math.random() - 0.5) * 0.01;
      mesh.current.position.z += (Math.random() - 0.5) * 0.01;
    }
  });

  if (!isValid) return null;

  return (
    <Sphere
      ref={mesh}
      args={[0.05, 16, 16]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color={hovered ? "#ffffff" : "#3498db"} 
        emissive={hovered ? "#3498db" : undefined}
        emissiveIntensity={hovered ? 2 : 0}
      />
    </Sphere>
  );
}

// Shell component
function Shell({ radius, color = "#cccccc" }: { radius: number, color?: string }) {
  return (
    <mesh>
      <ringGeometry args={[radius, radius + 0.01, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
}

// Nucleus component
function Nucleus({ element }: { element: ChemicalElement }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const category = elementCategories[element.category];

  // Runtime validation (after hooks)
  const isValid = element && typeof element === 'object' && typeof element.symbol === 'string' && typeof element.number === 'number';
  useFrame(() => {
    if (!isValid) {
      console.error('Invalid element prop for Nucleus:', element);
      return;
    }
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x += 0.005;
    }
  });

  if (!isValid) return null;
  
  const nucleusColor = category?.backgroundColor || "#cccccc";
  const nucleusSize = Math.min(0.5, 0.2 + (element.number * 0.01));
  
  return (
    <group>
      <Sphere ref={mesh} args={[nucleusSize, 32, 32]}>
        <meshStandardMaterial
          color={nucleusColor}
          roughness={0.7}
          metalness={0.2}
        />
      </Sphere>
      
      <Text
        position={[0, -nucleusSize - 0.2, 0]}
        fontSize={0.15}
        color="#ffffff"
      >
        {element.symbol}
      </Text>
    </group>
  );
}

// Main Atom component
function Atom({ element }: { element: ChemicalElement }) {
  // Calculate electron configuration per shell
  // Use correct property and provide fallback if undefined
  const electronShells = useMemo(
    () => {
      // Fallback: if electron_configuration is missing, return empty array
      if (!element.electron_configuration) return [];
      return getElectronConfiguration(element.electron_configuration);
    },
    [element]
  );
  
  return (
    <group>
      {/* Nucleus */}
      <Nucleus element={element} />
      
      {/* Electron shells and electrons */}
      {electronShells.map((electronsInShell, shellIndex) => {
        const shellRadius = (shellIndex + 1) * 0.7;
        
        // Calculate positions for electrons in this shell
        const positions = calculateElectronPositions(shellIndex + 1, electronsInShell);
        
        return (
          <group key={shellIndex}>
            <Shell radius={shellRadius} />
            
            {/* Electrons */}
            {positions.map((position, i) => (
              <Electron key={`shell-${shellIndex}-electron-${i}`} position={position} />
            ))}
          </group>
        );
      })}
      
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Directional light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </group>
  );
}

// Main component with Canvas
interface AtomVisualizationProps {
  element: ChemicalElement;
}

export default function AtomVisualization({ element }: AtomVisualizationProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Atom element={element} />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  );
}
