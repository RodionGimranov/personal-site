<template>
    <div class="tech_stack_card_container commom_card_style">
        <div class="w-full h-50.25 flex justify-center items-center gap-8.75">
            <div
                v-for="(column, columnIndex) in vueEcosystem"
                :key="columnIndex"
                class="w-12 h-full flex items-center"
                :class="`vue_ecosystem__column--${column.type}`"
            >
                <img
                    v-for="(icon, iconIndex) in column.icons"
                    :key="iconIndex"
                    class="vue_ecosystem__icon w-12 h-12"
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
                {{ $t("message.tech_stack_card_title_1") }}
            </p>
            <p class="tech_stack_subtitle">
                {{ $t("message.tech_stack_card_subtitle_1") }}
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
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661675/favicon_1_dq62lq.svg",
                x: "8px",
                y: "-6px",
                duration: "18s",
            },
        ],
    },
    {
        type: "double",
        icons: [
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661676/favicon_8_wcgs7e.svg",
                x: "-12px",
                y: "4px",
                duration: "22s",
            },
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661674/favicon_10_vkejor.svg",
                x: "4px",
                y: "-10px",
                duration: "20s",
            },
        ],
    },
    {
        type: "triple",
        icons: [
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661677/favicon_6_l79pfo.svg",
                x: "7px",
                y: "12px",
                duration: "24s",
            },
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661674/favicon_9_tvxms2.svg",
                x: "-11px",
                y: "-8px",
                duration: "19s",
            },
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661826/favicon_12_pc3ow0.svg",
                x: "14px",
                y: "-5px",
                duration: "26s",
            },
        ],
    },
    {
        type: "double",
        icons: [
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661674/favicon_7_hjwiat.svg",
                x: "-9px",
                y: "15px",
                duration: "21s",
            },
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661675/favicon_11_epmxpz.svg",
                x: "17px",
                y: "-14px",
                duration: "23s",
            },
        ],
    },
    {
        type: "single",
        icons: [
            {
                src: "https://res.cloudinary.com/dii7e7hu0/image/upload/v1765661676/favicon_5_r8esuk.svg",
                x: "-20px",
                y: "7px",
                duration: "27s",
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
