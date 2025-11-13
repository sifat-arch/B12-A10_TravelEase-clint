import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FcBusinessman } from "react-icons/fc";
import { FaCar, FaRegCalendarCheck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ViewDetails = () => {
  const { id } = useParams();
  const { user, theme } = useAuth();
  const secureAxiosInstance = useAxiosSecure();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    secureAxiosInstance
      .get(`/vehicles/${id}`)
      .then((data) => setVehicle(data.data));
  }, [secureAxiosInstance, id]);

  const handleBook = () => {
    const newBookingData = {
      vehicleId: vehicle._id,
      vehicleName: vehicle.vehicleName,
      category: vehicle.category,
      profileImg: user.photoURL,
      userName: user.displayName,
      pricePerDay: vehicle.pricePerDay,
      ownerEmail: vehicle.userEmail,
      coverImage: vehicle.coverImage,
      location: vehicle.location,
      bookedBy: user.email,
      bookingDate: new Date().toISOString(),
      status: "Pending",
    };

    secureAxiosInstance.post("/bookings", newBookingData).then((data) => {
      if (data) {
        alert("Booking successful");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`max-w-[1400px] mx-auto rounded-2xl shadow-lg overflow-hidden mt-10 border transition-colors duration-300 
      flex flex-col md:flex-row
      ${
        theme === "light"
          ? "bg-white text-gray-900 border-gray-200"
          : "bg-gray-800 text-gray-100 border-gray-700"
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-[60%]">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spacing", stiffness: 200, damping: 20 }}
          src={vehicle.coverImage}
          alt={vehicle.vehicleName}
          className="w-full h-[250px] md:h-full object-contain md:object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="p-6 md:p-10 flex-1">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          {vehicle.vehicleName}
        </h2>
        <p
          className={`${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          } mb-6 text-sm md:text-base`}
        >
          {vehicle.description}
        </p>

        {/* Info Grid */}

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
            theme === "light" ? "text-gray-700" : "text-gray-200"
          }`}
        >
          {/* Owner */}
          <div className="flex items-center gap-3">
            <FcBusinessman size={40} />
            <div>
              <p className="text-xl font-bold text-orange-500">
                {vehicle.owner}
              </p>
              <p className="text-sm font-medium">Owner</p>
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center gap-3 justify-end sm:justify-end">
            <FaCar size={38} />
            <div className="text-right">
              <p className="text-xl font-bold text-orange-500">
                {vehicle.category}
              </p>
              <p className="text-sm font-medium">Category</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <FaSackDollar size={40} />
            <div>
              <p className="text-xl font-bold text-orange-500">
                ${vehicle.pricePerDay}
              </p>
              <p className="text-sm font-medium">Price/Day</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 justify-end sm:justify-end">
            <IoLocationOutline size={40} />
            <div className="text-right">
              <p className="text-xl font-bold text-orange-500">
                {vehicle.location}
              </p>
              <p className="text-sm font-medium">Location</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-3">
            <FaRegCalendarCheck size={40} />
            <div>
              <p className="text-xl font-bold text-orange-500">
                {vehicle.createdAt
                  ? new Date(vehicle.createdAt).toLocaleDateString()
                  : ""}
              </p>
              <p className="text-sm font-medium">Listed on</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3 justify-end sm:justify-end">
            <MdEmail size={40} />
            <div className="text-right">
              <p className="text-xl font-bold text-orange-500">
                {vehicle.userEmail}
              </p>
              <p className="text-sm font-medium">Contact</p>
            </div>
          </div>

          {/* Availability */}
          <div className="col-span-1 sm:col-span-2 flex items-center justify-center gap-3 mt-2">
            <span
              className={`text-2xl font-semibold ${
                vehicle.availability === "Available"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {vehicle.availability}
            </span>
            <p className="font-semibold text-xl">Availability</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center sm:justify-start mt-6 ml-8">
          <button
            className="px-8 py-4 w-full rounded-lg transition bg-yellow-500 text-white hover:bg-yellow-600 text-lg md:text-xl font-bold"
            onClick={handleBook}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewDetails;
