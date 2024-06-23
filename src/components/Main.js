import Hero from "./Hero.js";
import Highlights from "./HighlightsComponents/Highlights.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";
import "../styles/layout.css";

function Main() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
}

export default Main;
