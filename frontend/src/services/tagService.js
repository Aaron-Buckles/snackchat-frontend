import axios from "axios";
import { backendURL } from "../config.json";

const api = axios.create({
  baseURL: backendURL + "/api"
});

async function getAllTags() {
  const response = await api.get("/tags");
  return response.data.tags;
}

const tagService = {
  getAllTags
};

export default tagService;
