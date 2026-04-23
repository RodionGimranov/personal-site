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

    "./src/components/AboutProjectPage/MetricCard.vue",
    "./src/components/aboutProjectPage/ProjectHeader.vue",
    "./src/components/aboutProjectPage/ProjectTechnologies.vue",
    "./src/components/aboutProjectPage/ProjectVideoCover.vue",

    "./src/components/homeComponents/TechStack/JsTsEnvironment.vue",
    "./src/components/homeComponents/TechStack/TechStack.vue",
    "./src/components/homeComponents/TechStack/VueEcosystem.vue",

    "./src/components/homeComponents/MyApproach.vue",
    "./src/components/homeComponents/SelectedProjects.vue",

    "./src/components/layout/modals/ChangelogModal.vue",
    "./src/components/layout/modals/ShortcutsModal.vue",

    "./src/components/layout/SideBar.vue",
    "./src/components/layout/Footer.vue",
    "./src/components/layout/MainContent.vue",

    "./src/components/ui/atoms/Badge.vue",
    "./src/components/ui/atoms/BlurMask.vue",
    "./src/components/ui/atoms/Button.vue",
    "./src/components/ui/atoms/CloseButton.vue",
    "./src/components/ui/atoms/Divider.vue",
    "./src/components/ui/atoms/Kbd.vue",
    "./src/components/ui/atoms/Skeleton.vue",
    "./src/components/ui/atoms/SvgIcon.vue",
    "./src/components/ui/atoms/TopButton.vue",

    "./src/components/ui/molecules/ProjectCard.vue",
    "./src/components/ui/molecules/ToggleTab.vue",

    "./src/components/vue-bits/TextAnimation/ShinyText.vue",

    "./src/composables/useKeyboardShortcuts.ts",
    "./src/composables/useShuffledPhotos.ts",

    "./src/constants/appConstants.ts",

    "./src/data/projects/medmedia-pro.json",
    "./src/data/projects/password-generator.json",
    "./src/data/projects/personal-website.json",
    "./src/data/projects/suzdalfest-open-premiere.json",

    "./src/data/changelogs.json",
    "./src/data/photos.json",
    "./src/data/songs.json",
    "./src/data/technologies.json",

    "./src/libs/matter-js/phycalsIcons.ts",

    "./src/locales/en/about.json",
    "./src/locales/en/global.json",
    "./src/locales/en/home.json",
    "./src/locales/en/projects.json",
    "./src/locales/ru/about.json",
    "./src/locales/ru/global.json",
    "./src/locales/ru/home.json",
    "./src/locales/ru/projects.json",
    "./src/locales/index.ts",

    "./src/plugins/pinia.ts",
    "./src/plugins/vue-i18n.ts",
    "./src/plugins/vuetify.ts",

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
    "./src/shims-vuetify.d.ts",

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

    commentLines: number;
    emptyLines: number;

    largestFiles: { file: string; lines: number }[];
    largestBySize: { file: string; sizeKB: number }[];

    fileTypes: Record<string, number>;
};

function analyzeFile(filePath: string) {
    try {
        const content = fs.readFileSync(filePath, "utf-8");
        const lines = content.split("\n");

        let commentLines = 0;
        let emptyLines = 0;

        for (const line of lines) {
            const trimmed = line.trim();

            if (!trimmed) {
                emptyLines++;
            } else if (
                trimmed.startsWith("//") ||
                trimmed.startsWith("/*") ||
                trimmed.startsWith("*")
            ) {
                commentLines++;
            }
        }

        return {
            total: lines.length,
            commentLines,
            emptyLines,
        };
    } catch {
        return { total: 0, commentLines: 0, emptyLines: 0 };
    }
}

