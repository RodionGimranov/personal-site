<template>
    <div class="location_card_container common_bento_card_style">
        <div ref="mapContainer" class="map_of_city"></div>
        <div class="reset_location_container">
            <button class="reset_location_btn" @click="reserLocation">
                <SvgIcon name="reset-location-icon" width="21" height="21" />
            </button>
        </div>
        <div class="location_data_container">
            <p class="city_name">{{ $t("message.kazan_city_name") }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import mapboxgl from "mapbox-gl";

import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const mapContainer = ref(null);
const mapInstance = ref(null);

const coords = [49.122315, 55.792355];
const zoom_to = 10.5;

const reserLocation = () => {
    if (mapInstance.value) {
        mapInstance.value.flyTo({
            center: coords,
            zoom: zoom_to,
            essential: true,
        });
    }
};

onMounted(() => {
    const map = new mapboxgl.Map({
        container: mapContainer.value,
        style: import.meta.env.VITE_MAPBOX_STYLE,
        center: coords,
        zoom: zoom_to,
        projection: "globe",
        attributionControl: false,
    });

    mapInstance.value = map;

    map.on("style.load", () => {
        map.setLight({
            anchor: "viewport",
            intensity: 0.5,
        });
    });

    const markerEl = document.createElement("div");
    markerEl.className = "custom_marker_wrapper";

    const markerAnimation = document.createElement("div");
    markerAnimation.className = "custom_marker_animation";
    markerEl.appendChild(markerAnimation);

    const outer = document.createElement("div");
    outer.className = "custom_marker_outer";
    const inner = document.createElement("span");
    inner.className = "custom_marker_inner";
    outer.appendChild(inner);
    markerEl.appendChild(outer);

    new mapboxgl.Marker(markerEl).setLngLat(coords).addTo(map);
});
</script>

<style lang="scss">
.location_card_container {
    position: relative;
    width: 250px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.reset_location_container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}

.reset_location_btn {
    width: 32px;
    height: 32px;
    border-radius: 100px;
    backdrop-filter: blur(44px);
    background: $secondary_translucent_dark;

    display: flex;
    justify-content: center;
    align-items: center;
}

.map_of_city {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.location_data_container {
    padding: 6px 12px;
    border-radius: 100px;
    backdrop-filter: blur(44px);
    background: $secondary_translucent_dark;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.city_name {
    font-size: 16px;
    font-weight: 400;
    color: $primary_white;
}

.custom_marker_wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom_marker_animation {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    border-radius: 100px;
    background: $fourth_blue;
    transform: translate(-50%, -50%) scale(1);
    animation: marker_pulse 4s ease-out infinite;
}

@keyframes marker_pulse {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.9;
    }
    35% {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
    }
}

.custom_marker_outer {
    width: 28px;
    height: 28px;
    padding: 3px;
    border-radius: 100px;
    background: $primary_white;
    box-shadow:
        0 16px 31px rgba(0, 0, 0, 0.13),
        0 6px 10px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.08),
        0 10px 18px rgba(0, 0, 0, 0.099),
        0 6px 3px rgba(0, 0, 0, 0.065);

    display: flex;
    justify-content: center;
    align-items: center;
}

.custom_marker_inner {
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background: $fourth_blue;
}
// Hiding the Mapbox logo and feedback button
.map_of_city .mapboxgl-ctrl-logo,
.map_of_city .mapboxgl-ctrl-attrib {
    display: none !important;
}
.map_of_city .mapboxgl-ctrl-bottom-right {
    display: none !important;
}
</style>
