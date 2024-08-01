import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
    base: '/personal-site/',
    plugins: [vue(), sassDts()],
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
