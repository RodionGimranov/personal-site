import os
import time

def count_lines_in_files(file_paths):
    total_lines = 0
    for index, file_path in enumerate(file_paths, start=1): 
        if not os.path.isfile(file_path):
            print(f"Файл не найден: {file_path}")
            time.sleep(0.03)
            continue
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                lines = sum(1 for _ in f)
                total_lines += lines
                file_name = os.path.basename(file_path) 
                print(f"{index}. {file_name} - {lines} строк")
        except Exception as e:
            print(f"Не удалось прочитать файл {file_path}: {e}")
        
        time.sleep(0.03)

    return total_lines

file_paths = [
    "./src/components/layout/Header/Header.vue",

    "./src/router/index.js",

    "./src/styles/global.scss",
    "./src/styles/mediaQueries.scss",
    "./src/styles/transition.scss",
    "./src/styles/variables.scss",

    "./src/views/AboutMePage.vue",
    "./src/views/HomePage.vue",
    "./src/views/ProjectsPage.vue",

    "./src/App.vue",
    "./src/main.js",

    "./code_line_counter.py",
    "./index.html",
    "./package.json",
    "./README.md",
    "./vite.config.js"
]

total_code_lines = count_lines_in_files(file_paths)
print("Общее количество строк в указанных файлах:", total_code_lines)
