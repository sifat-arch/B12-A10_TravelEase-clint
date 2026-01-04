import React, { useEffect, useState } from "react";

import { Link } from "react-router";

import useAxios from "../hooks/useAxios";
import RentalCar from "../components/RentalCar";
import AboutUs from "../components/AboutUs";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loding";
import { motion } from "motion/react";
import Hero from "../components/Hero";
import RentalPricess from "../components/RentalPricess";
import ClientSay from "../components/ClientSay";
import Categories from "../components/Categories";
import Card from "../components/Card";

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
      {/* hero */}
      <Hero />

      {/* dynamic section */}

      <div>
        <p className="text-center my-10 text-5xl font-bold ">
          Latest Cars <span className="text-yellow-500"> Available</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-[1420px] mx-auto gap-5">
          {latestVehicles.map((vehicles) => (
            <Card vehicles={vehicles} />
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

      {/* car rental process */}
      <RentalPricess />
      {/* What clent say */}

      <ClientSay />
      {/* category */}
      <Categories />
    </motion.div>
  );
};

export default Home;
