import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import WindiCSS from "astro-integration-windicss";
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node(),
  integrations: [WindiCSS()],
});
