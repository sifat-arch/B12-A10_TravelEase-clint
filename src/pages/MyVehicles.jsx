import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"; // context থেকে theme এবং user
import Swal from "sweetalert2"; // npm i sweetalert2
import { useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const { user, theme } = useAuth(); // theme নেওয়া হলো
  const secureAxiosInstance = useAxiosSecure();

  useEffect(() => {
    secureAxiosInstance
      .get(`/vehicles?email=${user.email}`)
      .then((data) => setVehicles(data.data));
  }, [secureAxiosInstance, user]);

  //Delete function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxiosInstance.delete(`/vehicles/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your vehicle has been deleted.", "success");
            const restData = vehicles.filter((vehicle) => vehicle._id !== id);
            setVehicles(restData);
          }
        });
      }
    });
  };

  //Update redirect
  const handleUpdate = (id) => {
    navigate(`/update-vehicles/${id}`);
  };

  // View details redirect
  const handleViewDetails = (id) => {
    navigate(`/view-details/${id}`);
  };

  const sortedVehicles = vehicles.sort((a, b) => b.pricePerDay - a.pricePerDay);

  return (
    <div
      className={`max-w-6xl mx-auto mt-10 p-4 transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-900 text-gray-100"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">My Vehicles</h2>

      {vehicles.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No vehicles added yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table
            className={`table w-full border transition-colors duration-300 ${
              theme === "light" ? "border-gray-200" : "border-gray-700"
            }`}
          >
            <thead
              className={`${
                theme === "light"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-gray-800 text-gray-100"
              }`}
            >
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Vehicle Name</th>
                <th>Price/Day</th>
                <th>Location</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedVehicles.map((vehicle, index) => (
                <tr
                  key={vehicle._id}
                  className={`border-b transition-colors duration-300 ${
                    theme === "light" ? "border-gray-200" : "border-gray-700"
                  }`}
                >
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={vehicle.coverImage}
                      alt={vehicle.vehicleName}
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td>{vehicle.vehicleName}</td>
                  <td>{vehicle.pricePerDay}৳</td>
                  <td>{vehicle.location}</td>
                  <td>{vehicle.userEmail}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => handleViewDetails(vehicle._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleUpdate(vehicle._id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors duration-300"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(vehicle._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyVehicles;
