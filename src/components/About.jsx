import aboutimg from "../assets/images/about_img.png";

export default function About() {
  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-0 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={aboutimg}
              alt="Student reading Quran"
              className="w-2/3 max-w-xs lg:max-w-lg rounded-2xl  object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-2 mx-auto  lg:space-y-2">
            {/* Heading & Intro */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-xl font-lexend font-bold text-emerald-600 mb-2 sm:mb-4">
                About Noorul Hudha Institute
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Founded in 2016 by{" "}
                <span className="font-semibold text-gray-900">
                  Aalima Bint Nazeer
                </span>{" "}
                with small Arabic classes at home, Noorul Hudha Institute has
                grown into a trusted online platform for Qur'an, Arabic, and
                Islamic studies. With expert tutors, flexible scheduling, and a
                focus on sincerity and discipline, we welcome learners of all
                ages — from kids as young as 4 to adults and reverts seeking
                knowledge.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Mission */}

              <div className="bg-white rounded-xl py-4 px-5 sm:px-2 sm:py-6">
                <div
                  className="h-[7px] w-20 mb-3"
                  style={{
                    background:
                      "linear-gradient(to right, #FFD500 70%, #2BA155 30%)",
                  }}
                ></div>

                <h3 className="text-lg sm:text-xl font-lexend font-semibold text-gray-900 mb-2 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To deliver authentic Qur'an and Islamic knowledge with
                  sincerity and discipline, helping learners not only recite but
                  also live by Islamic values.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-xl py-4 px-5 sm:px-2 sm:py-6">
                <div
                  className="h-[7px] w-20 mb-4"
                  style={{
                    background:
                      "linear-gradient(to right, #FFD500 70%, #2BA155 30%)",
                  }}
                ></div>
                <h3 className="text-lg sm:text-xl font-lexend font-semibold text-gray-900 mb-2 sm:mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To nurture generations who confidently read, understand, and
                  practice the Qur'an and Sunnah, building a global community of
                  faith and knowledge.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="">
              {/* <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Discover More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
