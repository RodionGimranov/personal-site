<template>
    <div class="tech_stack_card_container commom_card_style">
        <div class="flex h-[201px] w-full items-center justify-center gap-[35px]">
            <div
                v-for="(column, columnIndex) in vueEcosystem"
                :key="columnIndex"
                class="flex h-full w-12 items-center"
                :class="`vue_ecosystem__column--${column.type}`"
            >
                <img
                    v-for="(icon, iconIndex) in column.icons"
                    :key="iconIndex"
                    class="vue_ecosystem__icon h-12 w-12"
                    :src="icon.src"
                    decoding="async"
                    referrerpolicy="no-referrer"
                    alt="vue ecosystem icon"
                    :style="{
                        '--x': icon.x,
                        '--y': icon.y,
                        '--duration': icon.duration,
                    }"
                />
            </div>
        </div>
        <div class="tech_stack_text">
            <p class="tech_stack_title">
                {{ $t("home.tech_stack_card_title_1") }}
            </p>
            <p class="tech_stack_subtitle">
                {{ $t("home.tech_stack_card_subtitle_1") }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
type VueEcosystemColumnType = "single" | "double" | "triple";

type VueEcosystemIcon = {
    src: string;
    x: string;
    y: string;
    duration: string;
};

type VueEcosystemColumn = {
    type: VueEcosystemColumnType;
    icons: VueEcosystemIcon[];
};

const vueEcosystem: VueEcosystemColumn[] = [
    {
        type: "single",
        icons: [
            {
                x: "8px",
                y: "-6px",
                duration: "18s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Vue-i18n.svg",
            },
        ],
    },
    {
        type: "double",
        icons: [
            {
                x: "-12px",
                y: "4px",
                duration: "22s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Vuetify.svg",
            },
            {
                x: "4px",
                y: "-10px",
                duration: "20s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Vuex.svg",
            },
        ],
    },
    {
        type: "triple",
        icons: [
            {
                x: "7px",
                y: "12px",
                duration: "24s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Nuxt.svg",
            },
            {
                x: "-11px",
                y: "-8px",
                duration: "19s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Vue.svg",
            },
            {
                x: "14px",
                y: "-5px",
                duration: "26s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Vite.svg",
            },
        ],
    },
    {
        type: "double",
        icons: [
            {
                x: "-9px",
                y: "15px",
                duration: "21s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Pinia.svg",
            },
            {
                x: "17px",
                y: "-14px",
                duration: "23s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Vue-use.svg",
            },
        ],
    },
    {
        type: "single",
        icons: [
            {
                x: "-20px",
                y: "7px",
                duration: "27s",
                src: "https://storage.yandexcloud.net/personal-site-assets/icons/vue-ecosystem/Vue-router.svg",
            },
        ],
    },
];
</script>

<style lang="scss">
.vue_ecosystem__column--single {
    justify-content: center;
}

.vue_ecosystem__column--double {
    flex-direction: column;
    justify-content: center;
    gap: 57px;
}

.vue_ecosystem__column--triple {
    flex-direction: column;
    justify-content: space-between;
}

@keyframes drift {
    0% {
        transform: translate3d(0, 0, 0);
    }
    20% {
        transform: translate3d(calc(var(--x) * 0.5), calc(var(--y) * -0.4), 0);
    }
    45% {
        transform: translate3d(var(--x), var(--y), 0);
    }
    70% {
        transform: translate3d(calc(var(--x) * -0.6), calc(var(--y) * 0.5), 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}

.vue_ecosystem__icon {
    animation: drift var(--duration) linear infinite;
    animation-delay: calc(var(--duration) * -0.45);
    will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
    .vue_ecosystem__icon {
        animation: none;
    }
}
</style>
