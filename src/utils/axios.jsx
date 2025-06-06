import axios from "axios";

const instance = axios.create({
  baseURL: "https://backendmedicine-4c4t.onrender.com",
  headers: {
    accept: "application/json",
    },
});

export default instance;