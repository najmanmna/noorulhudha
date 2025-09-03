import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

// Import images
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpg";
import img20 from "../assets/gallery/20.jpg";
import img21 from "../assets/gallery/21.jpg";

const IslamicAcademyGallery = () => {
  const images = [
    { id: 1, src: img1, alt: "Student" },
    { id: 2, src: img2, alt: "Students" },
    { id: 3, src: img3, alt: "Student" },
    { id: 4, src: img4, alt: "Quran " },
    { id: 5, src: img5, alt: "Academy classroom" },
    { id: 6, src: img6, alt: "Student " },
    { id: 7, src: img7, alt: "Academy classroom" },
    { id: 8, src: img8, alt: "Academy classroom" },
    { id: 9, src: img9, alt: "Academy classroom" },
    { id: 10, src: img10, alt: "Academy classroom" },
    { id: 11, src: img11, alt: "Student" },
    { id: 12, src: img12, alt: "Students " },
    { id: 13, src: img13, alt: "Student" },
    { id: 14, src: img14, alt: "Quran" },
    { id: 15, src: img15, alt: "Academy classroom" },
    { id: 16, src: img16, alt: "Student " },
    { id: 17, src: img17, alt: "Students " },
    { id: 18, src: img18, alt: "Student" },
    { id: 19, src: img19, alt: "Quran " },
    { id: 20, src: img20, alt: "Academy classroom" },
    { id: 21, src: img21, alt: "Academy classroom" },
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
              <div className="aspect-[3/4]">
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
