import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { formatDate, formatTime } from "../utils";
import CelebrateImage from "./BookingAssets/Confetti.svg";
import "./bookingStyle.css";

function ConfirmedBooking() {
    const location = useLocation();
    const booking = location.state?.booking;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="form-section">
            <div className="confirmed-booking">
                <div className="confirmed-title-icon">
                    <h2 className="confirmed-section" id="confirmed-title-id">
                        Success! Your booking is confirmed!
                    </h2>
                    <img className="booking-confirmed-icon" src={CelebrateImage} alt="Confetti"></img>
                </div>
                <hr />
                <br />

                {booking ? (
                    <>
                        <div className="confirmed-section" id="full-name-id">
                            <p>
                                Thank you
                                <strong>
                                    {" "}
                                    {booking.firstName} {booking.lastName}.
                                </strong>{" "}
                                We've reserved a table for you for <strong>{booking.guests}</strong> guests, and marked the occasion as{" "}
                                <strong>{booking.occasion}</strong>.
                            </p>
                        </div>
                        <div className="confirmed-section" id="date-time-id">
                            <p>
                                We look forward to seeing you on <strong> {formatDate(booking.date)}</strong> at <strong>{formatTime(booking.time)}</strong>,
                                and we hope you enjoy your visit!
                            </p>
                        </div>

                        <div className="confirmed-section" id="email-tel-id">
                            <p>
                                For any reminders, or if we need to contact you, we will email you at <strong>{booking.email}</strong> or call you on{" "}
                                <strong>{booking.telNo}</strong>
                            </p>
                        </div>
                    </>
                ) : (
                    <p>No booking details available.</p>
                )}
                <hr />
                <br />
                <button type="submit" className="submitButton" id="done-button" onClick={handleClick}>
                    Done
                </button>
            </div>
        </div>
    );
}
export default ConfirmedBooking;
