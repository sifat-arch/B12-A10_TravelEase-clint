import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaYoutube, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <footer className="relative bg-neutral-900 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Background Decoration Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div {...fadeInUp} className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              Tracel<span className="text-yellow-400">Ease</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Elevating your travel experience with comfort and luxury. Get the
              best quality vehicles at the most affordable prices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              All Vehicles
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Bookings
            </a>
          </motion.div>

          {/* Support Section */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Newsletter / Social */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Connected
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
                { icon: <FaFacebook />, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all shadow-lg text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            © {currentYear} Premium Rental Car Ltd. All rights reserved.
          </motion.p>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 p-3 bg-gray-800 rounded-full hover:bg-primary transition-all group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
