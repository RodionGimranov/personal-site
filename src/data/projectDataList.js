export const projectDataList = [
    {
        id: 1,
        name: "Password Generator",
        description:
            "With Password Generator, you can create strong and random passwords for your online security needs.",
        role: "Frontend Developer, Web Designer",
        technologies: [
            { name: "HTML", color: "#E34C26" },
            { name: "SCSS", color: "#C4538C" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "Vue.js", color: "#3DD68C" },
            { name: "Vue Router", color: "#3DD68C" },
            { name: "Vue i18n", color: "#51B8AE" },
            { name: "Vue Lottie", color: "#51B8AE" },
            { name: "Vite", color: "#646CFF" },
        ],
        project_cover: new URL(
            "../assets/videos/Screencast-Password-Generator.mp4",
            import.meta.url
        ).href,
        link_to_deploy: "https://rodiongimranov.github.io/password-generator/",
    },
    {
        id: 0,
        name: "Personal Website",
        description:
            "My main personal website is a platform where users can learn about me as a Frontend Vue.js developer.",
        role: "Frontend Developer, Web Designer",
        technologies: [
            { name: "HTML", color: "#E34C26" },
            { name: "SCSS", color: "#C4538C" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "Vue.js", color: "#3DD68C" },
            { name: "Vue Router", color: "#3DD68C" },
            { name: "VueUse", color: "#51B8AE" },
            { name: "Python", color: "#4A9BDD" },
            { name: "Axios", color: "#6C40E8" },
            { name: "Matter.js", color: "#F55F5F" },
            { name: "GSAP", color: "#0AE448" },
            { name: "Vite", color: "#646CFF" },
        ],
        role: "Frontend Developer, Web Designer",
        project_cover: new URL("../assets/videos/Screencast-Personal-Website.mp4", import.meta.url)
            .href,
        link_to_deploy: "https://rodiongimranov.github.io/personal-site/#/Home",
    },
];
