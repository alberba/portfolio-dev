// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    headers: {
      "Content-Security-Policy":
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none';",
    },
  },

  integrations: [mdx()],
});