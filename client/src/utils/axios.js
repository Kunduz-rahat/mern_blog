import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-blog-rho.vercel.app/api",
});

// К каждому запросу к хедеру добавляем токен
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
