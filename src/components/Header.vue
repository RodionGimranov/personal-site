<template>
    <header class="header_container">
        <nav class="header_menu">
            <router-link
                to="/Home"
                class="header_btn_to"
                :class="{ _isActive: isActive('/Home') }"
                @click="handleNavigation('/Home')"
                >Home
            </router-link>
            <router-link
                to="/About"
                class="header_btn_to"
                :class="{ _isActive: isActive('/About') }"
                @click="handleNavigation('/About')"
                >About
            </router-link>
            <router-link
                to="/Projects"
                class="header_btn_to"
                :class="{ _isActive: isActive('/Projects') }"
                @click="handleNavigation('/Projects')"
            >
                <span class="new_project_indicator"></span>Projects
            </router-link>
            <span class="header_btn_bg" :style="bgStyle"></span>
        </nav>
    </header>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

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
    justify-content: center;
    align-items: flex-start;
}

.header_menu {
    padding: 4px;
    border-radius: 100px;
    backdrop-filter: blur(20px);
    background: $header_bg_color;

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
    color: $text_header_color;

    &:hover {
        color: $primary_white_color;
    }

    &._isActive {
        color: $primary_white_color;
    }
}

.new_project_indicator {
    width: 8px;
    height: 8px;

    margin-right: 10px;
    border-radius: 100px;
    background: $indicator_color;
}

.header_btn_bg {
    position: absolute;
    height: 40px;

    z-index: -1;
    border-radius: 100px;
    background: $header_button_bg_color;
    transition:
        width 0.3s,
        transform 0.3s;
}
</style>
