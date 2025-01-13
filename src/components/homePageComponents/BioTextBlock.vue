<template>
    <section class="home_filling_text_section">
        <div class="home_about_me_text">
            <h2 class="aboutMe_text">
                <span>
                    Hi, I’m Rodion a Frontend Developer currently studying in my fourth year at KFU
                    ICMIT. I specialize in developing web solutions, paying close attention to
                    design details, and applying modern approaches in web technologies.
                </span>
            </h2>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import { BioTextAnim } from "../../libs/gsap-js/BioTextAnim.js";

onMounted(() => {
    BioTextAnim();
});
</script>

<style lang="scss">
.home_filling_text_section {
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home_about_me_text {
    width: 100%;
    text-align: center;
}

.home_about_me_text span {
    font-size: 40px;
    font-weight: 600;
    color: hsl(0 0% 100% / 0.2);

    background-clip: text;
    background-size: 0% 100%;
    will-change: background-size;
    background-repeat: no-repeat;
    background-image: linear-gradient(90deg, $primary_white, $primary_white);
}
</style>
