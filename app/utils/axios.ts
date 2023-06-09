import axios from "axios";
import { getToken } from "./jwt";

const token = getToken();

const axiosInstanse = axios.create({
  baseURL: "http:://46.19.64.140.8080/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstanse;
