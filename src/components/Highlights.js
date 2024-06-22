import greekSaladImage from "../assets/greek salad.jpg";
import bruschettaImage from "../assets/bruchetta.jpg";
import lemonDessertImage from "../assets/lemon dessert.jpg";
import deliveryImage from "../assets/deliverybike.png";

function Highlights() {
    return (
        <section className="highlights-section">
            <h2 id="highlights-title">This weeks specials!</h2>
            <div className="card-container">
                <div className="card">
                    <img className="card-image" src={greekSaladImage} alt="Greek salad"></img>
                    <div className="title-price">
                        <h3>Greek salad</h3>
                        <h3 className="price-text">$12.99</h3>
                    </div>
                    <p>Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.</p>
                    <div className="delivery">
                        <h2>Order a delivery</h2>
                        <img className="delivery-image" src={deliveryImage} alt="Delivery bike icon"></img>
                    </div>
                </div>
                <div className="card">
                    <img className="card-image" src={bruschettaImage} alt="Bruschetta"></img>
                    <div className="title-price">
                        <h3>Bruschetta</h3>
                        <h3 className="price-text">$5.99</h3>
                    </div>
                    <p>Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.</p>
                    <div className="delivery">
                        <h2>Order a delivery</h2>
                        <img className="delivery-image" src={deliveryImage} alt="Delivery bike icon"></img>
                    </div>
                </div>
                <div className="card">
                    <img className="card-image" src={lemonDessertImage} alt="Lemon Dessert"></img>
                    <div className="title-price">
                        <h3>Lemon Dessert</h3>
                        <h3 className="price-text">$5.00</h3>
                    </div>
                    <p>Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.</p>
                    <div className="delivery">
                        <h2>Order a delivery</h2>
                        <img className="delivery-image" src={deliveryImage} alt="Delivery bike icon"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
