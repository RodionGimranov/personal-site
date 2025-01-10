import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollAnim() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".anim_section").forEach((section) => {
        gsap.fromTo(
            section,
            {
                scale: 0.7,
                opacity: 0.2,
                duration: 0.3,
                y: 35,
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    end: "bottom 75%",
                    scrub: 0.5,
                },
            }
        );
    });
}
