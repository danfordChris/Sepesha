import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'https://kiungo.sepesha.com/public/api/';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {

    const token = await AsyncStorage.getItem('token'); 

    console.log(token,'token');
    
    if (token) {
      config.headers.authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response, // If the response is successful, return it
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized errors (401) - e.g., logout user or refresh token logic
      console.error('Unauthorized error - Token might be expired');
    }
    return Promise.reject(error); // Reject promise if an error occurs
  }
);

export default axiosInstance;
