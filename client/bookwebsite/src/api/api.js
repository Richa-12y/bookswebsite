// api.js

import axios from "axios";

const BASE_URL = "http://localhost:8000";

// GET request function
export const getApi = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("GET request error:", error);
    throw error;
  }
};

// POST request function
export const postApi = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("POST request error:", error);
    throw error;
  }
};
