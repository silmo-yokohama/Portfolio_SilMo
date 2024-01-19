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
          "primary-content": "#01736c",
          secondary: "#F8B62B",
          "secondary-content": "#F5A527",
          accent: "#ED6D36",
          "accent-content": "#f05716",
          neutral: "#c0edea",
          "neutral-content": "#04615b",
          "base-100": "#F8FDEF",
          "base-200": "#edf0e9",
          "base-300": "#e1e3dc",

          info: "#007fff",
          success: "#00c100",
          warning: "#c89700",
          error: "#e50033",
        },
        myDark: {
          primary: "#00A197",
          "primary-content": "#02e3d5",
          secondary: "#F8B62B",
          "secondary-content": "#F5A527",
          accent: "#ED6D36",
          "accent-content": "#f05716",
          neutral: "#04615b",
          "neutral-content": "#c0edea",
          "base-100": "#1D232A",
          "base-200": "#353c45",
          "base-300": "#5b636e",
          info: "#007fff",
          success: "#00c100",
          warning: "#c89700",
          error: "#e50033",
        },
      },
    ],
  },
};
