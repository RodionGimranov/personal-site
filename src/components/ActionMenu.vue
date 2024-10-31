<template>
    <div class="action_menu" ref="actionMenuRef">
        <div class="action_menu_button" :class="{ _active: isActive }" @click="showDropDown">
            <span class="dot_menu" v-for="dots in 3" :key="dots"></span>
        </div>
        <div v-if="dropDownOpen" class="dropdown_menu_container">
            <router-link to="/ChangelogPage" class="action_item_btn">Changelog</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const dropDownOpen = ref(false);
const isActive = ref(false);
const actionMenuRef = ref(null);

const showDropDown = () => {
    dropDownOpen.value = !dropDownOpen.value;
    isActive.value = !isActive.value;
};

const closeDropDown = () => {
    dropDownOpen.value = false;
    isActive.value = false;
};

const handleKeydown = (event) => {
    if (event.key === "Escape") {
        closeDropDown();
    }
};

const handleClickOutside = (event) => {
    if (actionMenuRef.value && !actionMenuRef.value.contains(event.target)) {
        closeDropDown();
    }
};

onMounted(() => {
    const button = document.querySelector(".action_menu_button");
    const dots = document.querySelectorAll(".dot_menu");

    function resetAnimation() {
        dots.forEach((dot) => {
            dot.style.animation = "none";
            dot.offsetHeight;
            dot.style.animation = "";
        });
    }

    button.addEventListener("mouseenter", () => {
        resetAnimation();
        dots.forEach((dot, index) => {
            dot.style.animation = `dot-anim 0.5s ease-in-out ${index * 0.1}s forwards`;
        });
    });

    button.addEventListener("mouseleave", () => {
        dots.forEach((dot) => {
            dot.style.animationPlayState = "running";
        });
    });

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss">
.action_menu {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 5px;
}

.action_menu_button {
    width: 48px;
    height: 48px;

    cursor: pointer;
    transition: 0.2s;
    border-radius: 100px;
    background: $header_bg;
    backdrop-filter: blur(20px);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    &:hover {
        background: $button_hover;
    }

    &._active {
        background: $button_active;
    }
}

.dot_menu {
    width: 6px;
    height: 6px;

    transition: 0.2s;
    border-radius: 100px;
    background: $primary_white;
}

.action_menu_button:hover .dot_menu {
    animation: dot-anim 0.5s ease-in-out;
}

@keyframes dot-anim {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
    100% {
        transform: translateY(0);
    }
}

.action_menu_button:hover .dot_menu:nth-child(1) {
    animation-delay: 0s;
}

.action_menu_button:hover .dot_menu:nth-child(2) {
    animation-delay: 0.1s;
}

.action_menu_button:hover .dot_menu:nth-child(3) {
    animation-delay: 0.2s;
}

.dropdown_menu_container {
    position: absolute;
    width: 150px;
    top: 53px;
    padding: 6px;
    border-radius: 20px;
    background: $header_bg;
    backdrop-filter: blur(20px);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.action_item_btn {
    width: 100%;
    cursor: pointer;
    transition: 0.2s;
    padding: 10px 16px;
    border-radius: 14px;

    font-size: 18px;
    font-weight: 500;
    color: $primary_white;
    text-align: left;

    &:hover {
        background: $button_hover;
    }

    &:active {
        background: $button_active;
    }
}
</style>
