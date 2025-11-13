import React, { useEffect, useState } from "react";
import img from "../assets/banner-2.jpg";
import { Link } from "react-router";

import HomeCard from "../components/HomeCard";
import useAxios from "../hooks/useAxios";
import RentalCar from "../components/RentalCar";
import AboutUs from "../components/AboutUs";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loding";
import { motion } from "motion/react";

const Home = () => {
  const [latestVehicles, setLatestVehicles] = useState([]);
  const { loading, setLoading } = useAuth();
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/vehicles-latest").then((data) => {
      setLatestVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance, setLoading]);

  if (loading) {
    return <Loading />;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        className="relative h-[600px] sm:h-[700px] md:h-[800px] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center md:text-left px-6 sm:px-10 md:px-20 max-w-4xl">
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-semibold mb-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            PREMIUM
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight drop-shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            Rental Car
          </motion.h1>

          <motion.p
            className="text-white text-lg sm:text-xl md:text-2xl mt-3 font-medium"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold mr-2">
              Range Rover
            </span>
            <span className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl font-bold mr-1">
              600
            </span>
            / DAY
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Link to="/all-vehicles">
              <button className="relative flex justify-center items-center mx-auto md:mx-0 rounded-md bg-yellow-500 font-montserrat shadow-lg overflow-hidden cursor-pointer border-none group transition-all duration-300">
                <span className="relative z-20 px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-bold tracking-widest group-hover:text-gray-900 transition-all duration-300">
                  <button>See More</button>
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* dynamic section */}

      <div>
        <p className="text-center my-10 text-5xl font-bold ">
          Latest Cars <span className="text-yellow-500"> Available</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1420px] mx-auto">
          {latestVehicles.map((vehicles) => (
            <HomeCard key={vehicles._id} vehicles={vehicles} />
          ))}
        </div>
      </div>

      {/* Rental Cart Types */}
      <div className="max-w-[1420px] mx-auto mt-10 ">
        <div className="mb-10">
          <p className="text-center text-shadow-2xs text-xl  font-bold">
            CATEGORIES
          </p>
          <p className="text-5xl font-bold text-center">
            Rental <span className="text-yellow-500">Car Types</span>
          </p>
        </div>
        <RentalCar />
      </div>

      {/* about us */}
      <div className="mt-10 max-w-[1420px] mx-auto mb-3">
        <p className="text-center text-5xl font-bold">
          About <span className="text-yellow-500">us</span>
        </p>
        <AboutUs />
      </div>
    </motion.div>
  );
};

export default Home;
