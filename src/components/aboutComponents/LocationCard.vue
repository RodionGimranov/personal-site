<template>
    <div class="location_card_container commom_card_style">
        <img class="map_of_city" :src="mapSrc" alt="Map of city" />
        <div class="location_data_container">
            <div class="city_date_container">
                <p class="city_weather_title">{{ $t("message.kazan_city_name") }}</p>
                <p class="date_title">{{ formattedDate }}</p>
            </div>
            <p class="city_weather_title">{{ temperature }}°</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const LAT = 55.7963;
const LON = 49.1088;

const temperature = ref(null);

const mapSrc = computed(() => {
    return `/personal-site-beta/images/maps/kazan-map-${locale.value}.webp`;
});

async function fetchWeather() {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}&lang=${locale.value}`,
        );
        const data = await res.json();
        temperature.value = Math.round(data.main.temp);
    } catch (error) {
        console.error("Ошибка загрузки погоды:", error);
    }
}

const formattedDate = computed(() => {
    const now = new Date();
    return new Intl.DateTimeFormat(locale.value, {
        day: "numeric",
        month: "long",
    }).format(now);
});

onMounted(() => {
    fetchWeather();
});
</script>

<style lang="scss">
.location_card_container {
    position: relative;
    width: 326px;
    height: 326px;
    padding: 8px;

    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-end;
}

.map_of_city {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

.location_data_container {
    width: 100%;
    padding: 8px 16px;
    border-radius: 100px;
    background: $fourth_dark;
    backdrop-filter: blur(22px);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.city_date_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.city_weather_title {
    font-size: 18px;
    font-weight: 400;
    color: $primary_white;
}

.date_title {
    font-size: 12px;
    font-weight: 400;
    color: $primary_white;
    line-height: 14px;
    opacity: 60;
}
</style>
