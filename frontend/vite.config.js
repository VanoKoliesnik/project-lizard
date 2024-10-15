import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    nodeResolve({
      extensions: ["ts", "tsx"],
      browser: true,
    }),
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
