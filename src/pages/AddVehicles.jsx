import React from "react";
import img from "../assets/addVehicles.jpg";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const AddVehicles = () => {
  const secureAxiosInstance = useAxiosSecure();
  const { theme } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;
    const vehicleName = target.vehicleName.value;
    const owner = target.owner.value;
    const category = target.category.value;
    const pricePerDay = parseFloat(target.pricePerDay.value);
    const location = target.location.value;
    const availability = target.availability.value;
    const description = target.description.value;
    const coverImage = target.coverImage.value;
    const userEmail = target.userEmail.value;

    const newVehicleInfo = {
      vehicleName,
      owner,
      category,
      pricePerDay,
      location,
      availability,
      description,
      coverImage,
      userEmail,
      createdAt: format(new Date(), "yyyy-mm-dd HH:MM:SS"),
    };

    // secureAxiosInstance.post("/vehicles", newVehicleInfo).then((data) => {
    //   console.log(data.data);
    // });

    secureAxiosInstance
      .post("/vehicles", newVehicleInfo)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Vehicle added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Failed to add vehicle!",
          text: err.message || "Something went wrong while adding the vehicle.",
        });
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center mt-10 rounded-lg overflow-hidden 
      shadow-xl transition-all duration-500 
      ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100 border border-gray-700"
          : "bg-white text-gray-800 border border-gray-200"
      }`}
    >
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spacing", stiffness: 200, damping: 20 }}
          src={img}
          alt="Add Vehicle"
          className="w-full h-[300px] sm:h-[400px] md:h-[810px] object-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex justify-center p-6 sm:p-8 lg:p-10">
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-lg rounded-xl shadow-md p-6 sm:p-8 
            ${
              theme === "dark"
                ? "bg-gray-800/70 backdrop-blur-md"
                : "bg-white/80 backdrop-blur-md"
            }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Add New{" "}
            <span
              className={`${
                theme === "dark" ? "text-yellow-400" : "text-yellow-500"
              }`}
            >
              Vehicle
            </span>
          </h2>

          {/* Vehicle Name & Owner */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium mb-1">
                Vehicle Name
              </label>
              <input
                type="text"
                name="vehicleName"
                className={`w-full p-2 rounded-md border transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                      : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                  } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
                required
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium mb-1">Owner</label>
              <input
                type="text"
                name="owner"
                className={`w-full p-2 rounded-md border transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                      : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                  } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              className={`w-full p-2 rounded-md border transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              required
            >
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Electric">Electric</option>
              <option value="Van">Van</option>
            </select>
          </div>

          {/* Price & Location */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium mb-1">
                Price per Day ($)
              </label>
              <input
                type="text"
                name="pricePerDay"
                className={`w-full p-2 rounded-md border transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                      : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                  } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
                required
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                className={`w-full p-2 rounded-md border transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                      : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                  } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
                required
              />
            </div>
          </div>

          {/* Availability */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Availability
            </label>
            <select
              name="availability"
              className={`w-full p-2 rounded-md border transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>

          {/* Description */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className={`w-full rounded-md border px-3 py-2 text-sm transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
            ></textarea>
          </div>

          {/* Cover Image & Email */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium mb-1">
                Cover Image URL
              </label>
              <input
                type="text"
                name="coverImage"
                className={`w-full p-2 rounded-md border transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                      : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                  } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium mb-1">
                Owner Email
              </label>
              <input
                type="email"
                name="userEmail"
                className={`w-full p-2 rounded-md border transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                      : "bg-gray-50 border-gray-300 text-gray-800 focus:ring-yellow-500"
                  } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-md font-semibold transition-all duration-300 text-white"
          >
            Submit Vehicle
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddVehicles;
