import { test } from "@playwright/test";

test("Adding a New Note", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/notes/app");
  await page.getByRole("link", { name: "Login" }).click();
  await page.pause();
});
