// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  site: "https://khrizenriquez.github.io/travel-countdown/",
  base: "/travel-countdown/",
  integrations: [react()],
  vite: {
    css: {
      postcss: "postcss.config.js",
    },
  },
});
