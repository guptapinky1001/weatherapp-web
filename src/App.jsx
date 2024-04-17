import './App.css'
import SaveLocationComponent from './components/weather/container/SaveLocationComponent';
import WeatherFrequencyConfig from './components/weather/container/WeatherFrequencyConfig';
import WeatherHistory from './components/weather/container/WeatherHistory';


function App() {
  const userId = 1;
  return (
    <>
      <h1>Weather Tracker</h1>
      <SaveLocationComponent />
      <WeatherFrequencyConfig />
      <WeatherHistory userId={userId} />
    </>
  )
}

export default App
