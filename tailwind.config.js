import fluidFontSizePlugin from "@olets/tailwindcss-fluid-font-size";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./docs/**/*.md"],
  plugins: [
    fluidFontSizePlugin,
    plugin(function ({ addBase }) {
      addBase({
        ".VPNavBarTitle .title": {
          "@apply text-fluid md:text-from-[9px] md:text-to-[base@lg]": {},
        },
      });
    }),
  ],
};
