import { useState } from "react";
import * as utils from "../utils";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../API";
import "./bookingStyle.css";
import OccasionsImage from "./BookingAssets/Champagne.svg";
import GuestsImage from "./BookingAssets/Guests.svg";
import DateImage from "./BookingAssets/Date.svg";
import TimeImage from "./BookingAssets/Time.svg";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telNo, setTelNo] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("None");

    const [dateValid, setDateValid] = useState(false);
    const [timeValid, setTimeValid] = useState(false);
    const [guestsValid, setGuestsValid] = useState(false);
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [telNoValid, setTelNoValid] = useState(false);

    const [dateTouched, setDateTouched] = useState(false);
    const [timeTouched, setTimeTouched] = useState(false);
    const [guestsTouched, setGuestsTouched] = useState(false);
    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [lastNameTouched, setLastNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [telNoTouched, setTelNoTouched] = useState(false);

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
        return firstNameValid && lastNameValid && dateValid && timeValid && guestsValid && emailValid && telNoValid;
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

        const success = await submitAPI(formData);
        if (success) {
            const storedData = JSON.parse(localStorage.getItem("bookings")) || [];
            storedData.push(formData);
            localStorage.setItem("bookings", JSON.stringify(storedData));
            navigate("/confirmed", { state: { booking: formData } });
            console.log(formData);
            clearForm();
        } else {
            console.error("Form submission failed");
            console.log("NOT uccessful");
        }
    };
    // Function to fetch new times when date changes

    const handleDateChange = async (e) => {
        try {
            const selectedDate = new Date(e.target.value);

            if (isNaN(selectedDate)) {
                throw new Error("Invalid date");
            }

            setDate(selectedDate.toISOString().split("T")[0]);
            setDateValid(true);

            if (dispatch) {
                try {
                    const response = await fetchAPI(selectedDate);
                    dispatch({ type: "change_date", payload: response });
                } catch (error) {
                    console.error("Error fetching dates:", error);
                }
            } else {
                console.error("dispatch function failed");
            }
        } catch (error) {
            if (error instanceof RangeError) {
                console.error("RangeError: Invalid time value");
            } else {
                console.error("Error handling date change:", error);
            }
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
                                <div className="field-title-icon">
                                    <label htmlFor="res-date">
                                        Choose date<sup>*</sup>
                                    </label>
                                    <img className="booking-icon" src={DateImage} alt="Calendar icon"></img>
                                </div>

                                <input
                                    type="date"
                                    value={date}
                                    onChange={handleDateChange}
                                    onBlur={() => setDateTouched(true)}
                                    className={`input-field ${dateTouched ? (dateValid ? "valid-input" : "invalid-input") : "untouched-input"}`}
                                    id="res-date"
                                    aria-required="true"
                                />
                                <span className={`validation-message ${!dateValid && dateTouched ? "visible" : ""}`}>Plese enter a valid date</span>
                            </div>
                            <div className="Field" id="choose-time">
                                <div className="field-title-icon">
                                    <label htmlFor="res-time">
                                        Choose Time<sup>*</sup>
                                    </label>
                                    <img className="booking-icon" src={TimeImage} alt="Clock icon"></img>
                                </div>

                                <select
                                    id="res-time"
                                    value={time}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setTime(e.target.value);
                                        setTimeValid(value !== "" ? true : false);
                                    }}
                                    onBlur={() => setTimeTouched(true)}
                                    className={`input-field ${timeTouched ? (timeValid ? "valid-input" : "invalid-input") : "untouched-input"}`}
                                    aria-label="Select a time"
                                    aria-required="true">
                                    <option value="">Select a time</option>
                                    {availableTimes.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                                <span className={`validation-message ${!timeValid && timeTouched ? "visible" : ""}`}>Please select a valid time</span>
                            </div>
                            <div className="Field" id="choose-guests">
                                <div className="field-title-icon">
                                    <label htmlFor="guests">
                                        No of guests<sup>*</sup>
                                    </label>
                                    <img className="booking-icon" src={GuestsImage} alt="Guests icon"></img>
                                </div>
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="1"
                                    max="20"
                                    id="guests"
                                    value={guests}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setGuests(value);
                                        setGuestsValid(!isNaN(value) && parseInt(value) > 0 && parseInt(value) <= 20);
                                    }}
                                    onBlur={() => setGuestsTouched(true)}
                                    className={`input-field ${guestsTouched ? (guestsValid ? "valid-input" : "invalid-input") : "untouched-input"}`}
                                />
                                <span className={`validation-message ${!guestsValid && guestsTouched ? "visible" : ""}`}>Number of guests must be 1-20</span>
                            </div>
                            <div className="Field" id="choose-occasion">
                                <div className="field-title-icon">
                                    <label htmlFor="occasionSelect">Occasion</label>
                                    <img className="booking-icon" src={OccasionsImage} alt="Champagne glass icon"></img>
                                </div>

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
                                        setFirstNameValid(/^[a-zA-Z-]*$/.test(value) && value.length > 0 ? true : false);
                                    }}
                                    onBlur={() => setFirstNameTouched(true)}
                                    className={`input-field ${firstNameTouched ? (firstNameValid ? "valid-input" : "invalid-input") : "untouched-input"}`}
                                    aria-label="Enter first name"
                                    aria-required="true"
                                />
                                <span className={`validation-message ${!firstNameValid && firstNameTouched ? "visible" : ""}`}>
                                    Please enter at least one initial
                                </span>
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
                                        setLastNameValid(/^[a-zA-Z-]*$/.test(value) && value.length > 1 ? true : false);
                                    }}
                                    onBlur={() => setLastNameTouched(true)}
                                    className={`input-field ${lastNameTouched ? (lastNameValid ? "valid-input" : "invalid-input") : "untouched-input"}`}
                                    aria-label="Enter last name"
                                    aria-required="true"
                                />
                                <span className={`validation-message ${!lastNameValid && lastNameTouched ? "visible" : ""}`}>
                                    Surname must contain at least two letters
                                </span>
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
                                        setEmailValid(utils.validateEmail(value) ? true : false);
                                    }}
                                    onBlur={() => setEmailTouched(true)}
                                    className={`input-field ${emailTouched ? (emailValid ? "valid-input" : "invalid-input") : "untouched-input"}`}
                                    aria-label="Enter email address"
                                    aria-required="true"
                                />
                                <span className={`validation-message ${!emailValid && emailTouched ? "visible" : ""}`}>Please enter a valid email</span>
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
                                        setTelNoValid(utils.validatePhoneNumber(value) ? true : false);
                                    }}
                                    onBlur={() => setTelNoTouched(true)}
                                    className={`input-field ${telNoTouched ? (telNoValid ? "valid-input" : "invalid-input") : "untouched-input"}`}
                                    aria-label="Enter a contact telephone number"
                                    aria-required="true"
                                />
                                <span className={`validation-message ${!telNoValid && telNoTouched ? "visible" : ""}`}>
                                    Please enter a valid telephone number
                                </span>
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
