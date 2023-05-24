import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// К каждому запросу к хедеру добавляем токен
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
