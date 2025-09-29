/** @type {import('tailwindcss').config} */
module.exports = {
    content: [
    "./assets/*.liquid", // Adjust according to your file structure
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
    ],
    theme: {
        extend: {
            maxWidth: {
                "6xl": "72rem",
            },
            height: {
                94: "22rem",
            },
        },
    },
    plugins: [],
};
