import { expect, test } from '@playwright/test';

const pages = [
    { url: '/', title: 'RankForge | Home' }
    // { url: '/service.html', title: 'Service | RankForge' }
];

for (const pageInfo of pages) {
    test(`Check page integrity: ${pageInfo.url}`, async ({ page }) => {
        await page.goto(pageInfo.url);

        // 1. Title page (SEO)
        await expect(page).toHaveTitle(pageInfo.title);

        // 2. Header & Footer
        const header = page.locator('header');
        const footer = page.locator('footer');
        await expect(header).toBeVisible();
        await expect(footer).toBeVisible();

        // 3. Link meno not die (response #)
        const navLinks = page.locator('nav a');
        const count = await navLinks.count();
        for (let i = 0; i < count; i++) {
            const href = await navLinks.nth(i).getAttribute('href');
            expect(href).not.toBe('#');
        }
    });
}
