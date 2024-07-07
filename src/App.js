import { Routes, Route } from "react-router-dom";
import { useReducer, useEffect } from "react";
import Header from "./components/HeaderComponents/Header.js";
import Footer from "./components/Footer";
import Layout from "./components/Layout.js";
import Main from "./components/Main";
import ConfirmedBooking from "../src/components/BookingComponents/ConfirmedBooking";
import BookingForm from "./components/BookingComponents/BookingForm.js";
import HeaderLayout from "./components/HeaderComponents/HeaderLayout.js";
import { fetchAPI, submitAPI } from "./API.js"; // Adjust the path as necessary

const initialState = { availableTimes: [] };

// updateTimes function
const updateTimes = (state, action) => {
    switch (action.type) {
        case "change_date":
            return { availableTimes: action.payload };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(updateTimes, initialState);
    useEffect(() => {
        const initializeTimes = async () => {
            try {
                const sDate = new Date().toISOString().split("T")[0];
                const initialTimes = await fetchAPI(new Date(sDate));
                dispatch({ type: "initializeTimes", availableTimes: initialTimes });
            } catch (error) {
                console.error("Error fetching initial times:", error);
            }
        };

        initializeTimes();
    }, []);
    // submitForm function
    const submitForm = async (formData) => {
        try {
            const response = await submitAPI(formData);
            const result = JSON.parse(response);
            if (result === true) {
                console.log("Form submission successful");
                return true;
            } else {
                console.error("Form submission failed");
                return false;
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            return false;
        }
    };

    return (
        <>
            <HeaderLayout>
                <Header />
            </HeaderLayout>
            <Layout>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/booking" element={<BookingForm availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                </Routes>
                <Footer />
            </Layout>
        </>
    );
}

export default App;
