// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://arnaualbert.github.io", // Update this!
  base: "tasty-venus", // Your GitHub repository name
  vite: {
    plugins: [tailwindcss()],
  },
});
