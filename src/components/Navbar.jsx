import React from "react";
import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logOutUser, user, setTheme } = useAuth();

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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-vehicles">All Vehicles</NavLink>
            </li>
            <li>
              <NavLink to="/add-vehicles">Add Vehicle</NavLink>
            </li>
            <li>
              <NavLink to="/my-booking">My Bookings</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl ">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div>
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-vehicles">All Vehicles</NavLink>
          </li>
          <li>
            <NavLink to="/add-vehicles">Add Vehicle</NavLink>
          </li>
          <li>
            <NavLink to="/my-bookings">My Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/my-vehicles">My vehicles</NavLink>
          </li>
          {user ? (
            ""
          ) : (
            <div className="flex">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn-outline" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
