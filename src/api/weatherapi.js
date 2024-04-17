import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/weather';

const weatherApi = {
    saveLocation: (user) => {
        return axios.post(`${API_BASE_URL}/save-location`, user);
    },
    updateWeatherFrequency: (frequency) => {
        return axios.patch(`${API_BASE_URL}/update-frequency`, { frequency });
    },
    getWeatherHistory: (userId) => {
        console.log("inside api file",userId)
        return axios.get(`${API_BASE_URL}/history/${userId}`);
    }
};

export default weatherApi;
