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
          "base-100": "#f9f9fa",
          "base-200": "#efeff2",
          "base-300": "#bcbcbf",
          "base-content": "#181818",
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
          secondary: "#ed8d26",
          "secondary-content": "#ffb428",
          accent: "#ED6D36",
          "accent-content": "#A33304",
          neutral: "#00544f",
          "neutral-content": "#112d65",
          "base-100": "#0c262d",
          "base-200": "#373737",
          "base-300": "#414557",
          "base-content": "#f4f9ff",
          info: "#0086f8",
          "info-content": "#0067ff",
          success: "#27C543",
          "success-content": "#008A18",
          warning: "#ed8d26",
          "warning-content": "#ffb428",
          error: "#d14741",
          "error-content": "#ff564f",
        },
      },
    ],
  },
};
