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


  return (
    <div className="space-y-5">
      {bookings.map((booking) => (
        <BookingsCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default MyBooking;
