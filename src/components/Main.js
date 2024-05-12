import heroImage from "../assets/restauranfood.jpg";
import greekSaladImage from "../assets/greek salad.jpg";
import bruschettaImage from "../assets/bruchetta.jpg";
import lemonDessertImage from "../assets/lemon dessert.jpg";
import testimonial1Image from "../assets/testimonial_1.jpg";
import testimonial2Image from "../assets/testimonial_2.jpg";
import testimonial3Image from "../assets/testimonial_3.jpg";
import testimonial4Image from "../assets/testimonial_4.jpg";

import deliveryImage from "../assets/deliverybike.png";
function Main() {
    return (
        <main>
            {/* Hero Section =========================================================================================================================================*/}
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
            {/* Highlights Section =========================================================================================================================================*/}
            <section className="highlights-section">
                <h2 id="highlights-title">This weeks specials!</h2>
                <div className="card-container">
                    <div className="card">
                        <img className="card-image" src={greekSaladImage} alt="Greek salad"></img>
                        <div className="title-price">
                            <h3>Greek salad</h3>
                            <h3 className="price-text">$12.99</h3>
                        </div>
                        <p>
                            Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.
                            Qui dolore amet nam voluptas sunt et nobis ipsum in error fugit rem rerum tempore aut velit dignissimos.
                        </p>
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
                        <p>
                            Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.
                            Qui dolore amet nam voluptas sunt et nobis ipsum in error fugit rem rerum tempore aut velit dignissimos.
                        </p>
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
                        <p>
                            Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.
                            Qui dolore amet nam voluptas sunt et nobis ipsum in error fugit rem rerum tempore aut velit dignissimos.
                        </p>
                        <div className="delivery">
                            <h2>Order a delivery</h2>
                            <img className="delivery-image" src={deliveryImage} alt="Delivery bike icon"></img>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section =========================================================================================================================================*/}
            <section className="testimonials-section">
                <div className="testimonials-content">
                    <h2 className="testimonials-title">Testimonials</h2>
                    <div className="testimonial-card-container">
                        <div className="testimonial-card">
                            <div className="review-stars">
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                            </div>
                            <div className="testimonial-profile">
                                <img className="testimonial-card-image" src={testimonial1Image} alt="Lemon Dessert"></img>
                                <h2>Reviewer 1</h2>
                            </div>
                            <p className="review-text">
                                Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo
                                eaque tempora. Qui dolore amet nam voluptas sunt et nobis ipsum in error fugit rem rerum tempore aut velit dignissimos.
                            </p>
                        </div>
                        <div className="testimonial-card">
                            <div className="review-stars">
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                            </div>
                            <div className="testimonial-profile">
                                <img className="testimonial-card-image" src={testimonial2Image} alt="Lemon Dessert"></img>
                                <h2>Reviewer 2</h2>
                            </div>
                            <p className="review-text">
                                Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo
                                eaque tempora. Qui dolore amet nam voluptas sunt et nobis ipsum in error fugit rem rerum tempore aut velit dignissimos.
                            </p>
                        </div>
                        <div className="testimonial-card">
                            <div className="review-stars">
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                            </div>
                            <div className="testimonial-profile">
                                <img className="testimonial-card-image" src={testimonial3Image} alt="Lemon Dessert"></img>
                                <h2>Reviewer 3</h2>
                            </div>
                            <p className="review-text">
                                Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo
                                eaque tempora. Qui dolore amet nam voluptas sunt et nobis ipsum in error fugit rem rerum tempore aut velit dignissimos.
                            </p>
                        </div>
                        <div className="testimonial-card">
                            <div className="review-stars">
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                                <p>&#11088;</p>
                            </div>
                            <div className="testimonial-profile">
                                <img className="testimonial-card-image" src={testimonial4Image} alt="Lemon Dessert"></img>
                                <h2>Reviewer 4</h2>
                            </div>
                            <p className="review-text">
                                Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo
                                eaque tempora. Qui dolore amet nam voluptas sunt et nobis ipsum in error fugit rem rerum tempore aut velit dignissimos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section =========================================================================================================================================*/}
            <section>
                <h2>About</h2>
            </section>
        </main>
    );
}

export default Main;
