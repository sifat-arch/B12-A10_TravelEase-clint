import React from "react";

import useAxiosSecure from "../hooks/useAxiosSecure";

const AddVehicles = () => {
  const secureAxiosInstance = useAxiosSecure();
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
      createdAt: new Date().toISOString(), // auto add date
    };

    secureAxiosInstance.post("/vehicles", newVehicleInfo).then((data) => {
      console.log(data.data);
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
          Add New Vehicle
        </h2>

        {/* Vehicle Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Vehicle Name</label>
          <input
            type="text"
            name="vehicleName"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Owner */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Owner</label>
          <input
            type="text"
            name="owner"
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            className="w-full border p-2 rounded-md"
            required
          >
            <option value="">Select Category</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Electric">Electric</option>
            <option value="Van">Van</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Price per Day ($)
          </label>
          <input
            type="text"
            name="pricePerDay"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Availability</label>
          <select name="availability" className="w-full border p-2 rounded-md">
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded-md"
            rows="3"
          ></textarea>
        </div>

        {/* Cover Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Owner Email</label>
          <input
            type="email"
            name="userEmail"
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Categories */}
        {/* <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Tag / Category
          </label>
          <input
            type="text"
            name="categories"
            className="w-full border p-2 rounded-md"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Submit Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicles;
