import os
import time
from collections import defaultdict

def human_readable_size(size_in_bytes):
    for unit in ["B", "KB", "MB", "GB", "TB"]:
        if size_in_bytes < 1024:
            return f"{size_in_bytes:.2f} {unit}"
        size_in_bytes /= 1024
    return f"{size_in_bytes:.2f} TB"

def get_project_size(root_path):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(root_path):
        for filename in filenames:
            file_path = os.path.join(dirpath, filename)
            try:
                total_size += os.path.getsize(file_path)
            except OSError:
                pass
    return total_size

def count_lines_in_file_list(file_paths):
    total_lines = 0
    file_count = 0
    unique_dirs = set()

    extensions_counter = defaultdict(int)
    extensions_lines = defaultdict(int)
    files_stats = []

    for index, file_path in enumerate(file_paths, start=1):
        if not os.path.isfile(file_path):
            print(f"File not found: {file_path}")
            time.sleep(0.02)
            continue

        file_count += 1
        unique_dirs.add(os.path.dirname(file_path))

        _, ext = os.path.splitext(file_path)
        ext = ext.lower() if ext else "no_ext"

        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                lines = sum(1 for _ in f)

            total_lines += lines
            extensions_counter[ext] += 1
            extensions_lines[ext] += lines
            files_stats.append((lines, os.path.basename(file_path)))

            print(f"{index}. {os.path.basename(file_path)} — {lines} lines")

        except Exception as e:
            print(f"Failed to read file {file_path}: {e}")

        time.sleep(0.02)


    return {
        "total_lines": total_lines,
        "file_count": file_count,
        "dirs_count": len(unique_dirs),
        "extensions_counter": extensions_counter,
        "extensions_lines": extensions_lines,
        "files_stats": files_stats,
    }

file_paths = [
    "./public/manifest.json",
    "./public/sprite.svg",

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

    "./code_counter.py",
    "./index.html",
    "./package.json",
    "./postcss.config.ts",
    "./README.md",
    "./tailwind.config.ts",
    "./tsconfig.app.json",
    "./tsconfig.json",
    "./tsconfig.node.json",
    "./vite.config.ts"
]

print("\n📑 Code line statistics for the specified files:\n")
stats = count_lines_in_file_list(file_paths)

print("\nTOTAL for the list:\n")
print("📜 Lines:", stats["total_lines"])
print("📄 Files:", stats["file_count"])
print("📂 Folders:", stats["dirs_count"])

print("\n📦 Extensions summary:\n")
for ext, count in sorted(
    stats["extensions_counter"].items(),
    key=lambda x: x[1],
    reverse=True
):
    percent = (count / stats["file_count"]) * 100
    label = ext if ext != "no_ext" else "(no extension)"

    print(f"  {label} — {count} files ({percent:.1f}%)")

print("\n🧠 Top 5 largest files by line count:\n")
for lines, name in sorted(stats["files_stats"], reverse=True)[:5]:
    print(f"  {name} — {lines} lines")

project_size = get_project_size(".")
print("\n💾 Total project size:", human_readable_size(project_size))