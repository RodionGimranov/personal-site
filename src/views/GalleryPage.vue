<template>
    <div class="gallery_page_wrapper">
        <div class="masonry_container">
            <div
                v-for="(image, index) in images"
                :key="index"
                class="masonry_item commom_card_style"
            >
                <img class="gallery_image_item" :src="image" alt="Gallery image" loading="lazy" />
            </div>
        </div>
    </div>
</template>

<script setup>
const images = [
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964009/IMG_9794_flqlfc.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964008/IMG_9948_yxa0xw.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964008/IMG_9041_dny535.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964007/IMG_2592_a4lc1v.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964008/IMG_3419_csokwn.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964007/IMG_0653_nkkwe1.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964007/IMG_9327_rln2nr.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964006/IMG_6454_qu7meu.jpg",
    "https://res.cloudinary.com/dii7e7hu0/image/upload/v1755964007/IMG_7262_i3ggrw.jpg",
];
</script>

<style lang="scss">
.gallery_page_wrapper {
    width: 100%;
    padding: 16px;
    margin-bottom: 140px;
}

.masonry_container {
    column-count: 4;
    column-gap: 16px;
}

.masonry_item {
    border-radius: 16px;
    margin-bottom: 16px;
    break-inside: avoid;
}

.gallery_image_item {
    width: 100%;
    display: block;
}
</style>
