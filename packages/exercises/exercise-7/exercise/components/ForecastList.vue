<template>
    <ul class="forecast-list">
        <!-- 1. Move <li> into separate <ForecastItem> component -->
        <!-- 2. Replace with <slot> -->
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
    // 3. Remove these props definitions
    props: {
        forecast: {
            type: Array,
            validator(value) {
                return value.every(day => {
                    return (
                        typeof day.name === "string" &&
                        typeof day.emoji === "string" &&
                        typeof day.high === "number" &&
                        typeof day.low === "number"
                    )
                })
            },
            default: () => []
        }
    }
}
</script>

