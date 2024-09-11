import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BioTextAnim() {
    gsap.registerPlugin(ScrollTrigger);

    let bioTextTrigger;
    let screenWidth = window.innerWidth;

    const initAnimation = () => {
        if (window.innerWidth > 440 && !bioTextTrigger) {
            bioTextTrigger = gsap.to(".aboutMe_text span", {
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
        } else if (window.innerWidth <= 440 && bioTextTrigger) {
            bioTextTrigger.scrollTrigger.kill();
            bioTextTrigger = null;
        }
    };

    initAnimation();

    window.addEventListener("resize", () => {
        if (Math.abs(window.innerWidth - screenWidth) > 10) {
            screenWidth = window.innerWidth;
            initAnimation();
        }
    });
}
