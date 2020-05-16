import axios from "axios";

const api = axios.create({
  baseURL: "https://league-market-json-server.herokuapp.com/",
});

export default api;
