import Hero from "./HeroComponents/Hero.js";
import Highlights from "./HighlightsComponents/Highlights.js";
import Testimonials from "./TestimonialsComponents/Testimonials.js";
import About from "./AboutComponents/About.js";

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
