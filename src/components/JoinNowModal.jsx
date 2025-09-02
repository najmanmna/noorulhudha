"use client";
import { address } from "framer-motion/client";
import { useState } from "react";

export default function JoinNowModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `📚 *New Student Enquiry*  
👤 Name: ${form.name}  
🎂 Age: ${form.age}  
📞 Phone: ${form.phone}  
📍 Address: ${form.address}  
📖 Course: ${form.course}`;

    // Replace with your WhatsApp number (with country code, no + sign)
    const phoneNumber = "94755445855";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Open WhatsApp
    onClose(); // Close modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md animate-fadeIn">
        <h2 className="text-xl font-semibold text-amber-700 mb-4">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="text"
            name="address"
            placeholder="City/Country"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="text"
            name="course"
            placeholder="Course Interested"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
