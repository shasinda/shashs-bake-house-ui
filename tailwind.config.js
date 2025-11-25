/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom palette placeholders - will be updated based on logo
                primary: '#d4a373',
                secondary: '#faedcd',
                accent: '#e9edc9',
                dark: '#333333',
                light: '#fefae0',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
