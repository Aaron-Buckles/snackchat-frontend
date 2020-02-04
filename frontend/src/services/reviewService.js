import axios from "axios";
import { backendURL } from "../config.json";

const api = axios.create({
  baseURL: backendURL + "/api"
});

async function getAllReviews() {
  const response = await api.get("/reviews");
  return response.data.reviews;
}

async function getReviewById(id) {
  const response = await api.get(`/review/${id}`);
  return response.data.review;
}

async function postReview(payload) {
  const response = await api.post("/review", payload);
  return response.data;
}

async function updateReviewById(id, payload) {
  const response = await api.put(`/review/${id}`, payload);
  return response.data;
}

async function deleteReview(id) {
  const response = await api.delete(`/review/${id}`);
  return response.data;
}

const reviewService = {
  getAllReviews,
  getReviewById,
  postReview,
  updateReviewById,
  deleteReview
};

export default reviewService;
