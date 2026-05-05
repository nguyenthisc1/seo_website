import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    plugins: [
        checker({
            eslint: {
                typescript: false,
                lintCommand: 'eslint .'
            },
            stylelint: {
                lintCommand: 'stylelint "assets/styles/**/*.{css,scss}" "public/assets/styles/**/*.css"'
            }
        })
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        cssCodeSplit: true,
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
            input: {
                main: 'index.html',
                critical: 'assets/styles/critical.scss'
            },
            output: {
                entryFileNames: 'assets/scripts/[name].js',
                chunkFileNames: 'assets/scripts/[name].js',
                assetFileNames: (assetInfo) => {
                    const fileName = assetInfo.names?.[0] ?? assetInfo.name ?? '';
                    const extension = fileName.split('.').pop()?.toLowerCase();

                    if (extension === 'css') {
                        return 'assets/styles/[name][extname]';
                    }

                    if (['woff', 'woff2', 'ttf', 'otf', 'eot'].includes(extension)) {
                        return 'assets/fonts/[name][extname]';
                    }

                    if (['avif', 'gif', 'jpeg', 'jpg', 'png', 'svg', 'webp'].includes(extension)) {
                        return 'assets/images/[name][extname]';
                    }

                    return 'assets/misc/[name][extname]';
                }
            }
        }
    }
});
