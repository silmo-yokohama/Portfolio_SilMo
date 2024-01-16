import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms ,require("daisyui")],
    daisyui: {
        themes: [
            {
                myLight: {
                    "primary": "#00A197",
                    "secondary": "#FCB545",
                    "accent": "#ED6D36",
                    "neutral": "#000",
                    "base-100": "#F8FDEF",
                    "info": "#007fff",
                    "success": "#00c100",
                    "warning": "#c89700",
                    "error": "#e50033",
                },
                myDark: {
                    "primary": "#00A197",
                    "secondary": "#FCB545",
                    "accent": "#ED6D36",
                    "neutral": "#000",
                    "base-100": "#1D232A",
                    "info": "#007fff",
                    "success": "#00c100",
                    "warning": "#c89700",
                    "error": "#e50033",
                },

            },
        ],
    },
};
