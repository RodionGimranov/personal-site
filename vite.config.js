import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    base: '/personal-site/',
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import "./src/styles/global.scss";
          @import "./src/styles/variables.scss";
          @import "./src/styles/mediaQueries.scss";
        `,
            },
        },
    },
    server: {
        historyApiFallback: true,
    },
});
