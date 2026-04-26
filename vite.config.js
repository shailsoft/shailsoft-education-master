import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base:
    process.env.VITE_BASE_PATH ||
    (command === "serve" ? "/" : "/shailsoft-education-master/"),
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "@assets": path.resolve(process.cwd(), "src/assets"),
      "@components": path.resolve(process.cwd(), "src/components"),
      "@pages": path.resolve(process.cwd(), "src/pages"),
      "@layouts": path.resolve(process.cwd(), "src/layouts"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
}));
