<template>
    <div
        class="common_bento_card_style commom_card_style relative flex h-62.5 w-62.5 flex-col items-start justify-between"
    >
        <div ref="mapContainer" class="map_of_city"></div>
        <div class="flex w-full items-start justify-end">
            <button
                class="_glass_effect flex h-8 w-8 items-center justify-center rounded-[100px]"
                @click="resetLocation"
            >
                <SvgIcon name="reset-location-icon" :width="21" :height="21" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import mapboxgl, { type Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

const mapContainer = ref<HTMLDivElement | null>(null);
const mapInstance = ref<Map | null>(null);

const coords = [49.122315, 55.792355] as [number, number];
const zoomTo = 11;

const resetLocation = (): void => {
    if (!mapInstance.value) return;

    mapInstance.value.flyTo({
        center: coords,
        zoom: zoomTo,
        essential: true,
    });
};

onMounted((): void => {
    if (!mapContainer.value) return;

    const map = new mapboxgl.Map({
        container: mapContainer.value,
        style: import.meta.env.VITE_MAPBOX_STYLE as string,
        center: coords,
        zoom: zoomTo,
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

    const markerEl: HTMLDivElement = document.createElement("div");
    markerEl.className = "custom_marker_wrapper";

    const markerAnimation: HTMLDivElement = document.createElement("div");
    markerAnimation.className = "custom_marker_animation";
    markerEl.appendChild(markerAnimation);

    const outer: HTMLDivElement = document.createElement("div");
    outer.className = "custom_marker_outer";

    const inner: HTMLSpanElement = document.createElement("span");
    inner.className = "custom_marker_inner";

    outer.appendChild(inner);
    markerEl.appendChild(outer);

    new mapboxgl.Marker({ element: markerEl }).setLngLat(coords).addTo(map);
});

onBeforeUnmount((): void => {
    if (!mapInstance.value) return;

    mapInstance.value.remove();
    mapInstance.value = null;
});
</script>

<style lang="scss">
.map_of_city {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.custom_marker_wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom_marker_outer {
    width: 28px;
    height: 28px;
    z-index: 10;
    padding: 3px;
    border-radius: 100px;
    background: var(--primary-white);
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
    background: var(--fourth-blue);
}

.custom_marker_animation {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    z-index: 5;
    border-radius: 100px;
    background: var(--fourth-blue);
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

.map_of_city .mapboxgl-ctrl-logo,
.map_of_city .mapboxgl-ctrl-attrib {
    display: none !important;
}
.map_of_city .mapboxgl-ctrl-bottom-right {
    display: none !important;
}
</style>
