import axios from "axios";

export const getProductByCategory = async (collection_id: number) => {
  const { data } = await axios.get(
    `http://46.19.64.140:8080/get_products?page=1&per_page=36&category_ids[]=${collection_id}`
  );

  return data;
};

export const getProductById = async (insales_id: number) => {
  const { data } = await axios.get(
    `http://46.19.64.140:8080/product_byid?insales_id=${insales_id}`
  );

  return data;
};
