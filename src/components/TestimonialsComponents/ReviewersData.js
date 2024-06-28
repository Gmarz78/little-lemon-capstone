const ReviewerData = ({ data }) => {
    return (
        <>
            {data.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                    <div className="review-stars">
                        <h3>Rating</h3>
                        {Array.from({ length: testimonial.rating }, (_, index) => (
                            <p className="stars" key={index}>
                                &#11088;
                            </p>
                        ))}
                    </div>
                    <div className="testimonial-profile">
                        <img className="testimonial-card-image" src={testimonial.testimonialImage} alt={`Testimonial from ${testimonial.reviewerName}`} />
                        <h2 className="card-title">{testimonial.reviewerName}</h2>
                    </div>
                    <p className="review-text">{testimonial.reviewText}</p>
                </div>
            ))}
        </>
    );
};

export default ReviewerData;
