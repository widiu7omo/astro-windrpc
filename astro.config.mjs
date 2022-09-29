import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import WindiCSS from "astro-integration-windicss";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node(),
  integrations: [WindiCSS(), react()],
});
