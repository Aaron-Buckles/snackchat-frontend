import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertReview = payload => api.post(`/review`, payload)
export const getAllReviews = () => api.get(`/reviews`)
export const updateReviewById = (id, payload) => api.put(`/review/${id}`, payload)
export const deleteReviewById = id => api.delete(`/review/${id}`)
export const getReviewById = id => api.get(`/reviews/${id}`)

const apis = {
    insertReview,
    getAllReviews,
    updateReviewById,
    deleteReviewById,
    getReviewById,
}

export default apis
