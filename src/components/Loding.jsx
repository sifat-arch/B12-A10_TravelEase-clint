import React from "react";
import { motion } from "framer-motion";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="w-16 h-16 border-4 border-t-transparent border-[#7c2fff] rounded-full shadow-[0_0_20px_#7c2fff,0_0_40px_#00e0ff]"
      />
      <p className="mt-4 text-slate-200 font-medium text-sm tracking-wide">
        {message}
      </p>
    </div>
  );
}
