import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollAnim() {
    gsap.registerPlugin(ScrollTrigger);

    let triggers = []; 

    function initAnimations() {
        triggers.forEach((trigger) => trigger.kill());
        triggers = [];

        if (window.innerWidth > 1040) {
            gsap.utils.toArray(".anim_section").forEach((section) => {
                let trigger = ScrollTrigger.create({
                    trigger: section,
                    start: "top 75%",
                    end: "bottom 75%",
                    scrub: 0.5,
                    animation: gsap.fromTo(
                        section,
                        {
                            scale: 0.7,
                            opacity: 0.2,
                            y: 35,
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            ease: "power2.out",
                        }
                    ),
                });
                triggers.push(trigger); 
            });
        }
    }

    window.addEventListener("resize", initAnimations);
    initAnimations();
}
