import Nav from "./Nav";
import headerLogo from "../assets/Logo .svg";

function Header() {
    return (
        <>
            <img className="nav-logo" src={headerLogo} alt="Little Lemon logo"></img>
            <Nav></Nav>
        </>
    );
}

export default Header;
