import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
import {
    Routes,
    Route,
    // Navigate
} from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} /> {/*error page*/}
                {/* <Route path="*" element={<Navigate to="/" />} />  navigate to home  */}
            </Routes>

        </div >
    );
}

export default App;
