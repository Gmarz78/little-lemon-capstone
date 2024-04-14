import "../src/styles/layout.css";
import Header from "./components/Header";
import Nav from "./components/Nav.js";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Layout from "./components/Layout.js";

function App() {
    return (
        <Layout>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </Layout>
    );
}

export default App;
