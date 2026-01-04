import React from "react";
import { motion } from "framer-motion";
import { Users, Gauge, MapPin, Star, Calendar, Zap } from "lucide-react";
import { useNavigate } from "react-router";

const Card = ({ vehicles }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/view-details/${vehicles._id}`);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-sm overflow-hidden rounded-[40px] bg-[#1a1a1a] border border-white/5 shadow-2xl group"
      >
        {/* ইমেজ সেকশন */}
        <div className="relative h-60 w-full overflow-hidden p-2">
          <motion.img
            className="h-full w-full object-cover rounded-[35px]"
            src={vehicles.coverImage}
            alt={vehicles.vehicleName}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
          {/* স্ট্যাটাস ব্যাজ (Available/Rented) */}
          <div className="absolute top-6 left-6">
            <span
              className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                vehicles.availability === "Available"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {vehicles.availability}
            </span>
          </div>
          {/* রেটিং ব্যাজ */}
          <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm border border-white/10">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            {vehicles.rating}
          </div>
        </div>

        {/* কন্টেন্ট সেকশন */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                {vehicles.vehicleName}
              </h2>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <MapPin size={14} />
                <span>{vehicles.location}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-orange-400">
                ${vehicles.pricePerDay}
              </span>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-tighter">
                Per Day
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm line-clamp-2 mb-6">
            {vehicles.shortDescription}
          </p>

          {/* মেটা ইনফো গ্রিড */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-white/5 rounded-xl">
                <Users size={16} className="text-orange-400" />
              </div>
              <span className="text-sm">{vehicles.seats} Seats</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-white/5 rounded-xl">
                <Gauge size={16} className="text-orange-400" />
              </div>
              <span className="text-sm">{vehicles.transmission}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-white/5 rounded-xl">
                <Zap size={16} className="text-orange-400" />
              </div>
              <span className="text-sm">{vehicles.fuelType}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-white/5 rounded-xl">
                <Calendar size={16} className="text-orange-400" />
              </div>
              <span className="text-sm">
                {new Date(vehicles.createdAt).getFullYear()}
              </span>
            </div>
          </div>

          {/* View Details বাটন */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#f2b65a] hover:bg-[#e0a24a] text-black font-bold py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
            onClick={handleDetails}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
