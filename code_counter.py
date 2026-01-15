import os
import time

def human_readable_size(size_in_bytes):
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if size_in_bytes < 1024:
            return f"{size_in_bytes:.2f} {unit}"
        size_in_bytes /= 1024
    return f"{size_in_bytes:.2f} TB"

def count_lines_in_file_list(file_paths):
    total_lines = 0
    unique_dirs = set()
    file_count = 0

    for index, file_path in enumerate(file_paths, start=1):
        if not os.path.isfile(file_path):
            print(f"File not found: {file_path}")
            time.sleep(0.02)
            continue
        
        file_count += 1
        unique_dirs.add(os.path.dirname(file_path))  

        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                lines = sum(1 for _ in f)
                total_lines += lines
                file_name = os.path.basename(file_path) 
                print(f"{index}. {file_name} - {lines} lines")
        except Exception as e:
            print(f"Failed to read file {file_path}: {e}")
        
        time.sleep(0.02)

    return total_lines, file_count, len(unique_dirs)

def get_project_size(root_path):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(root_path):
        for filename in filenames:
            file_path = os.path.join(dirpath, filename)
            try:
                total_size += os.path.getsize(file_path)
            except:
                pass
    return total_size


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

    "./src/components/layout/SideBar/SideBar.vue",
    "./src/components/layout/SideBar/UserInfoPanel.vue",

    "./src/components/layout/ChangelogModal.vue",
    "./src/components/layout/Footer.vue",
    "./src/components/layout/MainContent.vue",

    "./src/components/ui/atoms/Badge.vue",
    "./src/components/ui/atoms/BlurMask.vue",
    "./src/components/ui/atoms/Button.vue",
    "./src/components/ui/atoms/CloseButton.vue",
    "./src/components/ui/atoms/Skeleton.vue",
    "./src/components/ui/atoms/SvgIcon.vue",
    "./src/components/ui/atoms/TopButton.vue",

    "./src/components/ui/molecules/ImageCard.vue",
    "./src/components/ui/molecules/ProjectCard.vue",
    "./src/components/ui/molecules/ToggleTab.vue",

    "./src/components/vue-bits/TextAnimation/ShinyText.vue",

    "./src/composables/useEscapeKey.js",
    "./src/composables/useScrollToTop.js",
    "./src/composables/useShuffledPhotos.js",

    "./src/constants/appConstants.js",

    "./src/data/changelogs.json",
    "./src/data/photos.json",
    "./src/data/projects.json",
    "./src/data/songs.json",
    "./src/data/technology.json",

    "./src/libs/matter-js/phycalsIcons.js",

    "./src/libs/vue-i18n/vue-i18n.js",

    "./src/locales/pages/about.json",
    "./src/locales/pages/home.json",
    "./src/locales/pages/projectsLocale.json",

    "./src/locales/global.json",

    "./src/plugins/pinia.js",

    "./src/router/index.js",

    "./src/stores/useLanguageStore.js",
    "./src/stores/useModalStore.js",
    "./src/stores/useMusicPlayerStore.js",
    "./src/stores/useProjectsStore.js",

    "./src/styles/global.scss",
    "./src/styles/transition.scss",

    "./src/utils/formatters.js",
    "./src/utils/getPageTitle.js",
    "./src/utils/technologyRows.js",

    "./src/views/AboutPage.vue",
    "./src/views/AboutProjectPage.vue",
    "./src/views/ErrorPage.vue",
    "./src/views/GalleryPage.vue",
    "./src/views/HomePage.vue",
    "./src/views/ProjectsPage.vue",

    "./src/App.vue",
    "./src/main.js",

    "./code_counter.py",
    "./index.html",
    "./package.json",
    "./postcss.config.ts",
    "./README.md",
    "./tailwind.config.js",
    "./tsconfig.app.json",
    "./tsconfig.json",
    "./tsconfig.node.json",
    "./vite.config.ts"
]

print("📑 Count for the specified files:\n")
lines_list, files_list, dirs_list = count_lines_in_file_list(file_paths)

print("\nTOTAL for the list:")
print("📜 Lines:", lines_list)
print("📄 Files:", files_list)
print("📂 Folders:", dirs_list)

project_path = "."
project_size = get_project_size(project_path)

print("\n💾 Total project size:", human_readable_size(project_size))
