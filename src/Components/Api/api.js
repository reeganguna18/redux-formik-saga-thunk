import axios from "axios";

const API_BASE_URL = "https://localhost:3500"; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true
    // You can also add other common headers here
  },
});

export default api;