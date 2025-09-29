<template>
    <header>
        <button @click="openSidebar">
            <SvgIcon name="burger-menu-icon" width="20" height="8" />
        </button>
    </header>
</template>

<script setup>
import { useStore } from "vuex";
import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";

const store = useStore();

const openSidebar = () => {
    store.commit("layout/TOGGLE_SIDEBAR");
};
</script>

<style lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;

    display: none;
    // justify-content: flex-end;
    justify-content: flex-start;
    align-items: center;

    button {
        width: 48px;
        height: 48px;
        color: $primary_dark;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
