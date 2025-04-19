import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function BohrModelViewer({ glbUrl }: { glbUrl: string }) {
  if (!glbUrl) return null;
  return (
    <div style={{ width: "100%", height: 300 }}>
      <Canvas camera={{ position: [0, 0, 0.5] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model url={glbUrl} />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

// Removed dummy preload to avoid 404 errors on GitHub Pages
// if (useGLTF.preload) {
//   (useGLTF.preload as (path: string) => void)("/dummy-path-to-avoid-build-error");
// }
