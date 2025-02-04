<template>
    <div class="location_block_container">
        <img class="map_image" :src="kazanMap" alt="Map of Kazan" />
        <div class="location_panel_container">
            <div class="time_date_block">
                <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="1"
                        width="40"
                        height="40"
                        rx="20"
                        stroke="white"
                        stroke-width="2"
                    />
                    <rect ref="hourHand" x="20" y="10" width="2" height="12" rx="1" fill="white" />
                    <rect
                        ref="minuteHand"
                        x="20"
                        y="8"
                        width="2"
                        height="14"
                        rx="1"
                        fill="#E26A65"
                    />
                    <rect x="19" y="19" width="4" height="4" rx="2" fill="white" />
                </svg>

                <div class="date_block">
                    <p class="location_title">Kazan</p>
                    <p class="date_title">{{ formattedDate }}</p>
                </div>
            </div>
            <p class="weather_title">{{ temp }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import axios from "axios";

import kazanMap from "../../assets/images/webp/map-of-Kazan.webp";

const temp = ref(null);
const formattedDate = ref("");
const hourHand = ref(null);
const minuteHand = ref(null);

const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

const updateTime = () => {
    const now = new Date();
    const moscowTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }));

    const dayOfWeek = moscowTime.toLocaleString("en-GB", { weekday: "long" });
    const dayOfMonth = moscowTime.getDate();
    const dayWithSuffix = `${dayOfMonth}${getDaySuffix(dayOfMonth)}`;
    formattedDate.value = `${dayOfWeek} ${dayWithSuffix}`;

    const minutes = moscowTime.getMinutes();
    const hours = moscowTime.getHours() % 12;

    const minuteAngle = minutes * 6;
    if (minuteHand.value) {
        minuteHand.value.setAttribute("transform", `rotate(${minuteAngle} 21 21)`);
    }

    const hourAngle = (hours + minutes / 60) * 30;
    if (hourHand.value) {
        hourHand.value.setAttribute("transform", `rotate(${hourAngle} 21 21)`);
    }
};

const getWeather = async () => {
    try {
        const apiKey = "07c390726d58866f39e5d7b4a76f2e00";
        const city = "Kazan";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await axios.get(url);
        temp.value = `${Math.round(response.data.main.temp)}°`;
    } catch (error) {
        console.error(
            "Error fetching weather data:",
            error.response ? error.response.data : error.message
        );
        temp.value = "N/A";
    }
};

onMounted(() => {
    updateTime();
    getWeather();
    const interval = setInterval(updateTime, 60000);
    onBeforeUnmount(() => clearInterval(interval));
});
</script>

<style lang="scss">
.location_block_container {
    position: relative;
    width: 326px;
    height: 326px;
    overflow: hidden;
    border-radius: 40px;
    background: $secondary_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
}

.map_image {
    width: 100%;
    height: 100%;
}

.location_panel_container {
    position: absolute;
    left: 0px;
    bottom: 12px;
    width: calc(100% - 12px);
    height: 60px;
    margin-left: 6px;
    padding: 9px 12px;
    border-radius: 100px;
    backdrop-filter: blur(20px);
    background: $location_panel_bg;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.time_date_block {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
}

.location_title,
.weather_title {
    margin-top: 3px;
    font-size: 20px;
    font-weight: 400;
    color: $primary_white;
}

.date_title {
    font-size: 14px;
    font-weight: 300;
    color: $fourth_gray;
}
</style>
