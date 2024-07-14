import headerLogo from "./HeaderAssets/headerLogo.png";
import { NavLink } from "react-router-dom";

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
                    {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <a href="#" aria-label="Mock About link">
                        About
                    </a>
                    <a href="#" aria-label="Mock Menu link">
                        Menu
                    </a>
                    <a href="#" aria-label="Mock Order Online link">
                        Order online
                    </a>
                    <a href="#" aria-label="Mock Login link">
                        Login
                    </a>
                </nav>
            </>
        </header>
    );
}

export default Header;
