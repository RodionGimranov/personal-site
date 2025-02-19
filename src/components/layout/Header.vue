<template>
    <header class="header_container">
        <nav class="header_menu">
            <router-link
                v-for="link in router_links"
                :key="link.path"
                :to="link.path"
                class="header_btn_to"
                :class="{ _active: isActive(link.path) }"
                @click="handleNavigation(link.path)"
            >
                <span v-if="link.indicator" class="project_indicator"></span>
                {{ link.label }}
            </router-link>
            <span class="header_btn_bg" :style="bgStyle"></span>
        </nav>
        <button class="version_button" @click="openChangelogModal">{{ latestVersion }}</button>
    </header>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import emitter from "../../eventBus";

const latestVersion = ref("2.0.12");

const openChangelogModal = () => {
    emitter.emit("show-changelog-modal");
};

const router_links = [
    { path: "/Home", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/Projects", label: "Projects", indicator: true },
];

const route = useRoute();
const router = useRouter();

const activeRoute = ref(route.path);

const handleNavigation = (path) => {
    if (activeRoute.value === path) {
        window.scrollTo(0, 0);
    } else {
        router.push(path);
    }
    activeRoute.value = path;
};

const isActive = (path) => activeRoute.value === path;

const bgStyle = computed(() => {
    switch (activeRoute.value) {
        case "/Home":
            return { width: "85.74px", transform: "translate3d(0, 0, 0)" };
        case "/About":
            return { width: "85.8px", transform: "translate3d(85.6px, 0, 0)" };
        case "/Projects":
            return { width: "124.04px", transform: "translate3d(172.1px, 0, 0)" };
        default:
            return {};
    }
});

watch(route, (newRoute) => {
    activeRoute.value = newRoute.path;
});
</script>

<style lang="scss">
.header_container {
    position: sticky;
    top: 20px;
    width: 1200px;
    z-index: 9999;

    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.header_menu {
    position: absolute;
    left: 50%;
    padding: 4px;
    border-radius: 100px;
    background: $header_bg;
    transform: translateX(-50%);
    backdrop-filter: blur(20px);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.header_btn_to {
    padding: 8px 16px;
    transition: color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 500;
    color: $text_header;

    &:hover {
        color: $primary_white;
    }

    &._active {
        color: $primary_white;
    }
}

.project_indicator {
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 100px;
    background: $primary_red;
}

.header_btn_bg {
    position: absolute;
    height: 40px;
    z-index: -1;
    border-radius: 100px;
    background: $header_button_bg;
    transition:
        width 0.3s,
        transform 0.3s;
}

.version_button {
    padding: 8px;
    transition: 0.2s;
    border-radius: 100px;
    background: $header_bg;
    backdrop-filter: blur(20px);

    font-size: 14px;
    font-weight: 500;
    color: $text_header;

    &:hover {
        background: $button_hover;
        color: $primary_white;
    }

    &:active {
        background: $button_active;
    }
}
</style>
