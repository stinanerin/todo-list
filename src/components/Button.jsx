const Button = ({ text, color, onClick = () => {} }) => {
    const buttonClasses = `h-full px-5 py-2 ${color} text-white font-medium rounded-md`;

    return (
        <button onClick={onClick} className={buttonClasses}>
            {text}
        </button>
    );
};

export default Button;
