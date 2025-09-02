"use client";
import { useState } from "react";
import logo from "../assets/images/logo.jpg";
import JoinNowModal from "./JoinNowModal";
import TeacherJoinModal from "./TeacherJoinModal"; // ✅ add this


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ["Home", "About", "Courses", "Testimonials", "Contact"];

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 bg-cover bg-center rounded-full"
                style={{ backgroundImage: `url(${logo})` }}
              ></div>
              <div className="flex flex-col">
                <span className="font-lexend font-semibold text-gray-900 text-sm leading-relaxed">
                  NOORUL HUDHA INSTITUTE
                </span>
                <span className="font-inter text-xs text-gray-600 leading-tight">
                  QALAM OF ALLAH
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-inter text-gray-700 hover:text-amber-600 transition-colors duration-200 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop Join Now Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsTeacherModalOpen(true)}
                className="ml-4 bg-white text-emerald-900 font-inter font-medium px-6 py-2 rounded-lg text-sm transition-colors duration-200"
              >
                Join as Teacher
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-inter font-medium px-6 py-2 rounded-lg text-sm transition-colors duration-200"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
            <div className="px-4 pt-4 pb-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-inter text-gray-700 hover:text-amber-600 transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false); // Close mobile menu when opening modal
                }}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-inter font-medium px-6 py-2 rounded-lg text-sm transition-colors duration-200 w-full"
              >
                Join Now
              </button>
              <button
                onClick={() => {
                  setIsTeacherModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-emerald-50 text-emerald-900 font-inter font-medium px-6 py-2 rounded-lg text-sm transition-colors duration-200 w-full"
              >
                Join as Teacher
              </button>
            </div>
          </div>
        )}
      </nav>

     {/* Global Modals */}
      {isModalOpen && <JoinNowModal onClose={() => setIsModalOpen(false)} />}
      {isTeacherModalOpen && (
        <TeacherJoinModal onClose={() => setIsTeacherModalOpen(false)} />
      )}
    </>
  );
}
