import { useState } from "react";
import { validateEmail } from "../utils";
import "./bookingStyle.css";

function ReservationForm({ availableTimes, dispatch }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telNo, setTelNo] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const getIsFormValid = () => {
        return firstName && lastName.length >= 1 && firstName.length >= 1 && date && guests > 0 && validateEmail(email);
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setTelNo("");
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation confirmed!");
        clearForm();
    };

    return (
        <div className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-grid">
                        <h2 className="form-title" id="form-heading">
                            Book a reservation
                        </h2>

                        {/* Date, Time, number of guests and occasion selection=============================================================================================================== */}

                        <section className="date-time-section" id="date-time-details">
                            <h3 className="booking-section-header" id="booking-section-header-id">
                                Reservation details
                            </h3>
                            <div className="Field" id="choose-date">
                                <label htmlFor="res-date">
                                    Choose date<sup>*</sup>
                                </label>
                                {/* <input type="date" value={date} onChange={(e) => setDate(e.target.value)} id="res-date" /> */}
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                        if (dispatch) dispatch({ type: "change_date", payload: e.target.value });
                                    }}
                                    id="res-date"
                                    aria-label="Choose a date"
                                    aria-required="true"
                                />
                            </div>
                            <div className="Field" id="choose-time">
                                <label htmlFor="res-time">
                                    Choose Time<sup>*</sup>
                                </label>
                                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} aria-label="Select a time" aria-required="true">
                                    {availableTimes.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="Field" id="choose-guests">
                                <label htmlFor="guests">
                                    Number of guests<sup>*</sup>
                                </label>
                                <input type="number" placeholder="0" min="1" max="20" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                            </div>
                            <div className="Field" id="choose-occasion">
                                <label htmlFor="occasion">Occasion</label>
                                <select
                                    className="occasion-select"
                                    id="occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    aria-label="Select occasion or leave for none"
                                    aria-required="true">
                                    <option>None</option>
                                    <option>Birthday</option>
                                    <option>Engagement</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                        </section>
                        {/* contact details selection =============================================================================================================== */}
                        <section className="contact-section" id="contact-details">
                            <h3 className="booking-section-header" id="contact-section-header-id">
                                Your details
                            </h3>
                            <div className="Field contact-field" id="first-name">
                                <label>
                                    First name <sup>*</sup>
                                </label>
                                <input
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    aria-label="Enter first name"
                                    aria-required="true"
                                />
                            </div>
                            <div className="Field contact-field" id="last-name">
                                <label>
                                    Last name<sup>*</sup>
                                </label>
                                <input
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    aria-label="Enter last name"
                                    aria-required="true"
                                />
                            </div>
                            <div className="Field contact-field" id="email">
                                <label>
                                    Email address <sup>*</sup>
                                </label>
                                <input
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="Enter email address"
                                    aria-required="true"
                                />
                            </div>
                            <div className="Field contact-field" id="contact-no">
                                <label>Contact tel</label>
                                <input
                                    placeholder="Contact tel"
                                    value={telNo}
                                    onChange={(e) => setTelNo(e.target.value)}
                                    aria-label="Enter a contact telephone number"
                                    aria-required="true"
                                />
                            </div>
                        </section>

                        <div className="submitButton" id="submit-button">
                            <button type="submit" disabled={!getIsFormValid()}>
                                Book reservation
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default ReservationForm;
