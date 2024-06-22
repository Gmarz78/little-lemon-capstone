import headerLogo from "../assets/Logo.svg";
import "../styles/layout.css";
// import Main from "./Main";
// import Booking from "./Booking.js";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={headerLogo} alt="Little Lemon logo"></img>
            </div>

            <div>
                <nav className="nav-bar">
                    <Link to="/" className="nav-item">
                        Homepage
                    </Link>
                    <Link to="/booking" className="nav-item">
                        Booking
                    </Link>
                    <a href="#about">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Order online</a>
                    <a href="#">Login</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
