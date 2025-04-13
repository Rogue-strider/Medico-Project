import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.16.43.121:8004",
  headers: {
    accept: "application/json",
    },
});

export default instance;