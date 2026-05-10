import { expect, test } from '@playwright/test';

const pages = ['/', '/service.html', '/case-studies.html', '/blog.html', '/pricing.html'];

for (const path of pages) {
    test(`Page ${path} response status 200`, async ({ page }) => {
        const response = await page.goto(path);
        expect(response.status()).toBe(200);
    });
}

// const pages = [
//     { path: '/', expectedText: 'RankForge' }, // Text đặc trưng của trang chủ
//     { path: '/service.html', expectedText: 'Our Services' }, // Text đặc trưng của trang Service
//     { path: '/pricing.html', expectedText: 'Flexible Pricing' }
// ];

// for (const pageInfo of pages) {
//     test(`Trang ${pageInfo.path} phải hiển thị đúng nội dung`, async ({ page }) => {
//         const response = await page.goto(pageInfo.path);
//         expect(response.status()).toBe(200);

//         // Kiểm tra xem có đúng là trang đó không, hay lại là trang chủ trả về
//         const heading = page.locator('h1');
//         await expect(heading).toContainText(pageInfo.expectedText);
//     });
// }
