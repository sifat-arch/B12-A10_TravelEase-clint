import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"; // ধরে নিচ্ছি তুমি useAuth বানিয়েছো
import Swal from "sweetalert2"; // npm i sweetalert2
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router";

const MyVehicles = () => {
  // const { user } = useAuth();
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get(`/vehicles?email=${user.email}`)
      .then((data) => setVehicles(data.data));
  }, [axiosInstance, user]);

  // Delete function
  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won’t be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:3000/vehicles/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             Swal.fire(
  //               "Deleted!",
  //               "Your vehicle has been deleted.",
  //               "success"
  //             );
  //             setVehicles(vehicles.filter((v) => v._id !== id));
  //           }
  //         });
  //     }
  //   });
  // };

  //Update redirect
  const handleUpdate = (id) => {
    navigate(`/update-vehicles/${id}`);
  };

  // View details redirect
  const handleViewDetails = (id) => {
    navigate(`/view-details/${id}`);
  };

  console.log(vehicles);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">My Vehicles</h2>

      {vehicles.length === 0 ? (
        <p className="text-center text-gray-500">No vehicles added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Vehicle Name</th>
                <th>Price/Day</th>
                <th>Location</th>
                <th>email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={vehicle._id} className="border-b">
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
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleUpdate(vehicle._id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Update
                    </button>
                    <button
                      // onClick={() => handleDelete(vehicle._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
