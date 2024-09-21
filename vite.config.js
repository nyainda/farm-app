import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; // Import path for resolving paths

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
            // Resolve @ to resources/js
            '@': resolve(__dirname, 'resources/js'),

            // Ensure Ziggy is resolved correctly
            'ziggy-js': resolve(__dirname, 'node_modules/ziggy-js'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vue: ['vue'], // Split Vue into its own chunk for optimization
                },
            },
        },
    },
});
