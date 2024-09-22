import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-2-geic.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;