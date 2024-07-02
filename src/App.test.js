// import BookingForm from "../src/components/BookingComponents/BookingForm";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "./App";

test("Initializes times correctly in App component", () => {
    render(
        <MemoryRouter initialEntries={["/booking"]}>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </MemoryRouter>
    );

    const initialAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    // Check if the initial available times are rendered in the BookingForm
    initialAvailableTimes.forEach((time) => {
        expect(screen.getByText(time)).toBeInTheDocument();
    });
});
