import React, { useEffect, useState } from "react";

import BookingsCard from "../components/BookingsCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBooking = () => {
  const secureAxiosInstance = useAxiosSecure();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    secureAxiosInstance
      .get("/bookings")
      .then((data) => setBookings(data?.data));
  }, [secureAxiosInstance]);

  const sortedBookings = bookings.sort((a, b) => b.pricePerDay - a.pricePerDay);
  return (
    <div className="space-y-5">
      {sortedBookings.map((booking) => (
        <BookingsCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default MyBooking;
