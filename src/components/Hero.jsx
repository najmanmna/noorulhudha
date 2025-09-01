"use client";
import { useState, useEffect } from "react";
import herobg1 from "../assets/images/hero_bg1.png";
import herobg2 from "../assets/images/hero_bg2.png";
import herobg3 from "../assets/images/hero_bg3.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: herobg1,
      arabic: "اقرأ",
      title: "Learn to Recite the Qur’an with Tajweed",
      description:
        "Step-by-step Qur’an classes designed for children and adults. Build confidence in your recitation while mastering Tajweed rules under expert guidance.",
      buttonText: "Start Reciting",
      buttonColor: "bg-amber-400 hover:bg-amber-500",
    },
    {
      image: herobg2,
      arabic: "تعلم",
      title: "Arabic & Islamic Studies for All Ages",
      description:
        "From beginner-friendly Arabic to Islamic teachings, Duas, and Hifz — Noorul Hudha Institute offers courses tailored for kids, reverts, and lifelong learners.",
      buttonText: "Explore Courses",
      buttonColor: "bg-lightgreen ehover:bg-white",
    },
    {
      image: herobg3,
      arabic: "نور",
      title: "Guided by Knowledge, Rooted in Faith",
      description:
        "Founded by Aalima Bint Nazeer, our mission is to nurture souls with authentic Islamic knowledge, flexible learning, and sincere mentorship for every student.",
      buttonText: "Join the Journey",
      buttonColor: "bg-gray-300 hover:bg-lightgreen",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden"
    >
      {/* Background Slides - fade in/out */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="Islamic education background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ease-in-out transform ${
                isTransitioning
                  ? "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Arabic Text */}
              <div className="mb-6">
                <span className="text-white text-4xl font-arabic">
                  {slides[currentSlide].arabic}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-lexend text-white text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6 text-balance">
                {slides[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="font-inter text-white text-base md:text-base leading-relaxed mb-8 max-w-xl text-pretty">
                {slides[currentSlide].description}
              </p>

              <button
                onClick={() => {
                  if (slides[currentSlide].buttonText === "Start Reciting") {
                    // WhatsApp link
                    window.open("https://wa.me/947XXXXXXXX", "_blank");
                  } else if (
                    slides[currentSlide].buttonText === "Explore Courses"
                  ) {
                    // Scroll to courses section
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else if (
                    slides[currentSlide].buttonText === "Join the Journey"
                  ) {
                    // Instagram profile
                    window.open(
                      "https://instagram.com/your_instagram_handle",
                      "_blank"
                    );
                  }
                }}
                className={`${slides[currentSlide].buttonColor} text-gray-900 font-inter font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95 hover:bg-opacity-90`}
              >
                {slides[currentSlide].buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide
                  ? "bg-amber-400 shadow-lg"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Touch Swipe */}
      <div
        className="absolute inset-0 z-5"
        onTouchStart={(e) => {
          const touchStart = e.touches[0].clientX;
          e.currentTarget.touchStartX = touchStart;
        }}
        onTouchEnd={(e) => {
          const touchEnd = e.changedTouches[0].clientX;
          const touchStart = e.currentTarget.touchStartX;
          const diff = touchStart - touchEnd;

          if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length
                );
                setIsTransitioning(false);
              }, 500);
            }
          }
        }}
      />
    </section>
  );
}
