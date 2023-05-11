<template>
    <ul class="forecast-list">
        <!-- 2. Use v-for to loop over the items in the array -->
        <!-- 3. Render the data of each individual item -->
        <li class="forecast-item">
            <h3 class="forecast-title">{{ forecast.name }}</h3>
            <div class="forecast-emoji">️{{ forecast.emoji }}</div>
            <p class="forecast-text">High: {{ forecast.high }}°C</p>
            <p class="forecast-text">Low: {{ forecast.low }}°C</p>
        </li>
    </ul>
</template>

<script>
// 1. Replace the forecast object with the following data:
// [
//     {
//         "name": "Wednesday",
//         "low": 11.6,
//         "high": 14.8,
//         "emoji": "🌤️"
//     },
//     {
//         "name": "Thursday",
//         "low": 10.7,
//         "high": 14.6,
//         "emoji": "🌤️"
//     },
//     {
//         "name": "Friday",
//         "low": 10.4,
//         "high": 19,
//         "emoji": "🌤️"
//     },
//     {
//         "name": "Saturday",
//         "low": 9.5,
//         "high": 20.3,
//         "emoji": "☀️"
//     },
//     {
//         "name": "Sunday",
//         "low": 9.4,
//         "high": 20,
//         "emoji": "☀️"
//     },
//     {
//         "name": "Monday",
//         "low": 11,
//         "high": 17.1,
//         "emoji": "🌤️"
//     },
//     {
//         "name": "Tuesday",
//         "low": 8.4,
//         "high": 12.5,
//         "emoji": "🌤️"
//     }
// ]

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

