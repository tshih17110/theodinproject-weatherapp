const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const api_key = process.env.API_KEY;
const base_url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const getWeatherData = async (location, startDate, endDate) => {
    let url = `${base_url}${encodeURIComponent(location)}`;
    if (startDate && endDate) {
        url += `/${startDate}/${endDate}`;
    }
    url += `?unitGroup=metric&key=${api_key}&contentType=json`;
    const res = await axios.get(url);
    return res.data;    

};

module.exports = { getWeatherData };
