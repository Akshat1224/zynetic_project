import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(`https://weatherappdashboard.onrender.com/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (condition) => {
    const icons = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Snow: "❄️",
      Thunderstorm: "⛈️",
      Drizzle: "🌦️",
      Mist: "🌫️",
      Fog: "🌁",
    };
    return icons[condition] || "🌤️";
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-cover bg-center relative transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-blue-100 via-blue-300 to-white text-gray-900"
      }`}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-lg"></div>

      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-5 right-5 p-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded-lg shadow-md hover:scale-105 transition-all"
      >
        {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="relative flex flex-col md:flex-row gap-8 w-11/12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col items-center w-full md:w-1/3 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/30 dark:border-gray-700/30 ${
            isDark ? "bg-gray-900/40 text-white" : "bg-white/40 text-gray-900"
          }`}
        >
          <h2 className="text-2xl font-bold">
            {isDark ? "Check Weather" : "Check Weather"}
          </h2>
          <input
            type="text"
            className="w-full p-3 mt-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-white bg-white/50 text-gray-900 placeholder-gray-500 dark:placeholder-gray-300"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <div className="mt-4 flex w-full space-x-2">
            <button
              onClick={fetchWeather}
              className="w-1/2 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200 shadow-md"
            >
              Get Weather
            </button>
            <button
              onClick={fetchWeather}
              className="w-1/2 py-3 bg-green-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200 shadow-md"
            >
              🔄 Refresh
            </button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative flex flex-col items-center w-full md:w-2/3 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/30 dark:border-gray-700/30 ${
            isDark ? "bg-gray-900/40 text-white" : "bg-white/40 text-gray-900"
          }`}
        >
          {!weather ? (
            <div className="flex flex-col items-center">
              <div className="text-6xl my-4">🌤️</div>
              <h3 className="text-2xl font-semibold text-black dark:text-gray-400">
                Search for a city to see weather
              </h3>
            </div>
          ) : (
            <>
              <div className="text-6xl my-4">
                {getWeatherIcon(weather.weather[0].main)}
              </div>
              <h3 className="text-3xl font-bold">
                {weather.name}, {weather.sys.country}
              </h3>
              <p className="text-xl mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}">
                {new Date().toLocaleDateString()}
              </p>
              <h1 className="text-5xl font-bold text-blue-500 mt-2">
                {weather.main.temp}°C
              </h1>
              <p className="text-lg mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}">
                Min: {weather.main.temp_min}°C | Max: {weather.main.temp_max}°C
              </p>
              <p className="text-lg font-semibold mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}">
                {weather.weather[0].main}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WeatherApp;
