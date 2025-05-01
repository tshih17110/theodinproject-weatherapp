import './style.css'
import { weatherCard } from '../components/weatherCard.js';
import axios from 'axios';

const form = document.querySelector('form');
const input = document.querySelector('input');
const weatherContainer = document.querySelector('#weather-data');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const city = input.value.trim();

    if (!city) return;

    try {
        const res = await axios.get(`/weather?city=${encodeURIComponent(city)}`);
        weatherContainer.innerHTML = weatherCard(res.data);
    } catch (err) {
        console.error(err);
        weatherContainer.innerHTML = `<p>Error loading weather data.</p>`;
    };
});
