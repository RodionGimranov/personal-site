<template>
    <button class="close_btn" @click="closeModal">
        <SvgIcon name="cross-icon" />
    </button>
</template>

<script setup>
import SvgIcon from "@/components/ui/Icons/SvgIcon.vue";

const props = defineProps({
    action: {
        type: Function,
        required: true,
    },
});

const closeModal = () => {
    props.action();
};
</script>

<style lang="scss">
.close_btn {
    width: 28px;
    height: 28px;
    padding: 4px;
    transition: 0.2s;
    border-radius: 100px;
    background: $fourth_gray;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: $third_white;
    }
}
</style>
