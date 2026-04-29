import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/ServicesPage/Services";
import Footer from "./components/Footer/Footer";
import About from "./components/AboutPage/about";
import PortfolioCarousel from "./components/PortfolioPage/PortfolioCarousel";
import ContactForm from "./components/ContactPage/ContactForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioCarousel />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
