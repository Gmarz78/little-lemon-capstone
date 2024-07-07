import headerLogo from "./HeaderAssets/headerLogo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header" id="topOfPage">
            <div className="header-logo">
                <img src={headerLogo} alt="Little Lemon logo"></img>
            </div>
            <>
                <nav className="nav-bar">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>
                        Home
                    </NavLink>
                    <NavLink to="/booking" className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>
                        Booking
                    </NavLink>
                    <a href="#about">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Order online</a>
                    <a href="#">Login</a>
                </nav>
            </>
        </header>
    );
}

export default Header;
