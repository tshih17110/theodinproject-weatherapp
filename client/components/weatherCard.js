
export function weatherCard(data) {
    console.log('weatherCard data:', data);
    return `
        <h2>${data.address}</h2>
        <p>Temperature: ${data.currentConditions.temp} °C</p>
        <p>Condition: ${data.currentConditions.conditions}</p>
        <p>Humidity: ${data.currentConditions.humidity}%</p>`;
};
