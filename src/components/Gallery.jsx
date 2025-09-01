import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

// Import images
import img1 from "../assets/images/quranwiththajweed.jpeg";
import img2 from "../assets/images/hifzcourse.jpg";
import img3 from "../assets/images/learn-arabic.jpg";
import img4 from "../assets/images/kid-pray.jpg";
import img5 from "../assets/images/hadith.jpg";

const IslamicAcademyGallery = () => {
  const images = [
    { id: 1, src: img1, alt: "Student reading in mosque" },
    { id: 2, src: img2, alt: "Students studying together" },
    { id: 3, src: img3, alt: "Student reading by window" },
    { id: 4, src: img4, alt: "Quran and prayer beads" },
    { id: 5, src: img5, alt: "Academy classroom" },
    { id: 6, src: img1, alt: "Student reading in mosque" },
    { id: 7, src: img2, alt: "Students studying together" },
    { id: 8, src: img3, alt: "Student reading by window" },
    { id: 9, src: img4, alt: "Quran and prayer beads" },
    { id: 10, src: img5, alt: "Academy classroom" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // default 4 for desktop

  // Detect screen size and adjust items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // mobile: 2 images at a time
      } else {
        setItemsPerView(4); // desktop: 4 images at a time
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-emerald-600 font-medium text-sm tracking-wider uppercase mb-4">
          STUDENT GALLERY
        </p>
        <h2 className="text-3xl md:text-4xl mx-10 font-bold text-gray-900 font-lexend text-balance">
        
         Our Academic Gallery
        </h2>
      </div>

      {/* Gallery Section */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / itemsPerView}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`flex-shrink-0 relative`}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow (optional) */}
        <button
          onClick={nextSlide}
          className="absolute bottom-6 right-8 bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full transition-colors duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default IslamicAcademyGallery;
