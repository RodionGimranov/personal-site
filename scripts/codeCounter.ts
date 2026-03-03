import fs from "fs";
import path from "path";

const ROOT_DIR = process.cwd();
const CONSTANTS_PATH = path.resolve(ROOT_DIR, "src/constants/appConstants.ts");

const TRACKED_FILES: string[] = [
    "./public/manifest.json",
    "./public/sprite.svg",

    "./scripts/codeCounter.ts",

    "./src/assets/tailwind.css",

    "./src/components/aboutComponents/MusicPlayerCard/MusicPlayerCard.vue",
    "./src/components/aboutComponents/MusicPlayerCard/PlayerControls.vue",
    "./src/components/aboutComponents/MusicPlayerCard/SoundWaveIndicator.vue",

    "./src/components/aboutComponents/ProjectStatsCard/CodeEditor.vue",
    "./src/components/aboutComponents/ProjectStatsCard/ProjectStatsCard.vue",
    "./src/components/aboutComponents/ProjectStatsCard/TabBar.vue",
    "./src/components/aboutComponents/ProjectStatsCard/WindowControls.vue",

    "./src/components/aboutComponents/EmptyCard.vue",
    "./src/components/aboutComponents/FigmaCard.vue",
    "./src/components/aboutComponents/GreetingCard.vue",
    "./src/components/aboutComponents/LocationCard.vue",
    "./src/components/aboutComponents/PhysicsCard.vue",

    "./src/components/aboutProjectPage/ProjectContext.vue",
    "./src/components/aboutProjectPage/ProjectDescription.vue",
    "./src/components/aboutProjectPage/ProjectHeader.vue",
    "./src/components/aboutProjectPage/ProjectResponsibilities.vue",
    "./src/components/aboutProjectPage/ProjectRole.vue",
    "./src/components/aboutProjectPage/ProjectTechnologies.vue",
    "./src/components/aboutProjectPage/ProjectVideoCover.vue",

    "./src/components/homeComponents/TechStack/JsTsEnvironment.vue",
    "./src/components/homeComponents/TechStack/TechStack.vue",
    "./src/components/homeComponents/TechStack/VueEcosystem.vue",

    "./src/components/homeComponents/BioText.vue",
    "./src/components/homeComponents/MyApproach.vue",
    "./src/components/homeComponents/SelectedProjects.vue",

    "./src/components/layout/modals/ChangelogModal.vue",
    "./src/components/layout/modals/ShortcutsModal.vue",

    "./src/components/layout/SideBar/SideBar.vue",
    "./src/components/layout/SideBar/UserInfoPanel.vue",

    "./src/components/layout/Footer.vue",
    "./src/components/layout/MainContent.vue",

    "./src/components/ui/atoms/Badge.vue",
    "./src/components/ui/atoms/BlurMask.vue",
    "./src/components/ui/atoms/Button.vue",
    "./src/components/ui/atoms/CloseButton.vue",
    "./src/components/ui/atoms/Kbd.vue",
    "./src/components/ui/atoms/Skeleton.vue",
    "./src/components/ui/atoms/SvgIcon.vue",
    "./src/components/ui/atoms/TopButton.vue",

    "./src/components/ui/molecules/ImageCard.vue",
    "./src/components/ui/molecules/ProjectCard.vue",
    "./src/components/ui/molecules/ToggleTab.vue",

    "./src/components/vue-bits/TextAnimation/ShinyText.vue",

    "./src/composables/useKeyboardShortcuts.ts",
    "./src/composables/useShuffledPhotos.ts",

    "./src/constants/appConstants.ts",

    "./src/data/changelogs.json",
    "./src/data/photos.json",
    "./src/data/projects.json",
    "./src/data/songs.json",
    "./src/data/technology.json",

    "./src/libs/matter-js/phycalsIcons.ts",

    "./src/locales/en/about.json",
    "./src/locales/en/global.json",
    "./src/locales/en/home.json",
    "./src/locales/en/projectsLocale.json",
    "./src/locales/ru/about.json",
    "./src/locales/ru/global.json",
    "./src/locales/ru/home.json",
    "./src/locales/ru/projectsLocale.json",
    "./src/locales/index.ts",

    "./src/plugins/pinia.ts",
    "./src/plugins/vue-i18n.ts",

    "./src/router/index.ts",

    "./src/stores/useModalStore.ts",
    "./src/stores/useMusicPlayerStore.ts",
    "./src/stores/usePreferencesStore.ts",
    "./src/stores/useProjectsStore.ts",

    "./src/styles/colors.css",
    "./src/styles/global.scss",
    "./src/styles/transition.scss",

    "./src/types/index.ts",
    "./src/types/music.ts",
    "./src/types/photo.ts",
    "./src/types/preferences.ts",
    "./src/types/project.ts",

    "./src/utils/formatters.ts",
    "./src/utils/getPageTitle.ts",
    "./src/utils/technologyRows.ts",

    "./src/views/AboutPage.vue",
    "./src/views/AboutProjectPage.vue",
    "./src/views/ErrorPage.vue",
    "./src/views/GalleryPage.vue",
    "./src/views/HomePage.vue",
    "./src/views/ProjectsPage.vue",

    "./src/App.vue",
    "./src/env.d.ts",
    "./src/main.ts",
    "./src/shims-vue.d.ts",

    "./index.html",
    "./package.json",
    "./postcss.config.ts",
    "./README.md",
    "./tailwind.config.ts",
    "./tsconfig.app.json",
    "./tsconfig.json",
    "./tsconfig.node.json",
    "./vite.config.ts",
];

