import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "public/_redirects", dest: "build" }],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
