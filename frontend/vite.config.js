import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      // "@utils": fileURLToPath(new URL("./src", "utils")),
      // "@constants": fileURLToPath(new URL("./src", "constants")),
      // "@enums": fileURLToPath(new URL("./src", "enums")),
      // "@type": fileURLToPath(new URL("./src", "type")),
      // "@hooks": fileURLToPath(new URL("./src", "hooks")),
      // "@api": fileURLToPath(new URL("./src", "api")),
      // "@store": fileURLToPath(new URL("./src", "store")),
      // "@components": fileURLToPath(new URL("./src", "components")),
      // "@pages": fileURLToPath(new URL("./src", "pages")),
    },
  },
});
