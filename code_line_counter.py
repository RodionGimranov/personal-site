import os
import time

def human_readable_size(size_in_bytes):
    for unit in ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ']:
        if size_in_bytes < 1024:
            return f"{size_in_bytes:.2f} {unit}"
        size_in_bytes /= 1024
    return f"{size_in_bytes:.2f} ТБ"

def count_lines_in_file_list(file_paths):
    total_lines = 0
    unique_dirs = set()
    file_count = 0

    for index, file_path in enumerate(file_paths, start=1): 
        if not os.path.isfile(file_path):
            print(f"Файл не найден: {file_path}")
            time.sleep(0.02)
            continue
        
        file_count += 1
        unique_dirs.add(os.path.dirname(file_path))  

        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                lines = sum(1 for _ in f)
                total_lines += lines
                file_name = os.path.basename(file_path) 
                print(f"{index}. {file_name} - {lines} строк")
        except Exception as e:
            print(f"Не удалось прочитать файл {file_path}: {e}")
        
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
    "./public/sprite.svg",

    "./src/components/aboutComponents/LocationCard.vue",
    "./src/components/aboutComponents/ProjectStatsCard/CodeEditor.vue",
    "./src/components/aboutComponents/ProjectStatsCard/ProjectStatsCard.vue",
    "./src/components/aboutComponents/ProjectStatsCard/TabBar.vue",
    "./src/components/aboutComponents/ProjectStatsCard/WindowControls.vue",

    "./src/components/homeComponents/HeroText.vue",

    "./src/components/layout/Footer.vue",
    "./src/components/layout/SideBar.vue",
    
    "./src/components/projectsComponents/ProjectCard.vue",

    "./src/components/ui/buttons/Button.vue",
    "./src/components/ui/buttons/CloseButton.vue",
    "./src/components/ui/buttons/TopButton.vue",
    "./src/components/ui/SvgIcon/SvgIcon.vue",
    "./src/components/ui/ChangelogModal/ChangelogModal.vue",
    "./src/components/ui/BlurMask.vue",
    "./src/components/ui/ToggleTab.vue",

    "./src/components/UserInfoPanel.vue",

    "./src/composables/useEscapeKey.js",
    "./src/composables/useLanguageSwitcher.js",

    "./src/data/changelogData.json",
    "./src/data/projectsData.json",

    "./src/libs/gsap/animateHeroText.js",

    "./src/libs/vue-i18n/vue-i18n.js",

    "./src/locales/pages/about.json",
    "./src/locales/pages/home.json",
    "./src/locales/pages/projects.json",
    "./src/locales/global.json",

    "./src/router/index.js",

    "./src/store/modules/modals.js",
    "./src/store/modules/theme.js",
    "./src/store/store.js",

    "./src/styles/global.scss",
    "./src/styles/mediaQueries.scss",
    "./src/styles/transition.scss",
    "./src/styles/variables.scss",

    "./src/utils/eventBus.js",
    "./src/utils/formatters.js",

    "./src/views/AboutPage.vue",
    "./src/views/AboutProjectPage.vue",
    "./src/views/GalleryPage.vue",
    "./src/views/HomePage.vue",
    "./src/views/ProjectsPage.vue",

    "./src/App.vue",
    "./src/main.js",
    "./code_line_counter.py",
    "./index.html",
    "./package.json",
    "./README.md",
    "./vite.config.js",
]

print("📑 Подсчёт по указанным файлам:\n")
lines_list, files_list, dirs_list = count_lines_in_file_list(file_paths)

print("\nИТОГО по списку:")
print("📜 Строк:", lines_list)
print("📄 Файлов:", files_list)
print("📂 Папок:", dirs_list)

project_path = "."
project_size = get_project_size(project_path)

print("\n💾 Общий размер проекта (personal-site-beta):", human_readable_size(project_size))
