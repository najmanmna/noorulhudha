import ctaBg from "../assets/images/hero_bg1.png"; // use your flyer-style background if available
import { Instagram, Facebook } from "lucide-react";

export default function Workshop() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 py-12 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      {/* Background Image */}
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/70 via-orange-50/70 to-emerald-50/70" />

      {/* Content Card */}
      <div className="relative max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-700 text-center font-lexend mb-4">
          🌙 Stories of the Prophets
        </h1>
        <p className="text-lg text-center text-amber-700 font-semibold mb-8">
          Monthly Online Islamic Workshop
        </p>

        {/* Subtext */}
        <p className="text-gray-700 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
          Starting this <span className="font-semibold">October</span>, join us
          every month as we explore the life of one Prophet at a time. Together,
          we’ll discover the{" "}
          <span className="text-emerald-700 font-medium">
            lessons, miracles, and wisdom
          </span>{" "}
          from all 25 Prophets mentioned in the Qur’an — in a{" "}
          <span className="text-amber-600 font-medium">
            fun and interactive way!
          </span>
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-amber-600 text-2xl">📅</span>
            <p className="text-gray-800">
              <span className="font-semibold">Date:</span> 18th October
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-600 text-2xl">👨‍🏫</span>
            <p className="text-gray-800">
              <span className="font-semibold">Instructor:</span> Qualified
              Instructor
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-600 text-2xl">🎓</span>
            <p className="text-gray-800">
              <span className="font-semibold">Ages:</span> 6 - 13 (Others
              welcome too!)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-600 text-2xl">💻</span>
            <p className="text-gray-800">
              <span className="font-semibold">Mode:</span> Online (Zoom)
            </p>
          </div>
        </div>

        {/* Free Badge */}
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full text-xl font-bold shadow-lg animate-pulse">
            🚀 FREE Workshop
          </span>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="https://wa.me/94755445855?text=I%27m%20interested%20in%20the%20Stories%20of%20the%20Prophets%20workshop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-white px-10 py-4 rounded-lg font-semibold shadow-xl hover:bg-amber-600 hover:scale-105 transition-transform duration-200"
          >
            Join Now
          </a>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>📞 +94 755445855</p>
          <p className="mt-1">🌐 www.noorulhudhainstitute.com</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-700 text-2xl">
            <a
              href="https://instagram.com/noorul_hudha_institute"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/noorulhudhainstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
