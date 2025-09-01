"use client";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo-nobg.png"; // update path

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 z-50">
      {/* Logo with orbit */}
      <div className="relative flex items-center justify-center mb-6">
        <img
          src={logo}
          alt="Institute Logo"
          className="w-24 h-24 animate-pulse drop-shadow-lg"
        />

        {/* Orbit ring */}
        <div className="absolute w-32 h-32 border-4 border-amber-400/40 rounded-full animate-spin-slow"></div>
        {/* Star */}
        <div className="absolute top-0 -right-2 text-amber-500 text-2xl animate-bounce-slow">
          ★
        </div>
      </div>

      {/* Institute Name */}
      <h1 className="text-xl md:text-2xl font-lexend font-bold text-amber-700 tracking-wide ">
        NOORUL HUDHA INSTITUTE
      </h1>

      {/* Subtitle (delayed fade in) */}
      <p className="text-lg md:text-xl text-amber-600 mt-1 d">
        QALAM OF ALLAH
      </p>
    </div>
  );
}
