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
    data() {
        return {
            forecast: [
                {
                    "name": "Wednesday",
                    "low": 11.6,
                    "high": 14.8,
                    "emoji": "🌤️"
                },
                {
                    "name": "Thursday",
                    "low": 10.7,
                    "high": 14.6,
                    "emoji": "🌤️"
                },
                {
                    "name": "Friday",
                    "low": 10.4,
                    "high": 19,
                    "emoji": "🌤️"
                },
                {
                    "name": "Saturday",
                    "low": 9.5,
                    "high": 20.3,
                    "emoji": "☀️"
                },
                {
                    "name": "Sunday",
                    "low": 9.4,
                    "high": 20,
                    "emoji": "☀️"
                },
                {
                    "name": "Monday",
                    "low": 11,
                    "high": 17.1,
                    "emoji": "🌤️"
                },
                {
                    "name": "Tuesday",
                    "low": 8.4,
                    "high": 12.5,
                    "emoji": "🌤️"
                }
            ]

        }
    }
}
</script>

