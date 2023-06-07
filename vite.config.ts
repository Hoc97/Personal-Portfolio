import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Personal-Portfolio/',
  plugins: [react(), visualizer() as PluginOption],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      components: path.resolve(__dirname, "./src/components/"),
      public: path.resolve(__dirname, "./public/"),
    },
  },
});
