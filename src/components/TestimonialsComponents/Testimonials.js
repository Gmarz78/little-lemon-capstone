import ReviewerData from "./ReviewersData";
import testimonial1Image from "./TestimonialAssets/testimonial_1.jpg";
import testimonial2Image from "./TestimonialAssets/testimonial_2.jpg";
import testimonial3Image from "./TestimonialAssets/testimonial_3.jpg";
import testimonial4Image from "./TestimonialAssets/testimonial_4.jpg";

import "./TestimonialsStyle.css";

const testimonials = [
    {
        id: 0,
        reviewerName: "Diner 1",
        rating: 5,
        testimonialImage: testimonial1Image,
        reviewText: " Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.",
    },
    {
        id: 1,
        reviewerName: "Diner 2",
        rating: 4,
        testimonialImage: testimonial2Image,
        reviewText: " Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.",
    },
    {
        id: 2,
        reviewerName: "Diner 3",
        rating: 3,
        testimonialImage: testimonial3Image,
        reviewText: " Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.",
    },
    {
        id: 3,
        reviewerName: "Diner 4",
        rating: 4,
        testimonialImage: testimonial4Image,
        reviewText: " Eum ducimus maxime et accusamus laudantium et fugiat voluptatibus 33 odio dolores aut enim sequi et officiis quos quo eaque tempora.",
    },
];
function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials-section-id">
            <div className="testimonials-content">
                <h2 className="testimonials-title">Testimonials</h2>
                <div className="testimonials-card-container">
                    <ReviewerData data={testimonials} />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
