import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api"
});

async function getAllReviews() {
  const response = await api.get("/reviews");
  return response.data.reviews;
}

async function getReviewsWithinRadius(
  latitude,
  longitude,
  miles = 5,
  limit = 20
) {
  const response = await api.get("/reviews/", {
    params: {
      lat: latitude,
      long: longitude,
      miles: miles,
      limit: limit
    }
  });
  return response.data.reviews;
}

async function getReviewById(id) {
  const response = await api.get(`/reviews/${id}`);
  return response.data.review;
}

async function postReview(payload) {
  const response = await api.post("/reviews", payload, {
    headers: { Authorization: Cookies.get("token") }
  });
  return response.data;
}

async function updateReviewById(id, payload) {
  const response = await api.put(`/reviews/${id}`, payload);
  return response.data;
}

async function deleteReview(id) {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
}

async function likeReview(reviewId) {
  const response = await api.post(`/reviews/${reviewId}/like`, null, {
    headers: { Authorization: Cookies.get("token") }
  });
  return response.data;
}

async function unlikeReview(reviewId) {
  const response = await api.post(`/reviews/${reviewId}/unlike`, null, {
    headers: { Authorization: Cookies.get("token") }
  });
  return response.data;
}

const reviewService = {
  getAllReviews,
  getReviewsWithinRadius,
  getReviewById,
  postReview,
  updateReviewById,
  deleteReview,
  likeReview,
  unlikeReview
};

export default reviewService;
