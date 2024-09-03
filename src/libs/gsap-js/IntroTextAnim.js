import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function IntroTextAnim() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".home_intro_text_container", {
        scrollTrigger: {
            trigger: ".home_intro_section",
            start: "top top%",
            end: "bottom 15%",
            scrub: true,
            pin: true,
            pinSpacing: false,
        },
        scale: 2,
        autoAlpha: 0,
    });
}
