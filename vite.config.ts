/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@admin": resolve(__dirname, "./src/admin"),
      "@components": resolve(__dirname, "./src/components"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@store": resolve(__dirname, "./src/store"),
      "@services": resolve(__dirname, "./src/services"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@assets": resolve(__dirname, "./src/assets"),
    },
  },
});
