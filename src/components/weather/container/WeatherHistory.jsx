import React, { useState, useEffect } from 'react';
import weatherApi from '../../../api/weatherapi';
import LineGraph from './LineGraph';

const WeatherHistory = ({ userId }) => {
    const [weatherHistory, setWeatherHistory] = useState([]);

    useEffect(() => {
        weatherApi.getWeatherHistory(userId)
            .then(response => {
                setWeatherHistory(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather history:', error);
            });
    }, []);

    return (
        <div>
            <h3>Weather History Line Graph</h3>
            <LineGraph userId={userId} />

            <h2>Weather History Details</h2>
            <ul>
                {weatherHistory.map((reading, index) => (
                    <li key={index}>
                        Temperature: {reading.temperature}, Humidity: {reading.humidity}, Weather Detail: {reading.weatherDetail}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherHistory;
