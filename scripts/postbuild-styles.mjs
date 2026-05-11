/* eslint-disable unicorn/import-style */
import { readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distributionIndexPath = resolve('dist/index.html');

let html = await readFile(distributionIndexPath, 'utf8');

const replacements = [
    // app
    {
        from: /href="\/assets\/misc\/app\.scss"/g,
        to: 'href="/assets/styles/app.css"'
    },
    {
        from: /href="\/assets\/styles\/app\.scss"/g,
        to: 'href="/assets/styles/app.css"'
    },
    // home
    {
        from: /href="\/assets\/misc\/home\.scss"/g,
        to: 'href="/assets/styles/pages/home.css"'
    },
    {
        from: /href="\/assets\/styles\/pages\/home\.scss"/g,
        to: 'href="/assets/styles/pages/home.css"'
    },
    // services
    {
        from: /href="\/assets\/misc\/services\.scss"/g,
        to: 'href="/assets/styles/pages/services.css"'
    },
    {
        from: /href="\/assets\/styles\/pages\/services\.scss"/g,
        to: 'href="/assets/styles/pages/services.css"'
    },
    // case-studies
    {
        from: /href="\/assets\/misc\/case-studies\.scss"/g,
        to: 'href="/assets/styles/pages/case-studies.css"'
    },
    {
        from: /href="\/assets\/styles\/pages\/case-studies\.scss"/g,
        to: 'href="/assets/styles/pages/case-studies.css"'
    },
    // blog
    {
        from: /href="\/assets\/misc\/blog\.scss"/g,
        to: 'href="/assets/styles/pages/blog.css"'
    },
    {
        from: /href="\/assets\/styles\/pages\/blog\.scss"/g,
        to: 'href="/assets/styles/pages/blog.css"'
    },
    // pricing
    {
        from: /href="\/assets\/misc\/pricing\.scss"/g,
        to: 'href="/assets/styles/pages/pricing.css"'
    },
    {
        from: /href="\/assets\/styles\/pages\/pricing\.scss"/g,
        to: 'href="/assets/styles/pages/pricing.css"'
    }
];

for (const replacement of replacements) {
    html = html.replace(replacement.from, replacement.to);
}

await writeFile(distributionIndexPath, html);

await rm(resolve('dist/assets/misc'), { recursive: true, force: true });
