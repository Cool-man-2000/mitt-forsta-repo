import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serverar sidan under /mitt-forsta-repo/
export default defineConfig({
  plugins: [react()],
  base: "/mitt-forsta-repo/",
});
