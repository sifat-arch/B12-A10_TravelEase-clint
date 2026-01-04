import React from "react";
import useAuth from "../hooks/useAuth";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ClientSay = () => {
  const { theme } = useAuth();
  const isDark = theme === "dark";

  const clientData = [
    {
      desc: "This is a very good website for renting cars. The prices are reasonable and the service is helpful with very fast delivery time.",
      name: "Abdur Rahim",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      desc: "I had a great experience using this car rental service. Booking was easy and the car was clean, well-maintained and very comfortable.",
      name: "Tanvir Ahmed",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      desc: "The website is user-friendly and the rental process is smooth. Prices are affordable compared to other services and support is always available.",
      name: "Nusrat Jahan",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      desc: "Good service overall. The car condition was excellent and pickup was on time. I highly recommend this platform for anyone.",
      name: "Mehedi Hasan",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      desc: "Very reliable car rental platform. The vehicles are modern and comfortable. The support team was very professional.",
      name: "Farhana Islam",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  ];
  return (
    <section
      className={`py-24 transition-colors duration-300 max-w-[1420px] mx-auto px-6 ${
        isDark ? "bg-black" : "bg-gray-100"
      }`}
    >
      <div className="">
        {/* ===== Section Title ===== */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            What Clients <span className="text-yellow-400">Say</span>
          </h2>
        </div>

        {/* ===== Swiper ===== */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {clientData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                {/* ⭐ Stars */}
                <div
                  className={`absolute top-0 right-0 w-32 h-12 rounded-bl-3xl flex items-center justify-center gap-1 ${
                    isDark ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-400 text-sm" />
                  ))}
                </div>

                {/* ===== Card ===== */}
                <div
                  className={`rounded-[40px] p-10 pt-16 ${
                    isDark ? "bg-[#1a1a1a]" : "bg-white shadow-xl"
                  }`}
                >
                  <FaQuoteLeft className="text-orange-400 text-5xl mb-6 opacity-80" />

                  <p
                    className={`text-lg leading-relaxed mb-20 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="ml-32">
                    <h4
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p className="text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* ===== Avatar Cutout ===== */}
                <div
                  className={`absolute bottom-0 left-0 w-36 h-36 rounded-tr-[50px] flex items-center justify-center ${
                    isDark ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden border-4 ${
                      isDark ? "border-[#1a1a1a]" : "border-white"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSay;
