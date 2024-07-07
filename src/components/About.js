import aboutImage1 from "../assets/Mario and Adrian A.jpg";
import aboutImage2 from "../assets/Mario and Adrian b.jpg";

function About() {
    return (
        <section className="home-section about-section">
            <div className="about-content-section">
                <article className="blurb-article">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </article>
                <div className="about-image-container">
                    <img className="about-image-article" src={aboutImage1} alt="Mario and Adrian"></img>
                </div>
            </div>
        </section>
    );
}

export default About;
