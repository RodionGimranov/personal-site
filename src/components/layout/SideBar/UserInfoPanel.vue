<template>
    <div class="user_info_container">
        <img class="user_image" :src="myProfileImage" alt="user image" />
        <div class="user_info_text_wrapper">
            <p class="user_name">{{ $t("message.my_name_title") }}</p>
            <p class="user_role">{{ $t("message.my_role_title") }}</p>
        </div>
    </div>
</template>

<script setup>
import myProfileImage from "@/assets/images/my-profile-image.webp";
</script>

<style lang="scss">
.user_info_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
}

.user_image {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 100px;
    background: var(--secondary-white);

    display: flex;
    justify-content: center;
    align-items: center;
}

.user_info_text_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.user_name {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-dark);
}

.user_role {
    font-size: 14px;
    font-weight: 400;
    color: var(--third-gray);
}
</style>
