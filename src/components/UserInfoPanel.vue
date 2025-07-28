<template>
    <div class="user_info_container">
        <img class="user_image" :src="user_image" alt="user image" />
        <div class="user_info_text_wrapper">
            <p class="user_name">{{ $t(user_name) }}</p>
            <p class="user_role">{{ $t(user_role) }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    user_name: { type: String, default: "User Name" },
    user_role: { type: String, default: "User Role" },
    user_image: { type: String, default: "" },
});
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
    background: $secondary_white;

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
    color: $primary_dark;
}

.user_role {
    font-size: 14px;
    font-weight: 400;
    color: $third_gray;
}
</style>
