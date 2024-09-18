<template>
    <footer class="footer_container">
        <section class="changelog_button_container">
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
    gap: 50px;
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
