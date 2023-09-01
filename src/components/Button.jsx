import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
    faTrashCan,
    faPlus,
    faSun,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";

const Button = ({ type, aria, onClick = () => {}, disabled = false }) => {
    let buttonDesign = {};

    switch (type) {
        case "edit":
            buttonDesign = {
                content: <FontAwesomeIcon icon={faPencil} />,
                classes: "bg-warning text-white border border-warning",
                aria,
            };
            break;
        case "delete":
            buttonDesign = {
                content: <FontAwesomeIcon icon={faTrashCan} />,
                classes: "bg-transparent text-danger border border-danger",
                aria,
            };
            break;
        case "light-mode":
            buttonDesign = {
                content: <FontAwesomeIcon icon={faSun} />,
                classes: "text-text border border-border bg-elem_bg",
                aria,
            };
            break;
        case "dark-mode":
            buttonDesign = {
                content: <FontAwesomeIcon icon={faMoon} />,
                classes: "text-text border border-border bg-elem_bg ",
                aria,
            };
            break;
        default:
            buttonDesign = {
                content: <FontAwesomeIcon icon={faPlus} />,
                classes: "bg-primary text-white border border-primary",
                aria,
            };
            break;
    }

    const buttonClasses = `px-3 py-1 md:px-4 md:py-2 text-m  rounded-md ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
    } ${buttonDesign.classes}`;

    const handleClick = () => {
        // Only apply the passed down onClick funtion if the btn is not disabled
        if (!disabled) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={buttonClasses}
            aria-label={buttonDesign.aria}
            disabled={disabled}
        >
            {buttonDesign.content}
        </button>
    );
};

export default Button;
