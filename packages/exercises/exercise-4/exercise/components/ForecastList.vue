<template>
    <ul class="forecast-list">
        <li class="forecast-item" v-for="day in forecast" :key="day.name">
            <h3 class="forecast-title">{{ day.name }}</h3>
            <div class="forecast-emoji">️{{ day.emoji }}</div>
            <p class="forecast-text">High: {{ day.high }}°C</p>
            <p class="forecast-text">Low: {{ day.low }}°C</p>
        </li>
    </ul>
</template>

<script>
export default {
    // 1. Configure this component to accept the forecast as a prop
    // 2. Write a validator for the data structure
    // 3. Set a default value for the forecast (e.g. an empty array)
    data() {
        return {
            // 4. Move this data to the App.vue component
            forecast: [
                {
                    "day": "Wednesday",
                    "low": 11.6,
                    "high": 14.8,
                    "emoji": "🌤️"
                },
                {
                    "day": "Thursday",
                    "low": 10.7,
                    "high": 14.6,
                    "emoji": "🌤️"
                },
                {
                    "day": "Friday",
                    "low": 10.4,
                    "high": 19,
                    "emoji": "🌤️"
                },
                {
                    "day": "Saturday",
                    "low": 9.5,
                    "high": 20.3,
                    "emoji": "☀️"
                },
                {
                    "day": "Sunday",
                    "low": 9.4,
                    "high": 20,
                    "emoji": "☀️"
                },
                {
                    "day": "Monday",
                    "low": 11,
                    "high": 17.1,
                    "emoji": "🌤️"
                },
                {
                    "day": "Tuesday",
                    "low": 8.4,
                    "high": 12.5,
                    "emoji": "🌤️"
                }
            ]

        }
    }
}
</script>