type Stats = {
    totalLines: number;
    fileCount: number;
    folderCount: number;
    projectSizeMB: number;
};

function countLines(filePath: string): number {
    try {
        const content = fs.readFileSync(filePath, "utf-8");
        return content.split("\n").length;
    } catch {
        return 0;
    }
}

function getProjectSize(dir: string): number {
    let total = 0;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            if (entry.name === "node_modules" || entry.name === "dist" || entry.name === ".git") {
                continue;
            }

            total += getProjectSize(fullPath);
        } else {
            try {
                total += fs.statSync(fullPath).size;
            } catch {}
        }
    }

    return total;
}

function collectStats(): Stats {
    let totalLines = 0;
    let fileCount = 0;
    const folders = new Set<string>();

    console.log("\n📑 Counting tracked files:\n");

    TRACKED_FILES.forEach((relativePath, index) => {
        const absolutePath = path.resolve(ROOT_DIR, relativePath);

        if (!fs.existsSync(absolutePath)) {
            console.warn(`⚠ File not found: ${relativePath}`);
            return;
        }

        const lines = countLines(absolutePath);

        fileCount++;
        totalLines += lines;
        folders.add(path.dirname(relativePath));

        console.log(`${index + 1}. ${path.basename(relativePath)} — ${lines} lines`);
    });

    const sizeBytes = getProjectSize(ROOT_DIR);
    const sizeMB = sizeBytes / 1024 / 1024;

    return {
        totalLines,
        fileCount,
        folderCount: folders.size,
        projectSizeMB: Number(sizeMB.toFixed(1)),
    };
}

function updateConstants(stats: Stats) {
    let content = fs.readFileSync(CONSTANTS_PATH, "utf-8");

    content = content
        .replace(
            /export const TOTAL_LINES_OF_CODE: number = \d+;/,
            `export const TOTAL_LINES_OF_CODE: number = ${stats.totalLines};`,
        )
        .replace(
            /export const TOTAL_FILE_COUNT: number = \d+;/,
            `export const TOTAL_FILE_COUNT: number = ${stats.fileCount};`,
        )
        .replace(
            /export const TOTAL_FOLDER_COUNT: number = \d+;/,
            `export const TOTAL_FOLDER_COUNT: number = ${stats.folderCount};`,
        )
        .replace(
            /export const PROJECT_SIZE_MB: number = [\d.]+;/,
            `export const PROJECT_SIZE_MB: number = ${stats.projectSizeMB};`,
        );

    fs.writeFileSync(CONSTANTS_PATH, content);

    console.log("\n✅ appConstants.ts updated successfully\n");
    console.log(`📜 Lines: ${stats.totalLines}`);
    console.log(`📄 Files: ${stats.fileCount}`);
    console.log(`📂 Folders: ${stats.folderCount}`);
    console.log(`💾 Project size: ${stats.projectSizeMB} MB\n`);
}

function main() {
    const stats = collectStats();
    updateConstants(stats);
}

main();
