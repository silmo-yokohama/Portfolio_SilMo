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
          "primary-content": "#48B9B1",
          secondary: "#F8B62B",
          "secondary-content": "#FFD57C",
          accent: "#ED6D36",
          "accent-content": "#FFAB87",
          neutral: "#A6EAE5",
          "neutral-content": "#D6F9F6",
          "base-100": "#E7EDF1",
          "base-200": "#5C8093",
          "base-300": "#0D3347",
          "base-content": "#000B11",
          info: "#1085FF",
          "info-content": "#0156AE",
          success: "#27C543",
          "success-content": "#72E085",
          warning: "#F4DC22",
          "warning-content": "#FFF077",
          error: "#e50033",
          "error-content": "#F05B7B",
        },
        myDark: {
          primary: "#00A197",
          "primary-content": "#00625B",
          secondary: "#F8B62B",
          "secondary-content": "#D59308",
          accent: "#ED6D36",
          "accent-content": "#A33304",
          neutral: "#A6EAE5",
          "neutral-content": "#D6F9F6",
          "base-100": "#0D3347",
          "base-200": "#120E2D",
          "base-300": "#5C8093",
          "base-content": "#E7EDF1",
          info: "#1085FF",
          "info-content": "#62AEFD",
          success: "#27C543",
          "success-content": "#008A18",
          warning: "#F4DC22",
          "warning-content": "#C9B408",
          error: "#e50033",
          "error-content": "#8D001E",
        },
      },
    ],
  },
};
