import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://airdb.id",
  output: "static",
  publicDir: "static",
  integrations: [sitemap()],
});
