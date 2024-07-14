import greekSaladImage from "./HighlightsAssets/greek salad.jpg";
import bruschettaImage from "./HighlightsAssets/bruchetta.jpg";
import lemonDessertImage from "./HighlightsAssets/lemon dessert.jpg";
import HighlightsCard from "./HighlightsCard.js";
import "./HighlightsStyle.css";

const highlights = [
    {
        id: 0,
        dishName: "Greek Salad",
        dishPrice: "£12.99",
        dishImageURL: greekSaladImage,
    },
    {
        id: 1,
        dishName: "Bruschetta",
        dishPrice: "£5.99",
        dishImageURL: bruschettaImage,
    },
    {
        id: 2,
        dishName: "Lemon Dessert",
        dishPrice: "£5.00",
        dishImageURL: lemonDessertImage,
    },
];

function Highlights() {
    return (
        <section className="highlights-section" id="highlights-section-id">
            <h2 className="lead-text" id="highlights-title">
                This weeks specials!
            </h2>
            <button type="button" className="home-button" id="highlights-menu-button">
                Online Menu
            </button>
            <div className="card-container">
                <HighlightsCard data={highlights} />
            </div>
        </section>
    );
}

export default Highlights;
