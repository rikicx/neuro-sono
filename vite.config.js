import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        equipe: resolve(import.meta.dirname, "equipe/index.html"),
      },
    },
  },
});
