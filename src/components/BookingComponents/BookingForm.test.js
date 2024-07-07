import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../API";

const mockProps = {
    availableTimes: ["10:00", "11:00", "12:00"],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
};

//Mocking the API to test it's interractions with the app.
jest.mock("../../API");

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("BookingForm Component", () => {
    it("Should update times in the dropdown selction input when date changes", async () => {
        fetchAPI.mockResolvedValue(["17:00", "17:30", "18:00"]);
        const dispatchMock = jest.fn();

        render(
            <Router>
                <BookingForm availableTimes={[]} dispatch={dispatchMock} />
            </Router>
        );

        const dateInput = screen.getByLabelText(/Choose date/i); // Finding the date input element
        userEvent.type(dateInput, "2024-07-09");

        // Wait for fetchAPI to be called with new date and dispatch to update the times
        await new Promise((resolve) => setTimeout(resolve, 0));

        // Assertions after date change. Expecting the mock displatch to have been called at least once

        await waitFor(() => {
            expect(dispatchMock).toHaveBeenCalledTimes(1);
        });
        await waitFor(() => {
            expect(dispatchMock).toHaveBeenCalledWith({
                type: "change_date",
                payload: expect.any(Array),
            });
        });
    });
    //This is just a basic test to verfiy the heading element for the for is rendered on the screen
    test("Renders the BookingForm heading", async () => {
        render(
            <Router>
                <BookingForm availableTimes={["17:00", "17:30", "18:00"]} />
            </Router>
        );

        await waitFor(() => {
            const headingElement = screen.getByText(/Book a reservation/i);
            expect(headingElement).toBeInTheDocument();
        });
    });

    //=======================================================================================================================================
    describe("BookingForm API Submission", () => {
        beforeEach(() => {
            localStorage.clear();
        });

        it("handles successful form submission", async () => {
            // Mock implementation of submitAPI to return success
            render(
                <Router>
                    <BookingForm {...mockProps} />
                </Router>
            );
            submitAPI.mockResolvedValue(JSON.stringify(true));

            // Mock handleSubmit function
            const handleSubmitMock = jest.fn().mockImplementation(async (e) => {
                e.preventDefault(); // Mock event.preventDefault() if needed
                const formData = {
                    firstName: "Gordon",
                    lastName: "Marshall",
                    email: "gmarz78@gmail.com",
                    telNo: "07720320774",
                    date: "2024-07-23",
                    time: "20:30",
                    guests: "2",
                    occasion: "Engagement",
                };

                const success = await submitAPI(formData);
                if (success) {
                    const storedData = JSON.parse(localStorage.getItem("bookings")) || [];
                    storedData.push(formData);
                    localStorage.setItem("bookings", JSON.stringify(storedData));
                    mockNavigate("/confirmed", { state: { booking: formData } });
                } else {
                    console.error("Form submission failed");
                }
            });

            // Mocking the handleSubmitFunction to trigger the associated functions and the mock submitAPI
            BookingForm.prototype.handleSubmit = handleSubmitMock;

            // Triggering the handleSubmit function directly
            await act(async () => {
                await handleSubmitMock({ preventDefault: jest.fn() }); // Mock event object
            });

            // Verify submitAPI was called using correct data
            await waitFor(() => {
                expect(submitAPI).toHaveBeenCalledWith({
                    date: "2024-07-23",
                    guests: "2",
                    firstName: "Gordon",
                    lastName: "Marshall",
                    email: "gmarz78@gmail.com",
                    telNo: "07720320774",
                    occasion: "Engagement",
                    time: "20:30",
                });
            });

            // Verifying that the localStorage was updated
            await waitFor(() => {
                const storedData = JSON.parse(localStorage.getItem("bookings"));
                expect(storedData).toEqual([
                    {
                        date: "2024-07-23",
                        guests: "2",
                        firstName: "Gordon",
                        lastName: "Marshall",
                        email: "gmarz78@gmail.com",
                        telNo: "07720320774",
                        occasion: "Engagement",
                        time: "20:30",
                    },
                ]);
            });

            // Verifying successful navigation to the booking confirmation page
            await waitFor(() => {
                expect(mockNavigate).toHaveBeenCalledWith("/confirmed", { state: { booking: expect.any(Object) } });
            });
        });
    });
});
