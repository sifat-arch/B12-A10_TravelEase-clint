import React, { useEffect, useState } from "react";

import BookingsCard from "../components/BookingsCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";

const MyBooking = () => {
  const secureAxiosInstance = useAxiosSecure();
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    secureAxiosInstance
      .get(`/bookings?email=${user.email}`)
      .then((data) => setBookings(data?.data));
  }, [secureAxiosInstance, user]);

  const sortedBookings = bookings.sort((a, b) => b.pricePerDay - a.pricePerDay);
  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {sortedBookings.map((booking) => (
        <BookingsCard key={booking._id} booking={booking} />
      ))}
    </motion.div>
  );
};

export default MyBooking;
