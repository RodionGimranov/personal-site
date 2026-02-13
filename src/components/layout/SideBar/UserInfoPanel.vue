<template>
    <div class="flex justify-center items-center gap-1.5">
        <img
            class="w-12 h-12 overflow-hidden rounded-[100px] bg-secondary-white flex justify-center items-center"
            :src="myProfileImage"
            alt="user image"
        />
        <div class="flex flex-col justify-start items-start">
            <p class="text-base font-semibold text-primary-dark">
                {{ $t("global.my_name_title") }}
            </p>
            <p class="text-sm font-normal text-third-gray">
                {{ $t("global.my_role_title") }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import myProfileImage from "@/assets/images/my-profile-image.webp";
</script>

<style lang="scss"></style>
