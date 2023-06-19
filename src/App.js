import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import {
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/react-router-first" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </div >
    );
}

export default App;
