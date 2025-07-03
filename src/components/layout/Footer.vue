<template>
    <footer>
        <div class="footer_first_row">
            <div class="footer_logo_block">
                <HomeButton variant="dark" />
                <p class="footer_text">{{ $t("message.footer_madeWithLove_text") }}</p>
            </div>
            <p class="footer_text">{{ $t("message.footer_copyright_text") }}</p>
        </div>
        <div class="footer_second_row">
            <div class="link_block" v-for="(section, index) in linkSections" :key="index">
                <p class="link_text link_block_title">{{ $t(section.title) }}</p>
                <template v-for="(link, i) in section.items" :key="i">
                    <RouterLink v-if="link.path" :to="link.path" class="link_text link_block_item">
                        {{ $t(link.name) }}
                    </RouterLink>
                    <button
                        v-else-if="link.action"
                        @click="handleAction(link.action)"
                        class="link_text link_block_item"
                    >
                        {{ $t(link.name) }}
                    </button>
                    <a
                        v-else-if="link.url"
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link_text link_block_item"
                    >
                        {{ link.name }}
                    </a>
                </template>
            </div>
        </div>
    </footer>
</template>

<script setup>
import HomeButton from "@/components/ui/Button/HomeButton.vue";

const linkSections = [
    {
        title: "message.navigation_footer_section_title",
        items: [
            { name: "message.home_btn_title", path: "/Home" },
            { name: "message.about_btn_title", path: "/About" },
            { name: "message.projects_btn_title", path: "/Prolects" },
            { name: "message.changelog_btn_title", action: "openChangelogModal" },
        ],
    },
    {
        title: "message.social_footer_section_title",
        items: [
            { name: "GitHub", url: "https://github.com/RodionGimranov" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/rodiongimranov/" },
            { name: "Telegram", url: "https://t.me/RodionGimranov" },
            { name: "Instagram", url: "https://www.instagram.com/esta_laowai/" },
        ],
    },
];

function handleAction(action) {
    console.log("For test");
}
</script>

<style lang="scss">
footer {
    width: 100vw;
    padding: 60px;
    background: $primary_dark;
    border-radius: 60px 60px 0 0;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer_first_row {
    height: 166px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.footer_logo_block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.footer_text {
    font-size: 14px;
    font-weight: 400;
    color: $secondary_gray;
}

.footer_second_row {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 50px;
}

.link_block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
}

.link_text {
    font-size: 14px;
    font-weight: 400;
}

.link_block_title {
    margin-bottom: 6px;
    color: $secondary_gray;
}

.link_block_item {
    color: $primary_white;

    &:hover {
        color: $secondary_gray;
    }
}
</style>
