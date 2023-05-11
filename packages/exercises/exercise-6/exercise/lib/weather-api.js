function getEmojiForTemperature(temperature) {
    if (temperature < 5) {
        return "❄️";
    } else if (temperature < 20) {
        return "🌤️";
    } else {
        return "☀️";
    }
}

function formatWeatherData({ time, temperature_2m_min, temperature_2m_max }) {
    return time.map((date, index) => ({
        name: new Date(date).toLocaleDateString('en-en', { weekday: "long" }),
        low: temperature_2m_min[index],
        high: temperature_2m_max[index],
        emoji: getEmojiForTemperature(temperature_2m_max[index]),
    }));
}

export async function fetchDailyForecast() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.25626453975838&longitude=5.659301757811846&daily=temperature_2m_min&daily=temperature_2m_max&timezone=CET");
    const weatherResponse = await response.json();

    return formatWeatherData(weatherResponse.daily);
}
