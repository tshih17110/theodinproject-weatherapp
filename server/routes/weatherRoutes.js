const express = require('express');
const weatherController = require('../controllers/weatherController');
const router = express.Router();

app.use(express.static(path.join(__dirname, '../client/dist')));

router.get('/weather', weatherController.getWeatherData);

module.exports = router;
