import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await axios.get(`http://localhost:8080/api/weather/${city}`);
      const data = res.data;

      if (data.error) {
        setError('City not found');
        setWeather(null);
        setShowPopup(false);
      } else {
        setWeather(data);
        setError('');
        setShowPopup(true);
      }
    } catch (err) {
      setError('Could not fetch weather');
      setWeather(null);
      setShowPopup(false);
    }
  };

  return (
    <div className="app-container">
      <h1>🌤️ Weather App</h1>

      <div className="weather-form">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {showPopup && weather && (
        <div className="weather-popup">
          <div className="weather-card">
            <button className="close-button" onClick={() => setShowPopup(false)}>✖</button>
            <div className="weather-icon">🌇</div>
            <h2>{weather.name}</h2>
            <p>🌡 Temp: {weather.main.temp} °C</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>☁️ Weather: {weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
