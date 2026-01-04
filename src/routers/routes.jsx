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
import UpdateVehicles from "../pages/UpdateVehicles";
import ErrorPage from "../pages/ErrorPage";
import DashbardLayout from "../Layout/DashbardLayout";
import DashboardHome from "../pages/DashboardHome";
import Profile from "../pages/Profile";

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
        path: "update-vehicles/:id",
        element: (
          <PrivetRoute>
            <UpdateVehicles />,
          </PrivetRoute>
        ),
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashbardLayout></DashbardLayout>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
