/** @type {import("tailwindcss").Config} */
import { Platform } from "react-native";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C7FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
        },
        accent: "#AB8BFF",
      },
      fontFamily: {
        "podkova-normal": "Podkova_400",
        "podkova-medium": "Podkova_500",
        "podkova-semibold": "Podkova_600",
        "podkova-bold": "Podkova_700",
        "podkova-extrabold": "Podkova_800",
      },
    },
  },
  plugins: [],
};
