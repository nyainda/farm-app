import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
            'ziggy': 'ziggy-js',
            'ziggy-js': 'ziggy-js',
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vue: ['vue'],
                },
            },
        },
        commonjsOptions: {
            include: [/node_modules/],
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});