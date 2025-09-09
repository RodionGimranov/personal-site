import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useStackingCards() {
    const techSection = ref(null);
    const card1 = ref(null);
    const card2 = ref(null);

    onMounted(() => {
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
                    scroller: scroller,
                    start: "top",
                    end: "bottom",
                    scrub: true,
                },
            },
        );

        ScrollTrigger.create({
            trigger: techSection.value,
            scroller: scroller,
            start: "top",
            end: "bottom ",
            pin: true,
            pinSpacing: true,
        });
    });

    return { techSection, card1, card2 };
}
