import greekSaladImage from "./greek salad.jpg";
import bruschettaImage from "./bruchetta.jpg";
import lemonDessertImage from "./lemon dessert.jpg";
import HighlightsCard from "./HighlightsCard.js";

function Highlights() {
    return (
        <section className="highlights-section">
            <h2 id="highlights-title">This weeks specials!</h2>
            <div className="card-container">
                <HighlightsCard dishName={"Greek Salad"} dishPrice={"$12.99"} dishImageURL={greekSaladImage} />
                <HighlightsCard dishName={"Bruschetta"} dishPrice={"$5.99"} dishImageURL={bruschettaImage} />
                <HighlightsCard dishName={"Lemon Dessert"} dishPrice={"$5.00"} dishImageURL={lemonDessertImage} />
            </div>
        </section>
    );
}

export default Highlights;
