import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";
import { motion } from "framer-motion";

const HomeCard = ({ vehicles }) => {
  const { theme } = useAuth();
  return (
    <div>
      <div>
        <div
          className={`max-w-xl rounded-xl shadow-lg overflow-hidden m-4 transition-colors duration-500 ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-900"
          }`}
        >
          <motion.img
            className="w-full h-48 object-cover"
            src={vehicles.coverImage}
            alt="Car"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spacing", stiffness: 200, damping: 20 }}
          />

          <div className="p-5 ">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  {vehicles.vehicleName}
                </h2>
                <p className="text-sm mb-2">PER DAY</p>
              </div>
              <div>
                <p className="text-sm">FROM</p>
                <p className="text-red-500 font-bold text-lg mb-3">
                  {vehicles.pricePerDay}
                </p>
              </div>
            </div>

            <p className="text-sm mb-4">{vehicles.description}</p>
            <div className="flex gap-3">
              <Link
                className="flex-1 bg-yellow-500 text-center text-white py-2 rounded hover:bg-yellow-600 transition w-full"
                to={`view-details/${vehicles._id}`}
              >
                <button>Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
