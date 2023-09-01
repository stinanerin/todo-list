/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        //todo: Kolla upp darkmode
        extend: {
            colors: {
                primary: "#2E97D9",
                secondary: "#6C757D",
                warning: "#f7941e",
                danger: "#fc3544",
                grey_100: "#E8ECF4",
                grey_300: "#bac6de",
                // Add more color variables as needed
            },
        },
    },
    plugins: [],
};
