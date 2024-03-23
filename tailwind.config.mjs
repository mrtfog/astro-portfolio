/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway Variable", "sans-serif"],
                rubik: ["Rubik Variable", "sans-serif"],
            },
        },
    },
    plugins: [],
};
