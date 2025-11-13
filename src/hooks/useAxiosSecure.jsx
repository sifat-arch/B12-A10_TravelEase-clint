import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "https://b-12-a10-travelease-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    //set token in the header for all the api call using axiosSecure kook
    //request interceptor

    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
      }
    );

    // response interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        //const status = err.status;
        const status = err.response?.status;
        if (status === 401 || status === 403) {
          console.log("log out for the bad request");
          logOutUser().then(() => {
            // navigate user to the login page
            navigate("/login");
          });
        }
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
