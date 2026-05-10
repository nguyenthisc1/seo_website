import { expect, test } from '@playwright/test';

test.describe('mobile navigation', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('opens and closes menu with toggle button and Escape key', async ({ page }) => {
        await page.goto('/');

        const toggle = page.getByRole('button', { name: /menu/i });
        const nav = page.locator('.nav');

        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(nav).not.toHaveClass(/is-open/);

        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await expect(nav).toHaveClass(/is-open/);
        await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');

        await page.keyboard.press('Escape');
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(nav).not.toHaveClass(/is-open/);

        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');

        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(nav).not.toHaveClass(/is-open/);
    });
});

test('navigation links are valid', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('nav a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
        const href = await links.nth(i).getAttribute('href');

        expect(href, `nav link ${i} should have href`).toBeTruthy();
        expect(href, `nav link ${i} should not be placeholder`).not.toBe('#');
    }
});
