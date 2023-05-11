<template>
    <ul class="forecast-list">
        <li class="forecast-item">
            <h3 class="forecast-title">{{ forecast.name }}</h3>
            <div class="forecast-emoji">️{{ forecast.emoji }}</div>
            <p class="forecast-text">High: {{ forecast.high }}°C</p>
            <p class="forecast-text">Low: {{ forecast.low }}°C</p>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            forecast: {
                "name": "Monday",
                "low": 11,
                "high": 17.1,
                "emoji": "🌤️"
            },

        }
    }
}
</script>

