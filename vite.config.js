/* eslint-disable unicorn/import-style */
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import glob from 'fast-glob';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('src', import.meta.url)),
            '@styles': fileURLToPath(new URL('src/assets/styles', import.meta.url))
        }
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             // api: 'modern-compiler',
    //             // additionalData: `@forward "abstracts/_variables.scss";`
    //         }
    //     },
    // },
    plugins: [
        nunjucks(),
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
                main: 'src/index.html',

                app: resolve(process.cwd(), 'src/assets/styles/app.scss'),
                critical: resolve(process.cwd(), 'src/assets/styles/critical.scss'),

                ...Object.fromEntries(glob.sync('src/assets/styles/pages/**/*.scss').map((file) => [file.replace('src/assets/styles/pages/', 'pages/').replace('.scss', ''), fileURLToPath(new URL(file, import.meta.url))]))
            },
            output: {
                entryFileNames: 'assets/scripts/[name].js',
                chunkFileNames: 'assets/scripts/[name].js',
                assetFileNames: (assetInfo) => {
                    const fileName = assetInfo.names?.[0] ?? assetInfo.name ?? '';
                    const extension = fileName.split('.').pop()?.toLowerCase();
                    if (extension === 'css') {
                        if (assetInfo.names.includes('pages/')) {
                            return 'assets/styles/pages/[name][extname]';
                        }
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
