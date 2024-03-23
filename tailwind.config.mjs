/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway Variable", "sans-serif"],
                rubik: ["Rubik Variable", "sans-serif"],
            },
            colors: {
                customGreen: {
                    900: "#001219",
                    800: "#001E2B",
                    700: "#013951",
                    600: "#1096D0",
                    500: "#5ECFFF",
                    400: "#ADEF6F",
                    300: "#D7F3FF",
                    200: "#F0FBFF",
                },
                customOrange: "#EBB654",
            },
        },
    },
    plugins: [],
};
