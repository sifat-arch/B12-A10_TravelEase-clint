import React from "react";

const BookingsCard = ({ booking }) => {
  return (
    <div className="flex gap-10 shadow-md rounded-xl max-w-[1280px] mx-auto mt-10">
      <div className="w-1/3">
        <img className="h-70" src={booking.coverImage} alt="" />
      </div>

      <div className=" w-2/3 p-3">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">{booking.vehicleName}</h1>
              <p className="text-muted text-lg font-semibold">
                Category: <span>{booking.category}</span>
              </p>
            </div>

            <div>
              <p className="text-muted">
                <span className="text-3xl text-orange-400 font-bold">
                  {booking.pricePerDay}
                </span>{" "}
                / Day
              </p>
              <p className="text-xl font-semibold">Starting Form</p>
            </div>
          </div>
        </div>

        <div className="bg-[#f2f7f6] mt-5 p-5 flex">
          <div className="w-1/3 space-y-1">
            <p className="text-muted">AutoMatic</p>
            <p className="text-muted">2025</p>
            <p className="text-muted">18km</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted">Left</p>
            <p className="text-muted">4 Persons</p>
            <p className="text-muted">{booking.category}</p>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="flex gap-2 items-center">
            <img
              className="w-12 rounded-full"
              src={booking.profileImg}
              alt=""
            />
            <p className="text-muted">{booking.bookedBy}</p>
          </div>

          <p className="text-xl font-bold">{booking.location}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingsCard;
