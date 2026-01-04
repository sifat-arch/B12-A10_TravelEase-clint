import React from "react";

import p1 from "../assets/cars/proto1.png";
import p2 from "../assets/cars/proto2.png";
import p3 from "../assets/cars/proto3.png";
import p4 from "../assets/cars/proto4.png";
import p5 from "../assets/cars/proto5.png";
import p6 from "../assets/cars/proto6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useAuth from "../hooks/useAuth";

const images = [p1, p2, p3, p4, p5, p6];

const Categories = () => {
  const { theme } = useAuth();
  const isLight = theme === "light";

  return (
    <div className={`${isLight ? "bg-white" : "bg-black"} my-4`}>
      <h2 className={`text-4xl font-bold text-center pt-15`}>
        Categoi<span className="text-yellow-400">res</span>
      </h2>

      <div className="py-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={6000}
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          freeMode={true}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          className="marquee-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="h-70 rounded-lg overflow-hidden border-2 border-gray-700 mx-auto">
                <img
                  src={img}
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="py-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={6000}
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="marquee-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="h-70 rounded-lg overflow-hidden border-2 border-gray-700 mx-auto">
                <img
                  src={img}
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
