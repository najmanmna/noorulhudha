import { useState } from "react";

export default function TeacherJoinModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    qualification: "",
    experience: "",
    subject: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `👨‍🏫 *New Teacher Application*  
👤 Name: ${form.name}  
📞 Phone: ${form.phone}  
🎓 Qualification: ${form.qualification}  
📚 Subject: ${form.subject}  
🧑‍💻 Experience: ${form.experience}`;

    // Replace with your WhatsApp number (no +, spaces, or dashes)
    const whatsappUrl = `https://wa.me/94755445855?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Join as Teacher</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-emerald-200"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-emerald-200"
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={form.qualification}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-emerald-200"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject Expertise"
          value={form.subject}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-emerald-200"
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-emerald-200"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
