import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages / Components
import About from "./components/About";
import Courses from "./components/Courses.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import IslamicAcademyGallery from "./components/Gallery.jsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WeOffer from "./components/WeOffer.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Cursor from "./components/Cursor.jsx";
import ComingSoon from "./pages/workshop.jsx";

function HomePage() {
  return (
    <div className="animate-fadeIn">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <WeOffer />
      <Courses />
      <CTA />
      <Testimonials />
      <IslamicAcademyGallery />
      <Footer />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workshop" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
