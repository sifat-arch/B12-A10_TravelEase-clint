import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateVehicles = () => {
  const secureAxiosInstance = useAxiosSecure();
  const navigate = useNavigate();
  const { theme } = useAuth();
  const [vehicle, setVehicle] = useState();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    vehicleName: "",
    pricePerDay: "",
    location: "",
    coverImage: "",
    userEmail: "",
  });

  useEffect(() => {
    secureAxiosInstance
      .get(`/vehicles/${id}`)
      .then((data) => setVehicle(data.data));
  }, [secureAxiosInstance, id]);

  useEffect(() => {
    if (vehicle) {
      setFormData({
        vehicleName: vehicle.vehicleName,
        pricePerDay: vehicle.pricePerDay,
        location: vehicle.location,
        coverImage: vehicle.coverImage,
        userEmail: vehicle.userEmail,
      });
    }
  }, [vehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      vehicleName: e.target.vehicleName.value,
      pricePerDay: e.target.pricePerDay.value,
      location: e.target.location.value,
      coverImage: e.target.coverImage.value,
      userEmail: e.target.userEmail.value,
    };
    secureAxiosInstance
      .put(`/vehicles/${id}`, updateData)
      .then((data) => {
        if (data.data.modifiedCount > 0 || data.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vehicle updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-vehicles");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed!",
          text:
            err.message || "Something went wrong while updating the vehicle.",
        });
      });
  };

  if (!vehicle) {
    return <p className="text-gray-500">Select a vehicle to update.</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`max-w-lg mx-auto mt-12 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 
        ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100 border border-gray-700"
            : "bg-white text-gray-800 border border-gray-200"
        }`}
    >
      <div
        className={`p-8 backdrop-blur-md ${
          theme === "dark" ? "bg-gray-800/70" : "bg-gray-50/80"
        } transition-all duration-500`}
      >
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Update Vehicle <span className="text-yellow-500">Information</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Vehicle Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Vehicle Name
            </label>
            <input
              type="text"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-100 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              required
            />
          </div>

          {/* Price per Day */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Price per Day (৳)
            </label>
            <input
              type="number"
              name="pricePerDay"
              value={formData.pricePerDay}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-100 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-100 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              required
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-100 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              required
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block text-sm font-medium mb-1">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-100 focus:ring-yellow-400"
                    : "bg-gray-100 border-gray-300 text-gray-800 focus:ring-yellow-500"
                } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm hover:shadow-md`}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                    : "bg-yellow-500 text-white hover:bg-yellow-600"
                } shadow-md hover:shadow-lg`}
            >
              Update Vehicle
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default UpdateVehicles;
