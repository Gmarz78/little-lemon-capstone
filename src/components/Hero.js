import heroImage from "../assets/restauranfood.jpg";
function Hero() {
    return (
        <section className="home-section hero-section">
            <div className="hero-content-section">
                <article className="blurb-article">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </article>
                <div className="hero-image-container">
                    <img className="hero-image-article" src={heroImage} alt="Little Lemon logo"></img>
                </div>
            </div>
        </section>
    );
}

export default Hero;
