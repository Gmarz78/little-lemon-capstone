import { useLocation } from "react-router-dom";
import { formatDate, formatTime } from "../utils";
import "./bookingStyle.css";

function ConfirmedBooking() {
    const location = useLocation();
    const booking = location.state?.booking;

    return (
        <div className="form-section">
            <div className="confirmed-booking">
                <h2 className="confirmed-section" id="confirmed-title-id">
                    Success! your booking is confirmed!
                </h2>
                {booking ? (
                    <>
                        <div className="confirmed-section" id="full-name-id">
                            <p>
                                Thank you
                                <strong>
                                    {" "}
                                    {booking.firstName} {booking.lastName}.
                                </strong>{" "}
                                We have reserved a table for you for <strong>{booking.guests}</strong> guests, and listed the occasion type as{" "}
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
            </div>
        </div>
    );
}
export default ConfirmedBooking;
