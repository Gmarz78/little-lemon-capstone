import { Link } from "react-router-dom";
import heroImage from "./HeroAssets/HeroImage.jpg";
import "./HeroStyle.css";

function Hero() {
    return (
        <section className="home-section hero-section">
            <div className="hero-content-section">
                <div className="blurb-article">
                    <h1 className="sub-title">Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    {/* <div className="hero-Button" id="hero-reserve-button"> */}
                    <Link to="/booking">
                        <button type="button" className="home-button" id="hero-reserve-button">
                            Reserve a table
                        </button>
                    </Link>
                    {/* </div> */}
                </div>

                <div className="hero-image-container">
                    <img className="hero-image-article" src={heroImage} alt="Little Lemon logo"></img>
                </div>
            </div>
        </section>
    );
}

export default Hero;
