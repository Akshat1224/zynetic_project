import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8006/weather?city=${city}`);
      setWeather(response.data);
      setError("");
    } catch {
      setError("City not found!");
      setWeather(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,sky')" }}>
      <div className="flex flex-col md:flex-row gap-8 w-11/12 max-w-4xl bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
        
        {/* Left Side - Form Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Check Weather</h2>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button 
            onClick={fetchWeather} 
            className="w-full mt-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Get Weather
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Right Side - Weather Display */}
        {weather && (
          <div className="flex flex-col items-center w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">{weather.name}, {weather.sys.country}</h3>
            <p className="text-5xl font-bold text-blue-500">{weather.main.temp}°C</p>
            <p className="text-lg text-gray-600 mt-2">
              Min: {weather.main.temp_min}°C | Max: {weather.main.temp_max}°C
            </p>
            <p className="text-lg font-semibold text-gray-700">{weather.weather[0].main}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default WeatherApp;
