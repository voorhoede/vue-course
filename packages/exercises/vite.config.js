import path from "path";
import { defineConfig } from "vite";
import { directoryPlugin } from "vite-plugin-list-directory-contents";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        directoryPlugin({
            baseDir: path.join(__dirname, '..', 'exercises'),
            filterList: [
                'node_modules',
                'package.json',
                'vite.config.js',
                'components',
            ],
        }),
        vue()
    ],
});
