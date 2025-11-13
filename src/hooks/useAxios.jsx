import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://b-12-a10-travelease-server.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
