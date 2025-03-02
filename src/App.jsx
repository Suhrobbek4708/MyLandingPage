import "./App.css";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import react router dom

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Destination from "./pages/destination/Destination";
import Tips from "./pages/tips/Tips";
import Contact from "./pages/contact/Contact";

import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  
 




  return (
    <BrowserRouter>
      <div className="app">
        {/* <h1>Travelling website</h1> */}
        <ScrollToTop />
        <Header />
        {/* import pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
