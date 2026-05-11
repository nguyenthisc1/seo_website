import { expect, test } from '@playwright/test';

const preparePage = async (page) => {
    await page.goto('/');
    await expect(page.locator('.header')).toBeVisible();
    // Ensure all fonts are loaded before proceeding
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(500);
};

test.describe('Visual Regression - RankForge', () => {
    test('Home Page Full Snapshot', async ({ page }) => {
        await preparePage(page);

        await expect(page).toHaveScreenshot({
            fullPage: true,
            animations: 'disabled',
            maxDiffPixelRatio: 0.02,
            threshold: 0.2
        });
    });

    test('Hero Section Snapshot', async ({ page }) => {
        await preparePage(page);

        const hero = page.locator('.hero');
        await expect(hero).toHaveScreenshot({
            animations: 'disabled',
            threshold: 0.2
        });
    });

    test('Mobile Navigation State', async ({ page, isMobile }) => {
        // Only run this test in mobile mode
        if (!isMobile) return;

        await preparePage(page);

        const toggle = page.locator('.header__toggle');
        await toggle.click();

        const mobileNav = page.locator('#mobile-nav');
        await expect(mobileNav).toBeVisible();

        await expect(mobileNav).toHaveScreenshot({
            animations: 'disabled'
        });
    });
});
