import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

const instance = axios.create({
  baseURL: BACKEND_URL,
});

export default instance;
