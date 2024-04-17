import React, { useState } from 'react';
import weatherApi from '../../../api/weatherapi';

const WeatherFrequencyConfig = () => {
    const [frequency, setFrequency] = useState('');

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
    };

    const handleSaveFrequency = () => {
        weatherApi.updateWeatherFrequency(frequency)
            .then(response => {
                console.log('Frequency updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating frequency:', error);
            });
    };

    return (
        <div>
            <h2>Weather Update Frequency</h2>
            <select onChange={handleFrequencyChange} value={frequency}>
                <option value="">Select Frequency</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
            </select>
            <button onClick={handleSaveFrequency}>Save Frequency</button>
        </div>
    );
};

export default WeatherFrequencyConfig;
