import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30_000,
    expect: {
        timeout: 5000
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
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'mobile-chrome',
            use: { ...devices['Pixel 7'] }
        }
    ]
});
