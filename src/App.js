import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout.js";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm.js";
import HeaderLayout from "./components/HeaderLayout.js";

const updateTimes = (state, action) => {
    switch (action.type) {
        case "change_date":
            return { availableTimes: state.availableTimes };
        default:
            return state;
    }
};

function App() {
    const initializeTimes = { availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);
    return (
        <>
            {" "}
            <HeaderLayout>
                <Header />
            </HeaderLayout>
            <Layout>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/booking" element={<BookingForm availableTimes={state.availableTimes} dispatch={dispatch} />} />
                </Routes>
                <Footer />
            </Layout>
        </>
    );
}

export default App;
