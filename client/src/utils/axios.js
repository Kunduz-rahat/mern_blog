import axios from "axios";


// baseURL: "http://localhost:5000/api",
//   baseURL: "https://mern-blog-rho.vercel.app/api",
const instance = axios.create({
  baseURL: "https://mern-blog-rho.vercel.app/api",
});

// К каждому запросу к хедеру добавляем токен
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
