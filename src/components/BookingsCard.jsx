import React from "react";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";
import {
  FaCar,
  FaChevronCircleLeft,
  FaLocationArrow,
  FaUser,
} from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { TbScubaDivingTankFilled } from "react-icons/tb";

const BookingsCard = ({ booking }) => {
  const { theme } = useAuth();

  return (
    <div
      className={`flex flex-col md:flex-row gap-6 md:gap-10 shadow-md rounded-xl max-w-[1280px] mx-auto  border transition-colors duration-300
      ${
        theme === "light"
          ? "bg-white border-gray-200 text-gray-900"
          : "bg-gray-800 border-gray-700 text-gray-100"
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <motion.img
          className="h-56 sm:h-64 md:h-full w-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          src={booking.coverImage}
          alt={booking.vehicleName}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spacing", stiffness: 200, damping: 20 }}
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 p-4 sm:p-6">
        {/* Vehicle Info */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              {booking.vehicleName}
            </h1>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              } text-base sm:text-lg font-semibold`}
            >
              Category: <span>{booking.category}</span>
            </p>
          </div>

          <div className="text-right">
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-200"
              } text-2xl sm:text-3xl text-orange-400 font-bold`}
            >
              {booking.pricePerDay}
            </p>
            <p className="text-sm sm:text-base font-semibold">Starting From</p>
          </div>
        </div>

        {/* Details Box */}
        <div
          className={`mt-4 sm:mt-5 p-4 sm:p-5 flex flex-col sm:flex-row justify-between rounded-lg transition-colors duration-300
          ${theme === "light" ? "bg-[#f2f7f6]" : "bg-gray-700"}`}
        >
          <div className="w-full sm:w-1/2 space-y-1 text-sm sm:text-base">
            <p
              className={`flex items-center gap-1 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              <FaCar />
              Automatic
            </p>
            <p
              className={`flex items-center gap-1 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              <IoTimeOutline size={18} />
              2025
            </p>
            <p
              className={`flex items-center gap-1 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              <FaLocationArrow />
              18km
            </p>
          </div>
          <div className="w-full sm:w-1/2 space-y-1 text-sm sm:text-base mt-2 sm:mt-0">
            <p
              className={`flex items-center gap-1 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              <FaChevronCircleLeft />
              Left
            </p>
            <p
              className={`flex items-center gap-1 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              <FaUser />4 Persons
            </p>
            <p
              className={`flex items-center gap-1 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              <TbScubaDivingTankFilled />
              {booking.category}
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3 sm:gap-0">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              src={booking.profileImg}
              alt={booking.bookedBy}
            />
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              } text-sm sm:text-base`}
            >
              {booking.bookedBy}
            </p>
          </div>

          <p className="text-lg sm:text-xl font-bold">{booking.location}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingsCard;
