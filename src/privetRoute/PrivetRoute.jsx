import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return "Loading...";
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
