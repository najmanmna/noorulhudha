import { motion } from "framer-motion";
import weofferbg from "../assets/images/weofferbg.png";
import allahcanvas from "../assets/images/service-1.png";
import personicon from "../assets/icons/person.svg";
import scheduleicon from "../assets/icons/schedule.svg";
import costicon from "../assets/icons/cost-per-click.svg";

export default function WeOffer() {
  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // smaller offset
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // slower = smoother
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
      },
    },
  };

  return (
    <section className="relative bg-[#302E2B] py-24 overflow-hidden">
      {/* Background Pattern */}
      <img
        src={weofferbg}
        alt="Background"
        className="top-12 absolute w-full object-cover object-center hidden md:block"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 font-inter">
            WHAT WE OFFER
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-lexend leading-tight">
            We offer An Effective
            <br />
            Arabic & Quran Classes
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 max-w-6xl md:mx-auto mx-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Personalized Learning */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg relative p-6 shadow-lg group hover:shadow-xl transition duration-300"
          >
            <div className="w-14 h-14 bg-amber-400 rounded-full absolute -top-8 left-12 -translate-x-1/2 flex items-center justify-center shadow-md transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
              <img src={personicon} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg mt-2 max-w-20 font-bold text-gray-900 mb-4 text-left font-lexend">
              Personalized Learning
            </h3>
            <p className="text-gray-600 text-left leading-relaxed font-inter text-sm">
              Our one-on-one teaching method ensures each student learns at
              their own pace, receiving full attention and guidance from the
              tutor.
            </p>
            <img
              src={allahcanvas}
              alt="Canvas"
              className="top-6 right-3 w-1/2 absolute object-cover transform transition duration-300 group-hover:-translate-y-2 group-hover:scale-105"
            />
          </motion.div>

          {/* Flexible Scheduling */}
          <motion.div
            variants={cardVariants}
            className="bg-white relative rounded-lg p-6 shadow-lg group hover:shadow-xl transition duration-300"
          >
            <div className="w-14 h-14 bg-amber-400 rounded-full absolute -top-8 left-12 -translate-x-1/2 flex items-center justify-center shadow-md transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
              <img src={scheduleicon} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg max-w-20 mt-2 font-bold text-gray-900 mb-4 text-left font-lexend">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600 text-left leading-relaxed font-inter text-sm">
              With classes available around the clock, families can choose
              timings that best fit their daily routine without compromising on
              learning.
            </p>
            <img
              src={allahcanvas}
              alt="Canvas"
              className="top-6 right-3 w-1/2 absolute object-cover transform transition duration-300 group-hover:-translate-y-2 group-hover:scale-105"
            />
          </motion.div>

          {/* Affordable Education */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg p-6 relative shadow-lg group hover:shadow-xl transition duration-300"
          >
            <div className="w-14 h-14 bg-amber-400 rounded-full absolute -top-8 left-12 -translate-x-1/2 flex items-center justify-center shadow-md transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
              <img src={costicon} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg max-w-20 mt-2 font-bold text-gray-900 mb-4 text-left font-lexend">
              Affordable Education
            </h3>
            <p className="text-gray-600 text-left leading-relaxed font-inter text-sm">
              We believe quality Islamic education should be accessible,
              offering structured courses at reasonable and family-friendly
              fees.
            </p>
            <img
              src={allahcanvas}
              alt="Canvas"
              className="top-6 right-3 w-1/2 absolute object-cover transform transition duration-300 group-hover:-translate-y-2 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
