import axios from "axios";
import { backendURL } from "../config.json";

const api = axios.create({
  baseURL: backendURL + "/api"
});

async function postUser(payload) {
  const response = await api.post("/users/signup", payload);
  return response.data;
}

async function loginUser(payload) {
  const response = await api.post("/users/login", payload);
  return response.data;
}

const userService = {
  postUser,
  loginUser
};

export default userService;
