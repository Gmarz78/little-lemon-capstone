import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout.js";
import Main from "./components/Main";
import Booking from "./components/Booking.js";
import HeaderLayout from "./components/HeaderLayout.js";

function App() {
    return (
        <>
            {" "}
            <HeaderLayout>
                <Header />
            </HeaderLayout>
            <Layout>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
                <Footer />
            </Layout>
        </>
    );
}

export default App;
