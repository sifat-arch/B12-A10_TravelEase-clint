import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  User,
  LayoutDashboard,
  Car,
  LogOut,
  Settings,
  Bell,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

const DashbardLayout = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { logOutUser } = useAuth();

  const handleLogoout = () => {
    logOutUser();
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold text-yellow-500 flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-600 rounded-lg"></div>
          <Link to="/">TravelEase</Link>
        </div>

        <nav className="mt-4 flex-1 px-4 space-y-1">
          <p className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
            Menu
          </p>

          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-yellow-600 rounded-lg transition-colors"
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/dashboard/add-vehicles"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-yellow-600 rounded-lg transition-colors"
          >
            <Car size={20} />
            <span className="font-medium">Add Vehicles</span>
          </Link>

          <li>
            <Link
              to="/dashboard/my-bookings"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-yellow-600 rounded-lg transition-colors"
            >
              <Bell size={20} />{" "}
              <span className="font-medium">My Bookings</span>
            </Link>
          </li>

          {/* Admin Section (Example) */}
          <div className="pt-6">
            <p className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
              Admin
            </p>
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-yellow-600 rounded-lg transition-colors"
            >
              <Settings size={20} />
              <span className="font-medium">Settings</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOP NAVBAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96 hidden md:block">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 pr-3 hover:bg-slate-100 rounded-full transition-all"
              >
                <img
                  src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
                  alt="User"
                  className="w-8 h-8 rounded-full border border-slate-200"
                />
                <ChevronDown size={16} className="text-slate-500" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <User size={16} /> Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <LayoutDashboard size={16} /> Dashboard Home
                  </Link>
                  <hr className="my-1 border-slate-100" />
                  <button
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    onClick={handleLogoout}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* MAIN BODY (Where charts/tables will be) */}
        <main className="p-8 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashbardLayout;
