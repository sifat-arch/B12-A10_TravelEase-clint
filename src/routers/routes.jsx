import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import ViewDetails from "../pages/ViewDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVehicles from "../pages/AddVehicles";
import MyBooking from "../pages/MyBooking";

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
        path: "view-details",
        element: <ViewDetails />,
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
        element: <AddVehicles />,
      },
      {
        path: "my-booking",
        element: <MyBooking />,
      },
    ],
  },
]);

export default router;
