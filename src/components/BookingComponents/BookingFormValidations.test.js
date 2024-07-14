import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import * as utils from "../utils";

//THESE ARE A SET OF UNIT TESTS TO TEST ALL THE VALIDATION LOGIC IN THE BOOKING FORM.==================================================

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
        expect(dateInput).toHaveClass("untouched-input"); // Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(dateInput, "2024-07-09");
        dateInput.blur();
        await waitFor(() => {
            expect(dateInput).toHaveClass("valid-input");
        });
        const validationMessage = screen.getByText(/Plese enter a valid date/i);
        expect(validationMessage).not.toHaveClass("visible");
    });
    //This test checks for invalid date input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned.

    test("validates incorrect date input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const dateInput = screen.getByLabelText(/Choose date/i);
        expect(dateInput).toHaveClass("untouched-input"); // Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(dateInput, "/04/2024");
        dateInput.blur();
        await waitFor(() => {
            expect(dateInput).toHaveClass("invalid-input");
        });
        const validationMessage = screen.getByText(/Plese enter a valid date/i);
        expect(validationMessage).toHaveClass("visible");
    });

    //
    //======= Testing the time select validations =====================================================================================================
    //

    //This test checks for valid time selection from the dropdown. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates correct time input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const timeInput = screen.getByLabelText(/Choose Time/i);
        expect(timeInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.selectOptions(timeInput, "10:00"); //10:00 is a valid time which should will simulate a vlue in the select dropdown via mockProps
        timeInput.blur();
        await waitFor(() => {
            expect(timeInput).toHaveClass("valid-input"); //Telling the test that the value of 10:00 should cause the "valid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Please select a valid time/i);
        expect(validationMessage).not.toHaveClass("visible");
    });

    //
    //======= Testing the guests input validations =====================================================================================================
    //

    //This test checks for valid number of guests input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.
    test("validates guests input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const guestsInput = screen.getByLabelText(/No of guests/i); //Locating the correct input
        expect(guestsInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(guestsInput, "5"); //5 is within the 1-20 guests validation constraints
        guestsInput.blur();
        await waitFor(() => {
            expect(guestsInput).toHaveClass("valid-input"); //Telling the test that the value of 5 should cause the "valid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Number of guests must be 1-20/i);
        expect(validationMessage).not.toHaveClass("visible");
    });
    //This test checks for invalid number of guests input on the low side. It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned, as a value of 0 can only occur after mount if a user specifically enters it.
    test("validates incorrect guests input - low side or field untouched", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const guestsInput = screen.getByLabelText(/No of guests/i);
        expect(guestsInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(guestsInput, "0");
        guestsInput.blur();
        await waitFor(() => {
            expect(guestsInput).toHaveClass("invalid-input");
        });
        const validationMessage = screen.getByText(/Number of guests must be 1-20/i);
        expect(validationMessage).toHaveClass("visible");
    });
    //This test checks for invalid number of guests input on the high side. It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned.
    test("validates incorrect guests input - high side", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        // Simulate user inputting an invalid value on the high side. The guests must be between 1 and 20. The HTML validation defaults at 1 and only allows the input to go from 1 to 20, but a user can override by typing the number in. If they enter 0 or a number greater than 20, the logic should assign the invalid-input class.
        const guestsInput = screen.getByLabelText(/No of guests/i);
        expect(guestsInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(guestsInput, "21");
        guestsInput.blur();
        await waitFor(() => {
            expect(guestsInput).toHaveClass("invalid-input"); //Telling the test that the value of 21 should cause the "invalid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Number of guests must be 1-20/i);
        expect(validationMessage).toHaveClass("visible");
    });

    //
    //======= Testing the firstName input validations =====================================================================================================
    //

    //This test checks for valid first name entry. This is set to >0 as some customers may only wish to give their first initial
    test("validates correct first name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const firstNameInput = screen.getByLabelText(/First name/i);
        expect(firstNameInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(firstNameInput, "G"); //The letter G is used as an example of a first initial
        firstNameInput.blur();
        await waitFor(() => {
            expect(firstNameInput).toHaveClass("valid-input"); //Telling the test that a first name of 1 letter should cause the "valid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Please enter at least one initial/i);
        expect(validationMessage).not.toHaveClass("visible");
    });
    //This test checks for invalid first name input, specifically the user entering then clearing and leaving blank. It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned.
    test("validates incorrect first name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        // Simulate user touching the first name field then leaving it blank/invalid. This would mean the field is touched but the value is invalid
        const firstNameInput = screen.getByLabelText(/First name/i);
        expect(firstNameInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(firstNameInput, "Gor");
        userEvent.clear(firstNameInput);
        firstNameInput.blur();
        await waitFor(() => {
            expect(firstNameInput).toHaveClass("invalid-input"); //Telling the test that entering a value then clearing the firstName field should cause the "invalid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Please enter at least one initial/i);
        expect(validationMessage).toHaveClass("visible");
    });

    //
    //======= Testing the lastName input validations =====================================================================================================
    //
    //This test checks for valid last name entry. This is set to >1 as even though single letter surnames exist, they are extremely rare compared to 2 letters or more.
    test("validates last name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const lastNameInput = screen.getByLabelText(/Last name/i);
        expect(lastNameInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(lastNameInput, "Li"); //'Li' is used as an example of a very short but valid surname
        lastNameInput.blur();
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("valid-input"); //Telling the test that a last name of 2 letters or more should cause the "valid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Surname must contain at least two letters/i);
        expect(validationMessage).not.toHaveClass("visible");
    });
    //This test checks for invalid last name input. A last name must have >1 letter It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned.

    test("validates incorrect last name input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        // Simulate user inputting an invalid value on the low side. Last name must have 2 or more characters
        const lastNameInput = screen.getByLabelText(/Last name/i);
        expect(lastNameInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(lastNameInput, "L");
        lastNameInput.blur();
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("invalid-input"); //Telling the test that only one letter in the last name field should cause the "invalid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Surname must contain at least two letters/i);
        expect(validationMessage).toHaveClass("visible");
    });
    //This test checks for an invalid last name entry by simulating the user entering numericals instead of letters
    test("validates incorrect last name input due to entry of numerical characters", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const lastNameInput = screen.getByLabelText(/Last name/i);
        expect(lastNameInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(lastNameInput, "500");
        lastNameInput.blur();
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("invalid-input"); //Telling the test that having numericals in the last name field should cause the "invalid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Surname must contain at least two letters/i);
        expect(validationMessage).toHaveClass("visible");
    });
    //This test checks for an invalid last name entry by simulating the user entering numbers instead of letters
    test("validates incorrect last name input due to entry of a non-hyphen special character", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );
        const lastNameInput = screen.getByLabelText(/Last name/i);
        expect(lastNameInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(lastNameInput, "@");
        lastNameInput.blur();
        await waitFor(() => {
            expect(lastNameInput).toHaveClass("invalid-input"); //Telling the test that having any special character other than a hyphen in the last name field should cause the "invalid-input" class to be assigned.
        });
        const validationMessage = screen.getByText(/Surname must contain at least two letters/i);
        expect(validationMessage).toHaveClass("visible");
    });
    //
    //======= Testing the email input validations =====================================================================================================
    //

    //This test checks for valid and invalid email entry, using the regex functions from my utils module and the correct clasNames being assigned
    test("validates touched but blank invalid email input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );

        const emailInput = screen.getByLabelText(/Email address/i);
        expect(emailInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(emailInput, "gor");
        await waitFor(() => {
            expect(emailInput.value).toBe("gor");
        });
        userEvent.clear(emailInput);
        userEvent.tab();
        await waitFor(() => {
            // Check that the input field still has the "untouched-input" class after simulating the entry an clear
            expect(emailInput).toHaveClass("invalid-input");
        });
        const validationMessage = screen.getByText(/please enter a valid email/i);
        expect(validationMessage).toBeVisible();
    });
    //This test checks for invalid email format input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned.

    test("validates touched but invalid email format input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );

        const emailInput = screen.getByLabelText(/Email address/i);
        expect(emailInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(emailInput, "invalidemail");
        await waitFor(() => {
            expect(emailInput.value).toBe("invalidemail");
        });
        expect(utils.validateEmail("invalidemail")).toBeFalsy();
        emailInput.blur(); // Simulate the blur event to indicate the input has been touched

        await waitFor(() => {
            // Assert that the input field has the "invalid-input" class after blur
            expect(emailInput).toHaveClass("invalid-input");
        });
        const validationMessage = screen.getByText(/please enter a valid email/i);
        expect(validationMessage).toBeVisible();
    });

    //This test checks for valid email input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.

    test("validates valid email format input", async () => {
        render(
            <Router>
                <BookingForm {...mockProps} />
            </Router>
        );

        const emailInput = screen.getByLabelText(/Email address/i);
        expect(emailInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
        userEvent.type(emailInput, "gordon@littlelemon.com");
        await waitFor(() => {
            expect(emailInput.value).toBe("gordon@littlelemon.com");
        });
        expect(utils.validateEmail("gordon@littlelemon.com")).toBeTruthy();
        emailInput.blur(); // Simulate the blur event to indicate the input has been touched

        await waitFor(() => {
            // Assert that the input field has the "valid-input" class after blur
            expect(emailInput).toHaveClass("valid-input");
        });
    });

    //
    //======= Testing the telephone number input validations =====================================================================================================
    //

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
        //This test checks for valid tel no format input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "valid-input" class to be assigned.

        test("validates valid telephone number input", async () => {
            render(
                <Router>
                    <BookingForm {...mockProps} />
                </Router>
            );

            const telNoInput = screen.getByLabelText(/Contact tel/i);
            expect(telNoInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
            userEvent.type(telNoInput, "1234567890"); // Simulate typing a valid phone number
            await waitFor(() => {
                expect(telNoInput.value).toBe("1234567890");
            });
            expect(utils.validatePhoneNumber("1234567890")).toBeTruthy();
            telNoInput.blur();
            await waitFor(() => {
                expect(telNoInput).toHaveClass("valid-input");
            });
        });
        //This test checks for invalid tel no format input. It is verified by checking the input has the appropriate class assigned. The expected result is for the "invalid-input" class to be assigned.

        test("validates invalid telephone number input", async () => {
            render(
                <Router>
                    <BookingForm {...mockProps} />
                </Router>
            );

            const telNoInput = screen.getByLabelText(/Contact tel/i);
            expect(telNoInput).toHaveClass("untouched-input"); //Tests that the field initiates as untouched with the 'untouched-input' class applied
            userEvent.type(telNoInput, "abc123");
            await waitFor(() => {
                expect(telNoInput.value).toBe("abc123");
            });
            expect(utils.validatePhoneNumber("abc123")).toBeFalsy();
            telNoInput.blur();
            await waitFor(() => {
                expect(telNoInput).toHaveClass("invalid-input");
            });
        });
    });
});
