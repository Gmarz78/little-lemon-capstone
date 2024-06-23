import deliveryImage from "./deliverybike.png";

function HighlightsCard({ dishName, dishPrice, dishImageURL }) {
    return (
        <div className="card">
            <img className="card-image" src={dishImageURL} alt={dishName}></img>
            <div className="title-price">
                <h3>{dishName}</h3>
                <h3 className="price-text">{dishPrice}</h3>
            </div>
            <p>Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.</p>
            <div className="delivery">
                <h2>Order a delivery</h2>
                <img className="delivery-image" src={deliveryImage} alt="Delivery bike icon"></img>
            </div>
        </div>
    );
}
export default HighlightsCard;
