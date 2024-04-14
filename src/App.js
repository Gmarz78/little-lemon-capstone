import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header>
                <nav>
                    <h1>Little Lemon</h1>
                </nav>
            </Header>

            <Main>
                <section>
                    <h2>Hero</h2>
                </section>
                <section>
                    <h2>Highlights</h2>
                </section>
                <section>
                    <h2>Testimonials</h2>
                </section>
                <section>
                    <h2>About</h2>
                </section>
            </Main>
            <Footer>
                <h2>Footer</h2>
            </Footer>
        </>
    );
}

export default App;
