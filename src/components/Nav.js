import Main from "./Main";
import Booking from "./Booking.js";
import { Routes, Route, Link } from "react-router-dom";

import "../styles/layout.css";

function Nav() {
    return (
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
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </div>
    );
}

export default Nav;
