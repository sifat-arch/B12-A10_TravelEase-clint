import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import BookingsCard from "../components/BookingsCard";

const MyBooking = () => {
  const axiosInstance = useAxios();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axiosInstance.get("/bookings").then((data) => setBookings(data.data));
  }, [axiosInstance]);

  console.log(bookings);
  return (
    <div className="space-y-5">
      {bookings.map((booking) => (
        <BookingsCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default MyBooking;
