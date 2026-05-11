import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30_000,
    expect: {
        timeout: 5000
    },
    toHaveScreenshot: {
        maxDiffPixelRatio: 0.01
    },
    use: {
        baseURL: 'http://localhost:4173',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure'
    },
    webServer: {
        command: 'pnpm run build && pnpm run preview',
        url: 'http://localhost:4173',
        reuseExistingServer: !process.env.CI,
        stdout: 'ignore',
        stderr: 'pipe'
    },
    projects: [
        {
            name: 'desktop-chrome',
            use: { viewport: { width: 1440, height: 900 } }
        },
        {
            name: 'mobile-chrome',
            use: { ...devices['Pixel 5'] }
        },
        {
            name: 'mobile-safari',
            use: { ...devices['iPhone 13'] }
        }
    ]
});
