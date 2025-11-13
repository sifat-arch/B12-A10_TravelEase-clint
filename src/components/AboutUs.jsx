import React from "react";
import carRant from "../assets/car-rent.png";
import rapair from "../assets/maintenance.png";
import location from "../assets/destination.png";

const AboutUs = () => {
  return (
    <div className="relative bg-black text-white py-20 px-10 md:px-20 mt-10 rounded-2xl">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10 ">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-yellow-500 font-semibold text-lg">About Our</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Premium <br /> Rental Car
          </h1>
          <p className="text-gray-300 leading-relaxed">
            At Premium Rental Car, we redefine the way you experience travel.
            Our mission is simple — to deliver luxury, comfort, and reliability
            in every ride. Whether you’re heading to a business meeting, a
            weekend getaway, or a special event, we provide top-class vehicles
            that match your style and purpose. With a curated collection of
            luxury sedans, sports cars, and SUVs, we ensure that every journey
            feels exclusive. Our fleet is maintained to the highest standards,
            offering both safety and sophistication. More than just car rentals,
            we focus on personalized service, transparent pricing, and 24/7
            customer support — so you can drive with confidence and peace of
            mind. Choose Premium Rental Car — where every drive is a premium
            experienc
          </p>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            VIEW OUR WORK
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/3">
          <h3 className="text-yellow-500 font-semibold text-lg mb-6">
            What We Do
          </h3>

          <div className="space-y-6">
            {/* 1 */}
            <div className="flex items-start gap-4">
              <img src={carRant} alt="icon" className="w-8 h-8" />
              <div>
                <h4 className="font-semibold text-lg">Premium Car Rentals</h4>
                <p className="text-gray-300 text-sm ">
                  Experience luxury on every ride. From elegant sedans to
                  high-performance sports cars, we offer a wide range of premium
                  vehicles that suit your lifestyle and needs.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-4">
              <img src={rapair} alt="icon" className="w-8 h-8" />
              <div>
                <h4 className="font-semibold text-lg">
                  Professional Maintenance & Safety
                </h4>
                <p className="text-gray-300 text-sm">
                  Your safety is our priority. Every car in our fleet is
                  regularly inspected, maintained, and sanitized to ensure a
                  smooth and secure driving experience.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-4">
              <img src={location} alt="icon" className="w-8 h-8" />
              <div>
                <h4 className="font-semibold text-lg">
                  Custom Travel Solutions
                </h4>
                <p className="text-gray-300 text-sm">
                  We offer tailored rental plans — whether it’s hourly, daily,
                  or long-term. Choose flexible packages designed for business
                  trips, events, or vacations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
