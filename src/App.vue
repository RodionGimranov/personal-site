<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style lang="scss">
body {
    width: 100vw;
    height: 100vh;
    min-width: 320px;
    overflow-x: hidden;
    overflow-y: scroll;
    background: $primary_white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
    color: $primary_dark;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    line-height: 20px;
}
</style>
