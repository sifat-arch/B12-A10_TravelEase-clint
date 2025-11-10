// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// import useAuth from "../hooks/useAuth";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// const ViewDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const secureAxiosInstance = useAxiosSecure();
//   const [vehicle, setVehicle] = useState({});

//   useEffect(() => {
//     secureAxiosInstance
//       .get(`/vehicles/${id}`)
//       .then((data) => setVehicle(data.data));
//   }, [secureAxiosInstance, id]);

//   const handleBook = () => {
//     const newBookingData = {
//       vehicleId: vehicle._id,
//       vehicleName: vehicle.vehicleName,
//       category: vehicle.category,
//       profileImg: user.photoURL,
//       userName: user.displayName,
//       pricePerDay: vehicle.pricePerDay,
//       ownerEmail: vehicle.userEmail,
//       coverImage: vehicle.coverImage,
//       location: vehicle.location,
//       bookedBy: user.email,
//       bookingDate: new Date().toISOString(),
//       status: "Pending",
//     };

//     secureAxiosInstance.post("/bookings", newBookingData).then((data) => {
//       console.log(data);
//       if (data) {
//         alert("booking successful");
//       }
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10 border">
//       <img
//         src={vehicle.coverImage}
//         alt={vehicle.vehicleName}
//         className="w-full h-56 object-cover"
//       />

//       <div className="p-5">
//         <h2 className="text-2xl font-bold mb-2">{vehicle.vehicleName}</h2>
//         <p className="text-gray-600 mb-4">{vehicle.description}</p>

//         <div className="space-y-2 text-gray-700">
//           <p>
//             <span className="font-semibold">Owner:</span> {vehicle.owner}
//           </p>
//           <p>
//             <span className="font-semibold">Category:</span> {vehicle.category}
//           </p>
//           <p>
//             <span className="font-semibold">Price/Day:</span> ৳
//             {vehicle.pricePerDay}
//           </p>
//           <p>
//             <span className="font-semibold">Location:</span> {vehicle.location}
//           </p>
//           <p>
//             <span className="font-semibold">Availability:</span>{" "}
//             <span
//               className={`${
//                 vehicle.availability === "Available"
//                   ? "text-green-600 font-semibold"
//                   : "text-red-600 font-semibold"
//               }`}
//             >
//               {vehicle.availability}
//             </span>
//           </p>
//           <p>
//             <span className="font-semibold">Contact:</span> {vehicle.userEmail}
//           </p>
//           <p>
//             <span className="font-semibold">Listed on:</span>{" "}
//             {new Date(vehicle.createdAt).toLocaleDateString()}
//           </p>
//         </div>

//         <button
//           className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           onClick={handleBook}
//         >
//           Book Now
//         </button>
//         <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//           request now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ViewDetails = () => {
  const { id } = useParams();
  const { user, theme } = useAuth(); // theme নেওয়া হলো
  const secureAxiosInstance = useAxiosSecure();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    secureAxiosInstance
      .get(`/vehicles/${id}`)
      .then((data) => setVehicle(data.data));
  }, [secureAxiosInstance, id]);

  const handleBook = () => {
    const newBookingData = {
      vehicleId: vehicle._id,
      vehicleName: vehicle.vehicleName,
      category: vehicle.category,
      profileImg: user.photoURL,
      userName: user.displayName,
      pricePerDay: vehicle.pricePerDay,
      ownerEmail: vehicle.userEmail,
      coverImage: vehicle.coverImage,
      location: vehicle.location,
      bookedBy: user.email,
      bookingDate: new Date().toISOString(),
      status: "Pending",
    };

    secureAxiosInstance.post("/bookings", newBookingData).then((data) => {
      if (data) {
        alert("Booking successful");
      }
    });
  };

  return (
    <div
      className={`max-w-md mx-auto rounded-2xl shadow-lg overflow-hidden mt-10 border transition-colors duration-300
      ${
        theme === "light"
          ? "bg-white text-gray-900 border-gray-200"
          : "bg-gray-800 text-gray-100 border-gray-700"
      }`}
    >
      <img
        src={vehicle.coverImage}
        alt={vehicle.vehicleName}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{vehicle.vehicleName}</h2>
        <p
          className={`${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          } mb-4`}
        >
          {vehicle.description}
        </p>

        <div
          className={`space-y-2 ${
            theme === "light" ? "text-gray-700" : "text-gray-200"
          }`}
        >
          <p>
            <span className="font-semibold">Owner:</span> {vehicle.owner}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {vehicle.category}
          </p>
          <p>
            <span className="font-semibold">Price/Day:</span> ৳
            {vehicle.pricePerDay}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {vehicle.location}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            <span
              className={`${
                vehicle.availability === "Available"
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }`}
            >
              {vehicle.availability}
            </span>
          </p>
          <p>
            <span className="font-semibold">Contact:</span> {vehicle.userEmail}
          </p>
          <p>
            <span className="font-semibold">Listed on:</span>{" "}
            {vehicle.createdAt
              ? new Date(vehicle.createdAt).toLocaleDateString()
              : ""}
          </p>
        </div>

        <button
          className={`mt-5 w-full py-2 rounded-lg transition
          ${
            theme === "light"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-700 text-white hover:bg-blue-600"
          }`}
          onClick={handleBook}
        >
          Book Now
        </button>
        <button
          className={`mt-3 w-full py-2 rounded-lg transition
          ${
            theme === "light"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-700 text-white hover:bg-blue-600"
          }`}
        >
          Request Now
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
