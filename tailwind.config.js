/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ["./dist/*.{html,js}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1080px",
        },
        extend: {
            fontFamily: {
                sans: ["Josefin Sans", "sans-serif"],
                alata: ["Alata"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};