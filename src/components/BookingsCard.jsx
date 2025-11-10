// import React from "react";

// const BookingsCard = ({ booking }) => {
//   return (
//     <div className="flex gap-10 shadow-md rounded-xl max-w-[1280px] mx-auto mt-10">
//       <div className="w-1/3">
//         <img className="h-70" src={booking.coverImage} alt="" />
//       </div>

//       <div className=" w-2/3 p-3">
//         <div>
//           <div className="flex justify-between">
//             <div>
//               <h1 className="text-xl font-bold">{booking.vehicleName}</h1>
//               <p className="text-muted text-lg font-semibold">
//                 Category: <span>{booking.category}</span>
//               </p>
//             </div>

//             <div>
//               <p className="text-muted">
//                 <span className="text-3xl text-orange-400 font-bold">
//                   {booking.pricePerDay}
//                 </span>{" "}
//                 / Day
//               </p>
//               <p className="text-xl font-semibold">Starting Form</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#f2f7f6] mt-5 p-5 flex">
//           <div className="w-1/3 space-y-1">
//             <p className="text-muted">AutoMatic</p>
//             <p className="text-muted">2025</p>
//             <p className="text-muted">18km</p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-muted">Left</p>
//             <p className="text-muted">4 Persons</p>
//             <p className="text-muted">{booking.category}</p>
//           </div>
//         </div>

//         <div className="flex justify-between mt-5">
//           <div className="flex gap-2 items-center">
//             <img
//               className="w-12 rounded-full"
//               src={booking.profileImg}
//               alt=""
//             />
//             <p className="text-muted">{booking.bookedBy}</p>
//           </div>

//           <p className="text-xl font-bold">{booking.location}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingsCard;
import React from "react";
import useAuth from "../hooks/useAuth";

const BookingsCard = ({ booking }) => {
  const { theme } = useAuth(); // context থেকে theme নিলে dark/light toggle কাজ করবে

  return (
    <div
      className={`flex gap-10 shadow-md rounded-xl max-w-[1280px] mx-auto mt-10 border transition-colors duration-300
      ${
        theme === "light"
          ? "bg-white border-gray-200 text-gray-900"
          : "bg-gray-800 border-gray-700 text-gray-100"
      }`}
    >
      <div className="w-1/3">
        <img
          className="h-70 w-full object-cover rounded-l-xl"
          src={booking.coverImage}
          alt=""
        />
      </div>

      <div className="w-2/3 p-3">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">{booking.vehicleName}</h1>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              } text-lg font-semibold`}
            >
              Category: <span>{booking.category}</span>
            </p>
          </div>

          <div>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-200"
              } text-3xl text-orange-400 font-bold`}
            >
              {booking.pricePerDay}
            </p>
            <p className="text-xl font-semibold">Starting From</p>
          </div>
        </div>

        <div
          className={`mt-5 p-5 flex rounded-lg transition-colors duration-300
          ${theme === "light" ? "bg-[#f2f7f6]" : "bg-gray-700"}`}
        >
          <div className="w-1/3 space-y-1">
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              AutoMatic
            </p>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              2025
            </p>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              18km
            </p>
          </div>
          <div className="space-y-1">
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Left
            </p>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              4 Persons
            </p>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {booking.category}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="flex gap-2 items-center">
            <img
              className="w-12 rounded-full"
              src={booking.profileImg}
              alt=""
            />
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {booking.bookedBy}
            </p>
          </div>

          <p className="text-xl font-bold">{booking.location}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingsCard;
