import { useState } from "react";
import Button from "./Button";

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        const root = document.documentElement;
        root.setAttribute("data-theme", darkMode ? "light" : "dark");
    };

    return (
        <Button
            type={`${darkMode ? "dark" : "light"}-mode`}
            onClick={toggleDarkMode}
        />
    );
};

export default ToggleDarkMode;
