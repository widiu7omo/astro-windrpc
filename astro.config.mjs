import { defineConfig } from "astro/config";
// import node from "@astrojs/node";
import WindiCSS from "astro-integration-windicss";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [WindiCSS(), react()],
});

// export default defineConfig({
//   site: "https://widiu7omo.github.io",
//   base: "/astro-windrpc",
//   integrations: [WindiCSS(), react()],
// });
