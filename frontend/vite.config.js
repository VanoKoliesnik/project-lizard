import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  plugins: [
    react(),
    nodeResolve({
      extensions: ["ts", "tsx"],
      browser: true,
    }),
  ],
  server: { port: 3000 },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
