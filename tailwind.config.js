/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        //todo: Kolla upp darkmode
        extend: {
            colors: {
                primary: "#2E97D9",
                secondary: "#6C757D",
                danger: "#d92e2e",
                // Add more color variables as needed
            },
        },
    },
    plugins: [],
};
