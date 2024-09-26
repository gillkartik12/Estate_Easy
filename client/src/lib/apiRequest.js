import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-easy.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;