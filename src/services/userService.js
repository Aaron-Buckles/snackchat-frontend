import axios from "axios";

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

const userService = {
  postUser,
  loginUser
};

export default userService;
