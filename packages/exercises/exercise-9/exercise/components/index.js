import { createApp } from 'vue';
import App from "./App.vue";

createApp(App).mount("#app");

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const mapElement = document.getElementById("map");
const mapConfig = {
    container: mapElement,
    style: "mapbox://styles/mapbox/dark-v11",
    center: [5.5, 52.1],
    zoom: 6,
};

const map = new mapboxgl.Map(mapConfig);

async function fetchWeatherForLocation(coordinates) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[1]}&longitude=${coordinates[0]}&hourly=temperature_2m&current_weather=true`;
    const response = await fetch(url);

    return response.json();
}

async function handleMapClick(e) {
    const coordinates = e.lngLat.toArray();
    const popup = new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML("Loading weather...")
        .addTo(map);

    try {
        const weatherResponse = await fetchWeatherForLocation(coordinates);
        const currentWeather = weatherResponse?.current_weather;

        popup.setHTML(`
            <p>Temperature: ${currentWeather?.temperature}°C</p>
            <p>Wind speed: ${currentWeather?.windspeed} m/s</p>
            <p>Wind direction: ${currentWeather?.winddirection}°</p>
        `);
    } catch (error) {
        popup.setHTML("Error loading weather data. Please try again later.")
    }
}

map.on("click", handleMapClick);
