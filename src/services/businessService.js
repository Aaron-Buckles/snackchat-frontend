import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api"
});

async function getBusinessWithinRadius(latitude, longitude, miles = 5) {
  const response = await api.get("/businesses/", {
    params: {
      lat: latitude,
      long: longitude,
      miles: miles
    }
  });
  return response.data.businesses;
}

async function getBusinesses() {
  const response = await api.get("/businesses/");
  return response.data.businesses;
}

async function getBusinessById(business_id) {
  const response = await api.get(`/businesses/${business_id}`);
  return response.data;
}

async function createBusiness(payload) {
  const response = await api.post("/businesses/", payload, {
    headers: { Authorization: Cookies.get("token") }
  });
  return response.data;
}

const businessService = {
  getBusinesses,
  getBusinessWithinRadius,
  getBusinessById,
  createBusiness
};

export default businessService;
