import testimonial1Image from "../assets/testimonial_1.jpg";
import testimonial2Image from "../assets/testimonial_2.jpg";
import testimonial3Image from "../assets/testimonial_3.jpg";
import testimonial4Image from "../assets/testimonial_4.jpg";
function Testimonials() {
    return (
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
                            Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque
                            tempora.
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
                            Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque
                            tempora.
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
                            Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque
                            tempora.
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
                            Review - Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque
                            tempora.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
