<template>
  <AppHeader />

  <main>
    <section>
      <h2>Forecast</h2>
      <p>Here is the forecast for the next 7 days.</p>

      <ForecastList>
        <ForecastListItem v-for="day in forecast" :key="day.name" :name="day.name" :emoji="day.emoji" :high="day.high"
          :low="day.low" />
      </ForecastList>
    </section>

    <section>
      <h2>Current weather</h2>
      <p>
        Click on the map to display the current weather for a specific location.
      </p>

      <AppMap :current-location="currentLocation" />

      <button id="location-button" @click="handleCurrentLocationClick">{{ locationButtonText }}</button>
    </section>
  </main>

  <AppFooter />
</template>

<script>
import ForecastList from "./components/ForecastList.vue";
import ForecastListItem from "./components/ForecastListItem.vue";
import AppMap from "./components/AppMap.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { fetchDailyForecast } from "./lib/weather-api";

export default {
  components: {
    ForecastList,
    ForecastListItem,
    AppMap,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      forecast: [],
      locationButtonText: "Zoom to current location",
      currentLocation: null,
    };
  },
  mounted() {
    this.getWeatherForecast();
  },
  methods: {
    getCurrentLocation() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve([position.coords.longitude, position.coords.latitude]);
        }, reject);
      })
    },
    async handleCurrentLocationClick() {
      this.locationButtonText = "Loading...";

      try {
        const location = await this.getCurrentLocation();
        this.currentLocation = location;
      } catch (error) {
        alert("Unable to get current location. Please try again later.");
      }

      this.locationButtonText = "Zoom to current location";
    },
    async getWeatherForecast() {
      try {
        this.forecast = await fetchDailyForecast();
      } catch (error) {
        console.log(error)
      }
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  padding: 16px;
  gap: 16px;
  background-color: #2a2a2a;
  color: #fefefe;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

@media (min-width: 768px) {
  #app {
    padding: 40px;
  }
}

header,
main,
footer {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 32px;
  border-radius: 32px;
  background-color: #101014;
}

main {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
    gap: 40px;
  }
}

footer {
  text-align: center;
}

footer a {
  color: #fff;
}

section {
  display: grid;
  gap: 16px;
}

h2 {
  font-weight: bold;
}

h1 {
  -webkit-text-fill-color: transparent;
  background: linear-gradient(0.25turn, #007cf0, #ff0080);
  -webkit-background-clip: text;
  font-size: 32px;
  text-align: center;
}

@media (min-width: 768px) {
  h1 {
    font-size: 56px;
  }
}

h2 {
  font-size: 24px;
}

@media (min-width: 768px) {
  h2 {
    font-size: 32px;
  }
}

#location-button {
  display: block;
  align-self: flex-start;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  background-color: #007cf0;
  color: #fefefe;
  font-size: 16px;
}
</style>
