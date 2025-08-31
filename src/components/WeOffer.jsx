import weofferbg from "../assets/images/weofferbg.png";
import allahcanvas from "../assets/images/service-1.png";
import personicon from "../assets/icons/person.svg";
import scheduleicon from "../assets/icons/schedule.svg";
import costicon from "../assets/icons/cost-per-click.svg";

export default function WeOffer() {
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
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 font-inter">
            WHAT WE OFFER
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-lexend leading-tight">
            We offer An Effective
            <br />
            Arabic & Quran Classes
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 max-w-6xl md:mx-auto mx-10">
          {/* Personalized Learning Card */}
          <div className="bg-white rounded-lg relative p-6 shadow-lg group hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-amber-400 rounded-full absolute -top-8 left-12 -translate-x-1/2 
                            flex items-center justify-center shadow-md transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
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
          </div>

          {/* Flexible Scheduling Card */}
          <div className="bg-white relative rounded-lg p-6 shadow-lg group hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-amber-400 rounded-full absolute -top-8 left-12 -translate-x-1/2 
                            flex items-center justify-center shadow-md transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
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
          </div>

          {/* Affordable Education Card */}
          <div className="bg-white rounded-lg p-6 relative shadow-lg group hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-amber-400 rounded-full absolute -top-8 left-12 -translate-x-1/2 
                            flex items-center justify-center shadow-md transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
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
          </div>
        </div>
      </div>
    </section>
  );
}
