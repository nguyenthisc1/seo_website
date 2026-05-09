import { expect, test } from '@playwright/test';

test.describe('Mobile Navigation', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('closed/open menu when toggle', async ({ page }) => {
        await page.goto('/');

        const toggle = page.getByRole('button', { name: /menu/i });
        const nav = page.locator('.nav');

        // default state
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(nav).not.toHaveClass(/is-open/);

        // open menu
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await expect(nav).toHaveClass(/is-open/);
        await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');

        // closed menu
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(nav).not.toHaveClass(/is-open/);
    });
});
