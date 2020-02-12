import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api"
});

async function getAllTags() {
  const response = await api.get("/tags");
  return response.data.tags;
}

const tagService = {
  getAllTags
};

export default tagService;
