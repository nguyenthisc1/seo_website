import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        checker({
            eslint: {
                typescript: false,
                lintCommand: 'eslint .'
            },
            stylelint: {
                lintCommand: 'stylelint "src/**/*.{css,scss}"'
            }
        })
    ],
    build: {
        cssCodeSplit: true,
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
            input: {
                main: 'index.html'
            }
        }
    }
});
