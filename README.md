SEO Website |  SEO Dashboard
A performance-first web project built for financial services, featuring automated testing, advanced SEO optimization, and a professional CI/CD pipeline.

🛠 Tech Stack
Bundler: Vite

Templating: Nunjucks (HTML5)

Styling: Sass (BEM Methodology)

Testing: Playwright (E2E & Visual Regression)

Linting: Stylelint (Standard SCSS)

Image Optimization: Sharp via vite-plugin-image-optimizer

CI/CD: GitHub Actions

⚡ Quick Start
1. Prerequisites
Ensure you have Node.js and pnpm installed.

2. Installation
Bash
# Install dependencies
pnpm install

# Install Playwright browsers
pnpm exec playwright install --with-deps
3. Development
Bash
pnpm run dev
4. Build & Production Check
The build process automatically runs Stylelint and optimizes all assets.

Bash
# Build for production
pnpm run build

# Preview the production build
pnpm run preview
🧪 Running Tests
This project requires all tests to pass before deployment via the CI pipeline.

Bash
# Run all tests (Headless)
pnpm run test

# Open Playwright UI Mode for debugging
npx playwright test --ui
🚀 CI/CD Pipeline
Every push or pull_request to the main branch triggers GitHub Actions to:

Lint SCSS files.

Build the project.

Run Playwright tests across Chromium, Firefox, and Webkit.

Pro-tips for your README:
Project Title: Keep "RankForge" bold to grab attention.

Scripts: I included pnpm run test assuming you've added that script to your package.json. If not, use npx playwright test.

Structure: This "no-fluff" version is exactly what senior developers look for when they first open a repository.