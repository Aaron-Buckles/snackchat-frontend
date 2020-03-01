import axios from "axios";
import Cookies from "js-cookie";


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api"
});

async function postUser(payload) {
  const response = await api.post("/users/signup", payload);
  return response.data;
}

async function loginUser(payload) {
  const response = await api.post("/users/login", payload);
  return response.data;
}

async function getUserById(userId) {
  const response = await api.get(`/users/${userId}`, {
    headers: { Authorization: Cookies.get("token") }
  });
  return response.data.user;
}

const userService = {
  postUser,
  loginUser,
  getUserById
};

export default userService;
