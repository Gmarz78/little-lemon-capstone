import headerLogo from "./HeaderAssets/Logo.svg";
import { Link } from "react-router-dom";

// const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//     }
// };

function Header() {
    return (
        <header className="header" id="topOfPage">
            <div className="header-logo">
                <img src={headerLogo} alt="Little Lemon logo"></img>
            </div>
            <>
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
            </>
        </header>
    );
}

export default Header;
