import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// V.1
// /**
//  * @param {HTMLElement} el
//  */

// export function animateHeroText(el) {
//     if (!el) return;

//     document.fonts.ready.then(() => {
//         const split = SplitText.create(el, {
//             type: "words",
//             aria: "hidden",
//         });

//         gsap.from(split.words, {
//             opacity: 0,
//             duration: 2,
//             ease: "sine.out",
//             stagger: 0.1,
//         });
//     });
// }

// V.2
/**
 * @param {HTMLElement} el
 * @returns {GSAPTimeline | undefined}
 */
export function animateHeroText(el) {
    if (!el) return;

    let animation;

    document.fonts.ready.then(() => {
        gsap.set(el, { opacity: 1 });

        SplitText.create(el, {
            type: "lines,words",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                animation = gsap.from(self.lines, {
                    duration: 1.2,
                    yPercent: 100,
                    opacity: 0,
                    stagger: 0.1,
                    ease: "expo.out",
                });
            },
        });
    });

    return animation;
}
