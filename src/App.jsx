import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// CSS
import "../public/assets/css/Buttons.css";
import "../public/assets/css/Heading.css";
import "../public/assets/css/Form.css";

// Layouts
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";

// Pages
import Home from "./pages/Home/Home.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import AllProducts from "./pages/AllProducts/AllProducts.jsx";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-details/1" element={<ProductDetails />} />
            <Route path="/all-products" element={<AllProducts />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
