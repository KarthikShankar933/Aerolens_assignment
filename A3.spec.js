// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  timeout: 60000,
  retries: 0,
  testDir: './tests',
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],
  fullyParallel: true,
};
