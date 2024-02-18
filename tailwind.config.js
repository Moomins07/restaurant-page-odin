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

            extend: {
                colors: {
                    primary: 'var(--color-primary)',
                    secondary: 'var(--color-secondary)',
                    // ...
                },
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
    }
}