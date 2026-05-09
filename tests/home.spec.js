import { expect, test } from '@playwright/test';

test('Hero image show right on aspect ratio', async ({ page }) => {
    await page.goto('/');

    const heroImg = page.locator('.hero__image-wrapper img');

    // have in DOM
    await expect(heroImg).toBeVisible();

    // fail network (NaturalWidth > 0)
    const isLoaded = await heroImg.evaluate((img) => img.naturalWidth > 0);
    expect(isLoaded).toBe(true);

    // SEO
    await expect(heroImg).toHaveAttribute('loading', 'eager');
    await expect(heroImg).toHaveAttribute('alt', /.+/); // Alt not ""
});
