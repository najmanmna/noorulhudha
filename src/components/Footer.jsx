import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/images/logo.jpg";
import footerbg from "../assets/images/footer-bg.jpg";

export default function Footer() {
  return (
    <footer id="contact" className="relative text-white overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={footerbg}
        alt="Mosque silhouette background"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white rounded-full p-4 w-28 h-28 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={logo}
                alt="Noorul Hudha Institute Logo"
                className="w-20 h-20"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="font-lexend font-semibold text-white text-sm block">
                NOORUL HUDHA INSTITUTE
              </span>
              <span className="font-inter text-xs text-gray-300">
                QALAM OF ALLAH
              </span>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold font-lexend mb-4">Links</h3>
            <ul className="space-y-2">
              {["About", "Courses", "Testimonials", "Workshops", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Courses Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold font-lexend mb-4">
              Our Courses
            </h3>
            <ul className="space-y-2">
              {[
                "Quran with Tajweed",
                "Hifz",
                "Arabic Language",
                "Tarbiya Classes",
                "Fiqh, Tafseer & Hadith",
              ].map((course) => (
                <li key={course}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold font-lexend mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div className="text-center md:text-left">
              <p>Noorul Hudha Institute (Pvt) Ltd | Registered in Sri Lanka</p>
              <p></p>
            </div>
            <div className="text-center">
              <p>&copy; 2025 Noorul Hudha Institute. All rights reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <p>
                Designed & Developed by{" "}
                <span className="text-emerald-400">Ahamed Web Studio</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
