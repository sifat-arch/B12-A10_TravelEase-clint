import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router";

const UpdateVehicles = () => {
  const axiosInstance = useAxios();
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
    axiosInstance.get(`/vehicles/${id}`).then((data) => setVehicle(data.data));
  }, [axiosInstance, id]);

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
    axiosInstance
      .put(`/vehicles/${id}`, updateData)
      .then((data) => console.log(data));
  };

  if (!vehicle) {
    return <p className="text-gray-500">Select a vehicle to update.</p>;
  }
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Update Vehicle Information
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Vehicle Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Name</label>
          <input
            type="text"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Price per Day */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Price/Day (৳)
          </label>
          <input
            type="number"
            name="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Update Vehicle
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateVehicles;
