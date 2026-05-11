import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('Page has no detectable WCAG violations', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();

    expect(results.violations).toEqual([]);
});

test('primary navigation is keyboard reachable', async ({ page, browserName, isMobile }) => {
    test.skip(browserName === 'webkit' && isMobile, 'Mobile Safari does not expose Tab focus reliably in Playwright.');

    await page.goto('/');

    await page.keyboard.press('Tab');

    const activeElementTag = await page.evaluate(() => document.activeElement?.tagName.toLowerCase());

    expect(activeElementTag).toMatch(/a|button/);
});
