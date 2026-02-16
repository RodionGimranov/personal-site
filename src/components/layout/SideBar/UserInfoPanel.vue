<template>
    <div class="flex items-center justify-center gap-1.5">
        <img
            class="bg-secondary-white flex h-12 w-12 items-center justify-center overflow-hidden rounded-[100px]"
            :src="myProfileImage"
            alt="user image"
        />
        <div class="flex flex-col items-start justify-start">
            <p class="text-primary-dark text-base font-semibold">
                {{ $t("global.my_name_title") }}
            </p>
            <p class="text-third-gray text-sm font-normal">
                {{ $t("global.my_role_title") }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import myProfileImage from "@/assets/images/my-profile-image.webp";
</script>

<style lang="scss"></style>
