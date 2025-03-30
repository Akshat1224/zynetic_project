require('dotenv').config();
const express = require('express')
// const fs = require("fs");

const axios = require("axios"); // Replacing `requests`
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 8006;
// const homeFile = fs.readFileSync("weatherapp.html", "utf-8");

// // Function to replace placeholders
// const replaceAll = (tempVal, orgVal = {}, errorMsg = "") => {
//     const main = orgVal.main || {};
//     const sys = orgVal.sys || {};
//     const weather = (orgVal.weather && orgVal.weather[0]) || {};

//     let temperature = tempVal.replace("{%temp_val%}", main.temp || "-");
//     temperature = temperature.replace("{%temp_min%}", main.temp_min || "-");
//     temperature = temperature.replace("{%temp_max%}", main.temp_max || "-");
//     temperature = temperature.replace("{%country%}", sys.country || "-");
//     temperature = temperature.replace("{%location%}", orgVal.name || "-");
//     temperature = temperature.replace("{%tempStatus%}", weather.main || "-");

//     const localTime = getLocalTime(orgVal.timezone || 0);
//     temperature = temperature.replace("{%local_time%}", localTime);
//     temperature = temperature.replace("{%error_message%}", errorMsg);

//     return temperature;
// };

// // Function to calculate local time
// const getLocalTime = (timezoneOffset) => {
//     const utcTime = new Date();
//     const localTime = new Date(utcTime.getTime() + (timezoneOffset * 1000));
//     return localTime.toLocaleString();
// };

app.use(cors({
    origin: 'https://zynetic-project-theta.vercel.app/',
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}));
app.use(express.json());

// Create server
app.get('/weather', async (req, res) => {
    const city = req.query.city || "Mumbai";
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        return res.status(500).json({
            error: 'API key is missing. Please check your .env file'
        });
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        res.status(200).send(response.data);
    } catch (error) {

        return res.status(500).send("Error fetching weather data.");
    }

});

// Start server
app.listen(PORT, () => {
    console.log("Listening to port no 8006");
});
