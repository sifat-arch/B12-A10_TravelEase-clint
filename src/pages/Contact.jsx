import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const Contact = () => {
  const { theme } = useAuth();
  const isDark = theme === "dark";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 py-12 px-6 mt-15 ${
        isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Get in <span className="text-yellow-500">Touch</span>
          </h1>
          <p
            className={`max-w-xl mx-auto text-lg ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Have questions about our rentals or need assistance? Our team is
            here to help you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <ContactInfoCard
              isDark={isDark}
              icon={<Phone className="text-yellow-500" />}
              title="Call Us"
              detail="+880 1712-345678"
            />
            <ContactInfoCard
              isDark={isDark}
              icon={<Mail className="text-yellow-500" />}
              title="Email Support"
              detail="support@travelease.com"
            />
            <ContactInfoCard
              isDark={isDark}
              icon={<MapPin className="text-yellow-500" />}
              title="Main Office"
              detail="123 Road, Banani, Dhaka, Bangladesh"
            />

            {/* Social Links */}
            <div
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-100 shadow-sm"
              }`}
            >
              <h4 className="font-bold mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <SocialIcon icon={<Facebook size={20} />} />
                <SocialIcon icon={<Twitter size={20} />} />
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<Linkedin size={20} />} />
              </div>
            </div>
          </motion.div>

          {/* 2. Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:col-span-2 p-8 md:p-12 rounded-[2.5rem] border ${
              isDark
                ? "bg-slate-800 border-slate-700 shadow-2xl"
                : "bg-white border-slate-100 shadow-xl"
            }`}
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                    isDark
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-50 border-transparent"
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                    isDark
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-50 border-transparent"
                  }`}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold opacity-70">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className={`w-full px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                    isDark
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-50 border-transparent"
                  }`}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold opacity-70">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className={`w-full px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${
                    isDark
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-50 border-transparent"
                  }`}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-max px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-extrabold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-500/20"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const ContactInfoCard = ({ isDark, icon, title, detail }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className={`p-6 rounded-3xl border flex items-center gap-5 transition-all ${
      isDark
        ? "bg-slate-800 border-slate-700 hover:bg-slate-750"
        : "bg-white border-slate-100 shadow-sm hover:shadow-md"
    }`}
  >
    <div
      className={`p-4 rounded-2xl ${isDark ? "bg-slate-900" : "bg-yellow-50"}`}
    >
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-wider opacity-50">
        {title}
      </p>
      <p className="text-lg font-bold">{detail}</p>
    </div>
  </motion.div>
);

const SocialIcon = ({ icon }) => (
  <motion.button
    whileHover={{ y: -5, backgroundColor: "#EAB308", color: "#fff" }}
    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 transition-all"
  >
    {icon}
  </motion.button>
);

export default Contact;
