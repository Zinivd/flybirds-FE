import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// CSS
import "../public/assets/css/Buttons.css"

// Layouts
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <ToastContainer
            theme="dark"
            position="bottom-right"
            autoClose={2000}
          />
          <Navbar />
          <Routes></Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
