import React from "react";
import { useNavigate } from "react-router";
import errorImg from "../assets/error.jpg";
import { IoArrowBackCircle } from "react-icons/io5";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${errorImg})` }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}

      <button
        onClick={() => navigate("/")}
        className="bg-black hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 absolute top-10 right-17 flex items-center gap-2"
      >
        <span>
          <IoArrowBackCircle size={50} />
        </span>
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
