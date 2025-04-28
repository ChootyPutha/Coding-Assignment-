import axios from 'axios';
import Constants from 'expo-constants';

const { API_KEY, BASE_URL } = Constants.expoConfig?.extra || {};

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'api_key': API_KEY,
        'X-Finnhub-Token': API_KEY,
    },
    timeout: 10000,
});

export default axiosInstance;