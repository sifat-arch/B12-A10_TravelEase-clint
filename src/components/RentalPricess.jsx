import React from "react";
import useAuth from "../hooks/useAuth";
import { div } from "motion/react-client";

const RentalPricess = () => {
  const { theme } = useAuth();

  const details = [
    {
      title: "Choose A Car",
      desc: "View our range of cars, find your perfect car for the coming days.",
      no: "1",
    },
    {
      title: "Come In Contact",
      desc: "Our advisor team is ready to help you with the booking process or any questions.",
      no: "2",
    },
    {
      title: "Enjoy Driving",
      desc: "Receive the key and enjoy your car. We treat all our cars with respect.",
      no: "3",
    },
  ];

  return (
    <div
      className={`mt-10 max-w-[1420px] mx-auto p-20 mb-3  ${
        theme === "dark" ? "bg-black" : "bg-gray-100"
      }`}
    >
      <h1 className="text-yellow-400 font-bold text-center">STEPS</h1>
      <h2 className="text-4xl font-bold text-center mb-7">
        Car Rental <span className="text-yellow-400">Process</span>
      </h2>
      <div
        className={` flex flex-col md:flex-row gap-7 items-center justify-center  transition-colors duration-300 `}
      >
        {/* Main Card Container */}
        {details.map((item, i) => {
          return (
            <div
              key={i}
              className={`relative w-80 h-96 rounded-3xl p-8 flex flex-col justify-start transition-colors duration-300 ${
                theme === "dark" ? "bg-[#212121]" : "bg-white shadow-xl"
              }`}
            >
              {/* Text Content */}
              <h2
                className={`text-3xl font-bold mb-6 mt-10 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {item.title}
              </h2>
              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>

              {/* Bottom Curve & Number Section */}

              <div
                className={`absolute bottom-0 left-0 w-32 h-32 rounded-tr-[50px] flex items-center justify-center transition-colors duration-300 ${
                  theme === "dark" ? "bg-black" : "bg-gray-100"
                }`}
              >
                {/* Circular Badge */}

                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                    theme === "dark" ? "bg-[#212121]" : "bg-white"
                  }`}
                >
                  <span
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.no}
                  </span>
                </div>

                <div
                  className={`absolute -top-[24px] left-0 w-6 h-6 rounded-full transition-shadow duration-300 ${
                    theme === "dark"
                      ? "shadow-[-12px_12px_0_0_#212121]"
                      : "shadow-[-12px_12px_0_0_#ffffff]"
                  } scale-150`}
                ></div>

                <div
                  className={`absolute -right-[24px] bottom-0 w-6 h-6 rounded-full transition-shadow duration-300 ${
                    theme === "dark"
                      ? "shadow-[-12px_12px_0_0_#212121]"
                      : "shadow-[-12px_12px_0_0_#ffffff]"
                  } scale-150`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RentalPricess;
