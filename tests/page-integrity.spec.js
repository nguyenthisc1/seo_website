import { expect, test } from '@playwright/test';

const pages = [
    { url: '/', title: 'RankForge: Technical SEO for the Data-Driven Enterprise' }
    // { url: '/service.html', title: 'Service | RankForge' },
];

for (const pageInfo of pages) {
    test(`page integrity: ${pageInfo.url}`, async ({ page }) => {
        await page.goto(pageInfo.url);

        await expect(page).toHaveTitle(pageInfo.title);

        await expect(page.locator('header')).toBeVisible();
        await expect(page.locator('main')).toBeVisible();
        await expect(page.locator('footer')).toBeVisible();

        await expect(page.locator('h1')).toHaveCount(1);

        await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /.+/);
    });
}

test('home critical sections are visible', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.hero')).toBeVisible();
    await expect(page.locator('.technical')).toBeVisible();
    await expect(page.locator('.hero h1')).toHaveText(/technical seo/i);
});
