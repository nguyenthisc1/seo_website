import { expect, test } from '@playwright/test';

test('hero image is optimized for LCP', async ({ page }) => {
    await page.goto('/');

    const heroImg = page.locator('.hero__image-wrapper img');

    await expect(heroImg).toBeVisible();

    const isLoaded = await heroImg.evaluate((img) => img.naturalWidth > 0);
    expect(isLoaded).toBe(true);

    await expect(heroImg).toHaveAttribute('alt', /.+/);
    await expect(heroImg).toHaveAttribute('width', /.+/);
    await expect(heroImg).toHaveAttribute('height', /.+/);
    await expect(heroImg).toHaveAttribute('loading', 'eager');
    await expect(heroImg).toHaveAttribute('fetchpriority', 'high');
});

test('LCP image should have high fetch priority', async ({ page }) => {
    await page.goto('/');
    const lcpImage = page.locator('img[src*="img_home_hero"]');

    await expect(lcpImage).toHaveAttribute('fetchpriority', 'high');

    await expect(lcpImage).not.toHaveAttribute('loading', 'lazy');
});
