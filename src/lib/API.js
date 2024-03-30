import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const API = {
  login: async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  },
  getUserProfile: async (token) => {
    const response = await axios.get(`${API_BASE_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};
