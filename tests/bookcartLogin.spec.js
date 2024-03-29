import { test, expect } from "@playwright/test";

test("Should login to book cart website", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");
  await expect(page.getByRole("button", { name: "Book Cart" })).toBeVisible();
});
