import deliveryImage from "./HighlightsAssets/deliverybike.png";

const HighlightsCard = ({ data }) => {
    return (
        <>
            {data.map((dish) => (
                <div className="card" key={dish.id}>
                    <img className="card-image" src={dish.dishImageURL} alt={dish.dishName} />

                    <div className="title-price">
                        <h3 className="card-title">{dish.dishName}</h3>
                        <h3 className="highlight-text" id="price-text">
                            {dish.dishPrice}
                        </h3>
                    </div>
                    <div className="card-text">
                        <p>Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores.</p>
                    </div>

                    <div className="delivery">
                        <h2 className="highlight-text">Order a delivery</h2>
                        <img className="delivery-image" src={deliveryImage} alt="Delivery bike icon"></img>
                    </div>
                </div>
            ))}
        </>
    );
};

export default HighlightsCard;
