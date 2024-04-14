import footerLogo from "../assets/Logo .svg";
function Footer() {
    return (
        <footer className="footer">
            <img className="footer-logo" src={footerLogo} alt="Little Lemon logo"></img>
            <div className="footer-div">
                <h3>Doormat Navigation</h3>
                <ul className="footer-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                    <li>
                        <a href="#">Order online</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>

            <div className="footer-div">
                <h3>Contact</h3>
                <ul className="footer-links">
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>

            <div className="footer-div">
                <h3>Social Media</h3>
                <ul className="footer-links">
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#about">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">Linkedin</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
