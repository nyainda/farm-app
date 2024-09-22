import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? 'https://farm-app-coc4-q4iwm0t59-nyaindas-projects.vercel.app/' : '/',
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
            'ziggy': resolve(__dirname, 'vendor/tightenco/ziggy/dist'),
            'ziggy-vue': resolve(__dirname, 'vendor/tightenco/ziggy/dist/vue.es.js'),
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
            include: [/node_modules/, /vendor/],
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});
