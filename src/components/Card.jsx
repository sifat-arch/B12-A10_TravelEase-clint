import { useNavigate } from "react-router";

import useAuth from "../hooks/useAuth";

const Card = ({ vehicles }) => {
  const navigate = useNavigate();
  const { theme } = useAuth();

  const handleDetails = () => {
    navigate(`/view-details/${vehicles._id}`);
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg 
                  ${
                    theme === "light"
                      ? "bg-white text-gray-900 border-gray-200"
                      : "bg-gray-800 text-gray-100 border-gray-700"
                  } 
                  border transition-colors duration-300`}
    >
      <img
        className="w-full h-48 object-cover"
        src={vehicles.coverImage}
        alt={vehicles.vehicleName}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{vehicles.vehicleName}</div>
        <p
          className={`${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          } text-base mb-1`}
        >
          Owner: {vehicles.owner}
        </p>
        <p
          className={`${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          } text-base mb-1`}
        >
          Price per day: ${vehicles.pricePerDay}
        </p>

        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full text-center ${
            vehicles.availability === "Available"
              ? theme === "light"
                ? "bg-green-100 text-green-700"
                : "bg-green-700 text-green-100"
              : theme === "light"
              ? "bg-red-100 text-red-700"
              : "bg-red-700 text-red-100"
          }`}
        >
          {vehicles.availability}
        </span>
      </div>

      <div className="px-6 py-4">
        <button
          onClick={handleDetails}
          className={`w-full px-4 py-2 rounded-lg text-white ${
            theme === "light"
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-gray-700 hover:bg-gray-600"
          } transition-colors duration-300`}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
