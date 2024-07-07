import { render } from "@testing-library/react";
import App from "./App";
import { fetchAPI } from "./API";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("./API", () => ({
    fetchAPI: jest.fn(),
}));

describe("App Component", () => {
    beforeEach(() => {
        fetchAPI.mockClear();
    });

    it("should initialize times on mount", async () => {
        // Mocking the fetchAPI to return initial times
        fetchAPI.mockResolvedValue(["17:00", "17:30", "18:00"]);

        render(
            <Router>
                <App />
            </Router>
        );
        // Wait for the component to fetch and update initial times
        await new Promise((resolve) => setTimeout(resolve, 0));

        // Assertions after the times have been initialized
        expect(fetchAPI).toHaveBeenCalledTimes(1);
        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    });
});
