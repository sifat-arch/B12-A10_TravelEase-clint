import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import ViewDetails from "../pages/ViewDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVehicles from "../pages/AddVehicles";
import MyBooking from "../pages/MyBooking";
import PrivetRoute from "../privetRoute/PrivetRoute";
import MyVehicles from "../pages/MyVehicles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-vehicles",
        element: <AllVehicles />,
      },
      {
        path: "view-details/:id",
        element: (
          <PrivetRoute>
            <ViewDetails />,
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-vehicles",
        element: (
          <PrivetRoute>
            <AddVehicles />,
          </PrivetRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivetRoute>
            <MyBooking />,
          </PrivetRoute>
        ),
      },
      {
        path: "my-vehicles",
        element: (
          <PrivetRoute>
            <MyVehicles />,
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
