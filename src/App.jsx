
import "./App.css";
import About from "./components/About";
import Courses from "./components/Courses.jsx";
import CTA from "./components/CTA.jsx";
import IslamicAcademyGallery from "./components/Gallery.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials.jsx";
import WeOffer from "./components/WeOffer.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <WhyChooseUs />
    <WeOffer />
    <Courses />
    <CTA />
    <Testimonials />
    <IslamicAcademyGallery />
    
    </>
  );
}

export default App;
