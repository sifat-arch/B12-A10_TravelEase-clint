import React from "react";
import img from "../assets/banner-2.jpg";
import { motion } from "motion/react";
import { Link } from "react-router";
import img1 from "../assets/banner-2.jpg";
import img2 from "../assets/hero-2.jpg";
import img3 from "../assets/hero-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import ClientSay from "./ClientSay";

export const heroSlides = [
  {
    img: img1,
    title: "Rental Car",
    car: "Range Rover",
    price: "600",
  },
  {
    img: img2,
    title: "Luxury Ride",
    car: "BMW X7",
    price: "550",
  },
  {
    img: img3,
    title: "Premium SUV",
    car: "Audi Q8",
    price: "520",
  },
];
const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      effect="flip"
      loop
      className="w-full"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-[600px] sm:h-[700px] md:h-[1050px] w-full bg-cover bg-center flex items-center justify-center md:justify-start md:pl-60"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 text-center md:text-left px-6 sm:px-10 md:px-20 max-w-4xl">
              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-semibold mb-2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                PREMIUM
              </motion.p>

              <motion.h1
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight drop-shadow-lg"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="text-white text-lg sm:text-xl md:text-2xl mt-3 font-medium"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.4 }}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-semibold mr-2">
                  {slide.car}
                </span>
                <span className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl font-bold mr-1">
                  {slide.price}
                </span>
                / DAY
              </motion.p>

              <motion.div
                className="mt-6 sm:mt-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Link to="/all-vehicles">
                  <button className="relative flex justify-center items-center mx-auto md:mx-0 rounded-md bg-yellow-500 shadow-lg overflow-hidden group transition-all duration-300">
                    <span className="relative z-20 px-6 py-3 text-white font-bold tracking-widest group-hover:text-gray-900 transition-all">
                      See More
                    </span>
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
