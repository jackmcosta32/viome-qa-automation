import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    retries: 0,
    experimentalStudio: true,
    baseUrl: "https://preview.viome.com/",
  },
});
