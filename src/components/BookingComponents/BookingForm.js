import { useState } from "react";
import { validateEmail, validatePhoneNumber } from "../utils";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../../API";
import "./bookingStyle.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telNo, setTelNo] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const [dateValid, setDateValid] = useState(false);
    const [guestsValid, setGuestsValid] = useState(false);
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [telNoValid, setTelNolValid] = useState(false);

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setTelNo("");
        setDate("");
        setTime("");
        setGuests(0);
        setOccasion("None");
    };

    const navigate = useNavigate();

    const getIsFormValid = () => {
        return firstNameValid && lastName.length >= 1 && dateValid && guests > 0 && guests <= 20 && emailValid && telNoValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            telNo,
            date,
            time,
            guests,
            occasion,
        };

        const success = await submitForm(formData);
        if (success) {
            const storedData = JSON.parse(localStorage.getItem("bookings")) || [];
            storedData.push(formData);
            localStorage.setItem("bookings", JSON.stringify(storedData));
            navigate("/confirmed", { state: { booking: formData } });
            clearForm();
        } else {
            console.error("Form submission failed");
        }
    };
    // Function to fetch new times when date changes
    const handleDateChange = async (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(selectedDate.toISOString().split("T")[0]);
        setDateValid(true);
        if (dispatch) {
            try {
                const response = await fetchAPI(selectedDate);
                dispatch({ type: "change_date", payload: response });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } else {
            console.error("dispatch function is not available");
        }
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

                                <input
                                    type="date"
                                    value={date}
                                    onChange={handleDateChange}
                                    id="res-date"
                                    className={dateValid ? "valid-input" : "invalid-input"}
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
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="1"
                                    max="20"
                                    id="guests"
                                    className={guestsValid ? "valid-input" : "invalid-input"}
                                    value={guests}
                                    onChange={(e) => {
                                        setGuests(e.target.value);
                                        setGuestsValid(!isNaN(guests) && parseInt(guests) > 0 ? true : false);
                                    }}
                                />
                            </div>
                            <div className="Field" id="choose-occasion">
                                <label htmlFor="occasionSelect">Occasion</label>
                                <select
                                    className="occasion-select"
                                    id="occasionSelect"
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
                                <label htmlFor="firstNameInput">
                                    First name <sup>*</sup>
                                </label>
                                <input
                                    id="firstNameInput"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setFirstName(value);
                                        setFirstNameValid(value.length > 1 ? true : false);
                                    }}
                                    className={firstNameValid ? "valid-input" : "invalid-input"}
                                    aria-label="Enter first name"
                                    aria-required="true"
                                />
                            </div>
                            <div className="Field contact-field" id="last-name">
                                <label htmlFor="lastNameInput">
                                    Last name<sup>*</sup>
                                </label>
                                <input
                                    id="lastNameInput"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setLastName(value);
                                        setLastNameValid(value.length > 1 ? true : false);
                                    }}
                                    className={lastNameValid ? "valid-input" : "invalid-input"}
                                    aria-label="Enter last name"
                                    aria-required="true"
                                />
                            </div>
                            <div className="Field contact-field" id="email">
                                <label htmlFor="emailInput">
                                    Email address <sup>*</sup>
                                </label>
                                <input
                                    id="emailInput"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setEmail(e.target.value);
                                        setEmailValid(validateEmail(value) ? true : false);
                                    }}
                                    className={emailValid ? "valid-input" : "invalid-input"}
                                    aria-label="Enter email address"
                                    aria-required="true"
                                />
                            </div>
                            <div className="Field contact-field" id="contact-no">
                                <label htmlFor="telNoInput">
                                    Contact tel<sup>*</sup>
                                </label>
                                <input
                                    id="telNoInput"
                                    placeholder="Contact tel"
                                    value={telNo}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setTelNo(e.target.value);
                                        setTelNolValid(validatePhoneNumber(value) ? true : false);
                                    }}
                                    className={telNoValid ? "valid-input" : "invalid-input"}
                                    aria-label="Enter a contact telephone number"
                                    aria-required="true"
                                />
                            </div>
                        </section>

                        <button type="submit" className="submitButton" id="submit-button" disabled={!getIsFormValid()}>
                            Book reservation
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default BookingForm;
