
import "./App.css";
import About from "./components/About";
import Courses from "./components/Courses.jsx";
import CTA from "./components/CTA.jsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
    
    </>
  );
}

export default App;
