import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/react-classes-2024-01",
  plugins: [react()],
  css: {
    preprocessorOptions: {},
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  // assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"],
});
