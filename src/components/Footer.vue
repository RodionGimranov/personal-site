<template>
    <footer class="footer_container">
        <section class="changelog_button_container">
            <router-link to="/Changelog" class="routerToChangelog"
                >{{ latestUpdateMsg }}
                <svg
                    class="arrow_to_changelog"
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 15L9.87752 9.31068C10.4302 8.91152 10.4302 8.08848 9.87752 7.68932L2 2"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                </svg>
            </router-link>
        </section>
        <section class="media_container">
            <div class="footer_first_block">
                <p class="footer_copyright footer_text">
                    © 2024 Rodion Gimranov. All Rights Reserved.
                </p>
                <p class="footer_credits footer_text">
                    Made with love and countless cups of coffee.
                </p>
            </div>
            <div class="footer_second_block">
                <div class="footer_social_container">
                    <a
                        href="https://github.com/RodionGimranov"
                        class="social_link footer_text"
                        target="_blank"
                        >GitHub
                    </a>
                    <a
                        href="https://t.me/RodionGimranov"
                        class="social_link footer_text"
                        target="_blank"
                        >Telegram
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rodiongimranov/"
                        class="social_link footer_text"
                        target="_blank"
                        >LinkedIn
                    </a>
                </div>
                <p class="local_time footer_text">Local time: {{ localTime }}</p>
            </div>
        </section>
    </footer>
</template>

<script setup>
import { ref } from "vue";

const latestUpdateMsg = ref("Last updated on September 3, 2024");
const localTime = ref();

const updateLocalTime = async () => {
    const timeZone = "Europe/Moscow";
    const options = {
        timeZone: timeZone,
        hour12: false,
        hour: "numeric",
        minute: "2-digit",
    };
    localTime.value = new Date().toLocaleTimeString("ru-RU", options);
};

updateLocalTime();
setInterval(updateLocalTime, 60000);
</script>

<script script></script>

<style lang="scss">
.footer_container {
    width: 1200px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 100px;
}

.changelog_button_container {
    width: 100%;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.routerToChangelog {
    transition: 0.2s;
    padding: 6px 12px;
    border-radius: 100px;
    background: $button_default_color;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    font-size: 20px;
    font-weight: 400;
    color: $text_gray_color;

    &:hover {
        gap: 10px;
        color: $primary_white_color;
        background: $button_hover_color;
    }

    &:active {
        background: $button_active_color;
    }
}

.arrow_to_changelog {
    fill: none;
    transition: 0.2s;
    stroke: #949494;
    will-change: margin-left;
}

.routerToChangelog:hover .arrow_to_changelog {
    stroke: $primary_white_color;
}

.media_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer_first_block,
.footer_second_block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.footer_second_block {
    align-items: flex-end;
}

.footer_text {
    font-size: 16px;
    font-weight: 400;
    color: $text_gray_color;
}

.social_link {
    transition: 0.2s;
    display: flex;
    align-items: center;

    &:hover {
        color: $primary_white_color;
    }
}

.footer_social_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
}
</style>
