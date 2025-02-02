import "./App.css";
import { useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Menuitem from "./components/Menuitem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { displayCart } from "./components/cartUtils";
import Cart from "./components/Cart";

function App() {

  

  useEffect(() => {
    displayCart();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/offer" element={<Offer />} />
          <Route
            path="/thalis"
            element={
              <section className="menu-card">
                <Menuitem cardName="thalis"/>
              </section>
            }
          />
          <Route path="/mycart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
