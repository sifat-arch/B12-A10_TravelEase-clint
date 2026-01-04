import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import useAxios from "../hooks/useAxios";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const DashboardHome = () => {
  const [data, setData] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("/booking-stats").then((res) => {
      setData(res.data);
    });
  }, [axiosInstance]);

  const categoryStats = data.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(categoryStats).map((key) => ({
    name: key,
    value: categoryStats[key],
  }));

  const dateStats = data.reduce((acc, curr) => {
    const date = new Date(curr.bookingDate).toLocaleDateString("en-US", {
      month: "short",
    });
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const lineChartData = Object.keys(dateStats).map((key) => ({
    name: key,
    bookings: dateStats[key],
  }));

  console.log(lineChartData, dateStats);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Bookings"
          value={data.length}
          icon={<BarChart3 className="text-blue-600" />}
          trend="+10%"
          border
        />
        <StatCard
          title="Revenue"
          value={`$${Number(
            data.reduce((sum, item) => sum + (Number(item.pricePerDay) || 0), 0)
          ).toFixed(2)}`}
          icon={<DollarSign className="text-green-600" />}
          trend="+12%"
        />
        <StatCard
          title="Unique Customers"
          value={new Set(data.map((item) => item.bookedBy)).size}
          icon={<Users className="text-purple-600" />}
          trend="+5%"
        />
        <StatCard
          title="Pending Approvals"
          value={data.filter((item) => item.status === "Pending").length}
          icon={<TrendingUp className="text-orange-600" />}
          trend="Live"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Booking Trends (Monthly)
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData.length > 0 ? lineChartData : []}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Vehicle Categories
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={
                    pieChartData.length > 0
                      ? pieChartData
                      : [{ name: "Loading", value: 1 }]
                  }
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="text-lg font-bold text-slate-800">Recent Bookings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-sm">
              <tr>
                <th className="px-6 py-4 font-medium">Vehicle</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-slate-700">
              {data.slice(0, 5).map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">{item.vehicleName}</td>
                  <td className="px-6 py-4">{item.userName}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold">${item.pricePerDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, trend, border }) => (
  <div
    className={`bg-white p-6 rounded-2xl shadow-sm border ${
      border ? "border-yellow-400 border-2" : "border-slate-100"
    }`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-2 text-slate-800">{value}</h3>
        <span className="text-xs font-semibold text-green-500 mt-1 block">
          {trend} from last month
        </span>
      </div>
      <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
    </div>
  </div>
);

export default DashboardHome;
