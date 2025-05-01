const weatherService = require('../services/weatherService');

const getWeatherData = async(req, res)  => {
    try {
        console.log('weatherController req: ', req);
        const location = req.query.city;
        const weatherData = await weatherService.getWeatherData(location);
        res.json(weatherData);
    } catch(error) {
        console.error('Error - getWeatherData: ', error);
    };
}

module.exports = { getWeatherData };
