/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.liquid",
        "./assets/*.liquid",
        "./layout/*.liquid",
        "./sections/*.liquid",
        "./snippets/*.liquid",
        "./templates/*.liquid",
        "./templates/customers/*.liquid",
    ],
    theme: {
        extend: {
            maxWidth: {
                '1550': '1550px',
                '1650': '1650px', 
                '1750': '1750px',
            },
            fontFamily: {
                Montserrat: ['Montserrat']
            }
        },
    },
    plugins: [],
};