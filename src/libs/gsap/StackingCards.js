import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useStackingCards() {
    const techSection = ref(null);
    const card2 = ref(null);

    const initAnimations = () => {
        if (window.innerWidth < 768) return;

        const scroller = document.querySelector(".scrolled_content");
        if (!techSection.value || !scroller) return;

        gsap.fromTo(
            card2.value,
            { y: 100 },
            {
                y: -300,
                ease: "none",
                scrollTrigger: {
                    trigger: techSection.value,
                    scroller,
                    start: "top",
                    end: "bottom",
                    scrub: true,
                },
            },
        );

        ScrollTrigger.create({
            trigger: techSection.value,
            scroller,
            start: "top",
            end: "bottom",
            pin: true,
            pinSpacing: true,
        });
    };

    const handleResize = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        initAnimations();
    };

    onMounted(() => {
        initAnimations();
        window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    });

    return { techSection, card2 };
}
