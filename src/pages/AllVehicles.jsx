import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "../components/Card";

const AllVehicles = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const asioxInstnce = useAxios();
  useEffect(() => {
    asioxInstnce.get("/vehicles").then((data) => {
      setAllVehicles(data.data);
    });
  }, [asioxInstnce]);
  return (
    <div>
      <h1>All Vehicles</h1>
      <div className="grid grid-cols-4 gap-6">
        {allVehicles.map((vehicles) => (
          <Card key={vehicles._id} vehicles={vehicles} />
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
