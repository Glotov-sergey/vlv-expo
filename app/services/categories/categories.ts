import axios from "axios";

export const getAllCategories = async () => {
  const { data } = await axios.get(
    "http://46.19.64.140:8080/get_categories?excluded_titles[]=Мой склад&excluded_titles[]=1С Предприятие&excluded_titles[]=Склад"
  );
  return data;
};
