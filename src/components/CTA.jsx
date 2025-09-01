import { MSquare as Mosque } from "lucide-react";
import cta_bg from "../assets/images/cta-one_bg.png";
import logo from "../assets/images/logo-nobg.png";

export default function CTA() {
  return (
    <section className="py-12 px-2 sm:px-4 lg:px-6 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <img className="absolute inset-0 w-full h-full object-cover z-0 rounded-2xl" src={cta_bg} alt="" />
   {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl"></div>
        <div className="bg-gradient-to-r from-emerald-700 to-amber-400 rounded-2xl p-6 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
          {/* Left side - Icon and Text */}
          <div className="flex flex-col sm:flex-row z-10 items-center gap-8 flex-1">
            {/* Mosque Icon */}
            <div className="bg-white rounded-full p-5 flex-shrink-0">
              <img src={logo} className="w-14 h-14 text-emerald-700" />
            </div>

            {/* CTA Text */}
            <div className="text-white">
              <h2 className="text-2xl text-center sm:text-3xl font-bold font-lexend leading-tight">
                Join Our Free Islamic Awareness Workshops - Open to All.
              </h2>
            </div>
          </div>

          {/* Right side - Button */}
          <div className="flex-shrink-0 z-10 mt-5 sm:mt-0" >
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold font-inter hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
