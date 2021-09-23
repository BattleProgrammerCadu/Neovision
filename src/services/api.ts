import axios from "axios";

const api = axios.create({
  baseURL: "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/",
});

export default api;