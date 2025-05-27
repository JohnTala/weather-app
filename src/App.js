 import React, { useState } from 'react';
import './App.css';

// const API_KEY = '4feb6b4e5e7d76f444327222cfcdb424'; // Replace with your API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async (e) => {
    if (!city) return;
      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4feb6b4e5e7d76f444327222cfcdb424&units=metric`
    );
    const data = await response.json();
    if (data.cod === 200) {
      setWeather(data);
    } else {
      setWeather(null);
      alert('City not found!');
    }
   
  };

  return (
    <div className="container">
      <h1>Simple Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className="weather">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;
