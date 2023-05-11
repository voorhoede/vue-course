<template>
    <ul class="forecast-list">
        <!-- 2. Replace the static content with dynamic content from the forecast data property -->
        <li class="forecast-item">
            <h3 class="forecast-title"></h3>
            <div class="forecast-emoji">️</div>
            <p class="forecast-text">High: °C</p>
            <p class="forecast-text">Low: °C</p>
        </li>
    </ul>
</template>

<script>
// 1. Add a data property called forecast with the following structure:
// {
//     "name": "Monday",
//     "low": 11,
//     "high": 17.1,
//     "emoji": "🌤️"
// }

export default {
    data() {
        return {}
    }
}
</script>

