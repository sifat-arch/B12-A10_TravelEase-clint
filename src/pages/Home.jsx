import React, { useEffect, useState } from "react";
import img from "../assets/banner-2.jpg";
import { Link } from "react-router";

import HomeCard from "../components/HomeCard";
import useAxios from "../hooks/useAxios";
import RentalCar from "../components/RentalCar";

const Home = () => {
  const [latestVehicles, setLatestVehicles] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/vehicles-latest").then((data) => {
      setLatestVehicles(data.data);
    });
  }, [axiosInstance]);

  return (
    <div>
      {/* banner section */}
      <div
        className="h-[800px] w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute left-70">
          <p className=" text-4xl ml-2 text-yellow-500 font-semibold">
            PREMIUM
          </p>
          <p className="text-white text-9xl font-bold">Rental Car</p>
          <p className="text-white ml-1 text-2xl">
            <span className="text-5xl mr-2">Range Rover</span>{" "}
            <span className="text-yellow-500 text-6xl mr-1">600</span>/ DAY
          </p>
          <Link to="/all-vehicles">
            <button className="relative flex justify-center items-center rounded-md bg-yellow-500 font-montserrat shadow-lg overflow-hidden cursor-pointer border-none mt-4">
              <span className="relative z-20 px-6 py-4 text-white text-lg font-bold tracking-widest transition-all duration-300 ease-in-out hover:text-[#183153]">
                See More
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* dynamic section */}

      <div className="grid grid-cols-3 max-w-[1420px] mx-auto">
        {latestVehicles.map((vehicles) => (
          <HomeCard key={vehicles._id} vehicles={vehicles} />
        ))}
      </div>

      {/* Rental Cart Types */}
      <div className="max-w-[1420px] mx-auto mt-10">
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
    </div>
  );
};

export default Home;
