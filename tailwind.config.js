import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Zen Maru Gothic", ...defaultTheme.fontFamily.sans],
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
    },
  },

  plugins: [forms, require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#00A197",
          "primary-content": "#8CE2DC",
          secondary: "#F8B62B",
          "secondary-content": "#FFDBB3",
          accent: "#ED6D36",
          "accent-content": "#FFD2BE",
          neutral: "#dbdbdc",
          "neutral-content": "#0f0f0f",
          "base-100": "#F8FDEF",
          "base-200": "#EEF9DA",
          "base-300": "#ABCE6D",
          "base-content": "#181818",
          info: "#1085FF",
          success: "#27C543",
          warning: "#F4DC22",
          error: "#e50033",
        },
        myDark: {
          primary: "#00A197",
          "primary-content": "#00625B",
          secondary: "#F8B62B",
          "secondary-content": "#694700",
          accent: "#ED6D36",
          "accent-content": "#5C1B00",
          neutral: "#282828",
          "neutral-content": "#dbdbdc",
          "base-100": "#1c262d",
          "base-200": "#373737",
          "base-300": "#414557",
          "base-content": "#f4f9ff",
          info: "#0086f8",
          success: "#27C543",
          warning: "#ed8d26",
          error: "#e50033",
        },
      },
    ],
  },
};
