import { expect, test } from '@playwright/test';

const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 }
];

for (const viewport of viewports) {
    test(`no horizontal overflow on ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        const hasOverflow = await page.evaluate(() => {
            return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        expect(hasOverflow).toBe(false);
    });
}
