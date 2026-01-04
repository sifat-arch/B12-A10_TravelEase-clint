import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  UserCheck,
  Zap,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const Blog = () => {
  // আপনার useAuth থেকে আসা theme ব্যবহার করা হয়েছে
  const { theme } = useAuth();
  const isDark = theme === "dark";

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 mt-15 ${
        isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800"
      }`}
    >
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            First Time Renting a Car? <br />
            <span className="text-yellow-500 text-3xl md:text-5xl">
              Everything You Need to Know
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Explore our comprehensive guide to ensure a safe, affordable, and
            hassle-free car rental experience for your next journey.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1: Documents */}
          <motion.div
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl shadow-sm border transition-all ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-100"
            }`}
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <FileText />
            </div>
            <h3 className="text-2xl font-bold mb-4">Required Documents</h3>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-center gap-2">
                <ChevronRight size={16} className="text-yellow-500" />
                Valid Original Driving License
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={16} className="text-yellow-500" />
                National ID Card (NID) or Passport Copy
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={16} className="text-yellow-500" />
                Guarantor or Emergency Contact Info
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={16} className="text-yellow-500" />
                Verified Utility Bill (Required by some providers)
              </li>
            </ul>
          </motion.div>

          {/* Section 2: Pricing Logic */}
          <motion.div
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl shadow-sm border transition-all ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-100"
            }`}
          >
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Daily vs Weekly: Which is Better?
            </h3>
            <p className="mb-4 opacity-80 leading-relaxed">
              If your trip exceeds 3 days, opting for a **Weekly Plan** is
              usually more cost-effective. While daily rates offer flexibility,
              weekly rentals often come with a **20-30% discount**.
            </p>
            <div className="flex gap-2 items-center text-yellow-500 font-bold text-sm uppercase">
              <Clock size={16} />
              Pro Tip: Book in advance for lower rates
            </div>
          </motion.div>

          {/* Section 3: Driver vs Self Drive */}
          <motion.div
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl shadow-sm border transition-all md:col-span-2 ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-100"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <UserCheck />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Self-Drive vs. With Driver
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    className={`p-5 rounded-2xl ${
                      isDark ? "bg-slate-900/50" : "bg-slate-50"
                    }`}
                  >
                    <h4 className="font-bold mb-2 text-yellow-500 flex items-center gap-2">
                      <MapPin size={18} /> Self Drive
                    </h4>
                    <p className="text-sm opacity-80">
                      Perfect for privacy and freedom. You control the pace of
                      your journey, but you are responsible for traffic rules
                      and maintenance.
                    </p>
                  </div>
                  <div
                    className={`p-5 rounded-2xl ${
                      isDark ? "bg-slate-900/50" : "bg-slate-50"
                    }`}
                  >
                    <h4 className="font-bold mb-2 text-blue-500 flex items-center gap-2">
                      <ShieldCheck size={18} /> With Driver
                    </h4>
                    <p className="text-sm opacity-80">
                      Sit back and relax. Professional drivers handle the
                      traffic and navigation, letting you enjoy the scenery
                      without exhaustion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h3>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
            Always inspect the car engine and body for any damages before
            signing the agreement. Safety first!
          </p>
          <button className="px-10 py-4 bg-white text-orange-600 font-extrabold rounded-full hover:bg-slate-100 transition-all active:scale-95 shadow-lg">
            Book Your Ride Now
          </button>
        </motion.div>
      </main>

      <footer
        className={`py-12 border-t text-center opacity-60 text-sm ${
          isDark ? "border-slate-800" : "border-slate-200"
        }`}
      >
        &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
      </footer>
    </div>
  );
};

export default Blog;
