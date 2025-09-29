<template>
    <div class="commnon_modal_container">
        <div class="background_modal_style common_modal_style" ref="modalRef">
            <div class="modal_header"><CloseButton :action="closeBackgroundModal" /></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { onClickOutside } from "@vueuse/core";

import { useEscapeKeyClose } from "@/composables/useEscapeKey.js";

const store = useStore();

const modalRef = ref(null);

import CloseButton from "@/components/ui/buttons/CloseButton.vue";

function closeBackgroundModal() {
    store.commit("layout/CLOSE_BACKGROUND_MODAL");
}

onMounted(() => {
    onClickOutside(modalRef, closeBackgroundModal);
});

useEscapeKeyClose(() => {
    closeBackgroundModal();
});
</script>

<style lang="scss">
.background_modal_style {
    width: 400px;
    height: 200px;
}
</style>
