import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
    base: "/Backend/",
    plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),

      "@vietmap/vietmap-gl-js":
        "@vietmap/vietmap-gl-js/dist/vietmap-gl.js",
    },
  },

  optimizeDeps: {
    include: ["@vietmap/vietmap-gl-js"],
  },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8080/Backend",
                changeOrigin: true,
            }
        }
    }
})