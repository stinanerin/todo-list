import ToggleDarkMode from "./ToggleDarkMode";

const Header = () => {
    return (
        <header className="text-center my-10 ">
            <h1 className="text-xl md:text-3xl text-center uppercase font-bold tracking-tight text-text ">
                Check it - forget it
            </h1>
            <div className="absolute top-9 right-3 md:right-9 ">
                <ToggleDarkMode />
            </div>
        </header>
    );
};

export default Header;
