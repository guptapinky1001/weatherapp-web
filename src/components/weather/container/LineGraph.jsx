import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend } from 'victory';
import weatherApi from '../../../api/weatherapi';

const LineGraph = ({ userId }) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await weatherApi.getWeatherHistory(userId);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [userId]);

    return (
        <div>
            <VictoryChart width={800} height={400}>
                <VictoryLegend x={50} y={50}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                    data={[
                        { name: 'Temperature', symbol: { fill: 'rgba(75,192,192,1)' } },
                        { name: 'Humidity', symbol: { fill: 'rgba(255,99,132,1)' } }
                    ]}
                />
                <VictoryAxis
                    label="Time"
                    style={{
                        axisLabel: { padding: 30 }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    label="Value"
                    style={{
                        axisLabel: { padding: 40 }
                    }}
                />
                <VictoryLine
                    data={weatherData}
                    x="createdTimeStamp"
                    y="temperature"
                    style={{
                        data: { stroke: 'rgba(75,192,192,1)' }
                    }}
                />
                <VictoryLine
                    data={weatherData}
                    x="createdTimeStamp"
                    y="humidity"
                    style={{
                        data: { stroke: 'rgba(255,99,132,1)' }
                    }}
                />
            </VictoryChart>
        </div>
    );
};

export default LineGraph;
