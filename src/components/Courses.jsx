import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import quranclass from "../assets/images/quranwiththajweed.jpeg";
import hifzclass from "../assets/images/hifzcourse.jpg";
import arabicclass from "../assets/images/learn-arabic.jpg";
import tarbiyaclass from "../assets/images/kid-pray.jpg";
import hadithclass from "../assets/images/hadith.jpg";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Quran with Tajweed",
      image: quranclass,
      description: "Learn proper recitation with rules of Tajweed.",
      details: [
        "Learn correct pronunciation & Tajweed rules",
        "Build fluency and confidence",
        "For Ladies & Kids (Age 5+)",
        "One-on-one calm sessions",
        "Flexible timing – your convenience",
        "English / Tamil / Sinhala",
        "Online classes available",
      ],
      whatsapp:
        "https://wa.me/94775445855?text=Assalamu%20Alaikum,%20I%20want%20to%20join%20Quran%20with%20Tajweed%20course.",
      form: "https://forms.gle/abcd1234xyz",
    },
    {
      id: 2,
      title: "Hifz (Memorization)",
      image: hifzclass,
      description:
        "Step-by-step Quran memorization program for kids and adults.",
      details: [
        "Memorization plan tailored for each student",
        "Daily/weekly revision sessions",
        "Flexible class timings",
        "English / Tamil / Sinhala",
        "Online classes available",
      ],
      whatsapp:
        "https://wa.me/94775445855?text=Assalamu%20Alaikum,%20I%20want%20to%20join%20Hifz%20course.",
      form: "https://forms.gle/abcd1234xyz",
    },
    {
      id: 3,
      title: "Arabic Language",
      image: arabicclass,
      description:
        "Learn to understand, read, and speak Arabic in a simple, structured way.",
      details: [
        "Learn to read & write Arabic",
        "Develop conversational skills",
        "Step-by-step structured program",
        "English / Tamil / Sinhala",
        "Online classes available",
      ],
      whatsapp:
        "https://wa.me/94775445855?text=Assalamu%20Alaikum,%20I%20want%20to%20join%20Arabic%20Language%20course.",
      form: "https://forms.gle/abcd1234xyz",
    },
    {
      id: 4,
      title: "Tarbiya Classes",
      image: tarbiyaclass,
      description:
        "Guiding kids and youth to develop strong Islamic values, discipline, and good character alongside Quranic knowledge.",
      details: [
        "Islamic values and good character building",
        "Interactive sessions for kids & youth",
        "Age-appropriate teaching methods",
        "English / Tamil / Sinhala",
        "Online classes available",
      ],
      whatsapp:
        "https://wa.me/94775445855?text=Assalamu%20Alaikum,%20I%20want%20to%20join%20Tarbiya%20Classes.",
      form: "https://forms.gle/abcd1234xyz",
    },
    {
      id: 5,
      title: "Fiqh, Tafseer & Ahadith",
      image: hadithclass,
      description:
        "Gain deeper Islamic knowledge and understanding of the Qur’an & Sunnah.",
      details: [
        "In-depth Tafseer sessions",
        "Learn authentic Ahadith",
        "Study basic Fiqh rulings",
        "English / Tamil / Sinhala",
        "Online classes available",
      ],
      whatsapp:
        "https://wa.me/94775445855?text=Assalamu%20Alaikum,%20I%20want%20to%20join%20Fiqh%20Tafseer%20Ahadith%20course.",
      form: "https://forms.gle/abcd1234xyz",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Show only 4 initially
  const displayedCourses = showAll ? courses : courses.slice(0, 4);

  return (
    <section
      id="courses"
      className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-300 rotate-45 rounded-lg"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-2 border-amber-300 rotate-12 rounded-lg"></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 border-2 border-amber-300 -rotate-12 rounded-lg"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-amber-300 rotate-45 rounded-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-medium text-sm tracking-wider uppercase mb-2">
            POPULAR COURSES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-lexend">
            Our Arabic & Islamic Courses
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white relative group rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 ">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="absolute z-10 -bottom-4 left-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200"
                >
                  Study Now
                </button>
              </div>

              {/* Course Content */}
              <div className="relative p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-lexend leading-tight">
                  {course.title}
                </h3>
                <div className="text-sm">{course.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less Button */}
        {courses.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  All Courses <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative ">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedCourse.title}
            </h2>
            <p className="text-sm text-gray-600 italic mb-4">
              {selectedCourse.description}
            </p>

            {/* Details */}
            <ul className="space-y-2 text-gray-700 mb-6">
              {selectedCourse.details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-yellow-500">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <a
                href={selectedCourse.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-xl text-center hover:bg-green-700 transition"
              >
                Join via WhatsApp
              </a>
              <a
                href={selectedCourse.form}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-xl text-center hover:bg-yellow-600 transition"
              >
                Register Form
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
