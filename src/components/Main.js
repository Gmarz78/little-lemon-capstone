import heroImage from "../assets/restauranfood.jpg";
function Main() {
    return (
        <>
            <section className="home-section hero-section">
                <section className="hero-content-section">
                    <article className="blurb-article">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </article>
                    <div className="hero-image-container">
                        <img className="hero-image-article" src={heroImage} alt="Little Lemon logo"></img>
                    </div>
                </section>
            </section>
            <section>
                <h2>Highlights</h2>
            </section>
            <section>
                <h2>Testimonials</h2>
            </section>
            <section>
                <h2>About</h2>
            </section>
        </>
    );
}

export default Main;
