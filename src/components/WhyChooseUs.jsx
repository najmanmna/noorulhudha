import prayIcon from "../assets/icons/pray.svg";
import quranIcon from "../assets/icons/quran.svg";
import mothersIcon from "../assets/icons/mothers.svg";
import worldIcon from "../assets/icons/world.svg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: quranIcon,
      title: "Expert Quran Tutor",
      description: "Qualified Islamic scholars guiding with patience and care.",
      bg: "bg-[#FBF9ED]", // light yellow
    },
    {
      icon: mothersIcon,
      title: "Child-Friendly Approach",
      description: "Fun and easy methods for kids to learn Quran & Duas.",
      bg: "bg-[#E9F3FF]", // light green (fixed invalid hex)
    },
    {
      icon: worldIcon,
      title: "Worldwide Access",
      description: "Online classes available for students across the globe.",
      bg: "bg-[#F6F6F6]", // light gray
    },
    {
      icon: prayIcon,
      title: "Faith & Values",
      description:
        "Teaching Quran with Tajweed while nurturing Islamic manners.",
      bg: "bg-[#E9E8E9]", // light pink
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-inter font-medium text-sm tracking-wide uppercase mb-4">
            WHY TO CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-lexend font-bold text-gray-900 leading-tight">
            Why Choose Our
            <br />
            Institute
          </h2>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-14 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-3xl border border-black py-5 px-5 md:px-4 text-center transition-colors duration-700 ease-in-out hover:[background-image:linear-gradient(90deg,rgb(43,145,85),rgb(167,174,52))] hover:bg-[length:200%_200%] hover:animate-gradient hover:text-white`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md transition-all duration-500">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-lexend font-bold mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
