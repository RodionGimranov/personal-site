export const updateDataList = [
    {
        id: 1,
        version: "#14",
        date: "November 1, 2024",
        description: [
            {
                title: "new changelog design",
                text: [
                    "After some time, I decided to move away from using a popup for the changelog. Now, the changelog is back on a dedicated page with a refined design and more detailed update descriptions - sometimes even including photos and videos.",
                ],
            },
            {
                title: "bug fixes and improvements",
                text: [
                    "- fixed minor technical and visual bugs",
                    "- fixed issues with the drop-shadow display when hovering over skill cards",
                    "- the logic for displaying project cards has been consolidated into a single component",
                ],
            },
            {
                title: "other updates",
                text: ["- updated the site’s favicon", "- updated videos for project cards"],
            },
        ],
    },
    {
        id: 0,
        version: "#13",
        date: "August 1, 2024",
        description: [
            {
                title: "new features and components",
                text: [
                    "- added a 'New Project' indicator in the site header",
                    "- introduced an Action Menu to improve site interactions",
                    "- enhanced project cards: clicking now opens a detailed project info window",
                ],
            },
            {
                title: "performance and UX/UI improvements",
                text: [
                    "- complete rebuild of the website using Vue.js for better performance and scalability",
                    "- significant improvements to UX/UI across the site",
                    "- optimized modal window logic and functionality",
                ],
            },
        ],
    },
];
