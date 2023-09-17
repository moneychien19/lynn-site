import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import astroExpressiveCode from "astro-expressive-code";

const astroExpressiveCodeOptions = {
  theme: "rose-pine-dawn",
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    astroExpressiveCode(astroExpressiveCodeOptions),
    mdx(),
  ],
});
