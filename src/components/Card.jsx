import React from "react";
import { useNavigate } from "react-router";

const Card = ({ vehicles }) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    console.log("click");
    navigate(`/view-details/${vehicles._id}`);
  };
  return (
    <div className=" rounded-2xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={vehicles.coverImage}
        alt={vehicles.vehicleName}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{vehicles.vehicleName}</div>
        <p className="text-gray-700 text-base mb-1">Owner: {vehicles.owner}</p>

        <p className="text-gray-700 text-base mb-1">
          Price per day: ${vehicles.pricePerDay}
        </p>

        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full text-center`}
        >
          {vehicles.availability}
        </span>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <button
          className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          onClick={handleDetails}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
