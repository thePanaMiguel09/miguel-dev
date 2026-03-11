// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "FiraCode-Bold",
      cssVariable: "--font-firaCode",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/FiraCode-Bold.ttf"],
            weight: "700",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/FiraCode-Regular.ttf"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Inter-VariableFont_opsz,wght.ttf"],
            style: "normal",
            weight: "normal",
          },
        ],
      },
    },
  ],
});
