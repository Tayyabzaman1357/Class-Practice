import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async () => {
  const res = await api.get("/products?limit=30");
  return res.data.products;
};

export default api;