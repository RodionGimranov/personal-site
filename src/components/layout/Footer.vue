<template>
    <footer class="footer_container">
        <section class="media_container">
            <div class="footer_first_block">
                <p class="footer_credits footer_text">
                    Made with love and countless cups of coffee.
                </p>
                <p class="footer_copyright footer_text">
                    © 2024 Rodion Gimranov. All Rights Reserved.
                </p>
            </div>
            <div class="footer_second_block">
                <div class="footer_social_container">
                    <a
                        v-for="(social, index) in social_info"
                        :key="index"
                        :href="social.link"
                        class="social_link footer_text"
                        target="_blank"
                    >
                        {{ social.name }}
                    </a>
                </div>
                <p class="local_time footer_text">Local time: {{ localTime }}</p>
            </div>
        </section>
    </footer>
</template>

<script setup>
import { ref } from "vue";

const localTime = ref();

const social_info = [
    { name: "GitHub", link: "https://github.com/RodionGimranov" },
    { name: "Telegram", link: "https://t.me/RodionGimranov" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/rodiongimranov/" },
];

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

<style lang="scss">
.footer_container {
    width: 1200px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.changelog_button_container {
    width: 100%;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
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
    color: $third_gray;
}

.social_link {
    transition: 0.2s;
    display: flex;
    align-items: center;

    &:hover {
        color: $primary_white;
    }
}

.footer_social_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
}
</style>
