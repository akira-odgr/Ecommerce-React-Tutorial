import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import compression from "vite-plugin-compression";
import path from "path";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "./",
    plugins: [react(), tailwindcss(), svgr(), compression()],
    resolve: {
        alias: { "@": path.resolve(__dirname, "src") },
    },
    css: {
        postcss: { plugins: [autoprefixer()] },
    },
    build: {
        minify: "esbuild",
        assetsInlineLimit: 4096,
    },
});
