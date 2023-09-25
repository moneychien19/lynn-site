import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import astroExpressiveCode from "astro-expressive-code";
import storyblok from "@storyblok/astro";

const env = loadEnv("", process.cwd(), "STORYBLOK");

const astroExpressiveCodeOptions = {
  theme: "rose-pine-dawn",
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    astroExpressiveCode(astroExpressiveCodeOptions),
    mdx(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: "storyblok/BlogPost",
      },
      apiOptions: {
        region: "us",
      },
    }),
  ],
  // workaround: fix build error
  // ref: https://github.com/withastro/astro/issues/7629
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
