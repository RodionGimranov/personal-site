import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    base: "/personal-site-beta/",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/styles/global" as *;
                    @use "@/styles/variables" as *;
                    @use "@/styles/transition" as *;
                    @use "@/styles/mediaQueries" as *;
                `,
            },
        },
    },
});
