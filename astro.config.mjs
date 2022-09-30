import { defineConfig } from "astro/config";
// import node from "@astrojs/node";
import WindiCSS from "astro-integration-windicss";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [WindiCSS(), react()],
});
