import React, { useState } from "react";
import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const { logOutUser, user, theme, setTheme } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => alert("logout successfully"))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 font-semibold transition-all duration-300 ${
                    isActive ? "text-yellow-500" : "text-gray-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-vehicles"
                className={({ isActive }) =>
                  `px-4 py-2 font-semibold transition-all duration-300 ${
                    isActive ? "text-yellow-500" : "text-gray-500"
                  }`
                }
              >
                All Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-vehicles"
                className={({ isActive }) =>
                  `px-4 py-2 font-semibold transition-all duration-300 ${
                    isActive ? "text-yellow-500" : "text-gray-500"
                  }`
                }
              >
                Add Vehicle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  `px-4 py-2 font-semibold transition-all duration-300 ${
                    isActive ? "text-yellow-500" : "text-gray-500"
                  }`
                }
              >
                My Bookings
              </NavLink>
            </li>

            {user ? (
              ""
            ) : (
              <div>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `px-4 py-2 font-semibold transition-all duration-300 ${
                        isActive ? "text-yellow-500" : "text-gray-500"
                      }`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `px-4 py-2 font-semibold transition-all duration-300 ${
                        isActive ? "text-yellow-500" : "text-gray-500"
                      }`
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl ">
          <span className="font-bold text-3xl">Travel</span>Ease
        </a>
        <div>
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `
                 ${isActive ? "text-yellow-500" : "text-gray-500"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-vehicles"
              className={({ isActive }) =>
                `px-4 py-2 font-semibold transition-all duration-300 ${
                  isActive ? "text-yellow-500" : "text-gray-500"
                }`
              }
            >
              All Vehicles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-vehicles"
              className={({ isActive }) =>
                `px-4 py-2 font-semibold transition-all duration-300 ${
                  isActive ? "text-yellow-500" : "text-gray-500"
                }`
              }
            >
              Add Vehicle
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                `px-4 py-2 font-semibold transition-all duration-300 ${
                  isActive ? "text-yellow-500" : "text-gray-500"
                }`
              }
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-vehicles"
              className={({ isActive }) =>
                `px-4 py-2 font-semibold transition-all duration-300 ${
                  isActive ? "text-yellow-500" : "text-gray-500"
                }`
              }
            >
              My vehicles
            </NavLink>
          </li>
          {user ? (
            ""
          ) : (
            <div className="flex">
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-4 py-2 font-semibold transition-all duration-300 ${
                      isActive ? "text-yellow-500" : "text-gray-500"
                    }`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `px-4 py-2 font-semibold transition-all duration-300 ${
                      isActive ? "text-yellow-500" : "text-gray-500"
                    }`
                  }
                >
                  Register
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
            />
            {/* dropdown */}

            {isOpen && (
              <div
                className={`absolute right-0 top-12 w-48 rounded-lg shadow-lg p-4 z-50 transition-all duration-200 space-y-2 border border-gray-300
      ${
        theme === "light"
          ? "bg-white text-gray-800"
          : "bg-gray-800 text-gray-200"
      }`}
              >
                <img
                  src={user.photoURL}
                  alt=""
                  className="block mx-auto rounded-full w-16 h-16 object-cover"
                />
                <p className="font-semibold text-center">
                  {user.displayName || "User"}
                </p>
                <button
                  onClick={handleLogOut}
                  className={`mt-3 w-full py-1.5 rounded-lg text-sm transition-all
        ${
          theme === "light"
            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
            : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
        }`}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
