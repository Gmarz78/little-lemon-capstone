import { useState, useReducer } from "react";
import { validateEmail } from "./utils";

function ReservationForm({ availableTimes, dispatch }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const getIsFormValid = () => {
        return firstName && lastName && date && guests > 0 && validateEmail(email);
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
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
                        <div className="Field" id="first-name">
                            <label>
                                First name <sup>*</sup>
                            </label>
                            <input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="Field" id="last-name">
                            <label>
                                Last name<sup>*</sup>
                            </label>
                            <input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="Field" id="email">
                            <label>
                                Email address <sup>*</sup>
                            </label>
                            <input placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
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
                            />
                        </div>
                        <div className="Field" id="choose-time">
                            <label htmlFor="res-time">
                                Choose Time<sup>*</sup>
                            </label>
                            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
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
                            <select className="occasion-select" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>None</option>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        {/* <div>
                            <ul>
                                <li>
                                    Name: {firstName} {lastName}
                                </li>
                                <li>Email: {email}</li>
                                <li>Booking date: {date}</li>
                                <li>Booking time: {time}</li>
                                <li>Number of guests: {guests}</li>
                                <li>Occasion: {occasion}</li>
                            </ul>
                        </div> */}
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
