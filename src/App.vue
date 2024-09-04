<template>
    <Header v-if="!$route.meta.hideHeader" />
    <router-view />
    <Footer v-if="!$route.meta.hideFooter" />
</template>

<script setup>
import { RouterView } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
body {
    width: 100vw;
    height: 100vh;
    min-width: 320px;

    padding: 20px;
    overflow-x: hidden;
    overflow-y: scroll;
    background: $primary_bg;

    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: $primary_white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>
