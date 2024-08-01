import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function gsapAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".aboutMe_text span", {
        scrollTrigger: {
            trigger: ".home_filling_text_section",
            start: "top 35%",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
        },
        ease: "none",
        immediateRender: false,
        backgroundSize: "100% 100%",
    });
}
