import "../src/styles/layout.css";
import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Layout from "./components/Layout.js";

function App() {
    return (
        <Layout>
            <Header />
            <Main />
            <Footer />
        </Layout>
    );
}

export default App;
