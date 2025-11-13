import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "../components/Card";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loding";
import { motion } from "framer-motion";

const AllVehicles = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const { loading, setLoading } = useAuth();
  const asioxInstnce = useAxios();
  useEffect(() => {
    asioxInstnce.get("/vehicles").then((data) => {
      setAllVehicles(data.data);
      setLoading(false);
    });
  }, [asioxInstnce, setLoading]);
  const sortedVehicles = allVehicles.sort(
    (a, b) => b.pricePerDay - a.pricePerDay
  );
  if (loading) {
    return <Loading />;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-center my-10 text-5xl font-bold ">
        All <span className="text-yellow-500">Vehicles</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-5 lg:p-8">
        {sortedVehicles.map((vehicles) => (
          <Card key={vehicles._id} vehicles={vehicles} />
        ))}
      </div>
    </motion.div>
  );
};

export default AllVehicles;
