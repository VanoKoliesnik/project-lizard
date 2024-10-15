import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(resolve(__dirname), "src"),
        },
      ],
    }),
  ],
  server: { port: 3000 },
});
