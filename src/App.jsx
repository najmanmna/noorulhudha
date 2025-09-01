import { useState, useEffect } from "react";
import "./App.css";
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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader duration (2.5s)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // show only preloader
  }

  return (
    <div className="animate-fadeIn">
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

export default App;
