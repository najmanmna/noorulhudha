import { Star, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Alhamdulillah, I honestly feel so blessed to have the Tafseer classes. Every class means so much to me, it's not just about learning what's in the Qur'an only, but also about understanding how it connects to real life and the things we go through every day.",
      signature: "Thanks again miss",
    },
    {
      id: 2,
      rating: 4,
      text: "We only have two classes a week, but I'm always counting the days till the next one because I enjoy them so much. Alhamdulillah. You explain everything in such a clear way and make it so easy to relate to.",
      signature: "Grateful Student",
    },
    {
      id: 3,
      rating: 5,
      text: "Every class leaves me feeling grateful and inspired, and I really see it as a blessing in my life.",
      signature: "Happy Parent",
    },
    {
      id: 4,
      rating: 5,
      text: "The environment is peaceful and the sessions are structured in a way that makes learning very enjoyable.",
      signature: "Student from UK",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-200 rotate-45 transform"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-amber-200 rotate-12 transform"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-amber-200 -rotate-12 transform"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-amber-200 rotate-45 transform"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-medium text-sm tracking-wider uppercase mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-lexend text-balance">
            Loved by Parents &<br />
            Students Worldwide
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
            className="[&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-6"

          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 at a time for md+
          }}
       
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="bg-gradient-to-b from-[#85e28e] via-[#a1e5a8] to-amber-200 
                  rounded-2xl p-8 shadow-lg relative overflow-hidden 
                  h-96 flex flex-col justify-between"
              >
                {/* Top Section */}
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Student Review
                  </h3>

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed text-sm font-inter mb-4 line-clamp-6">
                    {testimonial.text}
                  </p>

                  {/* Signature */}
                  <p className="text-gray-700 text-sm font-medium">
                    {testimonial.signature}
                  </p>
                </div>

                {/* Avatar */}
                <div className="flex justify-start mt-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
