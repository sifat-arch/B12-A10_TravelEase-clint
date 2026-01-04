import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "../components/Card";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loding";
import { motion } from "framer-motion";
import { Search, ArrowUpDown } from "lucide-react";

const AllVehicles = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const { loading, setLoading, theme } = useAuth();
  const [totalApps, setTotalApps] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const limit = 6;
  const asioxInstnce = useAxios();

  useEffect(() => {
    setLoading(true);

    asioxInstnce
      .get(
        `/vehiclesAll?limit=${limit}&skip=${
          currentPage * limit
        }&search=${search}&sort=${sort}`
      )
      .then((res) => {
        const data = res.data;
        if (data && data.result) {
          setAllVehicles(data.result);
          setTotalApps(data.total || 0);
          const pages = Math.ceil((data.total || 0) / limit);
          setTotalPage(pages);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, [asioxInstnce, setLoading, currentPage, search, sort]);

  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${
        isDark ? "bg-[#121212] text-white" : "bg-gray-50 text-black"
      } min-h-screen py-10 mt-10`}
    >
      <div className="max-w-[1420px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by vehicle name..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border outline-none transition-all ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700 focus:border-[#f2b65a]"
                  : "bg-white border-gray-200 focus:border-[#f2b65a]"
              }`}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(0);
              }}
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <ArrowUpDown size={20} className="text-[#f2b65a]" />
            <select
              className={`px-4 py-2.5 rounded-xl border outline-none ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700"
                  : "bg-white border-gray-200"
              }`}
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(0);
              }}
            >
              <option value="">Sort by Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">Total Found: {totalApps}</h2>

        {loading ? (
          <Loading />
        ) : (
          <>
            {allVehicles.length === 0 ? (
              <div className="text-center py-20 text-gray-500 text-xl">
                No vehicles matching your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allVehicles.map((vehicle) => (
                  <Card key={vehicle._id} vehicles={vehicle} />
                ))}
              </div>
            )}

            {totalPage > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16 mb-10">
                <button
                  disabled={currentPage === 0}
                  className="btn bg-[#f2b65a] disabled:bg-gray-600 disabled:text-gray-400 border-none text-black px-6"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPage).keys()].map((pageIndex) => (
                    <button
                      key={pageIndex}
                      className={`w-11 h-11 rounded-lg font-bold border ${
                        pageIndex === currentPage
                          ? "bg-[#f2b65a] text-black border-[#f2b65a]"
                          : isDark
                          ? "border-gray-700 text-gray-400"
                          : "border-gray-200 text-gray-600"
                      }`}
                      onClick={() => setCurrentPage(pageIndex)}
                    >
                      {pageIndex + 1}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPage - 1}
                  className="btn bg-[#f2b65a] disabled:bg-gray-600 disabled:text-gray-400 border-none text-black px-6"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default AllVehicles;
