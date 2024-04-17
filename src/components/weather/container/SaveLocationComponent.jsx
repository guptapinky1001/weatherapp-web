import React, { useState } from 'react';
import weatherApi from '../../../api/weatherapi';

const SaveLocationComponent = () => {
    const [user, setUser] = useState({
        username: '',
        latitude: null,
        longitude: null,
        createdBy: 'pgupta',
        createdAt: new Date().toISOString(),
        updatedBy: 'pgupta',
        updatedAt: null
    });
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setUser(prevUser => ({
                        ...prevUser,
                        latitude,
                        longitude
                    }));
                },
                error => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported in this browser.');
        }
    };

    const saveLocation = () => {
        if (!user.username || !user.latitude || !user.longitude) {
            setError('Please fill in all fields and get location.');
            return;
        }

        //  below will save the user data in user table
        weatherApi.saveLocation(user)
            .then(response => {
                console.log('Location saved successfully:', response.data);
            })
            .catch(error => {
                console.error('Error saving location:', error);
            });
    };

    return (
        <div>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <button onClick={getLocation}>Get Current Location</button>
            {error && <p>Error: {error}</p>}
            {user.latitude && (
                <div>
                    <p>Latitude: {user.latitude}</p>
                    <p>Longitude: {user.longitude}</p>
                    <h3>Save Current Location</h3>
                    <button onClick={saveLocation}>Save Location</button>
                    <div style={{ margin: '20px' }}>

                    </div>
                </div>
            )}
        </div>
    );
};

export default SaveLocationComponent;
