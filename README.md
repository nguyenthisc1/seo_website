# SEO Website | SEO Dashboard

A performance-first web project built for financial services, featuring automated testing, advanced SEO optimization, and a professional CI/CD pipeline.

---

## 🛠 Tech Stack

- **Bundler:** Vite
- **Templating:** Nunjucks (HTML5)
- **Styling:** Sass (BEM Methodology)
- **Testing:** Playwright (E2E & Visual Regression)
- **Linting:** Stylelint (Standard SCSS)
- **Image Optimization:** Sharp via vite-plugin-image-optimizer
- **CI/CD:** GitHub Actions

---

## ⚡ Quick Start

### 1. Prerequisites

Ensure you have **Node.js** and **pnpm** installed.

### 2. Installation

```bash
# Install project dependencies
pnpm install

# Install Playwright browsers
pnpm exec playwright install --with-deps
```

### 3. Development

```bash
# Start the development server (with hot reload)
pnpm run dev
```

### 4. Build & Production Preview

The build process runs Stylelint and optimizes all assets.

```bash
# Build for production
pnpm run build

# Preview the production build locally
pnpm run preview
```

---

## 🎨 Theme Switcher Example

Add a simple theme toggler to your project:

```js
// theme.js
const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
};

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
```

In your HTML:

```html
<button id="theme-toggle">Toggle Theme</button>
```

In your SCSS (example):

```scss
// variables
[data-theme='dark'] {
    --surface-subtle: #181a1b;
    --text-muted: #aaa;
}
[data-theme='light'] {
    --surface-subtle: #f4f5f7;
    --text-muted: #555;
}
```

---

## 🧪 Running Tests

This project requires all tests to pass before deployment via the CI pipeline.

```bash
# Run all tests (headless)
pnpm run test

# Open Playwright UI Mode for debugging
npx playwright test --ui
```

---

## 🚀 CI/CD Pipeline

Every push or pull_request to the **main** branch triggers GitHub Actions to:

1. Lint SCSS files.
2. Build the project.
3. Run Playwright tests across Chromium, Firefox, and Webkit.

---

### Pro-tips for your README

- **Project Title:** Keep **"RankForge"** bold to grab attention.
- **Scripts:** `pnpm run test` assumes you've added the script to your `package.json`. If not, use `npx playwright test`.
- **Structure:** This "no-fluff" style is what senior developers look for when they first open a repository.
