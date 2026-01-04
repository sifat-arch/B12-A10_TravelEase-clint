import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import img1 from "../assets/deail1.png";
import img2 from "../assets/details2.png";

import useAxios from "../hooks/useAxios";
import {
  Calendar,
  CheckCircle2,
  MessageCircle,
  Settings,
  ShieldCheck,
  Users,
  Wind,
  FileText,
} from "lucide-react";

const ViewDetails = () => {
  const { id } = useParams();
  const { user, theme } = useAuth();
  const axis = useAxios();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    axis.get(`/vehicles/${id}`).then((data) => setVehicle(data.data));
  }, [axis, id]);

  const isDark = theme === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-[#121212] text-gray-300" : "bg-gray-50 text-gray-800"
      } min-h-screen pb-20 transition-colors duration-300`}
    >
      <div
        className="relative h-[400px] sm:h-[500px] md:h-[650px] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${vehicle.coverImage})` }}
      >
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-black/50" : "bg-black/30"
          }`}
        ></div>
        <div className="max-w-[1420px] mx-auto w-full px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter drop-shadow-lg">
            {vehicle.vehicleName}
          </h1>
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto px-6 relative mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 md:py-20">
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              General Information
            </h2>
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-600"
              } leading-relaxed text-lg mb-8`}
            >
              {vehicle.description ||
                "Experience top-notch performance and comfort with our premium rental service."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "24/7 Roadside Assistance",
                "Free Cancellation & Return",
                "Rent Now Pay When You Arrive",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#f2b65a]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3
                className={`text-xl font-semibold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Image Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <img
                  src={img1}
                  alt="Interior"
                  className="rounded-3xl h-64 w-full object-cover shadow-lg hover:scale-[1.02] transition-transform"
                />
                <img
                  src={img2}
                  alt="Exterior"
                  className="rounded-3xl h-64 w-full object-cover shadow-lg hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>

            {/* Rental Conditions - Designed */}
            <div
              className={`mt-16 p-8 rounded-[30px] border ${
                isDark
                  ? "bg-[#1a1a1a] border-white/5"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#f2b65a]/20 rounded-xl">
                  <FileText className="text-[#f2b65a]" size={24} />
                </div>
                <h2
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Rental Conditions
                </h2>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Valid driving license is mandatory for all renters.",
                  "Minimum rental duration is 1 day.",
                  "Vehicle must be returned in the same condition.",
                  "Fuel cost is not included unless stated.",
                  "Any traffic violation is the renter's responsibility.",
                  "Late return may result in additional charges.",
                  "Cancellation must be 24h before pickup.",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <span className="text-[#f2b65a] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#f2b65a] shrink-0" />
                    <span
                      className={`${
                        isDark ? "text-gray-400" : "text-gray-600"
                      } group-hover:translate-x-1 transition-transform`}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[400px] relative">
            <div className="md:absolute md:-top-32 right-0 w-full z-20">
              <div
                className={`${
                  isDark
                    ? "bg-[#1a1a1a] border-white/5 shadow-2xl"
                    : "bg-white border-gray-200 shadow-xl"
                } rounded-[40px] overflow-hidden border`}
              >
                <div className="bg-[#f2b65a] py-10 text-center">
                  <h2 className="text-5xl font-black text-black">
                    ${vehicle.pricePerDay}
                    <span className="text-base font-bold opacity-70 block mt-1">
                      / rent per day
                    </span>
                  </h2>
                </div>

                <div className="p-8 space-y-5">
                  <InfoRow
                    isDark={isDark}
                    icon={<Users size={20} />}
                    label="Passengers"
                    value={vehicle.seats}
                  />
                  <InfoRow
                    isDark={isDark}
                    icon={<Settings size={20} />}
                    label="Transmission"
                    value={vehicle.transmission}
                  />
                  <InfoRow
                    isDark={isDark}
                    icon={<Wind size={20} />}
                    label="Air Condition"
                    value="Yes"
                  />
                  <InfoRow
                    isDark={isDark}
                    icon={<ShieldCheck size={20} />}
                    label="Fuel Type"
                    value={vehicle.fuelType}
                  />
                  <InfoRow
                    isDark={isDark}
                    icon={<Calendar size={20} />}
                    label="Year"
                    value={new Date(vehicle.createdAt).getFullYear()}
                  />
                </div>

                <div className="p-8 pt-0">
                  <div
                    className={`flex items-center w-full rounded-full overflow-hidden h-16 ${
                      isDark
                        ? "bg-[#222]"
                        : "bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <button className="flex-1 bg-[#f2b65a] text-black font-black h-full hover:bg-[#ffc875] transition-all text-sm uppercase tracking-widest">
                      Rent Now
                    </button>

                    <div
                      className={`px-3 h-full flex items-center justify-center italic font-serif ${
                        isDark
                          ? "bg-[#1a1a1a] text-gray-500"
                          : "bg-white text-gray-400 border-x border-gray-200"
                      }`}
                    >
                      &
                    </div>

                    <button className="flex-1 bg-[#25D366] text-white font-black h-full hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
                      <MessageCircle size={20} fill="currentColor" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value, isDark }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-4">
      <div
        className={`p-2.5 rounded-2xl transition-all ${
          isDark
            ? "bg-white/5 text-gray-500 group-hover:text-[#f2b65a] group-hover:bg-[#f2b65a]/10"
            : "bg-gray-100 text-gray-400 group-hover:text-black group-hover:bg-gray-200"
        }`}
      >
        {icon}
      </div>
      <span
        className={`${isDark ? "text-gray-400" : "text-gray-500"} font-medium`}
      >
        {label}
      </span>
    </div>
    <span
      className={`${isDark ? "text-white" : "text-gray-900"} font-bold text-lg`}
    >
      {value}
    </span>
  </div>
);

export default ViewDetails;
