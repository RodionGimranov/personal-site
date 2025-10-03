<template>
    <header>
        <button @click="openSidebar">
            <SvgIcon name="burger-menu-icon" width="24" height="24" />
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
    height: 60px;
    z-index: 999;
    padding: 0 16px;
    background: $primary_white;
    border-bottom: 1px solid $third_white;

    display: none;
    justify-content: flex-end;
    align-items: center;

    button {
        height: 100%;
        color: $primary_dark;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
