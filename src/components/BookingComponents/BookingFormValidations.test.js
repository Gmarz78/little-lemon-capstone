import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import * as utils from "../utils";

//THESE ARE A SET IF UNIT TESTS TO TEST ALL THE VALIDATION LOGIC IN THE BOOKING FORM.==================================================

describe("BookingForm field validation tests", () => {
    //
    //======= Testing the date input validations =====================================================================================================
    //

    //This test checks for valid date input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.

    const mockProps = {
        availableTimes: ["10:00", "11:00", "12:00"],
        dispatch: jest.fn(),
        submitForm: jest.fn(),
    };
    test("validates correct date input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const dateInput = screen.getByLabelText(/Choose date/i);
        userEvent.type(dateInput, "2024-07-09");

        await waitFor(() => {
            expect(dateInput).toHaveClass("valid-input");
        });
    });
    //This test checks for invalid date input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned.
    test("validates incorrect date input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const dateInput = screen.getByLabelText(/Choose date/i);
        userEvent.type(dateInput, "");

        await waitFor(() => {
            expect(dateInput).toHaveClass("invalid-input");
        });
    });
    //
    //======= Testing the date input validations =====================================================================================================
    //

    //This test checks for valid number of guests input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates guests input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const guestsInput = screen.getByLabelText(/No of guests/i); //Locating the correct input
        userEvent.type(guestsInput, "5"); //5 is within the 1-20 guests validation constraints
        await waitFor(() => {
            expect(guestsInput).toHaveClass("valid-input"); //Telling the test that the value of 5 should cause the "valid-input" class to be assigned.
        });
    });
    //This test checks for invalid number of guests input on the low side. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates incorrect guests input - low side", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        // Simulate user inputting an invalid value on the low side. The guests must be between 1 and 20. The HTML validation defaults at 1 and only allows the input to go from 1 to 20, but a user can override by typing the number in. If they enter 0 or a number greater than 20, the logic should assign the invalid-input class.
        const guestsInput = screen.getByLabelText(/No of guests/i);
        userEvent.type(guestsInput, "0");
        await waitFor(() => {
            expect(guestsInput).toHaveClass("invalid-input"); //Telling the test that the value of 0 should cause the "invalid-input" class to be assigned.
        });
    });
    //This test checks for invalid number of guests input on the high side. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates incorrect guests input - high side", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        // Simulate user inputting an invalid value on the high side. The guests must be between 1 and 20. The HTML validation defaults at 1 and only allows the input to go from 1 to 20, but a user can override by typing the number in. If they enter 0 or a number greater than 20, the logic should assign the invalid-input class.
        const guestsInput = screen.getByLabelText(/No of guests/i);
        userEvent.type(guestsInput, "21");
        await waitFor(() => {
            expect(guestsInput).toHaveClass("invalid-input"); //Telling the test that the value of 21 should cause the "invalid-input" class to be assigned.
        });
    });

    //
    //======= Testing the time select validations =====================================================================================================
    //

    //This test checks for valid time selection from the dropdown. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates time input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const timeInput = screen.getByLabelText(/Choose Time/i); //Locating the correct select input
        userEvent.selectOptions(timeInput, "10:00"); //10:00 is a valid time which should will simulate a vlue in the select dropdown via mockProps
        await waitFor(() => {
            expect(timeInput).toHaveClass("valid-input"); //Telling the test that the value of 10:00 should cause the "valid-input" class to be assigned.
        });
    });
    //This test checks for invalid time selection, which in this case is the default value of "Select a time". It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates incorrect time input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );

        const timeInput = screen.getByLabelText(/Choose Time/i); //Locating the correct select input
        userEvent.selectOptions(timeInput, ""); // Simulate user not selecting a time.
        await waitFor(() => {
            expect(timeInput).toHaveClass("invalid-input"); //Not having a time selected should cause the "invalid-input" class to be assigned.
        });
    });
    //
    //======= Testing the name input validations =====================================================================================================
    //

    //This test checks for valid first name entry. This is set to >0 as some customers may only wish to give their first initial
    test("validates first name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const firstNameInput = screen.getByLabelText(/First name/i); //Locating the correct input
        userEvent.type(firstNameInput, "G"); //The letter G is used as an example of a first initial
        await waitFor(() => {
            expect(firstNameInput).toHaveClass("valid-input"); //Telling the test that a first name of 1 letter should cause the "valid-input" class to be assigned.
        });
    });
    //This test checks for an invalid first name entry by making the input field blank. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates incorrect first name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        // Simulate user leaving the first name field blank
        const firstNameInput = screen.getByLabelText(/First name/i);
        userEvent.type(firstNameInput, "");
        await waitFor(() => {
            expect(firstNameInput).toHaveClass("invalid-input"); //Telling the test that a blank first name field should cause the "invalid-input" class to be assigned.
        });
    });
    //This test checks for valid last name entry. This is set to >1 as even though single letter surnames exist, they are extremely rare compared to 2 letters or more.
    test("validates last name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const lastNameInput = screen.getByLabelText(/Last name/i); //Locating the correct input
        userEvent.type(lastNameInput, "Li"); //'Li' is used as an example of a very short but valid surname
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("valid-input"); //Telling the test that a last name of 2 letters should cause the "valid-input" class to be assigned.
        });
    });
    //This test checks for an invalid last name entry by making the input field contain less than 2 letters. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates incorrect last name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        // Simulate user inputting an invalid value on the low side. Last name must have 2 or more characters
        const lastNameInput = screen.getByLabelText(/Last name/i);
        userEvent.type(lastNameInput, "L");
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("invalid-input"); //Telling the test that only one letter in the last name field should cause the "invalid-input" class to be assigned.
        });
    });
    //This test checks for an invalid last name entry by simulating the user entering numbers instead of letters
    test("validates incorrect last name input due to entry of numerical characters", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const lastNameInput = screen.getByLabelText(/Last name/i);
        userEvent.type(lastNameInput, "500");
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("invalid-input"); //Telling the test that having numericals in the last name field should cause the "invalid-input" class to be assigned.
        });
    });
    //This test checks for an invalid last name entry by simulating the user entering numbers instead of letters
    test("validates incorrect last name input due to entry of a non-hyphen special character", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const lastNameInput = screen.getByLabelText(/Last name/i);
        userEvent.type(lastNameInput, "@");
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("invalid-input"); //Telling the test that having any special character other than a hyphen in the last name field should cause the "invalid-input" class to be assigned.
        });
    });
    //
    //======= Testing the email input validations =====================================================================================================
    //

    //This test checks for valid and invalid email  entry, using the regex functions from my utils module and the correct clasNames being assigned
    test("validates email input correctly", () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );

        const emailInput = screen.getByLabelText(/Email address/i);

        // Testing valid email examples based on the validation regex functions in my utils module.
        const validEmails = ["test@example.com", "user.name@domain.co", "user-name@domain.org"];
        validEmails.forEach((email) => {
            fireEvent.change(emailInput, { target: { value: email } });
            expect(emailInput.value).toBe(email);
            expect(utils.validateEmail(email)).toBeTruthy();
            expect(emailInput).toHaveClass("valid-input");
        });

        // Testing invalid email examples based on the validation regex functions in my utils module.
        const invalidEmails = ["plainaddress", "@missingusername.com", "username@.com"];
        invalidEmails.forEach((email) => {
            fireEvent.change(emailInput, { target: { value: email } });
            expect(emailInput.value).toBe(email);
            expect(utils.validateEmail(email)).toBeFalsy();
            expect(emailInput).toHaveClass("invalid-input");
        });
    });

    //
    //======= Testing the telephone number input validations =====================================================================================================
    //

    //This test checks for valid and invalid telephone number entries, using the regex functions from my utils module and the correct clasNames being assigned

    describe("BookingForm telephone number validation tests", () => {
        beforeEach(() => {
            jest.spyOn(utils, "validatePhoneNumber").mockImplementation((phoneNumber) => {
                const phoneRegex = /^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
                return phoneRegex.test(phoneNumber);
            });
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });
        test("validates tel no input correctly", () => {
            render(
                <Router>
                    <BookingForm {...mockProps} />
                </Router>
            );

            const telNoInput = screen.getByLabelText(/Contact tel/i);

            // Valid phone number checks. These numbers should all be accepted according to the regex
            const validTelNos = ["1234567890", "(123) 456-7890", "+1 (123) 456-7890"];
            validTelNos.forEach((phoneNumber) => {
                fireEvent.change(telNoInput, { target: { value: phoneNumber } });
                expect(telNoInput.value).toBe(phoneNumber);
                expect(utils.validatePhoneNumber).toHaveBeenCalledWith(phoneNumber);
                expect(telNoInput).toHaveClass("valid-input");
            });
        });
        test("validates tel no input incorrectly", () => {
            render(
                <Router>
                    <BookingForm {...mockProps} />
                </Router>
            );

            const telNoInput = screen.getByLabelText(/Contact tel/i);

            // invalid phone number checks. These numbers should all be rejected according to the regex
            const invalidTelNos = ["123", "abc1234567", "+-()"];
            invalidTelNos.forEach((phoneNumber) => {
                fireEvent.change(telNoInput, { target: { value: phoneNumber } });
                expect(telNoInput.value).toBe(phoneNumber);
                expect(utils.validatePhoneNumber).toHaveBeenCalledWith(phoneNumber);
                expect(telNoInput).toHaveClass("invalid-input");
            });
        });
    });
});
