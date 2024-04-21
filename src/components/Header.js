import Nav from "./Nav.js";
import headerLogo from "../assets/Logo .svg";

function Header() {
    return (
        <header className="header">
            <img src={headerLogo} className="nav-logo" alt="Little Lemon logo" />
            <Nav />
        </header>
    );
}

export default Header;
