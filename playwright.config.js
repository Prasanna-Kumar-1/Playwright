import { defineConfig, devices } from "@playwright/test";

module.exports = defineConfig({
  testDir: "./tests/",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  //Timeout for each test
  timeout: 300000,
  expect: {
    timeout: 300000,
  },
});
