import { Star, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import test_bg from "../assets/images/testimonial_bg.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: `Alhamdulillah, I'm so happy I finally found out this place. I've always been wanting to learn thajweed. With my busy schedule it has always been procrastinating, and now alhamdulillah I'm so grateful! Shahani is a lovely soul who takes all the trouble to teach right. The learning method and the recalling sessions are very important for me and you do it so beautifully. Especially with my lectures happening haphazardly, you are so kind to be flexible with my times! And I really appreciate that! Jazakallah for everything and may Allah bless you immensely.`,
      signature: "Grateful Student",
    },
    {
      id: 2,
      rating: 5,
      text: `I enrolled the class with many doubts, merely at a very basic level. Now Alhamdulillah I am improving everyday with the great teachings of this institute. Thanks for the continuous support.`,
      signature: "Student",
    },
    {
      id: 3,
      rating: 5,
      text: `NOOR UL HUDHA Institute is the best institute to learn Quran. Very friendly Mualima, the way of teaching is very easy to learn Quran. May Allah bless the Institute and the Mualima. Jazakallah khair.`,
      signature: "Student",
    },
    {
      id: 4,
      rating: 5,
      text: `Jazakallah Shahani, it was always very pleasant to learn from you. I learnt a lot, Alhamdulillah. This was basically a dream come true for me, Alhamdulillah. And Jazakallah for pushing so hard to get the best for me. The best part of you is, although you have just started, whenever you realise a particular way of learning is difficult for the student, you try many ways and find an easier way for us. I really like that adopting nature, it makes our life also very easy. You have a long long long way to go girl, In Sha Allah! May Allah bless you immensely. Ameen. Take good care. Keep in touch.`,
      signature: "Student",
    },
    {
      id: 5,
      rating: 5,
      text: `Assalamu Alaikum, Haroon has progressed really well from what he knew on day one especially with regard to learning new rulings of Thajweed. I am very satisfied with your method of teaching and the fact that you give written notes for the parent to revise at home along with the child. Initially we had story time and that was very interesting too. JazakAllah!`,
      signature: "Parent",
    },
    {
      id: 6,
      rating: 5,
      text: `Assalamu Alaikum sister, just wanted to share a good news with you. My daughter got 100 for Quran recitation in school last week. Her usthad had told that she has done very well and also that if he was to give marks for beauty, she would have gotten full marks for that too. Alhamdulillah we are very happy. I have to thank you for this. May Allah bless you and your family always.`,
      signature: "Parent",
    },
    {
      id: 7,
      rating: 5,
      text: `Alhamdulillah, for the first time my kids have asked me whether they can have longer class. Alhamdulillah.`,
      signature: "Happy Parent",
    },
    {
      id: 8,
      rating: 5,
      text: `I am really thankful to you sister. You are one of the best teachers I have ever come across. The way you teach and talk to kids—may Allah bless you and give you all that you deserve and desire.`,
      signature: "Student",
    },
    {
      id: 9,
      rating: 5,
      text: `Wallaikum salam. Alhamdulillah, I am delighted. The kids can't wait for tomorrow In Sha Allah. The class was awesome and we really like the teacher, Alhamdulillah.`,
      signature: "Parent",
    },
    {
      id: 10,
      rating: 5,
      text: `Alhamdulillah, I honestly feel so blessed to have the Tafseer classes. Every class means so much to me, it's not just about learning what's in the Qur'an only, but also about understanding how it connects to real life and the things we go through every day. We only have two classes a week, but I'm always counting the days till the next one because I enjoy them so much, Alhamdulillah. You explain everything in such a clear way and make it so easy to relate to. Every class leaves me feeling grateful and inspired, and I really see it as a blessing in my life. Thanks again miss.`,
      signature: "Student",
    },
    {
      id: 11,
      rating: 5,
      text: `It's wonderful sister. Anabya is doing great Alhamdullilah. We're very happy. Sister? Does your company teach Arabic to the elders?`,
      signature: "Parent",
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
    <section
      id="testimonials"
      className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden"
    >
      {/* Background Pattern */}

      <img src={test_bg} className="absolute object-cover h-full" alt="" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 mt-10 font-medium text-sm tracking-wider uppercase mb-4">
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
                className="bg-gradient-to-b from-[#bcfcc3] via-[#a1e5a8] to-amber-200 
                  rounded-2xl p-8 shadow-lg relative overflow-hidden 
                  h-96 flex flex-col justify-between opacity-70"
              >
                {/* Top Section */}
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Hear it from them
                  </h3>

                  {/* Text */}
                  <p className="text-black leading-relaxed text-sm font-inter mb-4 line-clamp-6">
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
