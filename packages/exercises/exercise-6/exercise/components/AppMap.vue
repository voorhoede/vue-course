<template>
  <div id="map" ref="map"></div>
</template>

<script>
import mapboxgl, { Map, Popup } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW9taWMiLCJhIjoiY2thZ3g5NDJvMGF4eDJzcWI3NnpraTlybCJ9.2NLC1oDwtP6lBWIsAfEu1A";

export default {
  props: {
    currentLocation: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      map: null,
    };
  },
  // 1. Add a watcher for the currentLocation prop.
  // 2. Use the flyToLocation method to fly to the current location.
  mounted() {
    this.map = new Map({
      container: this.$refs.map,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [5.5, 52.1],
      zoom: 6,
    });

    this.map.on("click", this.handleClick);
  },
  methods: {
    flyToLocation(coordinates) {
      this.map.flyTo({
        center: coordinates,
        zoom: 15,
      });
    },
    async fetchWeatherForLocation(coordinates) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[1]}&longitude=${coordinates[0]}&hourly=temperature_2m&current_weather=true`;
      const response = await fetch(url);

      return response.json();
    },
    async handleClick(event) {
      const coordinates = event.lngLat.toArray();
      const popup = new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML("Loading weather...")
        .addTo(this.map);

      try {
        const weatherResponse = await this.fetchWeatherForLocation(coordinates);
        const currentWeather = weatherResponse?.current_weather;

        popup.setHTML(`
            <p>Temperature: ${currentWeather?.temperature}°C</p>
            <p>Wind speed: ${currentWeather?.windspeed} m/s</p>
            <p>Wind direction: ${currentWeather?.winddirection}°</p>
        `);
      } catch (error) {
        console.log(error)
        popup.setHTML("Error loading weather data. Please try again later.");
      }
    },
  },
};
</script>

<style>
#map {
  aspect-ratio: 5/3;
  width: 100%;
  border-radius: 16px;
  color: #101014;
}
</style>
