import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Destination from "./pages/destination/Destination";
import Tips from "./pages/tips/Tips";
import Contact from "./pages/contact/Contact";

// Import Loading component
import Loading from './components/Loading';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && <Loading onComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && (
        <BrowserRouter>
          <div className="app">
            <ScrollToTop />
            <Header />
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
      )}
    </>
  );
};

export default App;
