
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      // Allow serving files from one level up to the project root
      strict: false,
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "@radix-ui/react-slot", 
      "@radix-ui/react-tabs", 
      "@radix-ui/react-separator",
      "@radix-ui/react-collapsible",
      "@react-three/fiber",
      "@react-three/drei",
      "three"
    ],
    esbuildOptions: {
      target: "esnext",
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
