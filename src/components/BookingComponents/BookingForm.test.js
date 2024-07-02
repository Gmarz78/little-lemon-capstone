import BookingForm from "./BookingForm";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "../../App";

// Mock the submitAPI function
jest.mock("./API", () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

// This test case checks that a piece of static text can be found in the BookingForm component

test("Renders the BookingForm heading", () => {
    const testAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    render(<BookingForm availableTimes={testAvailableTimes} />);
    const headingElement = screen.getByText("Book a reservation");
    expect(headingElement).toBeInTheDocument();
});

test("Handles change_date action in App component", () => {
    render(
        <MemoryRouter initialEntries={["/booking"]}>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </MemoryRouter>
    );

    // Simulate changing the date input
    const dateInput = screen.getByLabelText("Choose a date");
    fireEvent.change(dateInput, { target: { value: "2024-07-01" } });

    // Check if the available times remain the same (based on current reducer logic)
    const updatedTimes = ["17:00", "18:00"]; // Update this with expected times after dispatch
    updatedTimes.forEach((time) => {
        expect(screen.getByText(time)).toBeInTheDocument();
    });
});

describe("BookingForm", () => {
    it("submits the form with valid data", () => {
        render(<BookingForm availableTimes={["10:00", "11:00"]} />);

        // Fill in the form fields
        fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: "John" } });
        fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: "Doe" } });
        fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: "john.doe@example.com" } });
        fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
        fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-07-01" } });
        fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: "10:00" } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

        // Submit the form
        fireEvent.click(screen.getByText(/Book reservation/i));

        // Check if the form fields are cleared after submission
        expect(screen.getByLabelText(/First name/i)).toHaveValue("");
        expect(screen.getByLabelText(/Last name/i)).toHaveValue("");
        expect(screen.getByLabelText(/Email address/i)).toHaveValue("");
        expect(screen.getByLabelText(/Number of guests/i)).toHaveValue(0);
        expect(screen.getByLabelText(/Occasion/i)).toHaveValue("None");
        expect(screen.getByLabelText(/Choose date/i)).toHaveValue("");
        expect(screen.getByLabelText(/Choose Time/i)).toHaveValue("11:00");
    });
});
