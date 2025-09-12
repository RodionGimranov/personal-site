<template>
    <div class="tech_stack_card_container vue_ecosystem_card commom_card_style">
        <div class="vue_ecosystem_wrapper">
            <div class="vue_icon_bg"></div>
            <div class="vue_ecosystem_icons">
                <div class="first_line_icon">
                    <img
                        v-for="(icon, index) in firstLineIcons"
                        :key="index"
                        :src="icon.src"
                        :class="icon.class"
                    />
                </div>
                <img class="vue-icon" :src="vue_icon" />
                <div class="second_line_icon">
                    <img
                        v-for="(icon, index) in secondLineIcons"
                        :key="index"
                        :src="icon.src"
                        :class="icon.class"
                    />
                </div>
            </div>
        </div>
        <div class="tech_stack_text">
            <p class="tech_stack_title">{{ $t("message.tech_stack_card_title_1") }}</p>
            <p class="tech_stack_subtitle">{{ $t("message.tech_stack_card_subtitle_1") }}</p>
        </div>
    </div>
</template>

<script setup>
const vue_icon =
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1757435215/vue-icon_f6sqge.svg";

const firstLineIcons = [
    {
        src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1757435214/nuxt-icon_xchwwx.svg",
        class: "nuxt-icon",
    },
    {
        src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1757435216/vue-x-icon_lbzhne.svg",
        class: "vux-x-icon",
    },
    {
        src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1757435216/vue-router-icon_hn638s.svg",
        class: "vue-router-icon",
    },
];

const secondLineIcons = [
    {
        src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1757435216/vue-use-icon_pmn01m.svg",
        class: "vue-use-icon",
    },
    {
        src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1757435214/vue-i18n-icon_h5lmpx.svg",
        class: "vue-i18n-icon",
    },
];
</script>

<style lang="scss">
.tech_stack_card_container {
    width: 514px;
    height: 348px;
    padding: 22px;
    box-shadow: 0px 0px 44px $secondary_translucent_dark;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.vue_ecosystem_wrapper {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.vue_icon_bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    filter: blur(35px);
    border-radius: 100px;
    background-color: $primary_translucent_green;
}

.vue_ecosystem_icons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.first_line_icon {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 18px;

    .vux-x-icon {
        margin-bottom: 30px;
    }
}

.second_line_icon {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 60px;
}

.tech_stack_text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;
}

.tech_stack_title {
    font-size: 24px;
    font-weight: 500;
    color: $primary_dark;
}

.tech_stack_subtitle {
    font-size: 16px;
    font-weight: 400;
    color: $third_gray;
}
</style>
