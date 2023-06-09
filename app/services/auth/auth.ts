import axios from "axios";
import { IUser, IUserRes } from "../../types/data/profile";
import { getToken } from "../../utils/jwt";

export const createTokenPairs = async (data: {
  email: string;
  password: string;
}) => {
  const resposnse = await axios.post("http://46.19.64.140:8080/login", data);
  return resposnse;
};

export const getUserInfo = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = axios.get<IUserRes>(
    "http://46.19.64.140:8080/get_client_info",
    { headers }
  );
  return response;
};
