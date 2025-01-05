import os

def count_lines_in_files(file_paths):
    total_lines = 0
    for index, file_path in enumerate(file_paths, start=1): 
        if not os.path.isfile(file_path):
            print(f"Файл не найден: {file_path}")
            continue
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                lines = sum(1 for _ in f)
                total_lines += lines
                file_name = os.path.basename(file_path) 
                print(f"{index}. {file_name} - строк кода - {lines}")  
        except Exception as e:
            print(f"Не удалось прочитать файл {file_path}: {e}")
    
    return total_lines

file_paths = [
    "./src/components/aboutPageComponents/MetadataComponents/CodeTextContainer.vue",
    "./src/components/aboutPageComponents/MetadataComponents/MetadataBlock.vue",

    "./src/components/aboutPageComponents/MusicPlayerComponents/MusicPlayerBlock.vue",
    "./src/components/aboutPageComponents/MusicPlayerComponents/MusicVisualizer.vue",
    "./src/components/aboutPageComponents/MusicPlayerComponents/PlayerControls.vue",
    
    "./src/components/aboutPageComponents/GalleryBlock.vue",
    "./src/components/aboutPageComponents/Logo3DBlock.vue",
    "./src/components/aboutPageComponents/QuotesBlock.vue",
    "./src/components/aboutPageComponents/SliderIndicators.vue",
    "./src/components/aboutPageComponents/TextMessageBlock.vue",
    "./src/components/aboutPageComponents/TollStackBlock.vue",

    "./src/components/homePageComponents/BioTextBlock.vue",
    "./src/components/homePageComponents/IntroTextBlock.vue",
    "./src/components/homePageComponents/OutroTextBlock.vue",
    "./src/components/homePageComponents/ProjectsBlock.vue",
    "./src/components/homePageComponents/SkillsBlock.vue",

    "./src/components/layout/Footer.vue",
    "./src/components/layout/Header.vue",

    "./src/components/modals/ProjectModal.vue",
    "./src/components/modals/ChangelogModal.vue",

    "./src/components/ui/CloseModalBtn.vue",

    "./src/components/ProjectCard.vue",

    "./src/composablse/useSwitch.js",

    "./src/data/galleryDataList.js",
    "./src/data/playlistDataList.js",
    "./src/data/projectDataList.js",
    "./src/data/quotesDataList.js",
    './src/data/updateDataList.js',

    './src/libs/gsap-js/BioTextAnim.js',
    './src/libs/gsap-js/IntroTextAnim.js',
    './src/libs/matter-js/phycalsIcons.js',

    './src/router/index.js',

    './src/styles/global.scss',
    './src/styles/mediaQueries.scss',
    './src/styles/variables.scss',

    './src/views/AboutPage.vue',
    './src/views/HomePage.vue',
    './src/views/ProjectsPage.vue',

    "./code_line_counter.py",
    "./index.html",
    "./manifest.json",
    "./package.json",
    "./README.md",
    "./vite.config.js",
    './src/App.vue',
    './src/eventBus.js',
    './src/main.js',
]

total_code_lines = count_lines_in_files(file_paths)
print("Общее количество строк кода в указанных файлах:", total_code_lines)
