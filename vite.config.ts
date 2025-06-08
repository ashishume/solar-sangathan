/// <reference types="node" />
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    css: {
      postcss: "./postcss.config.js",
    },
    define: {
      "import.meta.env.VITE_APP_VERSION": JSON.stringify(
        env.npm_package_version || "0.0.0"
      ),
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
        "@ui": resolve(__dirname, "./src/components/ui"),
      },
    },
  };
});
