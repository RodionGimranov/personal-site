<template>
    <div class="gallery_page_wrapper">
        <div class="masonry_container">
            <div
                v-for="(image, index) in images"
                :key="index"
                class="masonry_item commom_card_style"
            >
                <img class="gallery_image_item" :src="image" alt="Gallery image" />
            </div>
        </div>
    </div>
</template>

<script setup>
// const images = [
//     Add links
// ];
</script>

<style lang="scss">
.gallery_page_wrapper {
    width: 100%;
    padding: 16px;
}

.masonry_container {
    column-count: 4;
    column-gap: 16px;
}

.masonry_item {
    // or 16px
    border-radius: 16px;
    margin-bottom: 16px;
    break-inside: avoid;
}

.gallery_image_item {
    width: 100%;
    display: block;
}
</style>
