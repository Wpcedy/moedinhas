import axios from "axios";

const api = axios.create({
  baseURL: "https://mvp-impacta-lab.herokuapp.com/api/v1",
});

export default api;