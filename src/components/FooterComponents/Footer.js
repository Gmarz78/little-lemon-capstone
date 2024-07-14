import footerLogo from "./FooterAssets/footer-logo.png";
import "./FooterStyle.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-logo" id="footer-logo" src={footerLogo} alt="Little Lemon logo"></img>
            <div className="footer-div" id="doormat">
                <h3>Doormat Navigation</h3>
                <ul className="footer-links">
                    <li>
                        {" "}
                        <Link to="/" className="nav-item">
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link to="/booking" className="nav-item">
                            Booking
                        </Link>
                    </li>
                    {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <li>
                        <a href="#" aria-label="Mock menu link">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Mock reservations link">
                            Reservations
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Mock Order Online link">
                            Order online
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Mock Login link">
                            Login
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-div" id="contact">
                <h3>Contact</h3>
                <ul className="footer-links">
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>

            <div className="footer-div" id="socials">
                <h3>Social Media</h3>

                <ul className="footer-links">
                    <li>
                        <a href="#" aria-label="Mock Facebook link">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Mock x.com link">
                            X.com
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Mock Instagram link">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Mock LinkedIn link">
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