function getProjectSize(dir: string): number {
    let total = 0;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            if (["node_modules", "dist", ".git"].includes(entry.name)) continue;
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
    let commentLines = 0;
    let emptyLines = 0;

    const folders = new Set<string>();
    const largestFiles: { file: string; lines: number }[] = [];
    const largestBySize: { file: string; sizeKB: number }[] = [];
    const fileTypes: Record<string, number> = {};

    console.log("\n📑 Counting tracked files:\n");

    TRACKED_FILES.forEach((relativePath, index) => {
        const absolutePath = path.resolve(ROOT_DIR, relativePath);

        if (!fs.existsSync(absolutePath)) {
            console.warn(`⚠ File not found: ${relativePath}`);
            return;
        }

        const analysis = analyzeFile(absolutePath);

        fileCount++;
        totalLines += analysis.total;
        commentLines += analysis.commentLines;
        emptyLines += analysis.emptyLines;

        folders.add(path.dirname(relativePath));

        largestFiles.push({
            file: path.basename(relativePath),
            lines: analysis.total,
        });

        try {
            const sizeKB = fs.statSync(absolutePath).size / 1024;
            largestBySize.push({
                file: path.basename(relativePath),
                sizeKB: Number(sizeKB.toFixed(1)),
            });
        } catch {}

        const ext = path.extname(relativePath) || "no-ext";
        fileTypes[ext] = (fileTypes[ext] || 0) + 1;

        console.log(`${index + 1}. ${path.basename(relativePath)} — ${analysis.total} lines`);
    });

    const sizeMB = getProjectSize(ROOT_DIR) / 1024 / 1024;

    largestFiles.sort((a, b) => b.lines - a.lines);
    largestBySize.sort((a, b) => b.sizeKB - a.sizeKB);

    return {
        totalLines,
        fileCount,
        folderCount: folders.size,
        projectSizeMB: Number(sizeMB.toFixed(1)),

        commentLines,
        emptyLines,

        largestFiles: largestFiles.slice(0, 5),
        largestBySize: largestBySize.slice(0, 5),

        fileTypes,
    };
}

function updateConstants(stats: Stats) {
    let content = fs.readFileSync(CONSTANTS_PATH, "utf-8");

    content = content
        .replace(
            /TOTAL_LINES_OF_CODE: number = \d+;/,
            `TOTAL_LINES_OF_CODE: number = ${stats.totalLines};`,
        )
        .replace(
            /TOTAL_FILE_COUNT: number = \d+;/,
            `TOTAL_FILE_COUNT: number = ${stats.fileCount};`,
        )
        .replace(
            /TOTAL_FOLDER_COUNT: number = \d+;/,
            `TOTAL_FOLDER_COUNT: number = ${stats.folderCount};`,
        )
        .replace(
            /PROJECT_SIZE_MB: number = [\d.]+;/,
            `PROJECT_SIZE_MB: number = ${stats.projectSizeMB};`,
        );

    fs.writeFileSync(CONSTANTS_PATH, content);

    console.log("\n✅ appConstants.ts updated\n");

    console.log(`\n📦 Project Overview:`);
    console.log(`- Lines: ${stats.totalLines}`);
    console.log(`- Files: ${stats.fileCount}`);
    console.log(`- Folders: ${stats.folderCount}`);
    console.log(`- Size: ${stats.projectSizeMB} MB`);

    const commentPercent = ((stats.commentLines / stats.totalLines) * 100).toFixed(1);
    const emptyPercent = ((stats.emptyLines / stats.totalLines) * 100).toFixed(1);

    console.log(`\n📊 Code Quality:`);
    console.log(`- Comments: ${stats.commentLines} (${commentPercent}%)`);
    console.log(`- Empty lines: ${stats.emptyLines} (${emptyPercent}%)`);

    console.log(`\n🔥 Largest files:`);
    stats.largestFiles.forEach((f, i) => console.log(`${i + 1}. ${f.file} — ${f.lines} lines`));

    console.log(`\n🐘 Largest by size:`);
    stats.largestBySize.forEach((f, i) => console.log(`${i + 1}. ${f.file} — ${f.sizeKB} KB`));

    console.log(`\n🧩 File types:`);
    Object.entries(stats.fileTypes).forEach(([ext, count]) => console.log(`${ext}: ${count}`));

    console.log();
}

function main() {
    const stats = collectStats();
    updateConstants(stats);
}

main();
