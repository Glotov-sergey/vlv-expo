import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../types/data/profile";

export const setToken = async (access_token: string) => {
  await AsyncStorage.setItem("access_token", access_token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem("access_token");
};
