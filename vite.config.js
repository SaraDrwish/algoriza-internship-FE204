import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // publicPath: "https://SaraDrwish.github.io/alg/vue-deploy/oriza-internship-FE204",
  // publicPath: "/vue-deploy/",
  publicPath: "./",
  base: "/deploying-vite-algoriza-internship-FE204/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
