import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    base: "/personal-site/",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/styles/global" as *;
                    @use "@/styles/variables" as *;
                    @use "@/styles/transition" as *;
                `,
            },
        },
    },
});
